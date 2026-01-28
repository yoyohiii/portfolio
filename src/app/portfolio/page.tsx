/*
 * @Author: yoyo
 * @Date: 2026-01-05 10:58:01
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-28 16:32:54
 * @FilePath: \next-react\src\app\portfolio\page.tsx
 * @Description:
 */
"use client";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import HomeTitle from "@/src/components/HomeTitle";
import ImgPreview from "@/src/components/ImgPreview";
import { MenuToggle } from "@/src/components/MenuToggle";
import portfolios from "@/src/data/portfolio";
import { motion } from "framer-motion";
import { CalendarDays, CirclePlay, Link } from "lucide-react";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
 const baseUrl = "/images/portfolio/";
 const [index, setIndex] = useState(0);
 const [imgIndex, setImgIndex] = useState(0);
 const [isOpen, setIsOpen] = useState(true);

 const [visible, setVisible] = useState(false);

 const portfolio = portfolios[index];

 function setPortfolio(i: number) {
  setIndex(i);
  setImgIndex(0);
  setIsOpen(false);
 }

 useEffect(() => {
  const interval = setInterval(() => {
   setImgIndex((prevIndex) =>
    prevIndex >= portfolio.imgs.length - 1 ? 0 : prevIndex + 1,
   );
  }, 5000);

  return () => clearInterval(interval);
 });

 return (
  <div className="size-full flex flex-col items-center py-15">
   <HomeTitle title="PORTFOLIO" />
   <div className="w-[70%] grid grid-cols-5 relative flex-1">
    <div className="absolute z-20 right-4 top-4">
     <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>
    <AnimateFadeIn
     key={index}
     className="col-span-3 flex flex-col py-15 border-r border-(--primary)/40 pr-10"
    >
     <div className="title-border text-2xl mb-6 font-bold text-shadow-lg">
      {portfolio.name}
     </div>
     <div className="flex gap-2 text-(--active)">
      <Link size={20} />
      <span>{portfolio.site}</span>
     </div>
     <div className="flex gap-2">
      <CalendarDays size={20} className="text-(--active)" />
      <span>{portfolio.time}</span>
     </div>

     <div className="my-5 w-full h-px bg-linear-to-r from-(--active)/20 to-transparent"></div>

     <div className=" flex-1">
      <div className="opacity-50 leading-10">{portfolio.des}</div>
      <motion.div className="flex gap-2 items-center mt-5 cursor-pointer">
       <CirclePlay
        size={20}
        className="text-(--active)"
        onClick={() => setVisible(true)}
       />
       <span>play demo</span>
      </motion.div>
     </div>

     <div className="flex gap-2 mt-4">
      {portfolio.technology.map((tech, index) => {
       return (
        <div
         key={index}
         className="bg-(--active)/20 text-(--active) px-3 rounded-sm"
        >
         {tech}
        </div>
       );
      })}
     </div>
    </AnimateFadeIn>

    {isOpen ? (
     <motion.div
      className="h-full col-span-2 flex flex-col gap-10 relative p-20"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
     >
      {portfolios.map((item, i) => {
       return (
        <motion.div
         key={i}
         className="pl-12 p-2 h-14 cursor-pointer rounded-sm relative bg-(--secondary-foreground)"
         style={{ color: i === index ? "var(--active)" : "" }}
         whileHover={{
          x: -10,
          transition: { duration: 0.3 },
          color: "var(--active)",
         }}
         onClick={() => setPortfolio(i)}
        >
         <motion.div
          className="rounded-full w-20 h-20 bg-cover absolute bottom-0 -left-10 flex items-center justify-center bg-(--background) border-2 border-(--primary-foreground)"
          animate={{ rotate: i === index ? 360 : 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
         >
          <motion.img
           width={40}
           height={40}
           src={`${baseUrl}${item.imgs[0]}`}
           alt={item.name}
           className="rounded-full w-3/5 h-3/5 object-cover"
          />
         </motion.div>
         <div className="font-bold">{item.name}</div>
         <div className="text-sm opacity-50">{item.time}</div>
        </motion.div>
       );
      })}
     </motion.div>
    ) : (
     <div className="col-span-2 flex-center relative">
      <motion.img
       key={imgIndex}
       src={`${baseUrl}${portfolio.imgs[imgIndex]}`}
       alt={`Slide ${imgIndex + 1}`}
       width={320}
       height={600}
       className="object-contain w-100 rounded-xl"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.8 }}
      />

      <div className="flex gap-3 items-center absolute bottom-10">
       {portfolio.imgs.map((_img, i) => (
        <motion.div
         key={i}
         className="w-2 h-2 rounded-full bg-(--primary) cursor-pointer hover:scale-120"
         initial={{ opacity: i === imgIndex ? 1 : 0.4 }}
         animate={{ opacity: i === imgIndex ? 1 : 0.4 }}
         onClick={() => setImgIndex(i)}
        />
       ))}
      </div>
     </div>
    )}
   </div>

   <ImgPreview
    list={portfolio.imgs.map((img) => `${baseUrl}${img}`)}
    visible={visible}
    onClose={() => setVisible(false)}
   />
  </div>
 );
}
