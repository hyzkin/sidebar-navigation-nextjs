"use client";
import {
  ArrowRight,
  BarChartIcon,
  FileCheckIcon,
  PieChartIcon,
  SquareStackIcon,
  UsersIcon,
} from "lucide-react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SidebarLink } from "./sidebar-link";
import { ProjectLink } from "./project-link";
import { ProjectSidebar } from "./project-sidebar";

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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
    setSelectedProject(null);
  };

  return (
    <>
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
        <div className="flex flex-col gap-3">
          <SidebarLink name="Dashboard">
            <BarChartIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </SidebarLink>
          <SidebarLink name="Projects">
            <SquareStackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </SidebarLink>
          <SidebarLink name="Tasks">
            <FileCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </SidebarLink>
          <SidebarLink name="Reporting">
            <PieChartIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </SidebarLink>
          <SidebarLink name="Users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </SidebarLink>
        </div>

        <div className="flex flex-col gap-3">
          <ProjectLink
            name="Virtual Reality"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" />
          </ProjectLink>
          <ProjectLink
            name="Apple Vision Pro"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
          </ProjectLink>
          <ProjectLink name="Porsche" setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700" />
          </ProjectLink>
          <ProjectLink
            name="Secret Project"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700" />
          </ProjectLink>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectSidebar
            selectedProject={selectedProject}
            isOpen={isOpen}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
};
