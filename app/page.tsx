import { Contact } from "@/layout/contact";
import { Me } from "@/layout/me";
import { Projects } from "@/layout/projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <Me />
      <Suspense>
        <Projects />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
