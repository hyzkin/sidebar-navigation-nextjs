"use client";
import { ArrowRight } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const iconVariants = {
  close: {
    rotate: 360,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    rotate: 180,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();
  const iconControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      iconControls.start("open");
    } else {
      containerControls.start("close");
      iconControls.start("close");
    }
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial={"close"}
      animate={containerControls}
      className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
        <motion.button
          variants={iconVariants}
          className="p-1 rounded-full flex"
          onClick={toggleSidebar}
        >
          <ArrowRight className="w-8 h-8 stroke-neutral-200 stroke-1" />
        </motion.button>
      </div>
    </motion.nav>
  );
};
