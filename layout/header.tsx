import { BookOpenText, NotebookTabs } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="font-editorial-old ligatures fixed z-10 w-full py-4 text-left italic backdrop-blur-sm sm:text-center">
      <div className="relative m-auto max-w-3xl px-4">
        <h1 className="text-2xl whitespace-nowrap sm:text-3xl">
          Antoine Calma
        </h1>
        <h2 className="text-xs whitespace-nowrap sm:text-xl">
          Développeur NextJS / UX Designer
        </h2>
        <div className="absolute top-0 flex size-full items-end-safe justify-end-safe pr-5">
          {/* <Link
            href={"/blog"}
            className="flex cursor-pointer flex-col items-center justify-center p-2"
          >
            <BookOpenText />
            <span className="text-center text-[10px]">Blog</span>
          </Link> */}
          <p className="flex flex-col items-center justify-center p-2 text-neutral-400">
            <BookOpenText />
            <span className="text-center text-[10px]">Blog</span>
          </p>
          <Link
            href="/#contact"
            className="flex cursor-pointer flex-col items-center justify-center p-2"
          >
            <NotebookTabs />
            <span className="text-center text-[10px]">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
