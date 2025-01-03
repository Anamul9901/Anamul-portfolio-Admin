"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FaHome } from "react-icons/fa";
import {
  MdSpaceDashboard,
} from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { useAppSelector } from "@/src/redux/hooks";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import React from "react";

// Loading component (you can customize this as needed)
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <span>Loading...</span>
  </div>
);

const Sidebar = () => {
  const searchParams = useSearchParams();
  const queryValue = searchParams?.get("key");
  const router = useRouter();
  const {user} = useAppSelector(selectCurrentUser);


  return (
    <div className="min-h-screen fixed h-full flex bg-gray-900">
      {/* Dashboard Sidebar */}
      <div className="md:w-64 w-20 bg-gradient-to-b from-purple-900 to-blue-900 pt-6 shadow-2xl relative">
        <ul className="menu flex flex-col items-center md:items-start p-4">
          {/* Logo */}
          <Link href="/dashboard?key=dashboard">
            <div className="flex justify-center mb-8 hover:scale-105 transition-all duration-300">
              <img
                className="md:w-2/6 w-12 rounded-full border border-purple-500 shadow-lg"
                src="https://i.ibb.co.com/61WySQq/pngwing-com-3.png"
                alt="Logo"
              />
            </div>
          </Link>

          <hr className="border-purple-500 w-full mb-4 opacity-40" />

          {/* Dashboard */}
          <li className="w-full mb-2">
            <Link href="/dashboard?key=dashboard">
              <div
                className={`block px-2 py-4 text-white text-center md:text-left rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl ${
                  queryValue === "dashboard"
                    ? "bg-purple-700 shadow-xl text-[#ff4a4afd] font-extrabold"
                    : ""
                }`}
              >
                <span className="material-icons md:hidden">
                  <MdSpaceDashboard />
                </span>
                <span className="hidden md:inline-block ml-2">Dashboard</span>
              </div>
            </Link>
          </li>

          {/* recent view project */}
          <li className="w-full mb-2">
            <Link href="/dashboard/projects?key=projects">
              <div
                className={`block px-2 py-4 text-white text-center md:text-left rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl ${
                  queryValue === "projects"
                    ? "bg-purple-700 shadow-xl text-[#ff4a4afd] font-extrabold"
                    : ""
                }`}
              >
                <span className="material-icons md:hidden">
                  <IoFastFood />
                </span>
                <span className="hidden md:inline-block ml-2">Projects</span>
              </div>
            </Link>
          </li>

          {/* recent view blogs */}
          <li className="w-full mb-2">
            <Link href="/dashboard/blogs?key=blogs">
              <div
                className={`block px-2 py-4 text-white text-center md:text-left rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl ${
                  queryValue === "blogs"
                    ? "bg-purple-700 shadow-xl text-[#ff4a4afd] font-extrabold"
                    : ""
                }`}
              >
                <span className="material-icons md:hidden">
                  <IoFastFood />
                </span>
                <span className="hidden md:inline-block ml-2">Blogs</span>
              </div>
            </Link>
          </li>

          {/* recent view skills */}
          <li className="w-full mb-2">
            <Link href="/dashboard/skills?key=skills">
              <div
                className={`block px-2 py-4 text-white text-center md:text-left rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl ${
                  queryValue === "skills"
                    ? "bg-purple-700 shadow-xl text-[#ff4a4afd] font-extrabold"
                    : ""
                }`}
              >
                <span className="material-icons md:hidden">
                  <IoFastFood />
                </span>
                <span className="hidden md:inline-block ml-2">Skills</span>
              </div>
            </Link>
          </li>

          {/* recent view skills */}
          <li className="w-full mb-2">
            <Link href="/dashboard/experience?key=experience">
              <div
                className={`block px-2 py-4 text-white text-center md:text-left rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl ${
                  queryValue === "experience"
                    ? "bg-purple-700 shadow-xl text-[#ff4a4afd] font-extrabold"
                    : ""
                }`}
              >
                <span className="material-icons md:hidden">
                  <IoFastFood />
                </span>
                <span className="hidden md:inline-block ml-2">Experience</span>
              </div>
            </Link>
          </li>

          <hr className="border-purple-500 w-full mb-4 opacity-40" />

          {/* Home */}
          <li className="w-full mb-2">
            <Link href="/">
              <div className="block px-2 py-4 text-white text-center md:text-left rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl">
                <span className="material-icons md:hidden">
                  <FaHome />
                </span>
                <span className="hidden md:inline-block ml-2">Home</span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-lg"></div>
      </div>
    </div>
  );
};

// Wrap Sidebar with Suspense
const SidebarWithSuspense = () => (
  <Suspense fallback={<Loading />}>
    <Sidebar />
  </Suspense>
);

export default SidebarWithSuspense;
