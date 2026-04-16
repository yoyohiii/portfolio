/*
 * @Author: yoyo
 * @Date: 2025-12-24 15:39:21
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-15 14:13:37
 * @FilePath: \next-react\src\app\contact\page.tsx
 * @Description:
 */
"use client";
import ElectricBorder from "@/src/components/ElectricBorder";
import personal from "@/src/data/about";
import { Mail, MapPin, Smartphone } from "lucide-react";
import * as motion from "motion/react-client";
import { siteContent } from "@/src/data/siteContent";

export default function ContactPage() {
 return (
  <div className="size-full flex-center px-6">
   <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
    <div className="lg:w-1/2">
     <div className="text-4xl lg:text-5xl font-bold mb-8 text-shadow-lg">
      {siteContent.contact.titlePrefix}
      <span className="text-(--active)">
       {siteContent.contact.titleHighlight}
      </span>
     </div>

     <div className="opacity-60 mb-6 leading-relaxed text-sm lg:text-base">
      {siteContent.contact.description}
     </div>

     <div className="border-l-4 border-(--active) px-6 py-8 opacity-90 rounded-r-2xl bg-(--active)/5">
      <div className="mb-8">
       <div className="opacity-30 mb-3">
        {siteContent.contact.workInfoTitle}
       </div>
       <div className="flex gap-2 items-center">
        <MapPin size={18} className="text-(--active)" />
        {personal.address}
       </div>
       <div className="text-(--active) mt-1">
        {siteContent.contact.availableText}
       </div>
      </div>
      <div className="mb-8">
       <div className="opacity-30 mb-3">
        {siteContent.contact.contactInfoTitle}
       </div>
       <div className="flex gap-2 items-center">
        <Smartphone size={20} />
        {personal.phone}
       </div>
       <div className="flex gap-2 mt-1 items-center">
        <Mail size={20} />
        {personal.email}
       </div>
      </div>

      <div>
       <div className="opacity-30 mb-3">
        {siteContent.contact.cooperationTitle}
       </div>
       <div className="grid gap-2 text-sm">
        {siteContent.contact.cooperation.map((item) => (
         <div key={item.label} className="flex items-start gap-2 opacity-80">
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

     <div className="flex gap-3 mt-8">
      {personal.socialMedia.map((social, index) => (
       <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full border border-(--active)/30 opacity-80 hover:opacity-100 hover:bg-(--active)/10"
       >
        {social.icon && <social.icon size={20} />}
       </motion.a>
      ))}
     </div>
    </div>

    <div className="relative lg:w-1/2">
     {/* <div className="absolute text-center w-full top-2 left-0 text-2xl">
       Contact Form
      </div> */}

     <ElectricBorder className="size-full">
      <div className="size-full p-8 lg:p-10 flex flex-col gap-4 bg-(--background)/70 backdrop-blur-sm rounded-xl">
       <div className="text-center w-full text-2xl font-bold">
        {siteContent.contact.formTitle}
       </div>
       <div className="text-center text-xs opacity-50 -mt-2 mb-1">
        {siteContent.contact.formDescription}
       </div>

       <div className="flex-1 flex flex-col gap-2 text-sm">
        {siteContent.contact.formFields.map((field, index) => (
         <div key={field.label}>
          <div
           className={`opacity-60 ${index === 0 ? "" : field.type === "textarea" ? "mt-2" : "mt-1"}`}
          >
           {field.label}
          </div>
          {field.type === "textarea" ? (
           <textarea style={formTextarea} placeholder={field.placeholder} />
          ) : (
           <input
            style={formInput}
            type={field.type}
            placeholder={field.placeholder}
           />
          )}
         </div>
        ))}
       </div>

       <div className="w-full bg-(--active) h-12 flex-center rounded-lg font-bold text-white cursor-pointer hover:brightness-105 transition-all">
        {siteContent.contact.submitCta}
       </div>
      </div>
     </ElectricBorder>
     {/* <div
      className="border-l-2 border-t-2 top-0 left-0"
      style={borderBox}
     ></div>
     <div
      className="border-r-2 border-t-2 top-0 right-0"
      style={borderBox}
     ></div>
     <div
      className="border-l-2 border-b-2 bottom-0 left-0"
      style={borderBox}
     ></div>
     <div
      className="border-r-2 border-b-2 right-0 bottom-0"
      style={borderBox}
     ></div> */}
    </div>
   </div>
  </div>
 );
}

const formInput: React.CSSProperties = {
 width: "100%",
 height: "42px",
 borderBottom:
  "1px solid color-mix(in srgb, var(--foreground) 35%, transparent)",
 background: "transparent",
 padding: "0 6px",
 outline: "none",
};

const formTextarea: React.CSSProperties = {
 width: "100%",
 height: "96px",
 border: "1px solid color-mix(in srgb, var(--foreground) 35%, transparent)",
 borderRadius: "8px",
 background: "transparent",
 padding: "8px",
 outline: "none",
};
