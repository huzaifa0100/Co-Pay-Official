import React from "react";
import { Container } from "@/components/Container";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/button";
import { plans } from "@/components/plans";
import Link from "next/link";

export const Pricing = () => {
  return (
    <Container>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Pricing
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Choose the plan that fits your needs and scale as your business
            grows.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col border text-center rounded-xl p-8 dark:border-neutral-800 h-full ${
                plan.isPopular
                  ? "border-2 border-blue-600 shadow-xl dark:border-blue-700"
                  : "border-gray-200"
              }`}
            >
              {plan.isPopular && (
                <p className="mb-3">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                    Most popular
                  </span>
                </p>
              )}
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                {plan.title}
              </h4>
              <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                {plan.price}
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                {plan.description}
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-x-2">
                    <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
                    <span className="text-gray-800 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.isPopular ? "primary" : "outlined"}
                size="large"
                className="w-full mt-5"
              >
                Sign Up
              </Button>
            </div>
          ))}
        </div>

        {/* <div className="mt-20 lg:mt-32">
          <div className="lg:text-center mb-10 lg:mb-20">
            <h3 className="text-2xl font-semibold dark:text-white">
              Compare plans
            </h3>
          </div>

          <div className="space-y-24 lg:hidden">
            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  Free
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  Startup
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  Team
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>

                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  Enterprise
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          <div className="hidden lg:block">
            <table className="w-full h-px">
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead className="sticky top-0 inset-x-0 bg-white dark:bg-neutral-900">
                <tr>
                  <th
                    className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                    scope="col"
                  >
                    <span className="sr-only">Feature by</span>
                    <span className="dark:text-white">Plans</span>
                  </th>

                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Free
                  </th>
                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Startup
                  </th>
                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Team
                  </th>
                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <tr>
                  <th
                    className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800 dark:text-white"
                    colSpan={5}
                    scope="colgroup"
                  >
                    Financial data
                  </th>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800 dark:text-white"
                    colSpan={5}
                    scope="colgroup"
                  >
                    On-chain data
                  </th>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800 dark:text-white"
                    colSpan={5}
                    scope="colgroup"
                  >
                    Social data
                  </th>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </Container>
  );
};
