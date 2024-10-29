import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Button } from "./button";
import Commits from "./commitments";

export const ContactForm = () => {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div className={`flex flex-wrap items-center w-full lg:w-3/3`}>
        <div className="flex flex-col w-full mt-0">
          <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Let's Connect
          </h3>
          <p className=" py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            At CoPay Health, we help you manage your copay costs, making healthcare more affordable. Our goal is to simplify the payment process so you can focus on what matters most—your health. With our resources.
          </p>

          <div className=" flex flex-wrap justify-between mt-6">
            {/* Customer Support Section */}
            <div className="w-full md:w-1/3 px-4 pl-0">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Customer Support</h1>
              <p className="text-gray-500 dark:text-gray-300">Reach out to us for any assistance you need.</p>
            </div>

            {/* Feedback and Suggestions Section */}
            <div className="w-full md:w-1/3 px-4 pl-0">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Feedback and Suggestions</h1>
              <p className="text-gray-500 dark:text-gray-300">We value your input and would love to hear from you.</p>
            </div>

            {/* Media Inquiries Section */}
            <div className="w-full md:w-1/3 px-4 pl-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Media Inquiries</h1>
              <p className="text-gray-500 dark:text-gray-300">For media-related questions, contact our press team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section - Now on Right with less space */}
      <div className={`flex items-center justify-center w-full lg:w-3/3`}>
        <div className="flex flex-col border rounded-xl p-6 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="mb-6 text-xl font-bold text-gray-800 dark:text-neutral-200">
            Fill in the form
          </h2>

          <form className="space-y-4 sm:space-y-6">
            {/* Name Fields */}
            <div className="grid gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="hs-firstname-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="hs-firstname-contacts-1"
                    id="hs-firstname-contacts-1"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hs-lastname-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="hs-lastname-contacts-1"
                    id="hs-lastname-contacts-1"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="hs-email-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  name="hs-email-contacts-1"
                  id="hs-email-contacts-1"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="hs-phone-number-1" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="hs-phone-number-1"
                  id="hs-phone-number-1"
                  className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Details Field */}
              <div className="space-y-2">
                <label htmlFor="hs-about-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                  Details
                </label>
                <textarea
                  id="hs-about-contacts-1"
                  name="hs-about-contacts-1"
                  rows={4}
                  className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                  placeholder="Tell us about your inquiry..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4 sm:mt-6">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 dark:focus:ring-offset-neutral-800"
              >
                Send Inquiry
              </button>
            </div>

            {/* Footer Text */}
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
