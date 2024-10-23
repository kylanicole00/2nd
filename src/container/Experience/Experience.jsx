import { React } from "react";
import { motion } from "framer-motion";
import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import ReusableButton from "../../components/Buttons/ReusableButton";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const experiences = [
    {
      date: "",
    
      title: "About me",
      subtitle: "Kyla Nicole Gilbalega",
      description:
        "Hi, I'm a 20-year-old from Santa Barbara, Iloilo. I am currently pursuing a Bachelor's degree in Information Technology, which allows me to explore my passion for tech and develop skills in programming, I Ienjoy programming and have a general interest in emerging technology and IT. I find it rewarding to apply technical skills to solve problems, whether they're big or small.",
    },
    {
      date: "",
      
      title: "",
      subtitle: "",
      description:
        "I'm not currently looking for a new job, but I always appreciate connecting with people who share similar interests. This website is a space where I share some of the programming projects I've worked on and other tech-related activities. Feel free to take a look around and get in touch if you'd like to chat or collaborate on something interesting. Below, you'll find some of the technologies and projects I've worked with.",
    },
   
  
  
  ];
  return (
    <div className="container-experience" id="experience">
      <motion.div
        className="container"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
        <h1>About</h1>
        <VerticalTimeline lineColor={"var(--third-color)"}>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                border: "1px solid var(--third-color)",
                background: "var(--background-color)",
                color: "#fff",
                borderColor: "var(--third-color)",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--third-color)",
              }}
              date={exp.date}
              iconStyle={{
                background: "var(--third-color)",
                color: "var(--background-color)",
                border: "1px solid var(--third-color)",
              }}
              icon={
                <FontAwesomeIcon
                  icon={exp.icon}
                  className="icon"
                  title={"LinkedIn"}
                />
              }
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "var(--secondary-color)" }}
              >
                {exp.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "var(--third-color)" }}
              >
                {exp.subtitle}
              </h4>
              <p style={{ color: "var(--third-color)" }}>{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <motion.div
          className="button-container"
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
        >
          <ReusableButton
            className="button"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/#inbox",
                "_blank"
              )
            }
          >
            About
          </ReusableButton>
          <ReusableButton
            className="button"
            onClick={() =>
              (window.location = "kylanicolegilbalegalolo29@gmail.com")
            }
          >
            Contact
          </ReusableButton>
        </motion.div>
        <div className="divider-experience"></div>
      </motion.div>
    </div>
  );
};

export default Experience;
