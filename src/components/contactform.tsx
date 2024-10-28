import React from "react";
import { Container } from "@/components/Container";
import { Faq } from "./Faq";
import { SimpleFaq } from "./SimpleFaq";

export const ContactForm: React.FC = () => {
  return (
    <Container>
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Changed to flex-col on mobile and grid on larger screens */}
          <div className="mt-8 sm:mt-12 grid items-start lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form Card - Left Side */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-gray-800 dark:text-neutral-200">
                Fill in the form
              </h2>

              <form className="space-y-4 sm:space-y-6">
                {/* Name Fields */}
                <div className="grid gap-4 sm:gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        className="py-2.5 sm:py-3 px-3 sm:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className="py-2.5 sm:py-3 px-3 sm:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-2.5 sm:py-3 px-3 sm:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="hs-phone-number-1"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-2.5 sm:py-3 px-3 sm:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Details Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="hs-about-contacts-1"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                    >
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows={4}
                      className="py-2.5 sm:py-3 px-3 sm:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 resize-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                      placeholder="Tell us about your inquiry..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4 sm:mt-6">
                  <button
                    type="submit"
                    className="w-full py-2.5 sm:py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 dark:focus:ring-offset-neutral-800"
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

            {/* Right Side with FAQ - Now aligned to top */}
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-4 sm:p-6 lg:p-8">
              <div className="divide-y divide-gray-200 dark:divide-neutral-800">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-neutral-200 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <SimpleFaq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;