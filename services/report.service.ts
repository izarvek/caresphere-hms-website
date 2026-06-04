import { prisma } from "@/lib/prisma";

export const getPatientReports = async (patientId: string) => {
  return await prisma.medical_record.findMany({
    where: { patientId },
  });
};