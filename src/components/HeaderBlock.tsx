"use client"

import React, { useMemo, useState } from 'react'
import Block from './Block'
import Image from 'next/image'
import { createAvatar } from '@dicebear/core'
import { loreleiNeutral } from '@dicebear/collection'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'


type modalProps = {
    isOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderBlock = ({ isOpenModal}: modalProps) => {
    const avatar = useMemo(() => {
        return createAvatar(
            loreleiNeutral, {
                seed: 'Aneka',
                size: 28
            }
        ).toDataUriSync();
    }, [])

    const handlemodal = () => {
        isOpenModal(true)
    }
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
        <Button variant='default'
        onClick={handlemodal}
        >
            <p className='flex items-center gap-1'>Contact Me
            <ArrowRight size={16}/>
            </p>
        </Button>

    </Block>
  )
}

export default HeaderBlock
