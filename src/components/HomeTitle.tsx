/*
 * @Author: yoyo
 * @Date: 2026-01-13 13:57:19
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 15:39:13
 * @FilePath: \next-react\src\components\HomeTitle.tsx
 * @Description:
 */
import { motion } from "framer-motion";

export default function HomeTitle({ title }: { title: string }) {
 return (
  <div className="flex flex-col items-center mb-10">
   {/* <div className="soft-pill mb-3">Section</div> */}
   <div className="text-2xl md:text-3xl font-bold text-shadow-lg mb-1">
    {title}
   </div>
   <motion.div
    className="bg-(--active) h-0.5"
    initial={{ width: "0px" }}
    whileInView={{ width: "20%" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: false }}
   ></motion.div>
  </div>
 );
}
