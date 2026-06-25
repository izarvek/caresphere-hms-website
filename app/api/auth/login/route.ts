import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { loginSchema } from "@/schemas/auth.schema";

import {
  findUserByEmail,
  verifyPassword,
  generateAuthTokens,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = loginSchema.parse(body);
      
    const user = await findUserByEmail(email);
     
    if (!user) {
      return NextResponse.json(
        {
          message:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const isPasswordValid = await verifyPassword(
        password,
        user.password
      );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const { accessToken, refreshToken } = generateAuthTokens({
        id: user.id,
        email: user.email,
        role: user.role ?? Role.USER,
      });

    const response = NextResponse.json(
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
      {
        status: 200,
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