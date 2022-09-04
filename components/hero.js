import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/heroImg.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap w-5/6 xs:w-1/2">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Sell your Gold at Best Market Price in Chennai.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We buy Used gold, Second hand Gold, Scrap Gold, Coins, bars, bullions, Old Jewellery. If you want to sell your Gold, Schedule a free Call Consultation with us and get instant spot cash.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#myForm"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-yellow-600 rounded-md ">
                Get Free Consultation
              </a>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

function AmazonLogo() {
  return (
   <Image src="/img/Trust.png" height={100} width={50}/>
  );
}

function MicrosoftLogo() {
  return (
    <Image src="/img/Trust.png" height={100} width={50}/>
  );
}

function NetflixLogo() {
  return (
    <Image src="/img/Trust.png" height={100} width={50}/>
  );
}

function SonyLogo() {
  return (
    <Image src="/img/Trust.png" height={100} width={50}/>
  );
}

function VerizonLogo() {
  return (
    <Image src="/img/Trust.png" height={100} width={50}/>
  );
}
