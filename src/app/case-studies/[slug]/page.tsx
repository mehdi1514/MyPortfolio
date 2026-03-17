import { getCaseStudies, getCaseStudy } from "@/data/case-studies";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MermaidInit from "@/components/mermaid-init";

export async function generateStaticParams() {
  const posts = await getCaseStudies();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getCaseStudy(params.slug);

  let {
    title,
    headline,
    summary: description,
    image,
    publishedAt: publishedTime,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/case-studies/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getCaseStudy(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="case-study">
      <MermaidInit />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.metadata.title,
            alternativeHeadline: post.metadata.headline,
            datePublished: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/case-studies/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.metadata.headline}
        </p>
      </div>
      <article
        className="prose dark:prose-invert max-sm:pb-20"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
