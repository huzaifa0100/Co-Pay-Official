"use client";
import React from "react";
import Image from "next/image";

import benefitOneImg from "../../public/img/benefit-one.png"; // Change this to a relevant healthcare image
import benefitTwoImg from "../../public/img/benefit-two.png"; // Change this to a relevant healthcare image

const BlogDetail: React.FC = () => {
  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
            Simplifying Copay Management for Healthcare Providers
          </h2>
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            At Copay Health, we strive to bring clarity and efficiency to the copay process. Our platform empowers healthcare providers to manage patient copays seamlessly, ensuring that patients receive the care they need without financial confusion.
          </p>

          <figure className="mb-6">
            <Image
              className="rounded-lg shadow-lg"
              src={benefitOneImg} // Use an image that represents healthcare or copays
              alt="Healthcare Process"
              width={600}
              height={400}
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-neutral-500">
              A healthcare provider assisting a patient.
            </figcaption>
          </figure>

          <p className="text-lg text-gray-800 dark:text-neutral-200">
            We're committed to fostering a culture of transparency in healthcare billing, making the copay process as straightforward as possible for both providers and patients.
          </p>

          <blockquote className="text-center p-4 border-l-4 border-blue-500 bg-gray-100 dark:bg-neutral-800">
            <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
              Switching to Copay Health has transformed my practice. The simplified billing process has made it easier to focus on patient care.
            </p>
            <p className="mt-5 font-semibold text-gray-800 dark:text-neutral-200">
              — Dr. Emily Carter, Family Physician
            </p>
          </blockquote>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold dark:text-white">
              Empowering Patients and Providers Alike
            </h3>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
              We understand that managing copays can be a challenge for both healthcare providers and patients. Our goal is to streamline this process, making healthcare more accessible and less confusing for everyone involved.
            </p>
          </div>

          <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
            <li>
              Our platform provides real-time updates on patient copays, enabling providers to offer accurate billing information instantly,{" "}
              <a className="text-blue-600 hover:underline focus:outline-none" href="#">
                said John Smith, Operations Manager at Healthcare Solutions.
              </a>
            </li>
            <li>
              Copay Health opened new pathways for communication between patients and providers, leading to improved satisfaction and compliance,{" "}
              <a className="text-blue-600 hover:underline focus:outline-none" href="#">
                said Sarah Lee, Patient Advocate.
              </a>
            </li>
          </ul>

          <p className="text-lg text-gray-800 dark:text-neutral-200">
            Our platform allows healthcare providers to invite more staff members into the billing process, creating a collaborative environment that enhances patient experience and care delivery. As practices grow, our tools ensure that transparency and communication remain central to their operations.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <a className="inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="#">
              Copay Solutions
            </a>
            <a className="inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="#">
              Healthcare Management
            </a>
            <a className="inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="#">
              Free Resources
            </a>
            <a className="inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="#">
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
