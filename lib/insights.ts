import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightCategory =
  | "playbooks"
  | "market-updates"
  | "compliance"
  | "field-notes";

export const CATEGORIES: {
  slug: InsightCategory;
  label: string;
  description: string;
}[] = [
  {
    slug: "playbooks",
    label: "Playbooks",
    description:
      "Step-by-step guides to specific corridors, modes and processes.",
  },
  {
    slug: "market-updates",
    label: "Market updates",
    description: "Quarterly rate reads and capacity notes from the desks.",
  },
  {
    slug: "compliance",
    label: "Compliance",
    description:
      "Permit paths, documentation stacks and regulatory walk-throughs.",
  },
  {
    slug: "field-notes",
    label: "Field notes",
    description: "Shorter observations from ops — one shipment, one lesson.",
  },
];

export type InsightFrontmatter = {
  title: string;
  description: string;
  category: InsightCategory;
  date: string;
  readMinutes: number;
  author: string;
  hero?: string;
};

export type InsightPost = InsightFrontmatter & {
  slug: string;
  content: string;
};

export type InsightMeta = InsightFrontmatter & { slug: string };

function readAll(): InsightPost[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  const files = fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(INSIGHTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      ...(data as InsightFrontmatter),
      slug,
      content,
    };
  });
}

export function getAllPosts(): InsightMeta[] {
  return readAll()
    .map(({ content, ...meta }) => {
      void content;
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): InsightPost | null {
  const all = readAll();
  return all.find((p) => p.slug === slug) ?? null;
}

export function getPostsByCategory(category: InsightCategory): InsightMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getCategory(slug: InsightCategory) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
