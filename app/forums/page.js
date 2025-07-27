import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "/python.png",
    description: "Let's Discuss about Python",
    slug:"Python-discuss"
  },
  {
    text: "JavaScript",
    img: "/javascript.png",
    description: "Dive into the world of web development with JavaScript.",
    slug:"js-discuss"
  },
  {
    text: "React",
    img: "/react.png",
    description: "Build user interfaces with the popular React library.",
    slug:"react-discuss"
  },
  {
    text: "Node.js",
    img: "/nodejs.png",
    description: "Explore server-side JavaScript with Node.js.",
    slug:"node-discuss"
  },

  {
    text: "Next.js",
    img: "/nextjs.png",
    description: "Learn about the React framework for production.",
    slug:"Next-discuss"
  },
 

];
const Forums = () => {
  return (
    <div className=' font-bold text-orange-200container relative text-center mx-auto my-5 '>
      
    <h2 className=' text-3xl font-bold text-orange-400'> Discussion Forums</h2>
    <div className='flex  borderitems-center justify-center flex-wrap'>
      {topics.map((topics)=>{
        return <div key={topics.img} className='  border-amber-500 rounded-xl shadow-lg flex flex-col items-center justify-center  bg-slate-500 w-1/4 m-4 py-8'>
          <Image src={topics.img} width={110} height={110}  alt="/img" className='border m-2 border-white-100 rounded-full object-cover aspect-square  '/>
          <h2>{topics.text}</h2>
          <p>{topics.description}</p>
          <Link href={`/forum/${topics.slug}`}>
          
          <Button className='border  border-amber-100 m-4 p-4 cursor-pointer'>Discuss Now</Button>
          </Link>
          </div>
          
      })}
    </div>
    
    </div>
  )
}

export default Forums
