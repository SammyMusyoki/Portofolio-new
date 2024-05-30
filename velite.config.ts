import { defineCollection, defineConfig, s } from "velite"
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string}>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const Blogs = defineCollection({
    name: "Blog",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        image: s.image().optional(),
        title: s.string().max(150),
        description: s.string().max(1500).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        tags: s.array(s.string()).optional(),
        body: s.mdx()
    })
    .transform(computedFields)
});

export default defineConfig({
    root: 'src/content',
    output: {
        data: ".velite",
        assets: 'public/static',
        base: '/static/',
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: { Blogs },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, {theme: 'github-dark'}],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLable: "Link to section"
                    },
                },
            ],
        ],
        remarkPlugins: []
    },
});