export const Me = () => {
  return (
    <section className="relative flex min-h-dvh w-full snap-start snap-always items-center justify-center py-24">
      {/* ✅ Ajout de la classe lcp-text pour l'optimisation */}
      <p className="lcp-text m-auto max-w-3xl px-6 text-left text-lg sm:px-4 sm:text-xl">
        Développeur React passionné par l&apos;UX design, je cherche une
        alternance pour me spécialiser dans ce domaine. Curieux et créatif, je
        combine logique et esthétique dans mes projets. En dehors du code, je
        fais de l&apos;escalade, du violon et de la guitare.
      </p>
      {/* ✅ Lazy loading pour l'élément décoratif non critique */}
      <div
        className="absolute -bottom-8 m-auto h-16 w-[1px] bg-black sm:-bottom-16 sm:h-32"
        style={{ contentVisibility: "auto" }}
      />
    </section>
  );
};
