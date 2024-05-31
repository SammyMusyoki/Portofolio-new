import { Mdx } from '@/components/Mdx';
import Navbar from '@/components/Navbar';
import React from 'react'
import { Blogs } from 'velite/content';
import { notFound } from "next/navigation";
import { formatDate } from '@/lib/utils';

interface PageProps {
    params: {
        slug: string[]
    }
};

async function getPostFromParams(params: PageProps['params']) {
    const slug = params?.slug?.join("/");
    const blog = Blogs.find((blog) => blog.slugAsParams === slug);

    return blog
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return Blogs.map((blog) => ({ slug: blog.slugAsParams.split("/")}))
}
const Page = async ({params}: PageProps) => {

    const blog = await getPostFromParams(params);

    if (!blog || !blog.published) {
        notFound()
    }
  return (
    <article className="h-full mt-10 border p-4 rounded-lg">
        <div className='text-center mb-8 space-y-2'>
            <span className=''>{formatDate(blog.date)}</span>
            <h1 className='text-3xl font-bold'>{blog.title}</h1>
        </div>
        <Mdx code={blog.body}/>
    </article>
  );
}

export default Page
