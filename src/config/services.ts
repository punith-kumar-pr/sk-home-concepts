export type Service = {
  id: string;
  title: string;
  description: string;
  imageKey: keyof typeof import("./images").images.services;
  subServices?: string[];
};

export const services: Service[] = [
  { 
    id: "interior-design", 
    title: "Interior Design Works", 
    description: "Transform your spaces with our network of expert interior designers. We connect you with top talent to bring your vision to life.", 
    imageKey: "interiorDesign" 
  },
  { 
    id: "new-furniture", 
    title: "New Furniture", 
    description: "Get premium new furniture sourced from the best manufacturers, ensuring quality and durability.", 
    imageKey: "furniture" 
  },
  { 
    id: "event-management", 
    title: "Event Management", 
    description: "End-to-end event planning and management for all your special occasions, handled by seasoned professionals.", 
    imageKey: "eventManagement" 
  },
  { 
    id: "catering", 
    title: "Catering Services", 
    description: "Delicious catering services (Veg & Non-Veg) tailored to your taste and dietary preferences, provided by top-rated caterers.", 
    imageKey: "catering" 
  },
  { 
    id: "painting", 
    title: "Painting Works", 
    description: "Refresh your home with our professional painting partners. Quality finishes and clean execution guaranteed.", 
    imageKey: "painting" 
  },
  { 
    id: "deep-cleaning", 
    title: "Deep Cleaning", 
    description: "Thorough deep cleaning services for homes and offices, leaving every corner spotless and hygienic.", 
    imageKey: "cleaning" 
  },
  { 
    id: "pest-control", 
    title: "Pest Control", 
    description: "Effective and safe pest control solutions to keep your home bug-free, clean, and hygienic.", 
    imageKey: "pestControl" 
  },
  { 
    id: "car-washing", 
    title: "Car Washing Services", 
    description: "Convenient and professional car washing services, brought directly to your doorstep with premium products.", 
    imageKey: "carWash" 
  },
  { 
    id: "other-services", 
    title: "Other Home Services", 
    description: "Specialized home installations and maintenance services handled by expert technicians to make your living space safer and more comfortable.", 
    imageKey: "otherServices",
    subServices: [
      "Pigeon Net Installation",
      "Invisible Grill Installation",
      "Cloth Hanger Installation"
    ]
  },
];
