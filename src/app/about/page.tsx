/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:26:45
 * @FilePath: \next-react\src\app\about\page.tsx
 * @Description:
 */

"use client";
import personal from "@/src/data/about";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import { siteContent } from "@/src/data/siteContent";

export default function DemoPage() {
 const [index, setIndex] = useState(1);

 const baseUrl = "/images/about/";

 const decorates = [
  {
   top: "100px",
   left: "150px",
   borderTop: "1px solid var(--primary)",
   borderLeft: "1px solid var(--primary)",
  },
  {
   top: "100px",
   right: "150px",
   borderTop: "1px solid var(--primary)",
   borderRight: "1px solid var(--primary)",
  },
  {
   bottom: "100px",
   left: "150px",
   borderBottom: "1px solid var(--primary)",
   borderLeft: "1px solid var(--primary)",
  },
  {
   bottom: "100px",
   right: "150px",
   borderBottom: "1px solid var(--primary)",
   borderRight: "1px solid var(--primary)",
  },
 ];
 useEffect(() => {
  const interval = setInterval(() => {
   setIndex((prevIndex) =>
    prevIndex >= personal.imgs.length - 1 ? 0 : prevIndex + 1,
   );
  }, 3000);

  return () => clearInterval(interval);
 }, []);

 return (
  <div className="size-full grid lg:grid-cols-2 relative py-14 px-6 lg:px-16 gap-10">
   {decorates.map((decorate, i) => (
    <div
     key={i}
     className="absolute w-10 h-10 hidden lg:block"
     style={decorate}
    />
   ))}

   <motion.div
    className="w-3 h-3 rounded-full absolute top-18 right-14 bg-(--active)"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
   ></motion.div>

   <div className="flex-center relative border-b lg:border-b-0 lg:border-r border-(--primary)/30 h-full pb-8 lg:pb-0">
    <motion.img
     key={index}
     src={`${baseUrl}${personal.imgs[index]}`}
     alt={`Slide ${index + 1}`}
     width={400}
     height={600}
     className="object-cover rounded-2xl"
     initial={{ opacity: 0, x: 40 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
    />

    <div className="flex gap-3 items-center absolute bottom-10">
     {personal.imgs.map((_img, i) => (
      <motion.div
       key={i}
       className="w-2 h-2 rounded-full bg-(--primary) cursor-pointer hover:scale-120"
       initial={{ opacity: i === index ? 1 : 0.4 }}
       animate={{ opacity: i === index ? 1 : 0.4 }}
       onClick={() => setIndex(i)}
      />
     ))}
    </div>
   </div>

   <div className="flex-center">
    <AnimateFadeIn className="px-10 pr-30">
     <motion.div
      className="text-2xl font-bold title-border mb-10 text-shadow-lg"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
     >
      {siteContent.about.title}
     </motion.div>

     <div className="text-(--foreground)/60 leading-8 indent-6 text-sm lg:text-base">
      {personal.introduce}
     </div>

     <div className="flex flex-wrap gap-2 mt-6">
      {siteContent.about.tags.map((tag) => (
       <span key={tag} className="soft-pill">
        {tag}
       </span>
      ))}
     </div>

     <div className="w-full flex justify-end mt-10">
      <div className="w-40 text-(--active) font-bold cursor-pointer hover:underline text-right">
       {siteContent.about.resumeCta}
      </div>
     </div>
    </AnimateFadeIn>
   </div>
  </div>
 );
}
