import { StaticImageData } from "next/image";
import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

// Project Tag Interface
export interface ProjectTag {
  id: string;
  name: string;
}

// Project Interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  tags: ProjectTag[];
  href: string;
}

// All Projects Data
export const allProjects: Project[] = [
    {
      id: "1",
      title: "eYoga",
      description: "A comprehensive platform that combines yoga practices with analytics, helping users track their progress, set personalized goals, and improve their overall wellness through tailored yoga sessions and instructional videos.",
      image: benefitOneImg,
      href: "/blogDetails",
      tags: [
        { id: "1", name: "Wellness" },
        { id: "2", name: "Yoga" },
        { id: "3", name: "Health Tracking" },
      ],
    },
    {
      id: "2",
      title: "Nike React",
      description: "An innovative project focused on revolutionizing athletic footwear. The Nike React technology provides unparalleled comfort and support for athletes, enhancing performance and reducing the risk of injury through superior cushioning.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "4", name: "Footwear" },
        { id: "5", name: "Performance" },
        { id: "6", name: "Athletics" },
      ],
    },
    {
      id: "3",
      title: "EcoLiving",
      description: "A platform dedicated to promoting sustainable living practices among urban dwellers. EcoLiving offers tips, resources, and products that encourage environmentally friendly choices, making sustainability accessible to everyone.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "7", name: "Sustainability" },
        { id: "8", name: "Lifestyle" },
      ],
    },
    {
      id: "4",
      title: "Fitness Tracker",
      description: "An all-in-one fitness tracking application that helps users monitor their health and fitness goals. It includes features for tracking workouts, nutrition, sleep, and overall well-being, encouraging a healthier lifestyle.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "9", name: "Fitness" },
        { id: "10", name: "Health" },
      ],
    },
    {
      id: "5",
      title: "Smart Garden",
      description: "An innovative gardening solution that automates watering and care for plants using smart technology. Ideal for urban settings, it promotes sustainable living by encouraging individuals to grow their own food effortlessly.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "11", name: "Gardening" },
        { id: "12", name: "Technology" },
      ],
    },
    {
      id: "6",
      title: "Travel Companion",
      description: "An application designed to enhance travel experiences by offering personalized recommendations, local insights, and safety tips. Users can discover new places and connect with locals to make the most of their adventures.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "13", name: "Travel" },
        { id: "14", name: "Exploration" },
      ],
    },
    {
      id: "7",
      title: "Culinary Hub",
      description: "A platform connecting food enthusiasts with local chefs, offering cooking classes, unique recipes, and dining experiences. Culinary Hub fosters community through shared culinary adventures, promoting local cuisines and ingredients.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "15", name: "Food" },
        { id: "16", name: "Community" },
      ],
    },
    {
      id: "8",
      title: "Mindful Meditation",
      description: "A guided meditation app designed to help users manage stress and enhance mental well-being. It offers various meditation techniques, mindfulness practices, and progress tracking to support mental health.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "17", name: "Mental Health" },
        { id: "18", name: "Wellness" },
      ],
    },
    {
      id: "9",
      title: "Fashion Forward",
      description: "An online marketplace for sustainable fashion brands, connecting conscious consumers with eco-friendly clothing options. It emphasizes ethical practices and promotes awareness of sustainable fashion trends.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "19", name: "Fashion" },
        { id: "20", name: "Sustainability" },
      ],
    },
    {
      id: "10",
      title: "Home Chef",
      description: "An app designed to simplify meal prep and recipe sharing. Home Chef provides users with easy-to-follow recipes, personalized meal plans, and grocery lists to encourage healthy cooking at home.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "21", name: "Cooking" },
        { id: "22", name: "Lifestyle" },
      ],
    },
    {
      id: "11",
      title: "Healthy Habits",
      description: "An app dedicated to building and maintaining healthy habits. Users can set goals, track their progress, and receive motivational reminders to help them cultivate a healthier lifestyle.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "23", name: "Health" },
        { id: "24", name: "Lifestyle" },
      ],
    },
    {
      id: "12",
      title: "Virtual Health Coach",
      description: "A digital health coaching platform that connects users with certified health coaches. It provides personalized health plans, ongoing support, and resources to help users achieve their health goals.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "25", name: "Health Coaching" },
        { id: "26", name: "Wellness" },
      ],
    },
    {
      id: "13",
      title: "Nutrition Tracker",
      description: "An application designed to help users monitor their nutritional intake. It includes features for logging meals, tracking nutrients, and providing personalized feedback to encourage healthier eating habits.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "27", name: "Nutrition" },
        { id: "28", name: "Health" },
      ],
    },
    {
      id: "14",
      title: "Community Fitness",
      description: "A social platform for fitness enthusiasts to connect, share workout routines, and participate in challenges. Community Fitness encourages accountability and motivation through social interactions.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "29", name: "Fitness" },
        { id: "30", name: "Community" },
      ],
    },
    {
      id: "15",
      title: "Stress Relief Toolkit",
      description: "An application providing users with resources and techniques to manage stress effectively. It includes guided exercises, relaxation techniques, and educational materials to promote mental health.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "31", name: "Mental Health" },
        { id: "32", name: "Wellness" },
      ],
    },
    {
      id: "16",
      title: "Sleep Improvement",
      description: "A sleep tracking application that helps users improve their sleep quality. It offers personalized insights, sleep tips, and tracking features to promote better sleep hygiene.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "33", name: "Sleep" },
        { id: "34", name: "Health" },
      ],
    },
    {
      id: "17",
      title: "Mindfulness Journal",
      description: "A digital journal designed to help users practice mindfulness. It encourages daily reflection, gratitude exercises, and mindfulness prompts to enhance mental well-being.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "35", name: "Mental Health" },
        { id: "36", name: "Mindfulness" },
      ],
    },
    {
      id: "18",
      title: "Personal Trainer Finder",
      description: "An app that connects users with certified personal trainers based on their fitness goals and preferences. It facilitates booking sessions and managing training schedules effectively.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "37", name: "Fitness" },
        { id: "38", name: "Personal Training" },
      ],
    },
    {
      id: "19",
      title: "Healthy Meal Planner",
      description: "A meal planning application that helps users create balanced meal plans based on their dietary preferences and health goals. It includes recipe suggestions, shopping lists, and nutritional information.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "39", name: "Nutrition" },
        { id: "40", name: "Health" },
      ],
    },
    {
      id: "20",
      title: "Corporate Wellness Program",
      description: "A platform designed to help organizations implement wellness programs for their employees. It includes resources for fitness challenges, health screenings, and wellness education to promote a healthier workplace.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "41", name: "Wellness" },
        { id: "42", name: "Corporate Health" },
      ],
    },
  ];
  
