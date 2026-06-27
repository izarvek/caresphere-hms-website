import { prisma } from "@/lib/prisma";

export const getPatientReports = async (patientId: string) => {
  return await prisma.medicalRecord.findMany({
    where: { patientId },
  });
};