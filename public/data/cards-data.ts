export interface Hospital {
  _id: string;
  title: string;
  description: string;
  slug: string;
  canonical: string;
  image: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  location: string;
  establishedYear: number;
  isVerified: boolean;
}

export const hospitalData: Hospital[] = [
  {
    _id: "hosp_001",
    title: "City General Hospital",
    description: "A leading multispecialty hospital providing world-class cardiac and orthopedic care.",
    slug: "city-general-hospital",
    canonical: "/hospitals/city-general-hospital",
    image: "/images/home/card01.jpg",
    rating: 4.8,
    reviewCount: 1250,
    specialties: ["Cardiology", "Orthopedics", "Neurology"],
    location: "New York, NY",
    establishedYear: 1995,
    isVerified: true,
  },
  {
    _id: "hosp_002",
    title: "St. Jude Medical Center",
    description: "Renowned for innovative cancer treatments and pediatric services.",
    slug: "st-jude-medical-center",
    canonical: "/hospitals/st-jude-medical-center",
    image: "/images/home/card02.jpg",
    rating: 4.9,
    reviewCount: 980,
    specialties: ["Oncology", "Pediatrics"],
    location: "Los Angeles, CA",
    establishedYear: 1988,
    isVerified: true,
  },
  {
    _id: "hosp_003",
    title: "Apex Healthcare Institute",
    description: "Modern facility focused on robotic surgery and advanced diagnostic imaging.",
    slug: "apex-healthcare-institute",
    canonical: "/hospitals/apex-healthcare-institute",
    image: "/images/home/card03.jpg",
    rating: 4.5,
    reviewCount: 640,
    specialties: ["General Surgery", "Radiology"],
    location: "Chicago, IL",
    establishedYear: 2010,
    isVerified: true,
  },
  {
    _id: "hosp_004",
    title: "Green Valley Wellness",
    description: "Specialized in holistic wellness, mental health, and physical rehabilitation.",
    slug: "green-valley-wellness",
    canonical: "/hospitals/green-valley-wellness",
    image: "/images/home/card04.jpg",
    rating: 4.2,
    reviewCount: 420,
    specialties: ["Psychiatry", "Physical Therapy"],
    location: "Denver, CO",
    establishedYear: 2005,
    isVerified: false,
  },
  {
    _id: "hosp_005",
    title: "Metro North Trauma Center",
    description: "24/7 emergency trauma care with advanced life support systems.",
    slug: "metro-north-trauma-center",
    canonical: "/hospitals/metro-north-trauma-center",
    image: "/images/home/card05.jpg",
    rating: 4.7,
    reviewCount: 1500,
    specialties: ["Emergency Medicine", "Trauma Surgery"],
    location: "Boston, MA",
    establishedYear: 1992,
    isVerified: true,
  },
  {
    _id: "hosp_006",
    title: "Summit Specialty Clinic",
    description: "Dedicated to dermatology, ophthalmology, and outpatient minor procedures.",
    slug: "summit-specialty-clinic",
    canonical: "/hospitals/summit-specialty-clinic",
    image: "/images/home/card06.jpg",
    rating: 4.4,
    reviewCount: 310,
    specialties: ["Dermatology", "Ophthalmology"],
    location: "Seattle, WA",
    establishedYear: 2015,
    isVerified: true,
  }
];