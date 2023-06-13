import React, { useContext } from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden ">
            <img src={WomanImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              orem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              vero eligendi enim magni nam? Quis provident animi aperiam,commodi
              minima aliquid vero totam alias earum harum quos! Harum, dolore
              recusandae,
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              eaque nam totam quia dolores fuga perspiciatis corporis blanditiis
              officia eos?
            </p>
            <Link to={"/portfolio"} className="btn">
              view my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
