export interface Service {
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

export const servicesData : Service[] = [
  {
    "_id": "hosp_001",
    "title": "City General Hospital",
    "description": "A leading multispecialty hospital providing world-class cardiac and orthopedic care.",
    "slug": "city-general-hospital",
    "canonical": "/hospitals/city-general-hospital",
    "image": "/images/home/card01.jpg",
    "rating": 4.8,
    "reviewCount": 1250,
    "specialties": ["Cardiology", "Orthopedics", "Neurology"],
    "location": "New York, NY",
    "establishedYear": 1995,
    "isVerified": true
  },
  {
    "_id": "hosp_002",
    "title": "Saint Jude Medical Center",
    "description": "Specializing in advanced pediatric care and maternal health services.",
    "slug": "saint-jude-medical-center",
    "canonical": "/hospitals/saint-jude-medical-center",
    "image": "/images/home/card02.jpg",
    "rating": 4.9,
    "reviewCount": 890,
    "specialties": ["Pediatrics", "Gynecology", "Neonatology"],
    "location": "Chicago, IL",
    "establishedYear": 2002,
    "isVerified": true
  },
  {
    "_id": "hosp_003",
    "title": "Riverside Oncology Institute",
    "description": "State-of-the-art cancer treatment center with dedicated research facilities.",
    "slug": "riverside-oncology-institute",
    "canonical": "/hospitals/riverside-oncology-institute",
    "image": "/images/home/card03.jpg",
    "rating": 4.7,
    "reviewCount": 620,
    "specialties": ["Oncology", "Radiology", "Hematology"],
    "location": "Seattle, WA",
    "establishedYear": 2010,
    "isVerified": true
  },
  {
    "_id": "hosp_004",
    "title": "Summit Orthopedic Clinic",
    "description": "Focusing on sports medicine, joint replacement, and physical rehabilitation.",
    "slug": "summit-orthopedic-clinic",
    "canonical": "/hospitals/summit-orthopedic-clinic",
    "image": "/images/home/card04.jpg",
    "rating": 4.6,
    "reviewCount": 450,
    "specialties": ["Orthopedics", "Physiotherapy"],
    "location": "Denver, CO",
    "establishedYear": 2008,
    "isVerified": false
  },
  {
    "_id": "hosp_005",
    "title": "Metro Neurosciences Hospital",
    "description": "Comprehensive neurological care for stroke, epilepsy, and brain trauma.",
    "slug": "metro-neurosciences-hospital",
    "canonical": "/hospitals/metro-neurosciences-hospital",
    "image": "/images/home/card05.jpg",
    "rating": 4.9,
    "reviewCount": 1100,
    "specialties": ["Neurology", "Neurosurgery"],
    "location": "Boston, MA",
    "establishedYear": 1988,
    "isVerified": true
  },
  {
    "_id": "hosp_006",
    "title": "Blue Sky Dermatology",
    "description": "Premium skincare solutions and laser surgery procedures.",
    "slug": "blue-sky-dermatology",
    "canonical": "/hospitals/blue-sky-dermatology",
    "image": "/images/home/card06.jpg",
    "rating": 4.5,
    "reviewCount": 380,
    "specialties": ["Dermatology", "Cosmetic Surgery"],
    "location": "Los Angeles, CA",
    "establishedYear": 2015,
    "isVerified": true
  },
  {
    "_id": "hosp_007",
    "title": "Harmony Behavioral Health",
    "description": "Specialized mental health services and psychiatric support.",
    "slug": "harmony-behavioral-health",
    "canonical": "/hospitals/harmony-behavioral-health",
    "image": "/images/home/card07.jpg",
    "rating": 4.8,
    "reviewCount": 740,
    "specialties": ["Psychiatry", "Psychology"],
    "location": "Austin, TX",
    "establishedYear": 2005,
    "isVerified": true
  },
  {
    "_id": "hosp_008",
    "title": "Vision Excellence Center",
    "description": "Advanced ophthalmology and laser eye surgery clinic.",
    "slug": "vision-excellence-center",
    "canonical": "/hospitals/vision-excellence-center",
    "image": "/images/home/card08.jpg",
    "rating": 4.7,
    "reviewCount": 510,
    "specialties": ["Ophthalmology"],
    "location": "Miami, FL",
    "establishedYear": 2012,
    "isVerified": true
  },
  {
    "_id": "hosp_009",
    "title": "Digestive Health Institute",
    "description": "Expert gastroenterology and internal medicine services.",
    "slug": "digestive-health-institute",
    "canonical": "/hospitals/digestive-health-institute",
    "image": "/images/home/card09.jpg",
    "rating": 4.6,
    "reviewCount": 420,
    "specialties": ["Gastroenterology", "Internal Medicine"],
    "location": "Atlanta, GA",
    "establishedYear": 2003,
    "isVerified": true
  },
  {
    "_id": "hosp_010",
    "title": "Vital Endocrine Center",
    "description": "Specialists in diabetes management and hormonal disorders.",
    "slug": "vital-endocrine-center",
    "canonical": "/hospitals/vital-endocrine-center",
    "image": "/images/home/card10.jpg",
    "rating": 4.8,
    "reviewCount": 310,
    "specialties": ["Endocrinology"],
    "location": "Phoenix, AZ",
    "establishedYear": 2018,
    "isVerified": true
  },
  {
    "_id": "hosp_011",
    "title": "Nephro-Care Specialists",
    "description": "Dedicated renal care, dialysis, and kidney disease treatment.",
    "slug": "nephro-care-specialists",
    "canonical": "/hospitals/nephro-care-specialists",
    "image": "/images/home/card11.jpg",
    "rating": 4.9,
    "reviewCount": 290,
    "specialties": ["Nephrology"],
    "location": "Philadelphia, PA",
    "establishedYear": 2007,
    "isVerified": true
  },
  {
    "_id": "hosp_012",
    "title": "Coastal ENT Associates",
    "description": "Ear, Nose, and Throat specialists for all ages.",
    "slug": "coastal-ent-associates",
    "canonical": "/hospitals/coastal-ent-associates",
    "image": "/images/home/card12.jpg",
    "rating": 4.5,
    "reviewCount": 400,
    "specialties": ["ENT"],
    "location": "San Diego, CA",
    "establishedYear": 2014,
    "isVerified": false
  },
  {
    "_id": "hosp_013",
    "title": "Urology Medical Group",
    "description": "Providing comprehensive urological care and diagnostic services.",
    "slug": "urology-medical-group",
    "canonical": "/hospitals/urology-medical-group",
    "image": "/images/home/card13.jpg",
    "rating": 4.7,
    "reviewCount": 350,
    "specialties": ["Urology"],
    "location": "Houston, TX",
    "establishedYear": 1999,
    "isVerified": true
  },
  {
    "_id": "hosp_014",
    "title": "Prime Emergency Hospital",
    "description": "24/7 emergency medical services with level 1 trauma support.",
    "slug": "prime-emergency-hospital",
    "canonical": "/hospitals/prime-emergency-hospital",
    "image": "/images/home/card14.jpg",
    "rating": 4.8,
    "reviewCount": 2100,
    "specialties": ["Emergency Medicine", "General Surgery"],
    "location": "Las Vegas, NV",
    "establishedYear": 1990,
    "isVerified": true
  }
]