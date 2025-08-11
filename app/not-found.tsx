import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <h1 className="font-editorial-old ligatures text-6xl italic sm:text-8xl">
            404
          </h1>
          <h2 className="font-editorial-old mt-4 text-xl font-medium italic sm:text-2xl">
            Page introuvable
          </h2>
        </div>

        <p className="mb-12 max-w-md text-lg text-gray-600 sm:text-xl">
          La page que vous recherchez semble avoir disparu. Elle a peut-être été
          déplacée ou n&apos;existe plus.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-black px-6 py-3 transition-colors hover:bg-black hover:text-white"
          >
            <Home size={18} />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
