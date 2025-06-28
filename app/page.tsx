import { Contact } from "@/layout/contact";
import { Me } from "@/layout/me";
import { Projects } from "@/layout/projects";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <Me />
      <Projects />
      <Contact />
    </main>
  );
}
