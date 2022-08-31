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
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Cash within 24 hours",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "More Online Payment Options",
      desc: "Here you can add the next benefit point.",
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
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
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
