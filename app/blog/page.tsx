import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Antoine Calma",
  description:
    "Articles sur le développement Next.js, l'UX Design et les technologies web modernes.",
};

const blogPosts = [
  {
    id: "theorie-de-la-gestalt",
    title: "Théorie de la Gestalt en UX Design",
    excerpt:
      "Découvrez les principes de la Gestalt et comment les appliquer pour améliorer l'expérience utilisateur.",
    date: "2025-08-11",
    readTime: "5 min",
    tags: ["UX Design"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 pt-36 pb-24 sm:px-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center space-y-8 text-center">
          <h1 className="font-editorial-old mb-6 text-4xl italic sm:text-5xl">
            Blog
          </h1>
          <div className="mb-8 h-[1px] w-16 bg-black" />
        </section>

        {/* Blog Posts Grid */}
        <section className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg sm:p-8"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="ligatures mb-3 text-2xl font-medium group-hover:text-gray-700 sm:text-3xl">
                  {post.title}
                </h2>

                <p className="ligatures mb-4 text-gray-700 sm:text-lg">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors group-hover:bg-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </section>

        {/* Back to Home */}
        <section className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-lg font-medium transition-colors hover:text-gray-700"
          >
            ← Retour à l&apos;accueil
          </Link>
        </section>
      </div>
    </main>
  );
}
