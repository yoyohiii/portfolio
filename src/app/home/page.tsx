/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 17:18:04
 * @FilePath: \next-react\src\app\home\page.tsx
 * @Description:
 */

"use client";
import personal from "@/src/data/about";
import { motion } from "framer-motion";
import {
 Mail,
 MapPin,
 Smartphone,
 ExternalLink,
 ArrowRight,
 BriefcaseBusiness,
 FolderKanban,
 Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import { siteContent } from "@/src/data/siteContent";
import portfolios from "@/src/data/portfolio";
import { experience } from "@/src/data/resume";

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

 const highlights = siteContent.home.highlights.map((item) => ({
  ...item,
  value:
   item.value === "experienceCount"
    ? `${experience.length}段`
    : item.value === "portfolioCount"
      ? `${portfolios.length}+`
      : item.value,
 }));

 const featuredProjects = portfolios.slice(0, 2);

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
   className="min-h-screen px-4 pb-8 pt-6 sm:p-6 flex items-start sm:items-center justify-center relative"
  >
   <div className="w-full max-w-4xl pt-8 sm:pt-0">
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
     <div className="text-4xl sm:text-5xl font-bold text-shadow-lg mb-4">
      {personal.name}
     </div>
     <div className="text-lg sm:text-2xl text-(--active) font-bold mb-2">
      {personal.occupation}
     </div>
     <div className="text-gray-500 text-xs sm:text-sm">
      {siteContent.home.englishRole}
     </div>
     <div className="max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-7 text-(--foreground)/68">
      {siteContent.home.summary}
     </div>
    </motion.div>

    {/* 关键指标 */}
    <motion.div
     className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 px-4 sm:px-0"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    >
     {highlights.map((item, idx) => (
      <motion.div
       key={idx}
       className="text-center p-4 rounded-2xl bg-(--active)/5 border border-(--active)/20 hover:border-(--active)/50 transition-all"
       variants={itemVariants}
       whileHover={{ y: -5, borderColor: "var(--active)" }}
      >
       <div className="text-xl sm:text-2xl font-bold text-(--active) mb-1">
        {item.value}
       </div>
       <div className="text-xs sm:text-sm opacity-60 tracking-wide">
        {item.label}
       </div>
      </motion.div>
     ))}
    </motion.div>

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

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5 mb-12">
     <motion.div
      className="rounded-3xl border border-(--active)/18 bg-(--active)/6 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
     >
      <div className="flex items-center gap-2 text-(--active) mb-4">
       <Sparkles size={18} />
       <span className="font-semibold">{siteContent.home.focusTitle}</span>
      </div>
      <div className="space-y-3">
       {siteContent.home.focusAreas.map((item) => (
        <motion.div
         key={item}
         className="rounded-2xl border border-(--active)/12 bg-(--primary-foreground)/60 px-4 py-3 text-sm leading-6 text-(--foreground)/70"
         variants={itemVariants}
        >
         {item}
        </motion.div>
       ))}
      </div>
     </motion.div>

     <motion.div
      className="rounded-3xl border border-(--active)/18 bg-(--primary-foreground)/68 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
     >
      <div className="flex items-center gap-2 text-(--active) mb-4">
       <BriefcaseBusiness size={18} />
       <span className="font-semibold">{siteContent.home.featuredTitle}</span>
      </div>
      <div className="text-sm opacity-65 leading-6 mb-4">
       {siteContent.home.featuredDescription}
      </div>
      <div className="space-y-3">
       {featuredProjects.map((project) => (
        <div
         key={project.name}
         className="rounded-2xl border border-(--active)/12 px-4 py-3 bg-(--background)/55"
        >
         <div className="flex items-center justify-between gap-3 mb-2">
          <div className="font-semibold text-sm">{project.name}</div>
          <div className="text-xs text-(--active)">{project.time}</div>
         </div>
         <div className="text-xs leading-6 opacity-65 line-clamp-3">
          {project.des}
         </div>
         <div className="flex flex-wrap gap-2 mt-3">
          {project.technology.slice(0, 4).map((tech) => (
           <span
            key={tech}
            className="rounded-full border border-(--active)/18 px-2.5 py-1 text-[11px] text-(--active)"
           >
            {tech}
           </span>
          ))}
         </div>
        </div>
       ))}
      </div>
     </motion.div>
    </div>

    <motion.div
     className="grid md:grid-cols-3 gap-4 mb-10"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
    >
     {siteContent.home.quickLinks.map((item) => (
      <Link key={item.href} href={item.href}>
       <motion.div
        className="h-full rounded-3xl border border-(--active)/18 bg-(--primary-foreground)/62 p-5 hover:border-(--active)/35 transition-colors"
        variants={itemVariants}
        whileHover={{ y: -4 }}
       >
        <div className="flex items-center gap-2 text-(--active) mb-3">
         <FolderKanban size={16} />
         <span className="font-semibold text-sm">{item.title}</span>
        </div>
        <div className="text-sm leading-6 opacity-65 mb-4">{item.desc}</div>
        <div className="inline-flex items-center gap-1 text-sm font-semibold text-(--active)">
         进入页面
         <ArrowRight size={15} />
        </div>
       </motion.div>
      </Link>
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
     <motion.div
      className="flex justify-center gap-3 sm:gap-4 flex-wrap"
      variants={itemVariants}
     >
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
     </motion.div>

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
       <span className="opacity-60 break-all">{personal.email}</span>
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
       className="w-full sm:w-auto px-8 py-3 bg-(--active) text-white rounded-full font-bold hover:shadow-lg hover:shadow-(--active)/50 transition-all whitespace-nowrap"
       variants={itemVariants}
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       {siteContent.home.contactCta}
      </motion.button>
     </Link>
     <Link href="/resume">
      <motion.button
       className="w-full sm:w-auto px-8 py-3 border-2 border-(--active) text-(--active) rounded-full font-bold hover:bg-(--active) hover:text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap"
       variants={itemVariants}
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       {siteContent.home.resumeCta}
       <ExternalLink size={16} />
      </motion.button>
     </Link>
    </motion.div>
   </div>
  </motion.div>
 );
}
