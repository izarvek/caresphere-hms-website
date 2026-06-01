import { prisma } from "@/lib/prisma";

export const createPatient = async (data: any) => {
  return await prisma.patient.create({
    data,
  });
};

export const getAllPatients = async () => {
  return await prisma.patient.findMany();
};