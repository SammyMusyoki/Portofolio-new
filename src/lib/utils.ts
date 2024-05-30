import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Blogs } from 'velite/content';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-KE', {
    month: "long",
    day: 'numeric',
    year: "numeric"
  })
};

export function sortBlogs(blogs: typeof Blogs) {
  return blogs.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0
  })
};
