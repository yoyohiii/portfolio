/*
 * @Author: yoyo
 * @Date: 2026-01-05 10:58:01
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 17:27:14
 * @FilePath: \next-react\src\app\portfolio\page.tsx
 * @Description:
 */
"use client";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import ImgPreview from "@/src/components/ImgPreview";
import portfolios from "@/src/data/portfolio";
import { siteContent } from "@/src/data/siteContent";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CirclePlay, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioPage() {
 const baseUrl = "/images/portfolio/";
 const [index, setIndex] = useState(0);
 const [visible, setVisible] = useState(false);

 const portfolio = portfolios[index];
 function setPortfolio(i: number) {
  setIndex(i);
 }

 return (
  <div className="relative size-full p-4 sm:p-6 mx-auto max-w-7xl flex flex-col">
   <div className="grid xl:grid-cols-[2fr_1fr] gap-4 sm:gap-6 flex-1">
    <AnimateFadeIn className="section-shell p-6 md:p-7" delay={0.15}>
     <AnimatePresence mode="wait">
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 16 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -16 }}
       transition={{ duration: 0.3 }}
      >
       <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-3 mb-4">
        <div>
         <div className="title-border text-2xl font-bold text-shadow-lg mb-2">
          {portfolio.name}
         </div>
         <div className="flex items-center gap-2 text-sm text-(--foreground)/65">
          <CalendarDays size={16} className="text-(--active)" />
          <span>{portfolio.time}</span>
         </div>
        </div>

        <a
         href={portfolio.site}
         target="_blank"
         rel="noreferrer"
         className="inline-flex items-center gap-1.5 rounded-full border border-(--active)/25 px-3 py-1.5 text-sm text-(--active) hover:bg-(--active)/10 transition-colors w-full sm:w-auto justify-center"
        >
         {siteContent.portfolio.visitCta}
         <ExternalLink size={14} />
        </a>
       </div>

       <div className="text-(--foreground)/72 leading-7">{portfolio.des}</div>

       <div className="my-5 w-full h-px bg-linear-to-r from-(--active)/25 to-transparent" />

       <div className="space-y-3">
        {portfolio.duties.map((duty, dutyIndex) => (
         <div
          key={dutyIndex}
          className="rounded-xl border border-(--active)/10 bg-(--primary-foreground)/60 px-3.5 py-3"
         >
          <div className="flex gap-2 items-start text-sm leading-6 text-(--foreground)/68">
           <span className="text-(--active) font-semibold">
            {String(dutyIndex + 1).padStart(2, "0")}
           </span>
           <span>{duty}</span>
          </div>
         </div>
        ))}
       </div>

       <div className="flex flex-wrap gap-2 mt-5">
        {portfolio.technology.map((tech) => (
         <div
          key={tech}
          className="rounded-full border border-(--active)/20 bg-(--active)/10 px-3 py-1 text-xs text-(--active)"
         >
          {tech}
         </div>
        ))}
       </div>

       <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        {portfolio.imgs.slice(0, 4).map((img) => (
         <button
          key={img}
          type="button"
          onClick={() => setVisible(true)}
          className="relative overflow-hidden rounded-xl border border-(--active)/15 group"
         >
          <Image
           src={`${baseUrl}${img}`}
           alt={portfolio.name}
           width={300}
           height={200}
           className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
         </button>
        ))}
       </div>

       <motion.button
        type="button"
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-(--active)/25 px-4 py-2 text-sm hover:bg-(--active)/10 transition-colors w-full sm:w-auto justify-center"
        whileHover={{ y: -2 }}
        onClick={() => setVisible(true)}
       >
        <CirclePlay size={18} className="text-(--active)" />
        {siteContent.portfolio.previewCta}
       </motion.button>
      </motion.div>
     </AnimatePresence>
    </AnimateFadeIn>

    <AnimateFadeIn className="section-shell p-5 md:p-6" delay={0.2}>
     <div className="text-sm text-(--active) font-semibold mb-1">
      {siteContent.portfolio.listEyebrow}
     </div>
     <h3 className="text-lg font-semibold mb-4">
      {siteContent.portfolio.listTitle}
     </h3>

     <div className="space-y-3">
      {portfolios.map((item, i) => {
       const active = i === index;
       return (
        <motion.button
         type="button"
         key={item.name}
         onClick={() => setPortfolio(i)}
         className={`w-full text-left rounded-2xl border p-3 transition-colors ${
          active
           ? "border-(--active)/35 bg-(--active)/8"
           : "border-(--active)/10 bg-(--primary-foreground)/65 hover:border-(--active)/25"
         }`}
         whileHover={{ x: -4 }}
        >
         <div className="flex items-center gap-3">
          <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden border border-(--active)/20">
           <Image
            src={`${baseUrl}${item.imgs[0]}`}
            alt={item.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
           />
          </div>

          <div className="min-w-0">
           <div className="font-semibold truncate">{item.name}</div>
           <div className="text-xs opacity-60 mt-0.5">{item.time}</div>
          </div>
         </div>
        </motion.button>
       );
      })}
     </div>
    </AnimateFadeIn>
   </div>

   <ImgPreview
    list={portfolio.imgs.map((img) => `${baseUrl}${img}`)}
    visible={visible}
    onClose={() => setVisible(false)}
   />
  </div>
 );
}
