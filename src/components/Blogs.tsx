"use client"; // Add this line at the very top

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectTag {
  id: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  tags: ProjectTag[];
  href: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link
      href={project.href}
      className="group flex flex-col focus:outline-none transition-all duration-300 hover:-translate-y-1 
                 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-neutral-800/50 
                 rounded-2xl p-3 sm:p-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[16/12] overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 
                     group-focus:scale-105 rounded-xl will-change-transform"
          sizes="(min-width: 1536px) 33vw, (min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
          priority={index < 2}
          fill
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 
                      transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="pt-4 space-y-3">
        <h3 className="relative inline-block font-medium text-base sm:text-lg text-black dark:text-white">
          <span className="relative z-10">{project.title}</span>
          <span
            className="absolute bottom-0.5 left-0 -z-[1] h-1 w-full origin-left scale-x-0 
                         bg-blue-400/40 transition-transform duration-300 ease-out group-hover:scale-x-100 
                         rounded-full"
          />
        </h3>

        <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.id}
              className="py-1 px-2.5 sm:py-1.5 sm:px-3 bg-white text-gray-600 border border-gray-200 
                       text-xs sm:text-sm rounded-lg sm:rounded-xl dark:bg-neutral-900 
                       dark:border-neutral-700 dark:text-neutral-400 transition-colors 
                       duration-200 hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const ProjectGrid: React.FC = () => {
  const allProjects: Project[] = [
    {
      id: "1",
      title: "eYoga",
      description: "A revamped and dynamic approach to yoga analytics.",
      image: benefitOneImg,
      href: "/blogDetails",
      tags: [
        { id: "1", name: "Discovery" },
        { id: "2", name: "Brand Guidelines" },
        { id: "3", name: "Wellness" },
      ],
    },
    {
      id: "2",
      title: "Nike React",
      description: "Revolutionizing athletic footwear technology.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "4", name: "Brand Strategy" },
        { id: "5", name: "Product Design" },
        { id: "6", name: "Athletics" },
      ],
    },
    {
      id: "3",
      title: "EcoLiving",
      description: "Sustainable living solutions for urban dwellers.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "7", name: "Sustainability" },
        { id: "8", name: "Home Design" },
      ],
    },
    {
      id: "4",
      title: "Fitness Tracker",
      description: "A comprehensive app for tracking fitness goals.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "9", name: "Health" },
        { id: "10", name: "Technology" },
      ],
    },
    {
      id: "5",
      title: "Smart Garden",
      description: "Automated gardening for urban environments.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "11", name: "Gardening" },
        { id: "12", name: "Smart Tech" },
      ],
    },
    {
      id: "6",
      title: "Travel Companion",
      description: "An app that helps you explore new cities like a local.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "13", name: "Travel" },
        { id: "14", name: "Adventure" },
      ],
    },
    {
      id: "7",
      title: "Culinary Hub",
      description: "Connecting food lovers with local chefs and cuisine.",
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
      description: "A guided meditation app for stress relief.",
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
      description: "An online platform for sustainable fashion brands.",
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
      description: "Meal prep and recipe sharing made easy.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "21", name: "Cooking" },
        { id: "22", name: "Lifestyle" },
      ],
    },
    {
      id: "11",
      title: "Tech Innovations",
      description: "Showcasing the latest in tech advancements.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "23", name: "Technology" },
        { id: "24", name: "Innovation" },
      ],
    },
    {
      id: "12",
      title: "Fitness Revolution",
      description: "Transform your workout routine with personalized plans.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "25", name: "Fitness" },
        { id: "26", name: "Health" },
      ],
    },
    {
      id: "13",
      title: "Pet Care App",
      description: "Everything you need for your furry friends.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "27", name: "Pets" },
        { id: "28", name: "Care" },
      ],
    },
    {
      id: "14",
      title: "Virtual Reality Adventures",
      description: "Explore the world from the comfort of your home.",
      image: benefitTwoImg,
      href: "#",
      tags: [
        { id: "29", name: "Virtual Reality" },
        { id: "30", name: "Adventure" },
      ],
    },
    {
      id: "15",
      title: "Online Learning Platform",
      description: "Empowering learners through engaging content.",
      image: benefitOneImg,
      href: "#",
      tags: [
        { id: "31", name: "Education" },
        { id: "32", name: "E-Learning" },
      ],
    },
    // ... other projects ...
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(allProjects);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when search term changes
  }, [filteredProjects]);

  const handleSearch = () => {
    const newFilteredProjects = allProjects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(newFilteredProjects);
    setCurrentPage(1); // Reset to first page when button is clicked
  };

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term as the user types
            className="p-2 border border-gray-300 rounded-md w-25"
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md flex items-center"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div
          id="project-grid"
          className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className={`mx-2 p-2 bg-blue-500 text-white rounded flex items-center transition duration-200 
      ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
  >
    <FontAwesomeIcon icon={faChevronLeft} className="mr-1" />
    Previous
  </button>
  
  <span className="mx-2 text-lg font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
  
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className={`mx-2 p-2 bg-blue-500 text-white rounded flex items-center transition duration-200 
      ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
  >
    Next
    <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
  </button>
</div>

      </div>
    </section>
  );
};

export default ProjectGrid;
