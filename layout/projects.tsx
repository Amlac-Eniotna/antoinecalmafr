import projects from "@/data/projects/projects.json";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className="relative flex min-h-dvh w-full snap-start snap-always items-center justify-center px-4 sm:py-0">
      <div className="mt-24 mb-24 sm:mb-0">
        <ul className="m-auto grid max-w-3xl grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
          {projects.reverse().map((project, i) => {
            return (
              <li
                key={i}
                className="card relative flex size-full overflow-hidden rounded-xl border"
              >
                <div className="absolute -z-10 size-full bg-white" />
                <Link
                  href={project.url}
                  target="_blank"
                  className="relative size-full px-5 py-2.5"
                >
                  <div className="relative -z-2">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="mb-1 text-xs">{project.date}</p>
                    <ul className="list-inside list-disc text-xs">
                      {project.technologie.map((technologie, i) => (
                        <li key={i}>{technologie}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
                <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute -bottom-8 m-auto h-16 w-[1px] bg-black sm:-bottom-16 sm:h-32"></div>
    </section>
  );
};
