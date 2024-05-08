import React from 'react'
import Block from './Block'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiUpwork, SiWhatsapp } from "react-icons/si";

const SocialsBlock = () => {
  return (
    <>
      <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1
      }}
      className='col-span-6 bg-green-600 md:col-span-3'
      >
        <Link href={''} className='grid h-full place-content-center text-3xl'>
            <SiWhatsapp />
        </Link>
      </Block>
      <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1
      }}
      className='col-span-6 bg-blue-800 md:col-span-3'
      >
        <Link href={'https://linkedin.com/in/sammy-musyoki-293b451bb'} className='grid h-full place-content-center text-3xl'>
            <SiLinkedin/>
        </Link>
      </Block>
      <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1
      }}
      className='col-span-6 md:col-span-3'
      >
        <Link href={'https://www.github.com/SammyMusyoki'} className='grid h-full place-content-center text-3xl'>
            <SiGithub />
        </Link>
      </Block>
      <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1
      }}
      className='col-span-6 bg-green-500 md:col-span-3'
      >
        <Link href={''} className='grid h-full place-content-center text-3xl'>
            <SiUpwork />
        </Link>
      </Block>
    </>
  )
}

export default SocialsBlock
