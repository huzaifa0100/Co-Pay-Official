"use client";

import React from "react";
import { Button } from "./button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { allProjects } from "@/components/BlogsData"; // Adjusted import to reflect your data structure

export const FeaturedBlogs = () => {
  // Get the latest 4 blog projects
  const blogPosts = allProjects.slice(-2).reverse();

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-black dark:text-white">Featured Posts</h2>
        <Button variant="primary" size="small">
          <Link href="/blogs" className="flex items-center">
            View All Posts
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </Button>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {blogPosts.map((post) => (
          <a key={post.id} className="group relative block rounded-xl focus:outline-none" href={post.href}>
            <div className="relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:bg-gradient-to-t before:from-gray-900/70">
              <img className="absolute inset-0 w-full h-full object-cover" src={post.image.src} alt={post.title} />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-gray-800 group-hover:text-gray/500 dark:text-neutral-200">{post.title}</h3>
                <p className="mt-2 text-gray-800 dark:text-neutral-200">{post.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
