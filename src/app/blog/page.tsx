"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { PsalmsHeader } from '@/components/PsalmsHeader';
import { BentoGrid, BentoGridItem } from '@/components/bento/bento-grid';

import { Blogs } from "velite/content"
import { sortBlogs } from '@/lib/utils';
import Skeleton from '@/components/Skeleton/ImageSkeleton';

const BLOGS_PER_PAGE = 7;

interface BlogProps {
  searchParams: {
    page?: string;
  }
}

const Page = ({searchParams}: BlogProps) => {
  const currentPage = Number(searchParams?.page) || 1
  const sortedBlogs = sortBlogs(Blogs.filter((blog) => blog.published));

  const displayBlogs = sortedBlogs.slice(
    BLOGS_PER_PAGE * (currentPage -1),
    BLOGS_PER_PAGE * currentPage
  )
  return (
    <>
      <div className='mb-8'>
          <h1 className='flex items-center font-bold text-4xl my-4 text-primary gap-2'>The<PsalmsHeader/>Blog</h1>
          <p>Welcome to my blog, where I share my experiences and insights in the world of technology. As a software developer with a passion for problem-solving and creativity,  I love exploring new ideas and discovering the latest trends in this rapidly changing field. In this blog, I share my thoughts on various topics, from projects i have worked on to emerging technolgies and industry news. Join me on this exciting journey and stay up-to-date with the latest developments in the tech world.</p>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
      >
        {displayBlogs?.length > 0 ? (
          <BentoGrid className="max-w-4xl mx-auto">
            {displayBlogs.map((blog, i) => {
              const { slug, date, title, description, tags } = blog
              return (
                <BentoGridItem
                  key={i}
                  slug={slug}
                  title={title}
                  date={date}
                  description={description}
                  image={<Skeleton />}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""} 
                  tags={tags}                />
              )
          })}
          </BentoGrid>

        ) : (
          <p>There are no Blogs here yet.</p>
        )}
      </motion.div>
    </>
  );
}

export default Page

