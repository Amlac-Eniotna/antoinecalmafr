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

        {/* ✅ Préchargement critique des fonts */}
        <link
          rel="preload"
          href="/fonts/EditorialSans/PPEditorialSans-Ultralight.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/EditorialSans/PPEditorialSans-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* ✅ CSS critique inline pour éviter le FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Styles critiques pour le LCP */
            .font-editorial-sans { 
              font-family: var(--editorial-sans), system-ui, -apple-system, sans-serif;
            }
            .font-editorial-old {
              font-family: var(--editorial-old), Georgia, serif;
            }
            /* Optimisation pour le texte principal */
            .lcp-text {
              font-synthesis: none;
              text-rendering: optimizeSpeed;
            }
          `,
          }}
        />
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
