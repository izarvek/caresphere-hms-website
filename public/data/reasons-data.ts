import { HeartPulse, Clock, Cpu, LucideIcon } from 'lucide-react';

export interface ChoosingReason {
  _id: number;
  icon: LucideIcon; // Strictly types the property to accept Lucide Icons
  title: string;
  description: string;
}

export const choosingReasonsData: ChoosingReason[] = [
  {
    _id: 1,
    icon: HeartPulse,
    title: "Trusted Experts in Care",
    description: "Our skilled professionals deliver exceptional healthcare tailored to your unique needs."
  },
  {
    _id: 2,
    icon: Clock,
    title: "Always Here for You",
    description: "We're here for you 24/7, ensuring prompt care and support whenever you need it."
  },
  {
    _id: 3,
    icon: Cpu,
    title: "Advanced Care",
    description: "We use cutting-edge technology to provide accurate diagnoses and effective treatments."
  }
];