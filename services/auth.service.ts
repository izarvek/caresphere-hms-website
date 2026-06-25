import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export type JwtPayload = {
  id: string;
  email: string;
  role: Role;
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = async ({
  name,
  email,
  password,
  role,
}: {
  name: string;
  email: string;
  password: string;
  role: Role;
}) => {
  return prisma.user.create({
    data: {
      name,
      email,
      password,
      role,
    },
  });
};

export const hashPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

export const verifyPassword = async (
  providedPassword: string,
  storedHash: string
): Promise<boolean> => {
  return bcrypt.compare(providedPassword, storedHash);
};

export const generateAccessToken = (
  user: JwtPayload
): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      type: "access",
    },
    process.env.JWT_ACCESS_SECRET!,
    {
      expiresIn: "15m",
    }
  );
};

export const generateRefreshToken = (
  user: JwtPayload
): string => {
  return jwt.sign(
    {
      id: user.id,
      type: "refresh",
    },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};

export const generateAuthTokens = (
  user: JwtPayload
) => {
  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
  };
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET!
  );
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET!
  );
};