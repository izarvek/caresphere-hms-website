import { registerSchema } from "@/schemas/auth.schema";

import {
  findUserByEmail,
  hashedPassword,
  createUser,
  generateAuthTokens,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } =
      registerSchema.parse(body);

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return Response.json(
        {
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const passwordHash =
      await hashedPassword(password);

    const user = await createUser({
      name,
      email,
      password: passwordHash,
      role: "USER",
    });

    const { accessToken, refreshToken } =
      generateAuthTokens(user);

    const response = Response.json(
      {
        message: "Registration successful",
        accessToken,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 201,
      }
    );

    response.headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict${
        process.env.NODE_ENV === "production"
          ? "; Secure"
          : ""
      }`
    );

    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    return Response.json(
      { message },
      { status: 500 }
    );
  }
}