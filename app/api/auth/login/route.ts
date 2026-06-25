import { loginSchema } from "@/schemas/auth.schema";
import {
  findUserByEmail,
  verifyPassword,
  generateAuthTokens,
  setRefreshTokenCookie,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = loginSchema.parse(body);

    const user = await findUserByEmail(email);

    if (!user) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await verifyPassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
    
    const { accessToken, refreshToken } = generateAuthTokens(user);

    await setRefreshTokenCookie(refreshToken);

    return Response.json(
      {
        message: "Login successful",
        accessToken,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );
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