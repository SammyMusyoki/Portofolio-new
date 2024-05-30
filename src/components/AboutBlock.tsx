import React from 'react'
import Block from './Block'

const AboutBlock = () => {
  return (
    <Block className='col-span-12 text-xl leading-snug'>
      <p className='font-medium text-primary underline'>About</p>
      <p className='text-primary'>
        My passion is building cool stuff. {" "}
        <span className="text-foreground">
            I build primarily with HTML, CSS, React, Next.Js, React-Native, TailwindCSS, Python, Django. I have build several projects using these languages and I am proficient. I also have contributed in Nativecn-ui an open source project for creating mobile application components similar to Shadcn-ui.
        </span>
      </p>
    </Block>
  )
}

export default AboutBlock
