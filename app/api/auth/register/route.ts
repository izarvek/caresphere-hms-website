export const runtime = "nodejs";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schemas/auth.schema";
import { findUserByEmail, hashedPassword } from "@/services/auth.service";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. VALIDATE INPUT
    const parsedData = registerSchema.parse(body);
    const { name, email, password } = parsedData;

    // 2. CHECK EXISTING USER
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    // 3. HASH PASSWORD
    const hashedPass = await hashedPassword(password);

    // 4. CREATE USER
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass,
        role: "USER",
      },
    });

    // 5. CREATE JWT TOKEN
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );

    (
      await
      cookies()
    ).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

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
