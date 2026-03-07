import IconCloud from "./icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "langchain",
  "langgraph",
  "fastapi",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "prisma",
  "vercel",
  "docker",
  "github",
  "mongodb",
  "redis",
  "python",
  "amazonwebservices"
];

export function TechStackCloud() {
  return (
    <div className="size-full max-w-md overflow-hidden bg-background px-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
