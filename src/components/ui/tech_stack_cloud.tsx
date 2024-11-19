import IconCloud from "./icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
  "redis",
  "apachekafka",
  "python",
  "cplusplus",
  "java",
  "angular",
];

export function TechStackCloud() {
  return (
    <div className="size-full max-w-md overflow-hidden bg-background px-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
