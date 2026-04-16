/*
 * @Author: yoyo
 * @Date: 2025-12-24 15:39:21
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 17:30:42
 * @FilePath: \next-react\src\app\contact\page.tsx
 * @Description:
 */
"use client";
import ElectricBorder from "@/src/components/ElectricBorder";
import personal from "@/src/data/about";
import { Mail, MapPin, Smartphone } from "lucide-react";
import * as motion from "motion/react-client";
import { siteContent } from "@/src/data/siteContent";
import { AnimateFadeIn } from "@/src/components/AnimateCom";

export default function ContactPage() {
 return (
  <AnimateFadeIn className="size-full overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
   <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:gap-10">
    <div className="lg:w-1/2">
     <div className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
      {siteContent.contact.titlePrefix}
      <span className="text-(--active)">
       {siteContent.contact.titleHighlight}
      </span>
     </div>

     <div className="mt-4 max-w-xl text-sm leading-relaxed opacity-70 lg:text-base">
      {siteContent.contact.description}
     </div>

     <div className="mt-6 rounded-2xl border border-(--active)/20 bg-(--active)/5 px-4 py-6 opacity-95 shadow-[0_16px_40px_color-mix(in_srgb,var(--active)_12%,transparent)] backdrop-blur-sm sm:px-6 sm:py-8">
      <div className="mb-8 border-b border-(--foreground)/10 pb-6 last:mb-0 last:border-b-0 last:pb-0">
       <div className="opacity-30 mb-3">
        {siteContent.contact.workInfoTitle}
       </div>
       <div className="flex items-center gap-2">
        <MapPin size={18} className="text-(--active)" />
        {personal.address}
       </div>
       <div className="text-(--active) mt-1">
        {siteContent.contact.availableText}
       </div>
      </div>
      <div className="mb-8 border-b border-(--foreground)/10 pb-6 last:mb-0 last:border-b-0 last:pb-0">
       <div className="opacity-30 mb-3">
        {siteContent.contact.contactInfoTitle}
       </div>
       <div className="flex items-center gap-2 break-all">
        <Smartphone size={20} className="text-(--active)" />
        {personal.phone}
       </div>
       <div className="mt-1 flex items-center gap-2 break-all">
        <Mail size={20} className="text-(--active)" />
        {personal.email}
       </div>
      </div>

      <div>
       <div className="opacity-30 mb-3">
        {siteContent.contact.cooperationTitle}
       </div>
       <div className="grid gap-2 text-sm">
        {siteContent.contact.cooperation.map((item) => (
         <div
          key={item.label}
          className="flex items-start gap-2 rounded-md px-2 py-1.5 opacity-85 transition-colors hover:bg-(--active)/8"
         >
          <siteContent.contact.cooperationIcon
           size={15}
           className="mt-0.5 text-(--active)"
          />
          <span>
           {item.label}：{item.value}
          </span>
         </div>
        ))}
       </div>
      </div>
     </div>

     <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
      {personal.socialMedia.map((social, index) => (
       <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-(--active)/35 bg-(--background)/65 opacity-85 shadow-[0_8px_20px_color-mix(in_srgb,var(--active)_10%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-(--active)/10 hover:opacity-100"
       >
        {social.icon && <social.icon size={20} />}
       </motion.a>
      ))}
     </div>
    </div>

    <div className="relative w-full lg:w-1/2">
     <ElectricBorder className="size-full">
      <div className="mesh-panel size-full rounded-xl border border-(--foreground)/10 bg-(--background)/75 p-5 backdrop-blur-md sm:p-8 lg:p-10">
       <div className="w-full text-center text-xl font-bold sm:text-2xl">
        {siteContent.contact.formTitle}
       </div>
       <div className="-mt-1 mb-5 text-center text-xs opacity-55">
        {siteContent.contact.formDescription}
       </div>

       <div className="flex flex-1 flex-col gap-3 text-sm">
        {siteContent.contact.formFields.map((field, index) => (
         <div key={field.label}>
          <div
           className={`mb-1 opacity-65 ${index === 0 ? "" : field.type === "textarea" ? "mt-1" : ""}`}
          >
           {field.label}
          </div>
          {field.type === "textarea" ? (
           <textarea
            className={formTextareaClass}
            placeholder={field.placeholder}
           />
          ) : (
           <input
            className={formInputClass}
            type={field.type}
            placeholder={field.placeholder}
           />
          )}
         </div>
        ))}
       </div>

       <div className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-(--active) text-sm font-bold text-white shadow-[0_16px_34px_color-mix(in_srgb,var(--active)_34%,transparent)] transition-all hover:-translate-y-0.5 hover:brightness-105 sm:text-base">
        {siteContent.contact.submitCta}
       </div>
      </div>
     </ElectricBorder>
    </div>
   </div>
  </AnimateFadeIn>
 );
}

const formInputClass =
 "h-11 w-full rounded-md border border-(--foreground)/18 bg-(--background)/40 px-3 outline-none transition-all placeholder:text-(--foreground)/40 focus:border-(--active)/60 focus:bg-(--background)/60 focus:ring-2 focus:ring-(--active)/18";

const formTextareaClass =
 "h-28 w-full rounded-md border border-(--foreground)/18 bg-(--background)/40 px-3 py-2 outline-none transition-all placeholder:text-(--foreground)/40 focus:border-(--active)/60 focus:bg-(--background)/60 focus:ring-2 focus:ring-(--active)/18";
