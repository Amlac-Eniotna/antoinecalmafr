import { Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4"
    >
      <p className="mb-1 w-fit text-center break-words text-gray-800">
        contact@antoinecalma.fr
      </p>
      <div className="flex w-fit gap-1.5 border-t border-b p-1">
        <a
          className="text-gray-800 hover:text-gray-500"
          href="https://github.com/Amlac-Eniotna"
        >
          <span className="sr-only">GitHub</span>
          <Github size={20} />
        </a>
        <a
          className="text-gray-800 hover:text-gray-500"
          href="https://www.linkedin.com/in/antoine-calma/"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  );
};
