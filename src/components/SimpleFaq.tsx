"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const SimpleFaq = () => {
  return (
    <Container className="!p-0">
      <div className="p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`w-5 h-5 text-indigo-500 transition-transform duration-200 ${
                        open ? "transform rotate-180" : ""
                      }`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
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
      "If you're not satisfied with your plan, you can request a refund within the first 30 days of purchase.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, we provide dedicated technical support for all subscribers. You can reach out to our support team anytime.",
  },
];
