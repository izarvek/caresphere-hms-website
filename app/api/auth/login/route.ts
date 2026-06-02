import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/schemas/auth.schema";
import {
  generateCookie,
  generateToken,
  verifyPassword,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData = loginSchema.parse(body);
    const { email, password } = parsedData;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const token = generateToken(user);
    await generateCookie(token);

    return Response.json({
      message: "User login successfully",
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
