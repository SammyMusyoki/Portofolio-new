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
export type {
    Questions,
    MessageContextValue,
    BentoGridItemProps,
    IPageProps,
}