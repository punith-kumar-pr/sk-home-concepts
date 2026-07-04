export type Service = {
  id: string;
  title: string;
  description: string;
  imageKey: keyof typeof import("./images").images.services;
};

export const services: Service[] = [
  { id: "interior-design", title: "Interior Design Works", description: "Transform your spaces with our network of expert interior designers. We connect you with top talent to bring your vision to life.", imageKey: "interiorDesign" },
  { id: "new-furniture", title: "New Furniture", description: "Get premium new furniture sourced from the best manufacturers, ensuring quality and durability.", imageKey: "furniture" },
  { id: "event-management", title: "Event Management", description: "End-to-end event planning and management for all your special occasions, handled by seasoned professionals.", imageKey: "eventManagement" },
  { id: "catering", title: "Catering Services (Veg & Non-Veg)", description: "Delicious catering services tailored to your taste and dietary preferences, provided by top-rated caterers.", imageKey: "catering" },
  { id: "pigeon-net", title: "Pigeon Net Installation", description: "Keep your balconies clean and safe with professional pigeon net installation services.", imageKey: "pigeonNet" },
  { id: "invisible-grill", title: "Invisible Grill Installation", description: "Modern, secure, and aesthetically pleasing invisible grills for your safety, installed by experts.", imageKey: "invisibleGrill" },
  { id: "cloth-hanger", title: "Cloth Hanger Installation", description: "Space-saving ceiling cloth hanger installations for your home, providing convenient drying solutions.", imageKey: "clothHanger" },
  { id: "painting", title: "Painting Works", description: "Refresh your home with our professional painting partners. Quality finishes guaranteed.", imageKey: "painting" },
  { id: "deep-cleaning", title: "Deep Cleaning Services", description: "Thorough deep cleaning services for homes and offices, leaving every corner spotless.", imageKey: "cleaning" },
  { id: "pest-control", title: "Pest Control Services", description: "Effective and safe pest control solutions to keep your home bug-free and hygienic.", imageKey: "pestControl" },
  { id: "car-washing", title: "Car Washing Services", description: "Convenient and professional car washing services, brought directly to your doorstep.", imageKey: "carWash" },
];
