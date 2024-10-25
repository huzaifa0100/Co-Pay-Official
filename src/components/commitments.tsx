import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faHandsHelping,
  faLightbulb,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Commits() {
  return (
    <div className="max-w-[85rem] py-10 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-12">
        <div className="border-dashed border-2 border-gray-400 p-6 rounded-md flex flex-col h-full">
          <div>
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-indigo-500"
              size="2x"
            />
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="mt-5 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Trust
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              We prioritize your safety and build trust through our reliable
              services.
            </p>
          </div>
        </div>

        <div className="border-dashed border-2 border-gray-400 p-6 rounded-md flex flex-col h-full">
          <div>
            <FontAwesomeIcon
              icon={faHandsHelping}
              className="text-indigo-500"
              size="2x"
            />
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="mt-5 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Care
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Our dedicated team is here to support you every step of the way.
            </p>
          </div>
        </div>

        <div className="border-dashed border-2 border-gray-400 p-6 rounded-md flex flex-col h-full">
          <div>
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-indigo-500"
              size="2x"
            />
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="mt-5 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Simplicity
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Our services are designed to be user-friendly and straightforward.
            </p>
          </div>
        </div>

        <div className="border-dashed border-2 border-gray-400 p-6 rounded-md flex flex-col h-full">
          <div>
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-indigo-500"
              size="2x"
            />
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="mt-5 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Grit
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              We embody resilience and determination, overcoming challenges to
              deliver the best outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
