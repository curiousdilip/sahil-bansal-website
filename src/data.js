import {
  IoCodeWorking,
  //   IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import BgImg from "./img/bgimg.jpg";

export const Experience = [
  {
    id: 1,
    date: "March 2023 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Senior Digital Analytics Consultant",
    location: "New Delhi, India",
    description:
      "Working with Adobe Analytics for insights and data lake from AWS to interpret data and create story-driven dashboards for Analytical Consumption.",
  },
  {
    id: 2,
    date: "Jan 2023 - May 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Associate Process Manager",
    location: "Chandigarh India",
    description:
      "Working as an Conversion Rate Optimization Consultant, using tools like Adobe Analytics, Google Analytics, Optimizely, Monetate etc. To increase the conversion rate of websites across multiple regions.",
  },
  {
    id: 3,
    date: "April 2020 - Dec 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Analytics Strategist",
    location: "New Delhi, India",
    description:
      "Worked as a Marketing Strategist for Multiple E-commerce Websites, working on the CRO of multiple websites and building dashboards in data studio and excel. Analyzed google analytics and google ads data to find insights into optimizing the e-commerce business for maximum returns.",
  },
  {
    id: 4,
    date: "Jul 2017 - Dec 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Professional Freelancer",
    location: "New Delhi, India",
    description:
      "Had a successful freelance setup where I worked with 100+ clients to fulfill their marketing and video ads requirements for their dropshipping and conventional business.",
  },
  {
    id: 5,
    date: "Sep 2018 - Nov 2018",
    iconsSrc: <IoCodeWorking />,
    title: "Marketing Specialist",
    location: "New Delhi, New Delhi",
    description:
      "Worked as Marketing Strategist in their Marketing for Google Ad Grants Online Challenge. Handled Google Search Ads, Fb Ads, and Linkedin Ads for their Marketing Profile.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "MPAA",
    imageSrc: BgImg,
    techs: "Wordpress, Digital Ocean",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-textBase text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://www.twitter.com/Infinitmac",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-textBase text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sahil1996/",
  },
  {
    id: 3,
    iconSrc: <IoMail className="text-textBase text-3xl cursor-pointer" />,
    name: "Mail",
    link: "mailto:infinimac@gmail.com",
  },
];
