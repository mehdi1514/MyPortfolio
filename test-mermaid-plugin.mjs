
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

function rehypeExtractMermaid() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "pre" && node.children && node.children.length > 0) {
        const codeNode = node.children[0];
        if (
          codeNode.tagName === "code" &&
          codeNode.properties &&
          codeNode.properties.className &&
          Array.isArray(codeNode.properties.className) &&
          codeNode.properties.className.includes("language-mermaid")
        ) {
          // Found a mermaid block!
          // Replace the pre with a div.mermaid
          node.tagName = "div";
          node.properties.className = ["mermaid"];
          // The child code node should be unwrapped or just use its text content
          // Usually codeNode.children[0] is a text node
          // But let's just keep the text content
          
          // Actually, let's look at the structure.
          // codeNode.children is usually [ { type: 'text', value: '...' } ]
          
          node.children = codeNode.children;
        }
      }
    });
  };
}

export async function markdownToHTML(markdown) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExtractMermaid) // Run BEFORE pretty code
    .use(rehypePrettyCode, {
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

const markdown = `
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`;

markdownToHTML(markdown).then(console.log).catch(console.error);
