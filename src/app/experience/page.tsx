/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-28 16:37:55
 * @FilePath: \next-react\src\app\experience\page.tsx
 * @Description:
 */
"use client";
import { CalendarDays } from "lucide-react";
import { education, experience } from "@/src/data/resume";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import SpotlightCard from "@/src/components/SpotlightCard";
import HomeTitle from "@/src/components/HomeTitle";

export default function ExperiencePage() {
 return (
  <div className="py-20 flex flex-col items-center">
   <HomeTitle title="EDUCATION & EXPERIENCE" />
   <div className="w-[70%] flex gap-14">
    <AnimateFadeIn className="flex-1">
     {education.map((ele, index) => (
      <div key={index} className="border-l-2 border-(--active) relative p-4">
       {/* <Heart className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" /> */}
       <div className="absolute top-1/2 left-0 -translate-x-2.75 -translate-y-1/2 w-5 h-5 bg-(--active) rounded-full"></div>
       <div className="p-4 bg-(--primary-foreground)">
        <div>{ele.name}</div>
        <div className="flex gap-1 my-2 text-(--active) text-sm opacity-80">
         <CalendarDays size={20} />
         {ele.time}
        </div>
        <div className="opacity-50">{ele.info}</div>
       </div>
      </div>
     ))}
    </AnimateFadeIn>

    <AnimateFadeIn className="flex-1">
     {experience.map((ele, index) => (
      <div key={index} className="border-l-2 border-(--active) relative p-4">
       {/* <Heart className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" /> */}
       <div className="absolute top-1/2 left-0 -translate-x-2.75 -translate-y-1/2 w-5 h-5 bg-(--active) rounded-full"></div>
       <div className="p-4 bg-(--primary-foreground)">
        <div>{ele.name}</div>
        <div className="flex gap-1 my-2 text-(--active) text-sm opacity-80">
         <CalendarDays size={20} />
         {ele.time}
        </div>
        <div className="opacity-50">{ele.info}</div>
       </div>
      </div>
     ))}
    </AnimateFadeIn>
   </div>
  </div>
 );
}
