import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ScrollMotion = ({ children, width = "fit-content" }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (elementTop < windowHeight * 0.8) {
        setInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollMotion;
