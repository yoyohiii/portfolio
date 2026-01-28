/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-28 16:31:12
 * @FilePath: \next-react\src\app\skill\page.tsx
 * @Description:
 */
"use client";
import { motion } from "framer-motion";
import { Rabbit } from "lucide-react";
import { skills } from "@/src/data/resume";
import HomeTitle from "@/src/components/HomeTitle";

export default function SkillPage() {
 return (
  <div className="pt-20 size-full flex flex-col items-center gap-20">
   <HomeTitle title="SKILLS" />
   <div className="w-[60%] bg-(--primary-foreground) p-20 rounded-2xl">
    <div className="grid grid-cols-2 gap-20 flex-wrap">
     {skills.map((ele, index) => (
      <div key={index}>
       <div className="font-bold mb-2 flex justify-between">
        <span>{ele.name}</span>
        <motion.span
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 5 }}
        >
         {ele.percent}
        </motion.span>
       </div>
       <div className="bg-(--secondary-foreground) h-2 rounded-xl relative">
        <motion.div
         className="bg-(--active) h-full rounded-xl"
         initial={{ width: 0 }}
         whileInView={{ width: ele.percent }}
         viewport={{ once: true }}
         transition={{
          duration: 5,
         }}
        />

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
  </div>
 );
}
