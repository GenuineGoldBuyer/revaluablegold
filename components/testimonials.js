import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.png";
import userTwoImg from "../public/img/user2.jpeg";
import userThreeImg from "../public/img/user3.jpeg";

export default function Testimonials() {
  return (
    <Container >
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Rate they provide are really <Mark>high</Mark>
              than the other buyers.
            </p>

            <Avatar
              image={userOneImg}
              name="Malini"
              title="Stock Market Investor"
            />
          </div>
        </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I like the <Mark>Honesty and Integrity</Mark>
              of the gold buyer. He is straight to point.
            </p>
            <Avatar
              image={userTwoImg}
              name="Evelin"
              title="Jewellery Shop Owner"
            />
          </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              I was able to buy a property with the help of <Mark>Revaluablegold.money</Mark>within 3 hours.
            </p>

            <Avatar
              image={userThreeImg}
              name="Sheena"
              title="Passionate Gold Buyer"
            />
          </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-yellow-800 bg-yellow-100 rounded-md ring-yellow-100 ring-4 dark:ring-yellow-900 dark:bg-yellow-900 dark:text-yellow-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
