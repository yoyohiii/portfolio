/*
 * @Author: yoyo
 * @Date: 2026-01-20 16:44:06
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:08:30
 * @FilePath: \next-react\src\app\page.tsx
 * @Description:
 */
"use client";

import { animate, motion, useSpring } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import Link from "next/link";
import Home from "./home/page";
import About from "./about/page";
import Concat from "./contact/page";
import Service from "./service/page";
import Skill from "./skill/page";
import Experience from "./experience/page";
import Portfolio from "./portfolio/page";
import personal from "../data/about";
import { siteContent } from "../data/siteContent";

export default function HomePage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);
 const [index, setIndex] = useState(0);
 const [isScrolling, setIsScrolling] = useState(false);
 const scaleY = useSpring(0, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
 });

 const sections = [
  { ...siteContent.sections[0], component: Home },
  { ...siteContent.sections[1], component: About },
  { ...siteContent.sections[2], component: Experience },
  { ...siteContent.sections[3], component: Skill },
  { ...siteContent.sections[4], component: Portfolio },
  { ...siteContent.sections[5], component: Service },
  { ...siteContent.sections[6], component: Concat },
 ];
 const totalSections = sections.length;

 const scrollToSection = useCallback(
  (current: number) => {
   if (current < 0 || current >= totalSections) return;
   setIndex(current);
   scaleY.set((current + 1) / totalSections);
   const targetSection = sectionsRef.current[current];
   if (targetSection && containerRef.current) {
    const container = containerRef.current;
    const targetTop = targetSection.offsetTop;
    // 使用 Framer Motion 的 animate 实现平滑滚动
    animate(container.scrollTop, targetTop, {
     type: "spring",
     stiffness: 100,
     damping: 20,
     onUpdate: (value) => {
      container.scrollTop = value;
     },
    });
   }
  },
  [scaleY, totalSections],
 );

 // 滚轮事件处理
 useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
   if (isScrolling) return;

   e.preventDefault();
   setIsScrolling(true);

   if (e.deltaY > 0 && index < totalSections - 1) {
    // 向下滚动
    scrollToSection(index + 1);
   } else if (e.deltaY < 0 && index > 0) {
    // 向上滚动
    scrollToSection(index - 1);
   }

   // 防抖，防止连续滚动
   setTimeout(() => setIsScrolling(false), 500);
  };
  const container = containerRef.current;
  if (container) {
   container.addEventListener("wheel", handleWheel, { passive: false });
  }

  return () => {
   if (container) {
    container.removeEventListener("wheel", handleWheel);
   }
  };
 }, [index, isScrolling, scrollToSection, totalSections]);

 useEffect(() => {
  const split = SplitText.create(".logo", { type: "words, chars" });

  // now animate the characters in a staggered fashion
  gsap.from(split.chars, {
   x: 150,
   opacity: 0,
   duration: 0.7,
   ease: "power4",
   stagger: 0.04,
  });
 }, []);

 return (
  <div className="size-full">
   <div className="logo fixed top-5 left-5 z-20 section-shell px-4 py-2 flex items-center gap-3">
    <div className="h-9 w-9 rounded-xl bg-(--active)/20 text-(--active) flex items-center justify-center font-bold">
     {personal.englishName.slice(0, 1).toUpperCase()}
    </div>
    <div>
     <div className="font-bold text-base text-(--active)">
      {personal.englishName}
     </div>
     <div className="text-xs opacity-60">{siteContent.brand.subtitle}</div>
    </div>
   </div>

   {/* content  */}
   <div ref={containerRef} className="size-full overflow-y-auto">
    {sections.map((ele, i) => (
     <motion.section
      key={ele.id}
      ref={(el: HTMLDivElement) => {
       if (el) sectionsRef.current[i] = el;
      }}
      id={ele.id}
      className="h-screen flex flex-col px-4 py-4"
     >
      <div className="size-full section-shell overflow-hidden">
       {ele.component ? <ele.component /> : null}
      </div>
     </motion.section>
    ))}
   </div>

   {/* 侧边导航 */}
   <div className="fixed flex flex-col left-7 top-1/4 z-20 text-sm gap-3">
    {sections.map((ele, i) => (
     <motion.div
      key={ele.id}
      className="cursor-pointer flex items-center gap-2"
      initial={index === i ? activeMenu : primaryMenu}
      animate={index === i ? activeMenu : primaryMenu}
      onClick={() => scrollToSection(i)}
      whileHover={{ scale: 1.05, opacity: 1 }}
     >
      <span className="h-2 w-2 rounded-full bg-current"></span>
      <span>{ele.name}</span>
     </motion.div>
    ))}
   </div>

   {/* 社交媒体图标 */}
   <div className="flex flex-col gap-3 fixed right-6 bottom-20 z-20">
    {personal.socialMedia.map((social, index) => (
     <Link
      key={index}
      href={social.url}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full border border-(--active)/30 hover:bg-(--active)/10 transition-colors"
      aria-label={social.platform}
     >
      {social.icon && <social.icon size={16} color="var(--active)" />}
     </Link>
    ))}
   </div>

   {/* 滚动条 */}
   <div className="fixed right-10 top-1/2 z-20 h-1/2 w-0.5 bg-(--primary)/30 -translate-y-1/2 flex rounded-full overflow-hidden">
    <motion.div
     className="w-full bg-(--active)"
     style={{
      scaleY,
     }}
    />
   </div>
  </div>
 );
}

const activeMenu = {
 opacity: 1,
 scale: 1,
 color: "var(--active)",
 fontWeight: "bold",
};

const primaryMenu = {
 opacity: 0.6,
 scale: 1,
 color: "var(--foreground)",
 fontWeight: "normal",
};
