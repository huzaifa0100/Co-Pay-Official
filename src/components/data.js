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


export {benefitOne, benefitTwo, benefitThree};
