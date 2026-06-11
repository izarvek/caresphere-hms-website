export interface Doctor {   
    id: string;
    userId: string;
    specialization: string;
    experience: number;
    phone: string;
    user : {
        id: string;
        name: string;
        email: string;
        password: string;
        avatar: string;
        role: string;
        status: string;
    }
}

export const doctorsDate : Doctor[] =[
  {
    "id": "cuid_doc_001",
    "userId": "cuid_user_001",
    "specialization": "Cardiology",
    "experience": 15,
    "phone": "+91-9876543210",
    "user": {
      "id": "cuid_user_001",
      "name": "Dr. Aarav Sharma",
      "email": "aarav.sharma@hms.com",
      "password": "hashed_password_1",
      "avatar": "avatar_url_1",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_002",
    "userId": "cuid_user_002",
    "specialization": "Neurology",
    "experience": 10,
    "phone": "+91-9876543211",
    "user": {
      "id": "cuid_user_002",
      "name": "Dr. Ananya Iyer",
      "email": "ananya.iyer@hms.com",
      "password": "hashed_password_2",
      "avatar": "avatar_url_2",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_003",
    "userId": "cuid_user_003",
    "specialization": "Pediatrics",
    "experience": 8,
    "phone": "+91-9876543212",
    "user": {
      "id": "cuid_user_003",
      "name": "Dr. Vikram Singh",
      "email": "vikram.singh@hms.com",
      "password": "hashed_password_3",
      "avatar": "avatar_url_3",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_004",
    "userId": "cuid_user_004",
    "specialization": "Dermatology",
    "experience": 6,
    "phone": "+91-9876543213",
    "user": {
      "id": "cuid_user_004",
      "name": "Dr. Priya Desai",
      "email": "priya.desai@hms.com",
      "password": "hashed_password_4",
      "avatar": "avatar_url_4",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_005",
    "userId": "cuid_user_005",
    "specialization": "Orthopedics",
    "experience": 12,
    "phone": "+91-9876543214",
    "user": {
      "id": "cuid_user_005",
      "name": "Dr. Rohan Gupta",
      "email": "rohan.gupta@hms.com",
      "password": "hashed_password_5",
      "avatar": "avatar_url_5",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_006",
    "userId": "cuid_user_006",
    "specialization": "Oncology",
    "experience": 18,
    "phone": "+91-9876543215",
    "user": {
      "id": "cuid_user_006",
      "name": "Dr. Meera Nair",
      "email": "meera.nair@hms.com",
      "password": "hashed_password_6",
      "avatar": "avatar_url_6",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_007",
    "userId": "cuid_user_007",
    "specialization": "Gynecology",
    "experience": 9,
    "phone": "+91-9876543216",
    "user": {
      "id": "cuid_user_007",
      "name": "Dr. Kavita Rao",
      "email": "kavita.rao@hms.com",
      "password": "hashed_password_7",
      "avatar": "avatar_url_7",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_008",
    "userId": "cuid_user_008",
    "specialization": "Psychiatry",
    "experience": 7,
    "phone": "+91-9876543217",
    "user": {
      "id": "cuid_user_008",
      "name": "Dr. Arjun Mehta",
      "email": "arjun.mehta@hms.com",
      "password": "hashed_password_8",
      "avatar": "avatar_url_8",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_009",
    "userId": "cuid_user_009",
    "specialization": "Radiology",
    "experience": 5,
    "phone": "+91-9876543218",
    "user": {
      "id": "cuid_user_009",
      "name": "Dr. Sneha Patil",
      "email": "sneha.patil@hms.com",
      "password": "hashed_password_9",
      "avatar": "avatar_url_9",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_010",
    "userId": "cuid_user_010",
    "specialization": "Ophthalmology",
    "experience": 11,
    "phone": "+91-9876543219",
    "user": {
      "id": "cuid_user_010",
      "name": "Dr. Amit Joshi",
      "email": "amit.joshi@hms.com",
      "password": "hashed_password_10",
      "avatar": "avatar_url_10",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_011",
    "userId": "cuid_user_011",
    "specialization": "Gastroenterology",
    "experience": 14,
    "phone": "+91-9876543220",
    "user": {
      "id": "cuid_user_011",
      "name": "Dr. Sunita Reddy",
      "email": "sunita.reddy@hms.com",
      "password": "hashed_password_11",
      "avatar": "avatar_url_11",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_012",
    "userId": "cuid_user_012",
    "specialization": "ENT",
    "experience": 4,
    "phone": "+91-9876543221",
    "user": {
      "id": "cuid_user_012",
      "name": "Dr. Rahul Verma",
      "email": "rahul.verma@hms.com",
      "password": "hashed_password_12",
      "avatar": "avatar_url_12",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_013",
    "userId": "cuid_user_013",
    "specialization": "Endocrinology",
    "experience": 13,
    "phone": "+91-9876543222",
    "user": {
      "id": "cuid_user_013",
      "name": "Dr. Deepa Kulkarni",
      "email": "deepa.kulkarni@hms.com",
      "password": "hashed_password_13",
      "avatar": "avatar_url_13",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  },
  {
    "id": "cuid_doc_014",
    "userId": "cuid_user_014",
    "specialization": "Urology",
    "experience": 16,
    "phone": "+91-9876543223",
    "user": {
      "id": "cuid_user_014",
      "name": "Dr. Manoj Kumar",
      "email": "manoj.kumar@hms.com",
      "password": "hashed_password_14",
      "avatar": "avatar_url_14",
      "role": "DOCTOR",
      "status": "ACTIVE"
    }
  }
]