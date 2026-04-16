/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:01:55
 * @FilePath: \next-react\src\app\skill\page.tsx
 * @Description:
 */
"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { skills } from "@/src/data/resume";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import HomeTitle from "@/src/components/HomeTitle";
import { siteContent } from "@/src/data/siteContent";

export default function SkillPage() {
 const averageProficiency = Math.round(
  skills.reduce((total, item) => total + Number.parseInt(item.percent, 10), 0) /
   skills.length,
 );

 const overviewCards = siteContent.skill.overviewCards.map((item) => ({
  ...item,
  value:
   item.value === "averageProficiency" ? `${averageProficiency}%` : item.value,
 }));

 return (
  <div className="relative py-10 px-6 md:px-10">
   <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 w-[92%] max-w-6xl rounded-[3rem] bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--active)_18%,transparent),transparent_72%)]" />

   <div className="relative mx-auto w-full max-w-7xl">
    <HomeTitle title={siteContent.skill.title} />

    <AnimateFadeIn className="section-shell p-6 md:p-8" delay={0.1}>
     <div className="grid lg:grid-cols-[1.35fr_0.95fr] gap-6 lg:gap-8 items-start">
      <div>
       <div className="flex items-center gap-2 text-(--active) mb-4">
        <Sparkles size={18} />
        <span className="font-semibold">{siteContent.skill.overviewTitle}</span>
       </div>

       <p className="text-sm md:text-base leading-7 text-(--foreground)/70 max-w-3xl">
        {siteContent.skill.overviewDescription}
       </p>

       <div className="grid sm:grid-cols-3 gap-3 mt-5">
        {siteContent.skill.capabilityNotes.map((note) => (
         <div
          key={note}
          className="rounded-2xl border border-(--active)/15 bg-(--primary-foreground)/65 px-4 py-3 text-sm text-(--foreground)/72"
         >
          {note}
         </div>
        ))}
       </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
       {overviewCards.map((item) => {
        const Icon = item.icon;

        return (
         <div
          key={item.title}
          className="rounded-2xl border border-(--active)/18 bg-(--primary-foreground)/70 p-4"
         >
          <div className="flex items-center gap-2 text-(--active) text-sm mb-2">
           <Icon size={16} />
           <span>{item.title}</span>
          </div>
          <div className="text-sm md:text-base font-semibold leading-6">
           {item.value}
          </div>
         </div>
        );
       })}
      </div>
     </div>
    </AnimateFadeIn>

    <AnimateFadeIn className="section-shell p-6 mt-4" delay={0.15}>
     <div className="flex items-center justify-between gap-4 mb-4">
      <div className=" font-semibold">
       <span className="text-(--active) text-sm">
        {siteContent.skill.matrixEyebrow}
       </span>
       <span className="text-lg ml-2">{siteContent.skill.matrixTitle}</span>
      </div>

      <div className="soft-pill">{siteContent.skill.matrixCountLabel}</div>
     </div>

     <div className="grid lg:grid-cols-2 gap-4">
      {skills.map((item, index) => (
       <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: index * 0.06 }}
        className="rounded-2xl border border-(--active)/14 bg-(--primary-foreground)/68 p-4"
       >
        <div className="flex items-start justify-between gap-4 mb-3">
         <div>
          <div className="font-semibold mb-1">{item.name}</div>
          <div className="text-sm leading-6 text-(--foreground)/65">
           {siteContent.skill.skillDescriptions[item.name]}
          </div>
         </div>

         <div className="shrink-0 rounded-full border border-(--active)/20 px-3 py-1 text-sm font-semibold text-(--active)">
          {item.percent}
         </div>
        </div>

        <div className="bg-(--secondary-foreground) h-2 rounded-full relative overflow-hidden">
         <motion.div
          className="bg-(--active) h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: item.percent }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
         />
        </div>
       </motion.div>
      ))}
     </div>
    </AnimateFadeIn>

    {/* <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8">
     <AnimateFadeIn className="section-shell p-6 md:p-8" delay={0.15}>
      <div className="flex items-center justify-between gap-4 mb-6">
       <div className=" font-semibold mb-1">
        <span className="text-(--active) text-sm">Skill Matrix</span>
        <span className="text-lg ml-2">核心技能矩阵</span>
       </div>

       <div className="soft-pill">6 项核心能力</div>
      </div>

      <div className="space-y-4">
       {skills.map((item, index) => (
        <motion.div
         key={item.name}
         initial={{ opacity: 0, y: 18 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         transition={{ duration: 0.35, delay: index * 0.06 }}
         className="rounded-2xl border border-(--active)/14 bg-(--primary-foreground)/68 p-4"
        >
         <div className="flex items-start justify-between gap-4 mb-3">
          <div>
           <div className="font-semibold mb-1">{item.name}</div>
           <div className="text-sm leading-6 text-(--foreground)/65">
            {skillDescriptions[item.name]}
           </div>
          </div>

          <div className="shrink-0 rounded-full border border-(--active)/20 px-3 py-1 text-sm font-semibold text-(--active)">
           {item.percent}
          </div>
         </div>

         <div className="bg-(--secondary-foreground) h-2 rounded-full relative overflow-hidden">
          <motion.div
           className="bg-(--active) h-full rounded-full"
           initial={{ width: 0 }}
           whileInView={{ width: item.percent }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
          />

          <motion.div
           className="absolute -top-2"
           initial={{ left: 0 }}
           whileInView={{ left: `calc(${item.percent} - 14px)` }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
          >
           <Rabbit size={18} color="var(--active)" />
          </motion.div>
         </div>
        </motion.div>
       ))}
      </div>
     </AnimateFadeIn>

     <div className="flex flex-col gap-8">
      <AnimateFadeIn className="section-shell p-6 md:p-8" delay={0.2}>
       <div className=" font-semibold mb-1">
        <span className="text-(--active) text-sm">Delivery Value</span>
        <span className="text-lg ml-2">实战能力</span>
       </div>

       <div className="space-y-4">
        {skillHighlights.map((item) => {
         const Icon = item.icon;

         return (
          <div
           key={item.title}
           className="mesh-panel rounded-2xl border border-(--active)/15 bg-(--primary-foreground)/68 p-4"
          >
           <div className="flex items-center gap-2 text-(--active) mb-2">
            <Icon size={16} />
            <span className="font-semibold">{item.title}</span>
           </div>
           <div className="text-sm leading-6 text-(--foreground)/68">
            {item.desc}
           </div>
          </div>
         );
        })}
       </div>
      </AnimateFadeIn>

      <AnimateFadeIn className="section-shell p-6 md:p-8" delay={0.24}>
       <div className="flex items-center justify-between gap-4 mb-5">
        <div className=" font-semibold mb-1">
         <span className="text-(--active) text-sm">Scenario Focus</span>
         <span className="text-lg ml-2">擅长场景</span>
        </div>

        <ArrowUpRight size={18} className="text-(--active)" />
       </div>

       <div className="flex flex-wrap gap-2">
        {scenarioTags.map((tag) => (
         <span key={tag} className="soft-pill">
          {tag}
         </span>
        ))}
       </div>

       <div className="mt-5 rounded-2xl border border-(--active)/15 bg-(--primary-foreground)/68 p-4">
        <div className="text-sm leading-7 text-(--foreground)/68">
         不只是会写页面，更偏向于将前端能力应用到复杂业务中，形成稳定、可扩展、可复用的系统方案。
         在地图交互、权限控制、异步上传、实时数据联动等高复杂度场景下，具备持续交付经验。
        </div>
       </div>
      </AnimateFadeIn>
     </div>
    </div> */}
   </div>
  </div>
 );
}
