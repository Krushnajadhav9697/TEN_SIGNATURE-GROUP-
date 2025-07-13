import SliderOne from "../assets/images/sliderone.webp";
import SliderTwo from "../assets/images/slidertwo.webp";
import SliderThree from "../assets/images/sliderthree.webp";
import SliderFour from "../assets/images/sliderfour.webp";
import SliderFive from "../assets/images/sliderfive.webp";
import SliderSix from "../assets/images/slidersix.webp";
import SliderSeven from "../assets/images/sliderseven.webp";
import SliderEight from "../assets/images/slidereight.webp";
import SliderNine from "../assets/images/slidernine.webp";
import SliderTen from "../assets/images/sliderten.webp";
import PropertyOne from "../assets/images/propertyone.webp";
import PropertyTwo from "../assets/images/propertytwo.jpeg";
import PropertyThree from "../assets/images/propertythree.png";
import BlogOne from "../assets/images/blogone.webp";
import BlogTwo from "../assets/images/blogtwo.webp";
import BlogThree from "../assets/images/blogthree.webp";
import DownloadImg from "../assets/images/download-img.webp";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

import {
  faAngleRight,
  faCogs,
  faFlask,
  faKey,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Listings", to: "/listings", icon: faAngleRight },
  { label: "Our Team", to: "/our-team" },
  { label: "Services", to: "/services", icon: faAngleRight },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact-us" },
];

export const tabs = [
  { id: "real-estate", label: "Real Estate" },
  { id: "services", label: "Services" },
];

export const logos = [
  {
    src: SliderOne,
    alt: "Swiggy",
  },
  {
    src: SliderTwo,
    alt: "Taj",
  },
  {
    src: SliderThree,
    alt: "Le Marche",
  },
  {
    src: SliderFour,
    alt: "Karigari",
  },
  {
    src: SliderFive,
    alt: "Dineout",
  },
  {
    src: SliderSix,
    alt: "Speed Kitchen",
  },
  {
    src: SliderSeven,
    alt: "hotel",
  },
  {
    src: SliderEight,
    alt: "Zomato",
  },
  {
    src: SliderNine,
    alt: "realstate",
  },
  {
    src: SliderTen,
    alt: "states",
  },
];

export const features = [
  {
    icon: faShieldAlt,
    title: "Strategic Alliances ",
    desc: "Take use of our robust network of top-tier suppliers and partners in the sector, which offers you the greatest chances and resources.",
  },
  {
    icon: faKey,
    title: "Knowledge of the Industry",
    desc: "With years of expertise in the food and beverage sector, our team of professionals offers extensive knowledge and creative approaches to support the success of your company.",
  },
  {
    icon: faFlask,
    title: "Flexible and Scalable",
    desc: "With scalability and flexibility to accommodate your changing demands, our services are made to expand with your company.",
  },
  {
    icon: faCogs,
    title: "Dependability and Quality",
    desc: "We are dedicated to providing dependable, high-quality services that will make sure your company's operations are seamless.",
  },
];

export const outletOptions = [
  { value: "", label: "Select..." },
  { value: "cafe", label: "Cafe" },
  { value: "restaurant", label: "Restaurant" },
  { value: "retail", label: "Retail" },
  { value: "office", label: "Office" },
];

