import { motion } from "framer-motion";
import {
  BoltIcon,
  MousePointerClickIcon,
  PencilIcon,
  Settings2Icon,
  TrendingUpIcon,
  UserIcon,
  Users2Icon,
  XIcon,
} from "lucide-react";
import { SidebarLink } from "./sidebar-link";
import Link from "next/link";

const navVariants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
};

interface ProjectSidebarProps {
  isOpen: boolean;
  selectedProject: string;
  setSelectedProject: (project: string | null) => void;
}

export const ProjectSidebar = ({
  isOpen,
  selectedProject,
  setSelectedProject,
}: ProjectSidebarProps) => {
  return (
    <motion.nav
      variants={navVariants}
      initial={"close"}
      animate={"open"}
      exit={"close"}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className={`h-full flex flex-col gap-8 w-64 absolute bg-neutral-900 ml-0 ${
        isOpen ? "left-64" : "left-20"
      } border-r border-neutral-800 p-5`}
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <h1 className="tracking-wide text-neutral-100 text-lg ">
          {selectedProject}
        </h1>
        <button onClick={() => setSelectedProject(null)}>
          <XIcon className="w-8 stroke-neutral-400" />
        </button>
      </div>
      <input
        placeholder="Search"
        type="text"
        className="px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100"
      />
      <div className="flex flex-col gap-3">
        <SidebarLink name="Progress">
          <TrendingUpIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="Team Members">
          <Users2Icon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="In Review">
          <PencilIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="In Progress">
          <BoltIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="Up Next">
          <MousePointerClickIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="Project Settings">
          <Settings2Icon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </SidebarLink>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="tracking-wide text-neutral-300">Team Members</h1>
        <Link href={"#"} className="flex flex-row gap-3 place-items-center">
          <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70" />
          <p className="tracking-wide text-neutral-400 ">Steve Jobs</p>
        </Link>
        <Link href={"#"} className="flex flex-row gap-3 place-items-center">
          <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70" />
          <p className="tracking-wide text-neutral-400 ">Bill Gates</p>
        </Link>
        <Link href={"#"} className="flex flex-row gap-3 place-items-center">
          <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70" />
          <p className="tracking-wide text-neutral-400 ">Jeff Bezos</p>
        </Link>
      </div>
    </motion.nav>
  );
};
