import { motion } from "framer-motion";
import React from "react";
import { RiFlutterFill } from "react-icons/ri";

export const mySkills = {
  //fontawesome stylesheet in index.html
  softwareSkills: [
    {
      skill: "JavaScript",
      fontAwesome: "fab fa-js",
    },
    {
      skill: "Python",
      fontAwesome: "fab fa-python",
    },
    {
      skill: "React",
      fontAwesome: "fab fa-react",
    },
    {
      skill: "HTML",
      fontAwesome: "fab fa-html5",
    },
    {
      skill: "CSS",
      fontAwesome: "fab fa-css3-alt",
    },
    {
      skill: "Sass",
      fontAwesome: "fab fa-sass",
    },

    {
      skill: "Databases",
      fontAwesome: "fas fa-database",
    },
    {
      skill: "Node.js",
      fontAwesome: "fab fa-node-js",
    },
    {
      skill: "Firebase",
      fontAwesome: "fas fa-fire",
    },
    {
      skill: "Git",
      fontAwesome: "fab fa-git-alt",
    },
  ],
};

export default function SoftwareSkill() {
  return (
    <div>
      <ul className="developer-icons">
        {mySkills.softwareSkills.map((skills, i) => {
          return (
            <motion.li
              viewport={{ once: true }}
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "easein", duration: 1, delay: i * 0.15 }}
              key={i}
              className="skill"
              name={skills.skill}
            >
              <i className={skills.fontAwesome}></i>
              <p>{skills.skill}</p>
            </motion.li>
          );
        })}
        <motion.li
          viewport={{ once: true }}
          initial={{ opacity: 0.1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easein", duration: 1, delay: 1.5 }}
          className="skill"
          name="Flutter"
        >
          <RiFlutterFill className="icon" />

          <p className="text">Flutter</p>
        </motion.li>

        {/* <div className="divider-skills"></div> */}
      </ul>
    </div>
  );
}
