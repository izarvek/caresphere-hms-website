import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { verifyRefreshToken, generateAccessToken, type JwtPayload,} from "@/services/auth.service";

type RefreshDecoded = {
  id: string;
  type: "refresh";
  iat: number;
  exp: number;
};

export async function POST() {
  try {
    const refreshToken = (await cookies()).get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh token missing" },
        { status: 401 }
      );
    }

    let decoded: RefreshDecoded;

    try {
      decoded = verifyRefreshToken(refreshToken) as RefreshDecoded;
    } catch {
      return NextResponse.json(
        { message: "Invalid or expired refresh token" },
        { status: 401 }
      );
    }

    if (decoded.type !== "refresh") {
      return NextResponse.json(
        { message: "Invalid token type" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 401 }
      );
    }

    if (user.status !== "ACTIVE") {
      return NextResponse.json(
        { message: "User account inactive" },
        { status: 403 }
      );
    }

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
      role: user.role ?? Role.USER,
    };

    const accessToken = generateAccessToken(payload);

    return NextResponse.json(
      {
        message: "Access token refreshed successfully",
        accessToken,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}