import { prisma } from "@/lib/prisma";

export const getDoctors = async () => {
  return await prisma.doctor.findMany();
};

export const createDoctor = async (data: any) => {
  return await prisma.doctor.create({
    data,
  });
};