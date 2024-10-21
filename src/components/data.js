import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Reduce Patient No-Shows",
  desc: "Automated SMS reminders keep patients informed about appointments, significantly reducing no-show rates.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Improved Attendance Rates",
      desc: "More patients show up for their appointments.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Enhanced Patient Satisfaction",
      desc: "Patients feel valued with proactive reminders.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Reduced Administrative Workload",
      desc: "Less time spent on rescheduling and follow-ups.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Increase Revenue with Paid Appointments",
  desc: "Implement a paid appointment model to streamline payments and secure commitment from patients",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Increased Cash Flow",
      desc: "Upfront payments improve financial stability.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Higher Patient Commitment",
      desc: "Patients are more likely to attend when they pay in advance.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Flexibility in Payment Options",
      desc: "Various payment methods make transactions easier.",
      icon: <SunIcon />,
    },
  ],
};
const benefitThree = {
  title: "AI-Driven SMS Conversations",
  desc: "Engage patients instantly through AI-powered SMS, allowing for real-time interaction without signup.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Quick Responses to Patient Inquiries",
      desc: "Immediate answers enhance patient experience.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improved Patient Engagement",
      desc: "Real-time communication fosters loyalty.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Increased Efficiency in Appointment Management",
      desc: "Automated scheduling reduces admin tasks.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};
const benefitFour = {
  title: "Pre-Visit Collection",
  desc: "Streamline pre-visit collections to ensure timely payments and reduce billing errors.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reduced Billing Complications",
      desc: "Fewer errors in financial transactions.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Improved Cash Flow Management",
      desc: "Timely collections support financial planning.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Increased Patient Compliance with Payment Policies",
      desc: "Clear communication of fees leads to better compliance.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo, benefitThree, benefitFour};
