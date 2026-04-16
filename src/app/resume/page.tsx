/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 14:01:09
 * @FilePath: \next-react\src\app\resume\page.tsx
 * @Description:
 */
"use client";
import { motion } from "framer-motion";
import { CalendarDays, Rabbit } from "lucide-react";
import { education, experience, skills } from "@/src/data/resume";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import SpotlightCard from "@/src/components/SpotlightCard";
import { siteContent } from "@/src/data/siteContent";

export default function LayoutPage() {
 //  const [positions, setPositions] = useState<{ top: string; left: string }[]>();

 //  useEffect(() => {
 //   const posis = Array.from({ length: 6 }).map(() => ({
 //    top: `${Math.random() * 60 + 20}%`,
 //    left: `${Math.random() * 60 + 20}%`,
 //   }));
 //   setPositions(posis);
 //  }, []);

 return (
  <div className="py-10 px-[15%]">
   <div className="text-2xl my-10 title-border text-shadow-lg">
    {siteContent.resume.timelineTitle}
   </div>
   <div className="w-full h-full flex gap-14">
    <AnimateFadeIn className="flex-1">
     {education.map((ele, index) => (
      <div key={index} className="border-l-2 border-(--active) relative p-4">
       <div className="absolute top-1/2 left-0 -translate-x-2.75 -translate-y-1/2 w-5 h-5 bg-(--active) rounded-full"></div>
       <SpotlightCard className="p-4 bg-(--primary-foreground)">
        <div>{ele.school}</div>
        <div className="flex gap-1 my-2 text-(--active) text-sm opacity-80">
         <CalendarDays size={20} />
         {ele.time}
        </div>
        <div className="opacity-50">{ele.info}</div>
       </SpotlightCard>
      </div>
     ))}
    </AnimateFadeIn>

    <AnimateFadeIn className="flex-1">
     {experience.map((ele, index) => (
      <div key={index} className="border-l-2 border-(--active) relative p-4">
       {/* <Heart className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" /> */}
       <div className="absolute top-1/2 left-0 -translate-x-2.75 -translate-y-1/2 w-5 h-5 bg-(--active) rounded-full"></div>
       <SpotlightCard className="p-4 bg-(--primary-foreground)">
        <div>{ele.company}</div>
        <div className="flex gap-1 my-2 text-(--active) text-sm opacity-80">
         <CalendarDays size={20} />
         {ele.time}
        </div>
        <div className="opacity-50">{ele.info}</div>
       </SpotlightCard>
      </div>
     ))}
    </AnimateFadeIn>
   </div>

   <div className="text-2xl my-10 title-border text-shadow-lg">
    {siteContent.resume.skillTitle}
   </div>

   <div className="grid grid-cols-2 gap-20 flex-wrap">
    {skills.map((ele, index) => (
     <div key={index}>
      <div className="font-bold mb-2 flex justify-between">
       <span>{ele.name}</span>
       <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
       >
        {ele.percent}
       </motion.span>
      </div>
      <div className="bg-(--primary-foreground) h-2 rounded-xl relative">
       <motion.div
        className="bg-(--active) h-full rounded-xl opacity-50"
        initial={{ width: 0 }}
        whileInView={{ width: ele.percent }}
        viewport={{ once: true }}
        transition={{
         duration: 5,
        }}
       ></motion.div>

       <motion.div
        className="absolute -top-2"
        initial={{ left: 0 }}
        whileInView={{ left: `calc(${ele.percent} - 10px)` }}
        viewport={{ once: true }}
        transition={{
         duration: 5,
        }}
       >
        <Rabbit color="var(--active)" />
       </motion.div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
