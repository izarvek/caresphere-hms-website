export interface Testimonials {
    name : string,
    role : string,
    rating : number,
    text : string,
    initial : string
}

export const testimonialsData : Testimonials[] = [
  {
    name: "Sarah Johnson",
    role: "Pediatric Patient",
    rating: 4,
    text: "The pediatrician was so kind and patient. My child felt comfortable, and the treatment worked perfectly. Couldn’t ask for better care!",
    initial: "S",
  },
  {
    name: "James Anderson",
    role: "Emergency Care Patient",
    rating: 4,
    text: "Rushed in with severe pain, and the ER team responded immediately. Their quick action and expertise saved me. Forever grateful!",
    initial: "J",
  },
  {
    name: "Priya Mehta",
    role: "General Patient",
    rating: 5,
    text: "The staff was warm, the process was smooth, and I felt genuinely cared for from start to finish. A truly reassuring experience.",
    initial: "P",
  },
  {
    name: "Emily Brown",
    role: "Maternity Patient",
    rating: 4,
    text: "My prenatal checkups were thorough, and the doctors made me feel safe throughout my pregnancy. The care was truly exceptional!",
    initial: "E",
  },
  {
    name: "William Carter",
    role: "Surgery Patient",
    rating: 5,
    text: "Had a minor surgery, and the whole process was seamless. The doctor explained everything clearly, and recovery was smooth!",
    initial: "W",
  },
  {
    name: "Olivia Martin",
    role: "Outpatient",
    rating: 5,
    text: "From booking to consultation, everything was organised beautifully. The clinic felt calm, modern, and very professional.",
    initial: "O",
  },
];