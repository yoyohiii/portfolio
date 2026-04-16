/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 17:59:46
 * @FilePath: \next-react\src\app\about\page.tsx
 * @Description:
 */

"use client";
import personal from "@/src/data/about";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import { siteContent } from "@/src/data/siteContent";
import Link from "next/link";
import {
 ArrowUpRight,
 BriefcaseBusiness,
 MapPin,
 Monitor,
 Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function DemoPage() {
 const [index, setIndex] = useState(1);

 const baseUrl = "/images/about/";

 const introParagraphs = personal.introduce
  .split("；")
  .map((item) => item.trim())
  .filter(Boolean);

 useEffect(() => {
  const interval = setInterval(() => {
   setIndex((prevIndex) =>
    prevIndex >= personal.imgs.length - 1 ? 0 : prevIndex + 1,
   );
  }, 3000);

  return () => clearInterval(interval);
 }, []);

 return (
  <div className="relative px-4 py-6 sm:px-6 lg:px-10 xl:px-16">
   <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[0.92fr_1.08fr] items-start">
    <AnimateFadeIn
     className="section-shell p-4 sm:p-5 lg:sticky lg:top-6"
     delay={0.1}
    >
     <div className="relative overflow-hidden rounded-4xl border border-(--active)/15 bg-linear-to-br from-(--active)/12 via-transparent to-cyan-400/10 p-4 sm:p-5">
      <div className="absolute inset-0 mesh-panel opacity-20" />
      <div className="relative flex flex-col gap-4">
       <div className="flex items-center justify-between gap-3">
        <div className="soft-pill">About Profile</div>
        <div className="text-xs uppercase tracking-[0.3em] text-(--active)/80">
         {personal.englishName}
        </div>
       </div>

       <div className="relative overflow-hidden rounded-[1.75rem] border border-(--active)/15 bg-(--background)/55">
        <motion.img
         key={index}
         src={`${baseUrl}${personal.imgs[index]}`}
         alt={`Profile ${index + 1}`}
         width={520}
         height={680}
         className="h-96 sm:h-150 w-full object-contain"
         initial={{ opacity: 0, scale: 1.04 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.7 }}
        />

        {/* <div className="absolute left-4 top-4 rounded-2xl border border-white/20 bg-black/18 px-3 py-2 backdrop-blur-md">
         <div className="text-xs uppercase tracking-[0.24em] text-white/70">
          Role
         </div>
         <div className="mt-1 text-sm sm:text-base font-semibold text-white">
          {personal.occupation}
         </div>
        </div>

        <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/16 bg-black/20 px-4 py-3 backdrop-blur-md text-white">
         <div className="flex items-center justify-between gap-3">
          <div>
           <div className="text-xs uppercase tracking-[0.24em] text-white/70">
            Based In
           </div>
           <div className="mt-1 text-sm font-semibold">{personal.address}</div>
          </div>
          <div className="text-right">
           <div className="text-xs uppercase tracking-[0.24em] text-white/70">
            Focus
           </div>
           <div className="mt-1 text-sm font-semibold">WebGIS / Frontend</div>
          </div>
         </div>
        </div> */}
       </div>

       {/* <div className="grid grid-cols-4 gap-2">
        {personal.imgs.map((imageName, thumbnailIndex) => (
         <button
          key={imageName}
          type="button"
          onClick={() => setIndex(thumbnailIndex)}
          className={`relative overflow-hidden rounded-2xl border transition-all ${
           thumbnailIndex === index
            ? "border-(--active)/55 shadow-[0_0_0_1px_color-mix(in_srgb,var(--active)_45%,transparent)]"
            : "border-(--active)/12 opacity-70 hover:opacity-100"
          }`}
         >
          <Image
           src={`${baseUrl}${imageName}`}
           height={80}
           width={60}
           alt={`Thumbnail ${thumbnailIndex + 1}`}
           className="h-16 sm:h-20 w-full object-cover"
          />
         </button>
        ))}
       </div> */}
      </div>
     </div>
    </AnimateFadeIn>

    <AnimateFadeIn className="space-y-6" delay={0.16}>
     <div className="section-shell p-6 sm:p-8">
      <div className="flex items-center gap-2 text-(--active) mb-4 text-sm font-semibold tracking-wide">
       <Sparkles size={16} />
       <span>{siteContent.about.title}</span>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
       {/* <div>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-shadow-lg">
         {personal.name}
        </div>
        <div className="mt-3 text-base sm:text-xl text-(--active) font-semibold">
         {personal.occupation}
        </div>
       </div> */}

       <div className="rounded-3xl border border-(--active)/12 bg-(--active)/6 px-4 py-4 sm:px-5 text-sm sm:text-base leading-7 text-(--foreground)/72">
        聚焦复杂地图业务、低空巡检与前端工程化，擅长把抽象方案落成长期可维护的产品能力。
       </div>

       <div className="space-y-4 text-sm sm:text-base leading-8 text-(--foreground)/66">
        {introParagraphs.map((paragraph) => (
         <p key={paragraph}>{paragraph}</p>
        ))}
       </div>
      </div>
     </div>

     <div className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap gap-2 mb-6">
       {siteContent.about.tags.map((tag) => (
        <span key={tag} className="soft-pill">
         {tag}
        </span>
       ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
       <div className="text-sm leading-7 text-(--foreground)/60 max-w-2xl">
        如果你正在寻找兼顾业务理解、地图表达与工程稳定性的前端开发者，这里可以继续查看项目与简历细节。
       </div>

       <div className="flex flex-col sm:flex-row gap-3 sm:shrink-0">
        <Link href="/portfolio">
         <motion.button
          type="button"
          className="w-full sm:w-auto px-5 py-3 rounded-full border border-(--active)/25 text-(--active) font-semibold hover:bg-(--active)/10 transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
         >
          查看作品
         </motion.button>
        </Link>

        <Link href="/resume">
         <motion.button
          type="button"
          className="w-full sm:w-auto px-5 py-3 rounded-full bg-(--active) text-white font-semibold inline-flex items-center justify-center gap-2 hover:brightness-105 transition-all"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
         >
          {siteContent.about.resumeCta}
          <ArrowUpRight size={16} />
         </motion.button>
        </Link>
       </div>
      </div>
     </div>
    </AnimateFadeIn>
   </div>
  </div>
 );
}
