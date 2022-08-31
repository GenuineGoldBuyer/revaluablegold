import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-yellow-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-yellow-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is there any service charge?",
    answer: "The service is free of charge and you get best rate for your Gold.",
  },
  {
    question: "Will you buy gold of purity 9k, 10k, 12k, 14k, 18k?",
    answer: "No, we only buy gold of 24k and 22k purity.",
  },
  {
    question: "Do you buy Gold bullions, Gold Bars, Gold coins ",
    answer:
      "Yes we buy Gold in any form.",
  },
  {
    question: "What is your satisfaction guarantee? ",
    answer:
      "We have 20+ years experienced trusted professional who value Honesty and integrity and Quality of service over cheap and low rated service",
  },
];
