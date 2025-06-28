import localFont from "next/font/local";

// export const editorialOld = localFont({
//   src: [
//     {
//       path: "./EditorialOld/PPEditorialOld-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-ThinItalic.woff2",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-Ultralight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-UltralightItalic.woff2",
//       weight: "200",
//       style: "italic",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-Italic.woff2",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-BoldItalic.woff2",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-Heavy.woff2",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "./EditorialOld/PPEditorialOld-HeavyItalic.woff2",
//       weight: "900",
//       style: "italic",
//     },
//   ],
//   variable: "--editorial-old",
//   display: "swap",
//   preload: true,
// });

// export const editorialSans = localFont({
//   src: [
//     {
//       path: "./EditorialSans/PPEditorialSans-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-ThinItalic.woff2",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-Ultralight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-UltralightItalic.woff2",
//       weight: "200",
//       style: "italic",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-MediumItalic.woff2",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-Ultrabold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-UltraboldItalic.woff2",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-Heavy.woff2",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "./EditorialSans/PPEditorialSans-HeavyItalic.woff2",
//       weight: "900",
//       style: "italic",
//     },
//   ],
//   variable: "--editorial-sans",
//   display: "swap",
//   preload: true,
// });

// ✅ Chargez seulement les poids essentiels
export const editorialSans = localFont({
  src: [
    {
      path: "./EditorialSans/PPEditorialSans-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./EditorialSans/PPEditorialSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--editorial-sans",
  display: "swap", // ✅ Déjà optimal
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"], // ✅ Fallback système
});

export const editorialOld = localFont({
  src: [
    {
      path: "./EditorialOld/PPEditorialOld-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./EditorialOld/PPEditorialOld-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--editorial-old",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"], // ✅ Fallback système
});
