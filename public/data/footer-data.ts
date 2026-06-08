export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  _id: number;
  title: string;
  links: FooterLink[];
}

export const footerLinksData: FooterSection[] = [
  { _id: 1,
    title: "LINKS",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Book Appointment", href: "/book-appointment" },
      { name: "Contact", href: "/contact" },
      { name: "404", href: "/404" },
    ],
  },
  { _id: 2,
    title: "EXPLORE",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Blog Details", href: "/blog/details" },
      { name: "Services", href: "/services" },
      { name: "Services Details", href: "/services/details" },
      { name: "Reviews", href: "/reviews" },
    ],
  },
  { _id: 3,
    title: "MORE",
    links: [
      { name: "Doctors", href: "/doctors" },
      { name: "Doctors Details", href: "/doctors/details" },
      { name: "Careers", href: "/careers" },
      { name: "Careers Details", href: "/careers/details" },
      { name: "Investors", href: "/investors" },
    ],
  },
  { _id: 4,
    title: "CONNECT",
    links: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "YouTube", href: "https://youtube.com" },
    ],
  },
];