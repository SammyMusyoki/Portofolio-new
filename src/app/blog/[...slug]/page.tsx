import { Mdx } from '@/components/Mdx';
import Navbar from '@/components/Navbar';
import React from 'react'
import { Blogs } from 'velite/content';
import { notFound } from "next/navigation";
import { formatDate } from '@/lib/utils';
import { IPageProps } from '@/types/types';
import { siteMetadata } from '@/config/site-metadata';
import { Metadata } from 'next';
import Comments from '@/components/comments';

async function getPostFromParams(params: IPageProps['params']) {
    const slug = params?.slug?.join("/");
    const blog = Blogs.find((blog) => blog.slugAsParams === slug);

    return blog
}

export async function generateStaticParams(): Promise<IPageProps["params"][]> {
    return Blogs.map((blog) => ({ slug: blog.slugAsParams.split("/")}))
}

export async function generateMetadata ({ params }: IPageProps): Promise<Metadata> {
    const blog = await getPostFromParams(params);

    if (!blog) {
        return {}
    };

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set("title", blog.title);

    return {
        title: blog.title,
        description: blog.description,
        authors: { name: siteMetadata.author },
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: "article",
            url: blog.slug,
            images: [
                {
                    url: `/api/og/?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: blog.title
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: [`/api/og?${ogSearchParams.toString()}`]
        }
    }
}

const Page = async ({params}: IPageProps) => {

    const blog = await getPostFromParams(params);

    if (!blog || !blog.published) {
        notFound()
    }
  return (
    <main className='flex flex-col'>
        <article className="h-full mt-10 border p-4 rounded-lg">
            <div className='text-center mb-8 space-y-2'>
                <span className=''>{formatDate(blog.date)}</span>
                <h1 className='text-3xl font-bold'>{blog.title}</h1>
            </div>
            <Mdx code={blog.body}/>
        </article>
        <Comments />
    </main>



  );
}

export default Page
