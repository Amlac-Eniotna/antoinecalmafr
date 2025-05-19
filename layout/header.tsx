import { NotebookTabs } from "lucide-react";

export const Header = () => {
  return (
    <header className="font-editorial-old ligatures fixed z-10 w-full py-4 text-center italic backdrop-blur-sm">
      <div className="relative m-auto max-w-3xl px-4">
        <h1 className="text-2xl whitespace-nowrap sm:text-3xl">
          Antoine Calma
        </h1>
        <h1 className="text-base whitespace-nowrap sm:text-xl">
          Développeur NextJS / UX Designer
        </h1>
        <div className="absolute top-0 flex size-full items-end-safe justify-end-safe pr-5">
          {/* <a className="flex cursor-pointer flex-col items-center justify-center p-2">
            <BookOpenText />
            <span className="text-center text-[10px]">Blog</span>
          </a> */}
          <a
            href="#contact"
            className="flex cursor-pointer flex-col items-center justify-center p-2"
          >
            <NotebookTabs />
            <span className="text-center text-[10px]">Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};
