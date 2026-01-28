/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-28 14:53:44
 * @FilePath: \next-react\src\app\home\page.tsx
 * @Description:
 */

"use client";
import personal from "@/src/data/about";
import { motion } from "framer-motion";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";

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

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.4 }}
   className="size-full flex-center relative leading-none"
  >
   {/* <div className="absolute top-0 -z-1 h-3/5 flex-center text-[500px] opacity-5">
    HELLO
   </div> */}
   <div className="w-[60%] h-full introduce">
    <div className="text-[120px] font-bold text-center mt-50 text-shadow-lg">
     {personal.name}
    </div>

    <div className="text-4xl text-center opacity-80 my-20">
     {personal.occupation}
    </div>

    <div className="flex justify-center gap-10">
     <div className="cursor-pointer font-bold hover:text-(--active)">
      GET IN TOUCH
     </div>
     <div className="text-(--active) cursor-pointer font-bold border-b border-(--active) hover:opacity-80">
      DOWNLOAD CV
     </div>
    </div>

    <div className="flex justify-around border-t border-(--primary)/40 mt-20 pt-10 text-sm">
     <div className="flex-center gap-1">
      <Smartphone size={20} color="var(--active)" />
      {personal.phone}
     </div>
     <div className="flex-center gap-1">
      <Mail size={20} color="var(--active)" />
      {personal.email}
     </div>
     <div className="flex-center gap-1">
      <MapPin size={20} color="var(--active)" />
      {personal.address}
     </div>
    </div>
   </div>
  </motion.div>
 );
}
