'use client'

import React, { useMemo } from 'react'
import Block from './Block'
import Image from 'next/image'
import { createAvatar } from '@dicebear/core'
import { loreleiNeutral } from '@dicebear/collection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


const HeaderBlock = () => {
    const avatar = useMemo(() => {
        return createAvatar(
            loreleiNeutral, {
                seed: 'Aneka',
                size: 28
            }
        ).toDataUriSync();
    }, [])
  return (
    <Block className='col-span-12 row-span-2 md:col-span-6'>
        <Image src={avatar} alt='avator'
        className='mb-4 rounded-full border-2 border-border bg-primary' width='50' height='50'
        />
        <h1 className='mb-12 text-3xl font-medium leading-tight text-primary'>
            Hi, I&apos;m Sammy. {" "} 
            <span className='text-foreground'>
                I&apos;m a FullStack Software Developer and I build cool websites like this one.
            </span>
        </h1>
        <Link href='' className='flex items-center gap-1 text-primary hover:underline'>Contact Me
        <ArrowRight size={16}/>
        </Link>
    </Block>
  )
}

export default HeaderBlock
