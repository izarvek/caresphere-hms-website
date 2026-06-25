import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { registerSchema } from "@/schemas/auth.schema";

import {
  findUserByEmail,
  createUser,
  hashPassword,
  generateAuthTokens,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } = registerSchema.parse(body);
      
    const existingUser = await findUserByEmail(email);
     
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const passwordHash = await hashPassword(password);
      

    const user = await createUser({
      name,
      email,
      password: passwordHash,
      role: Role.USER,
    });

    const { accessToken, refreshToken } = generateAuthTokens({
        id: user.id,
        email: user.email,
        role: user.role ?? Role.USER,
      });

    const response = NextResponse.json(
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

    response.cookies.set(
      "refreshToken",
      refreshToken,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}