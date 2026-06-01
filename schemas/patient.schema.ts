import { z } from "zod";

export const createPatientSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(0),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  phone: z.string().min(10),
  address: z.string().optional(),
});