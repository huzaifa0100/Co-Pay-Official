"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const SimpleFaq = () => {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      {/* FAQ Options Section - Left */}
      <div className="w-full lg:w-3/5">
        {faqdata.map((item, index) => (
          <Disclosure key={index} as="div" className="mb-4">
            {({ open }) => (
              <>
                <DisclosureButton className="flex justify-between w-full p-4 text-left bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
                  <span className="font-medium">{item.question}</span>
                  <ChevronUpIcon className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </DisclosureButton>
                <DisclosurePanel className="p-4 bg-white rounded-lg">
                  {item.answer}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      {/* Heading and Description Section - Right */}
      <div className="flex flex-col justify-center w-full lg:w-2/5">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg leading-normal text-gray-500 dark:text-gray-300">
          Have questions? We&apos;re here to help. If you don&apos;t find your answer here, feel free to contact our support team.
        </p>
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What pricing plans do you offer?",
    answer:
      "We offer several pricing plans to suit different needs, including individual, small practice, and enterprise options. Please visit our pricing page for detailed information.",
  },
  {
    question: "Can I use it for my healthcare practice?",
    answer:
      "Yes, our solution is designed specifically for healthcare providers and practices, helping you manage patient copays effectively.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you&apos;re not satisfied with your plan, you can request a refund within the first 30 days of purchase.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, we provide dedicated technical support for all subscribers. You can reach out to our support team anytime.",
  },
];
