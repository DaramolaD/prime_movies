/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { BiCameraMovie } from "react-icons/bi";

import { MdSearch, MdHome, MdAssignmentInd } from "react-icons/md";

import { RiMovie2Line, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav.scss";

const routesArray = [
  {
    title: "Home",
    path: "/",
    pathRegex: /^\/$/,
    icon: <MdHome />,
  },
  {
    title: "Search",
    path: "/search",
    pathRegex: /^\/search/,
    icon: <MdSearch />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    pathRegex: /^\/dashboard/,
    icon: <MdAssignmentInd />,
  },
];

export default function Nav() {
  return (
    <nav className="NavBar">
      <div className="logo">
        <p>Prime_Movies</p>
      </div>
      <div className="linksContainer">
        {routesArray.map((route) => (
          <Link
            key={route.title}
            href={route.path}
            className={route.pathRegex.test(usePathname()) ? "active" : ""}
          >
            <span className="link__icon">{route.icon}</span>
            <span className="link__title">{route.title}</span>
          </Link>
        ))}

        <a href="https://github.com/daramolad/prime_movies_task_test" className="source">
          <span className="link__icon">
            <RiGithubFill />
          </span>
          <span className="link__title">View Source</span>
        </a>
      </div>
    </nav>
  );
}
