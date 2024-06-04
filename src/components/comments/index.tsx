"use client"

import dynamic from "next/dynamic"
import { GiscusProps } from "./giscus";
import { useState, useRef, useEffect } from "react";
import useIntersectionObserver from "@/context/hooks/use-observer";
import siteMetadata from "@/config/site-metadata";
import { GiscusConfig } from "@/types/types";
import { Button } from "../ui/button";

export type CommentsConfig = GiscusConfig

export interface CommentsProps {
    commentsConfig: CommentsConfig
}

// Dynamically import the Giscus Component from "./giscus"
const GiscusComponent = dynamic<GiscusProps>(
    () => {
        return import("./giscus").then((mod) => mod.GiscusContainer)
    },
    {
        ssr: false
    }
)

const Comments = () => {
    const [loadComments, setLoadComments] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)

    // Tracks the intersection of a DOM element with its containing element or the viewport
    // using the Intersection Observer API
    const entry = useIntersectionObserver(ref, {})
    // Check if the referenced component is visible
    const isVisible = !!entry?.isIntersecting
    const commentsConfig = siteMetadata.giscusConfig

    useEffect(() => {
        isVisible && setLoadComments(true)
    }, [isVisible])
    return (
        <div
        className='py-6 text-center space-y-2 mt-8'
        id="comment"
        ref={ref}>
            {!loadComments && (
                <Button variant='default' onClick={() => setLoadComments(true)}>Load Comments</Button>
            )}
            {loadComments && 
            <>
                <GiscusComponent {...commentsConfig} />
            </>
            }
        </div>
    )
};

export default Comments