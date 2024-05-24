import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
    className={cn(
        'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm', 
        className
    )}
    {...props}
    />,
    Image
)

interface MdxProps {
    code : string;
}

export function Mdx({code}: MdxProps) {
    const Component = useMDXComponent(code)

    return (
        <div className='mdx dark:bg-slate-950'>
            <Component components={components} />
        </div>
    )
}