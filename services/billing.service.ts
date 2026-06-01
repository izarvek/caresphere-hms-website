import { prisma } from "@/lib/prisma";

export const createBill = async (data: any) => {
  return await prisma.billing.create({
    data,
  });
};