import React, { FC, ReactNode, useCallback, useState } from 'react'

import { KBarProvider, type Action } from "kbar"
import { KBarButton } from './kbar-button';

export interface KBarSearchProps {
    searchDocumentsPath: string;
    defaultActions?: Action[]
}

export const KBarSearchProvider: FC<{ 
    children?: ReactNode,
    kbarConfig: 
}> = ({
    children, kbarConfig
}) => {

    const [loaded, setLoaded] = useState(false)

    const importDOcSearchModalIfNeeded = useCallback(() => {
        if (KBarModal)
    })

    const onOpen = useCallback(() => {
        importDocSearchModalIfNeeded()
    }, [])
  return (
    <>
        <KBarProvider>
            <KBarButton loaded={loaded} onOpen={onOPen}/>
        </KBarProvider> 
    </>
  )
}
