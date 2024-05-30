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
    className: string;
    slug: string;
    date: string;
    tags: string;
    title?: string;
    description?: string;
    image?: HTMLImageElement | React.ReactNode;
} & MotionProps

export type {
    Questions,
    MessageContextValue,
    BentoGridItemProps,
}