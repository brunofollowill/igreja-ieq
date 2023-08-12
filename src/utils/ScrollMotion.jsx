import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ScrollMotion = ({ children, width = "fit-content" }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const elementBottom = ref.current.getBoundingClientRect().bottom;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Verifica se qualquer parte do elemento está visível na janela
      if (elementTop < windowHeight && elementBottom > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Verifica o estado inicial quando o componente é montado
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 }, // Mantém a posição vertical original
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
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
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollMotion;
