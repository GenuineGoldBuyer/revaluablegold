import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What we pay",
  desc: "We sell gold at online rate and we can make an online transaction and also bank transaction.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Cash within 24 hours",
      desc: "We guarantee cash back within 24 hours.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "More Online Payment Options",
      desc: "Google pay, Phone pe, Paypal and bank transaction available.",
      icon: <ChartSquareBarIcon />,
    },
    ,
    {
      title: "High-Rated Customer satisfied services",
      desc: "Here customers are much satified with the rate given and the honesty and integrity given.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "100% Satisfaction Guarantee and Free Return",
      desc: "We safely return your commodity if you are not 100% satisfied.",
      icon: <CursorClickIcon />,
    }

  ],
};

const benefitTwo = {
  title: "How it works",
  desc: "We work all 7 days and 24 hours.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Customer Enquiry form",
      desc: "Fill the WhatsApp number, Quanity of Gold you want to sell and Your Location in the Customer Enquiry Form",
      icon: <CursorClickIcon />,
    },
    {
      title: "WhatsApp Chat",
      desc: "We will send you the best quotation price",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Gold Commodity Weighed",
      desc: "We come to your location and test and weigh the gold and give its price",
      icon: <AdjustmentsIcon />,
    }
  ],
};

export { benefitOne, benefitTwo };
