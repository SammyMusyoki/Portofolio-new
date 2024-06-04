import { cn } from '@/lib/utils';
import React from 'react'



type ParentModalProps = {
    className?: string;
    children: React.ReactNode;
}

const ParentModal = ({ className, children}: ParentModalProps) => {
  return (
    <div className={cn("fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", className)}>
        <div className="bg-foreground rounded-lg shadow-lg p-2 w-full max-w-xl mx-auto">
            {children}
        </div>
    </div>
  )
}

export default ParentModal
