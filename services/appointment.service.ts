import { prisma } from "@/lib/prisma";

export const bookAppointment = async (data: any) => {
  return await prisma.appointment.create({
    data,
  });
};

export const getAppointments = async () => {
  return await prisma.appointment.findMany({
    include: {
      patient: true,
      doctor: true,
    },
  });
};