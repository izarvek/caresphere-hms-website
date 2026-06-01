import { z } from "zod";

export const appointmentSchema = z.object({
  patientId: z.string(),
  doctorId: z.string(),
  date: z.string(),
  time: z.string(),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED"]),
});