export const locationOptions = [
  { value: "", label: "Select..." },
  { value: "newyork", label: "New York" },
  { value: "losangeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
];

export const popularSearches = [
  "Cloud Kitchen on Rent",
  "Cloud Kitchen For Sale",
  "Cloud Kitchen in New Delhi",
  "Cloud Kitchen in Gurugram",
  "Cloud Kitchen in Noida",
  "Cloud Kitchen in Greater Noida",
  "Cloud Kitchen in Ghaziabad",
  "Cloud Kitchen for rent in New Delhi",
  "Cloud Kitchen for rent in Noida",
  "Cloud Kitchen for rent in Gurugram",
  "Cloud Kitchen for rent in Greater Noida",
];

export const otherSearches = [
  "Cloud Kitchen on Rent in Faridabad",
  "Restaurant for sale near me",
  "Restaurant for Sale in New Delhi",
  "Restaurant on Rent in New Delhi",
  "Restaurant in Noida",
  "Restaurant for Sale in Noida",
  "Restaurant for rent in Noida",
  "Restaurant for Sale",
  "Restaurant for Sale in Gurugram",
  "Restaurant for Rent in Gurugram",
  "Restaurant for Sale in Faridabad",
  "Restaurant in Faridabad",
];

export const socialLinks = [
  { href: "#", label: "Facebook", icon: faFacebookF },
  { href: "#", label: "Instagram", icon: faInstagram },
  { href: "#", label: "LinkedIn", icon: faLinkedinIn },
  { href: "#", label: "WhatsApp", icon: faWhatsapp },
];

// Month names
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const appLinks = [
  {
    href: "/",
    alt: "Apple logo icon in white on dark background",
    smallText: "Download on the",
    boldText: "Apple Store",
    icon: faApple,
  },
  {
    href: "/",
    alt: "Google Play icon in white on dark background",
    smallText: "Get it on",
    boldText: "Google Play",
    icon: faGooglePlay,
  },
];

export const links = ["Privacy", "Terms", "Refund", "Sitemap"];

export const appImages = [
  {
    id: 1,
    src: DownloadImg,
    alt: "Mobile phone screen showing an app interface with search bar, location dropdown, notification icon, and properties listings with images",
    width: 280,
    height: 600,
    className: "w-full h-auto rounded-2xl shadow-lg",
  },
];

// Listing Page Data

export const defaultFilters = {
  location: "All Locations",
  category: "All Categories",
  property_for: "All",
  minPrice: "",
  maxPrice: "",
};

// Dashboard
export const bookingsData = [
  {
    id: "BKG001",
    service: "Home Cleaning",
    date: "2025-05-20",
    user: "John Doe",
    provider: "CleanCo",
    status: "Confirmed",
    amount: "₹1500",
    payment: "Paid",
  },
  {
    id: "BKG002",
    service: "Plumbing",
    date: "2025-05-18",
    user: "Jane Smith",
    provider: "PipeFixers",
    status: "Completed",
    amount: "₹800",
    payment: "Paid",
  },
  {
    id: "BKG003",
    service: "AC Repair",
    date: "2025-05-15",
    user: "Bob Martin",
    provider: "CoolServ",
    status: "Pending",
    amount: "₹1200",
    payment: "Unpaid",
  },
];

export const propertiesData = [
  {
    details: "2BHK Flat in Green Valley",
    for: "Rent",
    status: "Active",
    action: "Edit",
  },
  {
    details: "3BHK Villa in Lakeview",
    for: "Sale",
    status: "Pending",
    action: "Edit",
  },
  {
    details: "Studio Apartment in Downtown",
    for: "Rent",
    status: "Inactive",
    action: "Edit",
  },
];

// ✅ Tabs for switching between Real Estate and Services
export const tabss = [
  { id: "real-estate", label: "Real Estate" },
  { id: "services", label: "Services" },
];

// ✅ Cities for dropdown
export const citiess = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"];

// ✅ Categories
export const categoriess = [
  "Residential",
  "Commercial",
  "Plot",
  "Farmhouse",
  "Villa",
];

// Services Section Data Below

import {
  faHouse,
  faCalendar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import EYS_img1 from "../assets/images/servicesDetail-img.png";
import EYS_img2 from "../assets/images/servicesDetail-img.png";
import EYS_img3 from "../assets/images/servicesDetail-img.png";

// Add-on icons (if not embedded directly in data)
export const ADDON_ICONS = {
  "Extra item": EYS_img1,
  "Props/Crockery/Styling": EYS_img2,
  "Additional Setup Fee": EYS_img3,
};

export const DEFAULT_SERVICE = {
  name: "Harry's ",
  price: 0,
  category: "General",
  description:
    "Professional food photography service for restaurants and cafes.",
  serviceId: "AN001",
  provider: "Anamika Vaishnav",
  price: 500,
  category: "Food Photography",
  serviceType: "On-Site Service",
  itemsCovered: 1,
  images: [anamika3, food1, anamika2],
  addOns: [
    { title: "Extra item", price: 200 },
    { title: "Props/Crockery/Styling", price: 500 },
    { title: "Additional Setup Fee", price: 1000 },
  ],
};
// Placeholder for fallback
export const PLACEHOLDER_IMAGE = "https://via.placeholder.com/600x400";

// Static service type
export const SERVICE_TYPE = "On-Site Service";

// Overview section fields
export const getOverviewData = (price, category) => [
  { label: "Price", value: `₹${price}`, icon: faHouse },
  { label: "Category", value: category, icon: faCalendar },
  { label: "Service Type", value: SERVICE_TYPE, icon: faUserTie },
];

// Price breakdown fields
export const getPriceBreakdown = (price, addOnsTotal, tax) => [
  { label: "Base Price", amount: price },
  { label: "Base Discount (0%)", amount: 0 },
  { label: "Addons Total", amount: addOnsTotal },
  { label: "Tax (18%)", amount: tax },
];

export const PRICE_LABELS = {
  basePrice: "Base Price",
  discount: "Base Discount (0%)",
  addons: "Addons Total",
  tax: "Tax (18%)",
  total: "Total Price",
};
export const SERVICE_FAQS = [
  {
    question: "What does the photoshoot package include?",
    answer:
      "Package includes a professional 7–8 hour photoshoot for up to 20 food items. The package covers high-resolution, edited photos that are ready for use in menus, social media, and marketing materials.",
  },
  {
    question: "Can I choose style of photography?",
    answer:
      "Yes, you can choose the photography style that best fits your brand. Discuss your preferences before the shoot.",
  },
  {
    question: "How many final photos will I receive?",
    answer:
      "You will receive 20 professionally edited, high-resolution images.",
  },
  {
    question: "Do you provide props and backdrops for a shoot?",
    answer:
      "Yes, we can provide standard props and backdrops upon request. Custom setups may incur additional charges.",
  },
  {
    question: "Can I book extra time or include more items?",
    answer:
      "Absolutely. Additional time and items can be accommodated for an extra fee. Let us know your requirements in advance.",
  },
  {
    question: "Do you shoot on location or at a studio?",
    answer:
      "We offer both on-location and studio shoots depending on your preference and availability.",
  },
  {
    question: "How soon will I get the photos?",
    answer:
      "You will receive your edited photos within 3–5 business days after the shoot.",
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer:
      "Cancellations made 48 hours before the shoot are fully refundable. Rescheduling is allowed once with prior notice.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply reach out through the contact form or booking button to schedule a consultation and confirm your session.",
  },
];

// Services data

import food1 from "../assets/images/food1.webp";

import anamika2 from "../assets/images/anamika_img2.png";
import anamika3 from "../assets/images/anamika_img3.png";
