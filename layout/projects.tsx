"use client";

import projects from "@/data/projects/projects.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = {
  title: string;
  url: string;
  technologie: string[];
  date: string;
  image?: string;
  description?: string;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (project: Project, index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="relative flex min-h-dvh w-full snap-start snap-always items-center justify-center px-4 sm:py-0">
      <div className="mt-24 mb-24 sm:mb-0">
        <ul className="m-auto grid max-w-3xl grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
          {projects.reverse().map((project, i) => {
            return (
              <motion.li
                key={i}
                layoutId={`project-${i}`}
                className="card relative flex size-full cursor-pointer overflow-hidden rounded-xl border"
                onClick={() => openModal(project, i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -z-10 size-full bg-white" />
                <motion.div
                  className="relative size-full px-5 py-2.5"
                  layoutId={`project-content-${i}`}
                >
                  <div className="relative -z-2">
                    <motion.h3
                      className="font-medium"
                      layoutId={`project-title-${i}`}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="mb-1 text-xs"
                      layoutId={`project-date-${i}`}
                    >
                      {project.date}
                    </motion.p>
                    <motion.ul
                      className="list-inside list-disc text-xs"
                      layoutId={`project-tech-${i}`}
                    >
                      {project.technologie.map((technologie, j) => (
                        <li key={j}>{technologie}</li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
                <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className="absolute -bottom-8 m-auto h-16 w-[1px] bg-black sm:-bottom-16 sm:h-32"></div>

      <AnimatePresence>
        {selectedProject && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={handleOverlayClick}
          >
            <motion.div
              layoutId={`project-${selectedIndex}`}
              className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl border bg-white"
            >
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={closeModal}
                  className="card absolute top-4 right-4 z-10 cursor-pointer overflow-hidden rounded-xl border border-black bg-white text-black hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
                </motion.button>

                {selectedProject.image && (
                  <motion.div
                    className="relative h-48 w-full overflow-hidden rounded-t-xl"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                  </motion.div>
                )}

                <motion.div
                  className="border-b p-6"
                  layoutId={`project-content-${selectedIndex}`}
                >
                  <motion.h2
                    className="text-2xl font-medium text-black"
                    layoutId={`project-title-${selectedIndex}`}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.p
                    className="text-xs text-black"
                    layoutId={`project-date-${selectedIndex}`}
                  >
                    {selectedProject.date}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProject.description && (
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h4 className="mb-2 font-medium text-black">
                        Description:
                      </h4>
                      <p className="text-sm leading-relaxed text-black">
                        {selectedProject.description}
                      </p>
                    </motion.div>
                  )}

                  <div className="mb-6">
                    <h4 className="mb-3 font-medium text-black">
                      Technologies utilisées:
                    </h4>
                    <motion.ul
                      className="list-inside list-disc text-xs text-black"
                      layoutId={`project-tech-${selectedIndex}`}
                    >
                      {selectedProject.technologie.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </motion.ul>
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href={selectedProject.url}
                      target="_blank"
                      className="card relative z-1 block w-full cursor-pointer overflow-hidden rounded-xl border px-4 py-2 text-center font-medium text-black"
                    >
                      <span className="relative -z-2">Voir le projet</span>
                      <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
                    </Link>
                    {selectedProject.url.includes("github.com") ? null : (
                      <Link
                        href="#"
                        target="_blank"
                        className="card relative z-1 block w-full cursor-pointer overflow-hidden rounded-xl border px-4 py-2 text-center font-medium text-black"
                      >
                        <span className="relative -z-2">GitHub</span>
                        <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
                      </Link>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
