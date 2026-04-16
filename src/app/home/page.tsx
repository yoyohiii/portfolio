/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:08:49
 * @FilePath: \next-react\src\app\home\page.tsx
 * @Description:
 */

"use client";
import personal from "@/src/data/about";
import { motion } from "framer-motion";
import { Mail, MapPin, Smartphone, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import { siteContent } from "@/src/data/siteContent";

export default function HomePage() {
 useEffect(() => {
  const split = SplitText.create(".introduce", { type: "words, chars, lines" });
  gsap.from(split.lines, {
   rotationX: -100,
   transformOrigin: "50% 50% -100px",
   opacity: 0,
   duration: 0.8,
   ease: "power3",
   stagger: 0.25,
  });
 }, []);

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: {
    staggerChildren: 0.1,
    duration: 0.5,
   },
  },
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
   opacity: 1,
   y: 0,
   transition: { duration: 0.6 },
  },
 };

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
   className="min-h-screen py-20 flex items-center justify-center relative"
  >
   <div className="w-4/5 max-w-4xl">
    {/* 顶部装饰 */}
    <motion.div
     className="flex justify-center mb-8"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
    >
     <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-(--active)/30 bg-(--active)/5 text-sm">
      <div className="w-2 h-2 rounded-full bg-(--active) animate-pulse" />
      <span className="text-(--active)">
       {siteContent.home.cooperationBadge}
      </span>
     </div>
    </motion.div>

    {/* 主标题 */}
    <motion.div
     className="introduce text-center mb-8"
     variants={itemVariants}
     initial="hidden"
     animate="visible"
    >
     <div className="text-5xl font-bold text-shadow-lg mb-4">
      {personal.name}
     </div>
     <div className="text-lg sm:text-2xl text-(--active) font-bold mb-2">
      {personal.occupation}
     </div>
     <div className="text-gray-500 text-sm">{siteContent.home.englishRole}</div>
    </motion.div>

    {/* 关键指标 */}
    {/* <motion.div
     className="grid grid-cols-3 gap-6 mb-12 px-4 sm:px-0"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    >
     {highlights.map((item, idx) => (
      <motion.div
       key={idx}
       className="text-center p-4 rounded-lg bg-(--active)/5 border border-(--active)/20 hover:border-(--active)/50 transition-all"
       variants={itemVariants}
       whileHover={{ y: -5, borderColor: "var(--active)" }}
      >
       <div className="text-2xl sm:text-3xl font-bold text-(--active) mb-1">
        {item.value}
       </div>
       <div className="text-xs sm:text-sm opacity-60">{item.label}</div>
      </motion.div>
     ))}
    </motion.div> */}

    {/* 核心能力卡片 */}
    <motion.div
     className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    >
     {siteContent.home.coreSkills.map((skill, idx) => (
      <motion.div
       key={idx}
       className="p-4 rounded-xl border border-(--active)/20 bg-(--active)/5 hover:border-(--active)/50 hover:bg-(--active)/10 transition-all group"
       variants={itemVariants}
       whileHover={{ y: -3 }}
      >
       <div className="font-bold text-sm mb-2 text-(--active)">
        {skill.name}
       </div>
       <div className="text-xs opacity-50 leading-relaxed">{skill.skills}</div>
      </motion.div>
     ))}
    </motion.div>

    {/* 社交媒体 + 联系信息 */}
    <motion.div
     className="space-y-6 mb-10"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    >
     {/* 社交链接 */}
     {/* <motion.div className="flex justify-center gap-4" variants={itemVariants}>
      {personal.socialMedia.map((social, idx) => (
       <a
        key={idx}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-(--active)/30 hover:border-(--active) hover:bg-(--active) hover:text-white transition-all group"
       >
        <social.icon
         size={18}
         className="group-hover:scale-110 transition-transform"
        />
       </a>
      ))}
     </motion.div> */}

     {/* 联系方式 */}
     <motion.div
      className="flex flex-wrap justify-center gap-4 sm:gap-10 text-xs sm:text-sm border-b border-(--primary)/20 py-6"
      variants={containerVariants}
     >
      <motion.div className="flex items-center gap-2" variants={itemVariants}>
       <Smartphone size={16} className="text-(--active)" />
       <span className="opacity-60">{personal.phone}</span>
      </motion.div>
      <motion.div className="flex items-center gap-2" variants={itemVariants}>
       <Mail size={16} className="text-(--active)" />
       <span className="opacity-60">{personal.email}</span>
      </motion.div>
      <motion.div className="flex items-center gap-2" variants={itemVariants}>
       <MapPin size={16} className="text-(--active)" />
       <span className="opacity-60">{personal.address}</span>
      </motion.div>
     </motion.div>
    </motion.div>

    {/* CTA 按钮 */}
    <motion.div
     className="flex flex-col sm:flex-row gap-4 justify-center"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    >
     <Link href="/contact">
      <motion.button
       className="px-8 py-3 bg-(--active) text-white rounded-full font-bold hover:shadow-lg hover:shadow-(--active)/50 transition-all whitespace-nowrap"
       variants={itemVariants}
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       {siteContent.home.contactCta}
      </motion.button>
     </Link>
     <motion.button
      className="px-8 py-3 border-2 border-(--active) text-(--active) rounded-full font-bold hover:bg-(--active) hover:text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
     >
      {siteContent.home.resumeCta}
      <ExternalLink size={16} />
     </motion.button>
    </motion.div>

    {/* 底部引导 */}
    <motion.div
     className="text-center mt-12 text-xs opacity-40"
     variants={itemVariants}
     initial="hidden"
     animate="visible"
     transition={{ delay: 0.8 }}
    >
     <div>{siteContent.home.scrollHint}</div>
     <motion.div
      className="flex justify-center mt-3"
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
     >
      <svg
       className="w-5 h-5"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
       />
      </svg>
     </motion.div>
    </motion.div>
   </div>
  </motion.div>
 );
}
