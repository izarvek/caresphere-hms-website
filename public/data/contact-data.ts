import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

interface ContactCard {
  title: string;
  icon: React.ElementType;
  lines: string[];
}

interface FormField {
  label: string;
  type: string;
  placeholder: string;
  options?: string[];
}

export const contactCardsData : ContactCard[] = [
  {
    title: "Call Us",
    icon: Phone,
    lines: ["+1 (800) 123-4567", "Monday - Friday,", "9:00 AM to 5:00 PM"],
  },
  {
    title: "Email Us",
    icon: Mail,
    lines: ["support@curcely.com", "Response Time", "Within 24 hours"],
  },
  {
    title: "Visit Us",
    icon: MapPin,
    lines: ["500 Wellness Ave,", "Suite 10, MedCity,", "NY 10001"],
  },
  {
    title: "Chat with Us",
    icon: MessageSquare,
    lines: ["Availability", "Monday - Friday,", "9:00 AM to 5:00 PM"],
  },
];

export const formFieldsData : FormField[] = [
  { label: "Full Name *", type: "text", placeholder: "Type Full Name" },
  {
    label: "Email Address *",
    type: "email",
    placeholder: "Type Email Address",
  },
  { label: "Phone Number", type: "text", placeholder: "Type Phone Number" },
  {
    label: "Subject",
    type: "select",
    placeholder: "Select Subject",
    options: [
      "Select Subject",
      "General Inquiry",
      "Support",
      "Billing",
      "Other",
    ],
  },
];
