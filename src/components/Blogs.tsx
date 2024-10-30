"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects, Project } from "@/components/BlogsData";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link
      href={project.href}
      className="group flex flex-col bg-white dark:bg-neutral-900 focus:outline-none 
                 transition-all duration-300 hover:-translate-y-1 
                 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-neutral-800/50 
                 rounded-2xl sm:pt-5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="relative aspect-video sm:aspect-[16/12] overflow-hidden rounded-xl 
                    bg-gray-100 dark:bg-neutral-800"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-in-out 
                     group-hover:scale-105 group-focus:scale-105 rounded-xl"
          sizes="(min-width: 1536px) 30vw, (min-width: 1280px) 35vw, (min-width: 768px) 45vw, 90vw"
          priority={index < 2}
          fill
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent 
                      opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="pt-5 space-y-4">
        <h3 className="relative inline-block font-medium text-lg sm:text-xl text-black dark:text-white">
          <span className="relative z-10">{project.title}</span>
          <span
            className="absolute bottom-0.5 left-0 -z-[1] h-1.5 w-full origin-left scale-x-0 
                         bg-blue-400/40 transition-transform duration-300 ease-out 
                         group-hover:scale-x-100 rounded-full"
          />
        </h3>

        <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.id}
              className="py-1.5 px-3 bg-gray-50 text-gray-600 border border-gray-200 
                       text-xs sm:text-sm rounded-xl dark:bg-neutral-800 
                       dark:border-neutral-700 dark:text-neutral-300 transition-colors 
                       duration-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(allProjects);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProjects]);

  const handleSearch = () => {
    const newFilteredProjects = allProjects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(newFilteredProjects);
  };

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const showRecentBlogs = searchTerm === "";
  const recentBlogs = allProjects
    .slice()
    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
    .slice(0, 4);

  return (
    <section className="w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-4 pr-12 border border-gray-300 dark:border-neutral-700 
                     rounded-xl bg-white dark:bg-neutral-900 text-black dark:text-white
                      focus:border-transparent
                     placeholder:text-gray-400 dark:placeholder:text-neutral-500"
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 
                     hover:text-blue-500 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          </button>
        </div>

        {/* Recent Blogs Section */}
        {showRecentBlogs && (
          <div className="mb-12 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              <div className="lg:col-span-7">
                <Link href={recentBlogs[0].href} className="group block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                    <Image
                      src={recentBlogs[0].image}
                      alt={recentBlogs[0].title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {recentBlogs[0].title}
                      </h3>
                      <p className="text-sm text-gray-200 line-clamp-2">
                        {recentBlogs[0].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {recentBlogs.slice(1).map((blog) => (
                  <Link key={blog.id} href={blog.href} className="group block">
                    <div
                      className="flex gap-4 items-start p-3 rounded-xl 
                        hover:bg-white dark:hover:bg-neutral-900 
                        transition-colors duration-200"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          className="object-cover transition-transform duration-500 
                           group-hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="flex-1">
                        <h4
                          className="text-base sm:text-lg font-medium 
                           text-black dark:text-white group-hover:text-blue-500 
                           transition-colors duration-200 mb-1"
                        >
                          {blog.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
          All Posts
        </h2>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 
                       border border-gray-200 dark:border-neutral-700 text-sm font-medium
                       text-gray-700 dark:text-neutral-300 transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
              Previous
            </button>

            <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 
                       border border-gray-200 dark:border-neutral-700 text-sm font-medium
                       text-gray-700 dark:text-neutral-300 transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              Next
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
