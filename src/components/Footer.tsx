import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-12'>
      <p className='text-center'>Made with 💓 by{" "}
      <Link href='https://www.github.com/SammyMusyoki' className='text-primary hover:underline'>@SammyMusyoki</Link>
      </p>
    </footer>
  )
}

export default Footer
