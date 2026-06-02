import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schemas/auth.schema";
import {
  findUserByEmail,
  generateCookie,
  generateToken,
  hashedPassword,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData = registerSchema.parse(body);
    const { name, email, password } = parsedData;
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPass = await hashedPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass,
        role: "USER",
      },
    });

    // route.ts
    const token = generateToken(user);
    await generateCookie(token);

    // 7. RESPONSE
    return Response.json({
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
