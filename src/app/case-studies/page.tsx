import BlurFade from "@/components/magicui/blur-fade";
import { getCaseStudies } from "@/data/case-studies";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Case Studies",
  description: "A collection of my case studies.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Case Studies</h1>
      </BlurFade>
      {caseStudies
        .sort((a, b) => {
          if (
            a.metadata.publishedAt &&
            b.metadata.publishedAt &&
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((study, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={study.slug}>
            <Link
              className="group flex flex-col space-y-1 mb-4"
              href={`/case-studies/${study.slug}`}
            >
              <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <p className="tracking-tight">{study.metadata.title}</p>
                  <ChevronRightIcon className="size-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <p className="h-6 text-xs text-muted-foreground">
                  {study.metadata.headline}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
