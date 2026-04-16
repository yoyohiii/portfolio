/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:06:11
 * @FilePath: \next-react\src\app\service\page.tsx
 * @Description:
 */

"use client";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import { services } from "@/src/data/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/src/components/SpotlightCard";
import HomeTitle from "@/src/components/HomeTitle";
import { siteContent } from "@/src/data/siteContent";

export default function ServicePage() {
 return (
  <AnimateFadeIn className="py-10 flex flex-col items-center w-full">
   <HomeTitle title={siteContent.service.title} />

   <p className="text-center opacity-50 max-w-lg mb-8 text-sm leading-relaxed">
    {siteContent.service.intro}
   </p>

   {/* 服务卡片 */}
   <div className="w-2/3 grid grid-cols-3 gap-6 mx-auto mb-10">
    {services.map((ele, index) => (
     <SpotlightCard
      key={index}
      className="bg-(--active)/10 p-6 flex flex-col rounded-2xl overflow-hidden h-60"
     >
      <div className="mb-4 flex items-center gap-4">
       <div className="p-2.5 bg-(--active)/20 rounded-xl w-fit">
        <ele.icon size={22} className="text-(--active)" />
       </div>
       <div className="font-bold text-base">{ele.name}</div>
      </div>
      <div className="opacity-50 text-sm flex-1 leading-relaxed mb-4">
       {ele.des}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-5">
       {ele.tags.map((tag, i) => (
        <span
         key={i}
         className="text-xs px-2 py-0.5 rounded-full bg-(--active)/20 text-(--active)"
        >
         {tag}
        </span>
       ))}
      </div>
      <div className="font-bold text-(--active) flex items-center cursor-pointer text-sm group">
       <motion.span className="mr-1" whileHover={{ marginRight: "8px" }}>
        <Link href="/contact">{siteContent.service.consultCta}</Link>
       </motion.span>
       <ArrowRight size={15} />
      </div>
     </SpotlightCard>
    ))}
   </div>

   {/* 服务流程 */}
   <div className="w-4/5 max-w-5xl">
    {/* <h3 className="text-center text-lg font-bold mb-10 opacity-80">服务流程</h3> */}
    <div className="grid grid-cols-4 gap-4 relative">
     {/* 连接线 */}
     <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-(--active)/20" />
     {siteContent.service.processSteps.map((step, index) => (
      <motion.div
       key={index}
       className="flex flex-col items-center text-center px-4"
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.12 }}
       viewport={{ once: false }}
      >
       <div className="w-10 h-10 rounded-full border-2 border-(--active)/50 bg-(--active)/10 flex items-center justify-center text-sm font-bold text-(--active) mb-3 z-10">
        {step.step}
       </div>
       <div className="font-bold mb-1 text-sm">{step.title}</div>
       <div className="text-xs opacity-50 leading-relaxed">{step.desc}</div>
      </motion.div>
     ))}
    </div>
   </div>

   {/* CTA */}
   {/* <motion.div
    className="w-4/5 max-w-5xl border border-(--active)/30 rounded-2xl p-10 text-center bg-(--active)/5"
    whileHover={{ borderColor: "var(--active)" }}
    transition={{ duration: 0.3 }}
   >
    <div className="font-bold text-xl mb-2">准备好开始合作了吗？</div>
    <div className="opacity-50 text-sm mb-7">
     期待与您深入沟通，将想法转化为出色的产品
    </div>
    <Link href="/contact">
     <motion.button
      className="px-7 py-2.5 bg-(--active) text-white rounded-full font-bold text-sm cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
     >
      联系我
     </motion.button>
    </Link>
   </motion.div> */}
  </AnimateFadeIn>
 );
}
