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
    description: "We embody resilience and determination, overcoming challenges to deliver the best outcomes.",
  },
];

export default function Commits() {
  return (
    <div className="max-w-7xl px-4 sm:px-6 py-10 lg:py-14 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {values.map((item, index) => (
          <div 
            key={index}
            className="group relative border-2 border-dashed border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 flex flex-col h-full hover:shadow-lg bg-white/50 dark:bg-gray-800/50"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 mb-6">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110"
                  size="lg"
                />
              </div>
              <div className="w-full h-px bg-gradient-to-r from-blue-100 via-blue-50 to-transparent dark:from-blue-900/50 dark:via-blue-900/10">
                <div className="bg-blue-200 dark:bg-blue-700 w-8 h-px"></div>
              </div>
            </div>

            <div className="mt-5 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>

            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting the selector name as a named export
export const selectorName = "Commits";
