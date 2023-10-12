import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import logistics from "../../../Assets/logistics.png";
import wineProject from "../../../Assets/wineProject.png";
import portfolio from "../../../Assets/portfolio.png";

export const timelineElements = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Hyderabad",
    img: logistics,
    demoButton: "Demo",
    gitButton: "Git",
    description:
      "The Logistics Project developed using Material Ui, React, React-redux, @reduxjs/toolkit.",
    date: "2022",
    link: "",
    gitLink: "",
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#5ce1f2" }} />,
    message: "Desktop View is preffered",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Hyderabad",
    img: wineProject,
    demoButton: "Demo",
    gitButton: "Git",
    description:
      "The E-commerce project using React,React-redux,@reduxjs/toolkit.",
    date: "2022",
    link: "",
    gitLink: "",
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#5ce1f2" }} />,
    message: "Desktop View is preffered",
  },
  {
    id: 3,
    title: "FrontEnd Developer",
    location: "Hyderabad",
    img: portfolio,
    message: "You are already viewing the portfolio",
    description:
      "The Portfolio developed using the Materal Ui,Css Modules, & React.",
    date: "2022",
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#5ce1f2" }} />,
    gitLink: "",
    gitButton: "Git",
  },
  // {
  //   id: 4,
  //   title: "Oak Ridge College",
  //   location: "South Warren, Geshington",
  //   description:
  //     "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
  //   buttonText: "Course Certificate",
  //   date: "September 2011",
  //   icon: "school",
  // },
  // {
  //   id: 5,
  //   title: "Hawking College",
  //   location: "Skystead, Craonia",
  //   description:
  //     "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
  //   buttonText: "College Projects",
  //   date: "2007 - 2011",
  //   icon: "school",
  // },
  // {
  //   id: 6,
  //   title: "Marble Hills Grammar School",
  //   location: "Dragontail, Ascana",
  //   description:
  //     "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
  //   date: "2003 - 2007",
  //   icon: "school",
  // },
];
