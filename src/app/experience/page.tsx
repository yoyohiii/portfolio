/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:02:57
 * @FilePath: \next-react\src\app\experience\page.tsx
 * @Description:
 */
"use client";
import {
 BriefcaseBusiness,
 CalendarDays,
 ChevronLeft,
 ChevronRight,
 GraduationCap,
 Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { education, experience } from "@/src/data/resume";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import HomeTitle from "@/src/components/HomeTitle";
import { siteContent } from "@/src/data/siteContent";

export default function ExperiencePage() {
 const [educationIndex, setEducationIndex] = useState(0);
 const [experienceIndex, setExperienceIndex] = useState(0);

 const stats = siteContent.experience.stats.map((item) => ({
  ...item,
  value:
   item.value === "experienceCount"
    ? `${experience.length}段`
    : item.value === "educationCount"
      ? `${education.length}段`
      : item.value,
 }));

 const activeEducation = education[educationIndex];
 const activeExperience = experience[experienceIndex];

 const goPrevEducation = () => {
  setEducationIndex((prev) => (prev - 1 + education.length) % education.length);
 };

 const goNextEducation = () => {
  setEducationIndex((prev) => (prev + 1) % education.length);
 };

 const goPrevExperience = () => {
  setExperienceIndex(
   (prev) => (prev - 1 + experience.length) % experience.length,
  );
 };

 const goNextExperience = () => {
  setExperienceIndex((prev) => (prev + 1) % experience.length);
 };

 return (
  <div className="relative py-10 px-6 md:px-10">
   <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 w-[90%] max-w-6xl rounded-[3rem] bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--active)_20%,transparent),transparent_70%)]" />

   <div className="relative mx-auto w-full h-full max-w-7xl flex flex-col">
    <HomeTitle title={siteContent.experience.title} />

    <AnimateFadeIn className="section-shell p-6 md:p-8 mb-6" delay={0.1}>
     <div className="flex items-center gap-2 text-(--active) mb-4">
      <Sparkles size={18} />
      <span className="font-semibold">
       {siteContent.experience.profileTitle}
      </span>
     </div>

     <p className="text-sm md:text-base leading-7 text-(--foreground)/70">
      {siteContent.experience.profileDescription}
     </p>

     <div className="flex flex-wrap gap-2 mt-5">
      {siteContent.experience.capabilityTags.map((tag) => (
       <span key={tag} className="soft-pill">
        {tag}
       </span>
      ))}
     </div>

     <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
      {stats.map((item) => {
       const Icon = item.icon;
       return (
        <div
         key={item.label}
         className="rounded-2xl border border-(--active)/20 bg-(--primary-foreground)/65 p-4"
        >
         <div className="flex items-center gap-2 text-(--active)/90 text-sm mb-2">
          <Icon size={16} />
          <span>{item.label}</span>
         </div>
         <div className="font-semibold text-sm md:text-base">{item.value}</div>
        </div>
       );
      })}
     </div>
    </AnimateFadeIn>

    <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-10">
     <AnimateFadeIn className="section-shell p-6 md:p-8 h-95" delay={0.15}>
      <div className="flex items-center justify-between gap-3 mb-5">
       <div className="flex items-center gap-2">
        <GraduationCap size={18} className="text-(--active)" />
        <h3 className="font-semibold">
         {siteContent.experience.educationTitle}
        </h3>
       </div>

       <div className="flex items-center gap-2">
        <button
         type="button"
         aria-label={siteContent.experience.prevEducationAria}
         disabled={education.length <= 1}
         onClick={goPrevEducation}
         className="size-8 rounded-full border border-(--active)/25 bg-(--primary-foreground)/70 hover:bg-(--primary-foreground) transition-colors flex-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
         <ChevronLeft size={16} />
        </button>
        <button
         type="button"
         aria-label={siteContent.experience.nextEducationAria}
         disabled={education.length <= 1}
         onClick={goNextEducation}
         className="size-8 rounded-full border border-(--active)/25 bg-(--primary-foreground)/70 hover:bg-(--primary-foreground) transition-colors flex-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
         <ChevronRight size={16} />
        </button>
       </div>
      </div>

      <div className="h-60">
       <AnimatePresence mode="wait">
        <motion.div
         key={`education-${educationIndex}`}
         initial={{ opacity: 0, x: 26 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -26 }}
         transition={{ duration: 0.3 }}
        >
         <div className="rounded-2xl border border-(--active)/15 bg-(--primary-foreground)/70 p-4">
          <div className="font-semibold">{activeEducation.school}</div>
          <div className="flex items-center gap-1 my-2 text-(--active) text-sm opacity-85">
           <CalendarDays size={16} />
           {activeEducation.time}
          </div>
          <div className="text-sm leading-6 text-(--foreground)/65">
           {activeEducation.info}
          </div>
         </div>
        </motion.div>
       </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
       {education.map((_item, index) => (
        <button
         key={`edu-dot-${index}`}
         type="button"
         onClick={() => setEducationIndex(index)}
         aria-label={`切换到第${index + 1}条教育经历`}
         className={`h-2.5 rounded-full transition-all ${
          educationIndex === index
           ? "w-8 bg-(--active)"
           : "w-2.5 bg-(--active)/35 hover:bg-(--active)/55"
         }`}
        />
       ))}
      </div>
     </AnimateFadeIn>

     <AnimateFadeIn className="section-shell p-6 md:p-8 h-95" delay={0.2}>
      <div className="flex items-center justify-between gap-3 mb-5">
       <div className="flex items-center gap-2">
        <BriefcaseBusiness size={18} className="text-(--active)" />
        <h3 className="font-semibold">
         {siteContent.experience.experienceTitle}
        </h3>
       </div>

       <div className="flex items-center gap-2">
        <button
         type="button"
         aria-label={siteContent.experience.prevExperienceAria}
         disabled={experience.length <= 1}
         onClick={goPrevExperience}
         className="size-8 rounded-full border border-(--active)/25 bg-(--primary-foreground)/70 hover:bg-(--primary-foreground) transition-colors flex-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
         <ChevronLeft size={16} />
        </button>
        <button
         type="button"
         aria-label={siteContent.experience.nextExperienceAria}
         disabled={experience.length <= 1}
         onClick={goNextExperience}
         className="size-8 rounded-full border border-(--active)/25 bg-(--primary-foreground)/70 hover:bg-(--primary-foreground) transition-colors flex-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
         <ChevronRight size={16} />
        </button>
       </div>
      </div>

      <div className="h-60">
       <AnimatePresence mode="wait">
        <motion.div
         key={`experience-${experienceIndex}`}
         initial={{ opacity: 0, x: 26 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -26 }}
         transition={{ duration: 0.3 }}
        >
         <div className="rounded-2xl border border-(--active)/15 bg-(--primary-foreground)/70 p-4">
          <div className="font-semibold text-sm md:text-base">
           <span>{activeExperience.company}</span>
           <span className="opacity-40 px-1">|</span>
           <span className="text-(--foreground)/65">
            {activeExperience.occupation}
           </span>
          </div>
          <div className="flex items-center gap-1 my-2 text-(--active) text-sm opacity-85">
           <CalendarDays size={16} />
           {activeExperience.time}
          </div>
          <div className="text-sm leading-6 text-(--foreground)/65 mb-3">
           {activeExperience.info}
          </div>

          {/* <div className="flex flex-wrap gap-2">
           {extractHighlights(activeExperience.info).map((highlight, i) => (
            <span
             key={`${activeExperience.company}-${i}`}
             className="rounded-full border border-(--active)/20 px-2.5 py-1 text-xs text-(--foreground)/70"
            >
             {highlight}
            </span>
           ))}
          </div> */}
         </div>
        </motion.div>
       </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
       {experience.map((_item, index) => (
        <button
         key={`exp-dot-${index}`}
         type="button"
         onClick={() => setExperienceIndex(index)}
         aria-label={`切换到第${index + 1}条工作经历`}
         className={`h-2.5 rounded-full transition-all ${
          experienceIndex === index
           ? "w-8 bg-(--active)"
           : "w-2.5 bg-(--active)/35 hover:bg-(--active)/55"
         }`}
        />
       ))}
      </div>
     </AnimateFadeIn>
    </div>
   </div>
  </div>
 );
}
