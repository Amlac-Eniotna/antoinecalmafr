"use client";

import projects from "@/data/projects/projects.json";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const reversedProjects = [...projects].reverse();

  return (
    <section className="relative flex min-h-dvh w-full snap-start snap-always items-center justify-center px-4 sm:py-0">
      <div className="mt-24 mb-24 sm:mb-0">
        <ul className="m-auto grid max-w-3xl grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
          {reversedProjects.map((project, i) => (
            <motion.li
              key={i}
              layoutId={`project-${projects.length - 1 - i}`}
              className="card relative flex size-full cursor-pointer overflow-hidden rounded-xl border"
              onClick={() => openModal(projects.length - 1 - i)}
            >
              <div className="absolute -z-10 size-full bg-white" />
              <motion.div
                className="relative size-full px-5 py-2.5"
                layoutId={`project-content-${projects.length - 1 - i}`}
              >
                <div className="relative -z-2">
                  <motion.h3
                    className="font-medium"
                    layoutId={`project-title-${projects.length - 1 - i}`}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="mb-1 text-xs"
                    layoutId={`project-date-${projects.length - 1 - i}`}
                  >
                    {project.date}
                  </motion.p>
                  <motion.ul
                    className="list-inside list-disc text-xs"
                    layoutId={`project-tech-${projects.length - 1 - i}`}
                  >
                    {project.technologie.map((technologie, j) => (
                      <li key={j}>{technologie}</li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
              <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-8 m-auto h-16 w-[1px] bg-black sm:-bottom-16 sm:h-32"></div>

      <AnimatePresence>
        {selectedIndex !== null && (
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
                  className="absolute top-4 right-4 z-10 cursor-pointer rounded-xl border border-black bg-white p-2 text-black transition-colors hover:bg-black hover:text-white"
                >
                  <X className="h-4 w-4" />
                </motion.button>

                {projects[selectedIndex].image && (
                  <motion.div
                    className="relative h-48 w-full overflow-hidden rounded-t-xl"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={projects[selectedIndex].image!}
                      alt={projects[selectedIndex].title}
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
                    {projects[selectedIndex].title}
                  </motion.h2>
                  <motion.p
                    className="text-xs text-black"
                    layoutId={`project-date-${selectedIndex}`}
                  >
                    {projects[selectedIndex].date}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {projects[selectedIndex].description && (
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
                        {projects[selectedIndex].description}
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
                      {projects[selectedIndex].technologie.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href={projects[selectedIndex].url}
                      target="_blank"
                      className="card group relative z-1 block w-full cursor-pointer overflow-hidden rounded-xl border px-4 py-2 text-center font-medium text-black"
                    >
                      <span className="relative -z-2">Voir le projet</span>
                      <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
                    </Link>
                    {projects[selectedIndex].github && (
                      <Link
                        href={projects[selectedIndex].github}
                        target="_blank"
                        className="card group relative z-1 block w-full cursor-pointer overflow-hidden rounded-xl border px-4 py-2 text-center font-medium text-black"
                      >
                        <span className="relative -z-2">GitHub</span>
                        <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
