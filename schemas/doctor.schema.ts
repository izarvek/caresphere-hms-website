import { z } from "zod";

export const createDoctorSchema = z.object({
  name: z.string(),
  specialization: z.string(),
  experience: z.number(),
  phone: z.string(),
});