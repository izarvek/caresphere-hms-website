import { z } from "zod";

export const billingSchema = z.object({
  patientId: z.string(),
  amount: z.number(),
  paymentStatus: z.enum(["PAID", "UNPAID", "REFUNDED"]),
  paymentMethod: z.enum(["CARD", "CASH", "UPI"]),
});