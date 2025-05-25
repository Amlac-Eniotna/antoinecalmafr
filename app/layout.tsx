import { editorialOld, editorialSans } from "@/fonts/fonts";
import { Header } from "@/layout/header";
import favicon from "@/public/favicon.ico";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antoine Calma - Portfolio",
  description:
    "Antoine Calma, développeur React passionné par l'UX Design. Découvrez mon portfolio présentant mes projets et compétences en design d'interface. Actuellement à la recherche d'une alternance d'UX Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href={favicon.src} />
      </head>
      <body
        className={`${editorialOld.variable} ${editorialSans.variable} font-editorial-sans font-extralight antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
