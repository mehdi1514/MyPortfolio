import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

function rehypeExtractMermaid() {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "pre" && node.children && node.children.length > 0) {
        const codeNode = node.children[0];
        if (
          codeNode.tagName === "code" &&
          codeNode.properties &&
          codeNode.properties.className &&
          Array.isArray(codeNode.properties.className) &&
          codeNode.properties.className.includes("language-mermaid")
        ) {
          node.tagName = "div";
          node.properties.className = ["mermaid"];
          node.children = codeNode.children;
        }
      }
    });
  };
}

type Metadata = {
  title: string;
  headline: string;
  summary: string;
  image?: string;
  publishedAt?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExtractMermaid)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getCaseStudy(slug: string) {
  const filePath = path.join("content", "case-studies", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as Metadata,
    slug,
  };
}

async function getAllCaseStudies(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getCaseStudy(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getCaseStudies() {
  return getAllCaseStudies(path.join(process.cwd(), "content", "case-studies"));
}
