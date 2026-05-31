import { PaymentStatus } from "./enums/payment-status";

export interface Invoice {
  id: string;
  amount: number;
  paymentStatus: PaymentStatus;
}