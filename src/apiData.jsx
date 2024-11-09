import {
  FaWifi,
  FaUtensils,
  FaTshirt,
  FaCar,
  FaConciergeBell,
  FaMountain,
  FaBriefcase,
  FaBicycle,
  FaShoppingBag,
} from "react-icons/fa";

export async function fetchTestimonials() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      image: `https://i.pravatar.cc/150?u=${user.id}`,
      text: `${user.company.catchPhrase} ${user.company.bs}`.slice(0, 200),
    }));
  } catch (error) {
    console.error("Failed to fetch testimonials", error);
    return [];
  }
}

export async function fetchServices() {
  return [
    {
      id: 1,
      icon: <FaWifi />,
      name: "High-Speed Internet",
      description:
        "Optical fiber connectivity for seamless work and entertainment.",
    },
    {
      id: 2,
      icon: <FaUtensils />,
      name: "Healthy Meals",
      description:
        "A delicious and nutritious meal plan to keep you energized all day.",
    },
    {
      id: 3,
      icon: <FaTshirt />,
      name: "Laundry Service",
      description:
        "Convenient and fast laundry service to keep your clothes fresh.",
    },
    {
      id: 4,
      icon: <FaCar />,
      name: "Transportation Assistance",
      description:
        "Reliable transportation services to help you navigate Ladakh.",
    },
    {
      id: 5,
      icon: <FaConciergeBell />,
      name: "Food Delivery",
      description: "Door-to-door food delivery from the best local eateries.",
    },
    {
      id: 6,
      icon: <FaMountain />,
      name: "Tourist Excursions",
      description:
        "Guided tours to explore the beautiful landscapes of Ladakh.",
    },
    {
      id: 7,
      icon: <FaBriefcase />,
      name: "Job Assistance",
      description:
        "Help with finding work opportunities suited to your skills.",
    },
    {
      id: 8,
      icon: <FaBicycle />,
      name: "Rental Service",
      description:
        "Bike and car rentals for comfortable traveling around Ladakh.",
    },
    {
      id: 9,
      icon: <FaShoppingBag />,
      name: "Online Shopping Assistance",
      description:
        "Guidance on online shopping for unique local and global goods.",
    },
  ];
}
