import { Mdx } from '@/components/Mdx'
import { About } from 'velite/content'
import Image from "next/image"
import { Button } from '@/components/ui/button';
import { SammyMusyoki2 } from '../images';



export const AboutMe = () => {
    return (
      <div className="mt-8 sm:mt-12">
        <div className="flex gap-4">
          <div className="flex-1 space-y-4">
            <div className="w-36 h-36 border rounded-full p-2 bg-accent md:hidden right-1 flex">
              <Image
                src={SammyMusyoki2}
                alt="Personal Image"
                width={100}
                height="100"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              About Me
            </h1>
            <Mdx code={About.body} />
            <Button variant="outline">Download CV</Button>
          </div>
          <div className="w-80 h-96 border rounded-xl p-3 bg-accent hidden md:block">
            <Image
              src={SammyMusyoki2}
              alt="Personal Image"
              width={100}
              height="100"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>
    );
}