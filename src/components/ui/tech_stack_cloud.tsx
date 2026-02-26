import IconCloud from "./icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "langchain",
  "fastapi",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "github",
  "mongodb",
  "redis",
  "python",
];

export function TechStackCloud() {
  return (
    <div className="size-full max-w-md overflow-hidden bg-background px-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
