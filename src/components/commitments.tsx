"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faHandsHelping,
  faLightbulb,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const values = [
  {
    icon: faShieldAlt,
    title: "Trust",
    description: "We prioritize your safety and build trust through our reliable services.",
  },
  {
    icon: faHandsHelping,
    title: "Care",
    description: "Our dedicated team is here to support you every step of the way.",
  },
  {
    icon: faLightbulb,
    title: "Simplicity",
    description: "Our services are designed to be user-friendly and straightforward.",
  },
  {
    icon: faTrophy,
    title: "Grit",
    description: "We embody resilience and determination to achieve the best outcomes.",
  },
];

export default function Commits() {
  return (
    <div className="container w-full max-w-7xl mx-auto px-4 md:px-6 mb-20 lg:px-8">
      {/* Responsive padding that increases on larger screens */}
      <div className="py-8 sm:py-10 lg:py-14">
        {/* Updated grid system - 2 columns until xl breakpoint */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {values.map((item, index) => (
            <div 
              key={index}
              className="group relative border-2 border-dashed border-gray-200 dark:border-gray-700 
                rounded-xl transition-all duration-300 
                hover:border-blue-500 dark:hover:border-blue-400 
                hover:shadow-lg focus-within:border-blue-500 
                bg-white/50 dark:bg-gray-800/50
                p-4 sm:p-6"
            >
              {/* Icon container with responsive sizing */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center 
                  w-10 h-10 sm:w-12 sm:h-12 
                  rounded-lg bg-blue-50 dark:bg-blue-900/50 
                  mb-4 sm:mb-6 transition-transform duration-300 
                  group-hover:scale-105"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-blue-500 dark:text-blue-400 
                      transition-all duration-300 
                      group-hover:scale-110 
                      w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                {/* Responsive gradient line */}
                <div className="w-full h-px bg-gradient-to-r from-blue-100 via-blue-50 to-transparent 
                  dark:from-blue-900/50 dark:via-blue-900/10">
                  <div className="bg-blue-200 dark:bg-blue-700 w-6 sm:w-8 h-px"></div>
                </div>
              </div>

              {/* Content section with responsive text sizes */}
              <div className="mt-4 sm:mt-5 flex-grow">
                <h3 className="text-base sm:text-lg font-semibold 
                  text-gray-800 dark:text-white 
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 
                  transition-colors duration-300"
                >
                  {item.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base 
                  text-gray-600 dark:text-gray-300"
                >
                  {item.description}
                </p>
              </div>

              {/* Enhanced hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br 
                from-blue-50 to-transparent 
                dark:from-blue-900/20 dark:to-transparent 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 rounded-xl -z-10"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const selectorName = "Commits";