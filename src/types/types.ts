import React from "react";
import { MotionProps } from 'framer-motion';

interface Questions {
    id: number;
    name: string;
    questionText: string;
    answer: string;
    placeholder: string;
};

interface MessageContextValue {
    message: string;
    type: 'success' | 'error' | 'warning' | null;
    showMessage: (msg: string, type: "success" | "error" | "warning") => void;
    clearMessage: () => void;
}

type BentoGridItemProps = {
    className?: string;
    slug: string;
    date: string;
    tags: string[] | undefined;
    title?: string;
    description?: string;
    image?: string | React.ReactNode;
} & MotionProps

interface IPageProps {
    params: {
        slug: string[]
    }
}

interface GiscusConfig {
    themeURL?: string
    theme?: string
    darkTheme?: string
    mapping: string
    repo: string
    repositoryId: string
    category: string
    categoryId: string
    reactions: string
    metadata: string
    inputPosition?: string
    lang: string
}

interface CoreConfig {
    title: string
    author?: string
    headerTitle?: string
    description: string
    language: string
    /** light and dark */
    theme: "system" | "dark" | "light"
    siteUrl: string
    siteRepo: string
    image?: string
    socialBanner?: string
    email: string
    github: string
    twitter: string
    facebook?: string
    linkedin: string
    locale: string
}
export type {
    Questions,
    MessageContextValue,
    BentoGridItemProps,
    IPageProps,
    GiscusConfig,
    CoreConfig
}