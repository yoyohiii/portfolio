import { motion } from "framer-motion";
import Dialog from "./Dialog";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
 * @Author: yoyo
 * @Date: 2026-01-28 15:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-28 16:16:18
 * @FilePath: \next-react\src\components\ImgPreview.tsx
 * @Description:
 */
export default function ImgPreview({
 list,
 visible,
 onClose,
}: {
 list: string[];
 visible: boolean;
 onClose: () => void;
}) {
 const [index, setIndex] = useState(0);

 function setImg(isNext: boolean) {
  const newIndex = isNext ? index + 1 : index - 1;
  setIndex(
   newIndex < 0 ? list.length - 1 : newIndex >= list.length ? 0 : newIndex,
  );
 }

 return (
  <Dialog visible={visible} onClose={onClose}>
   <div className="size-full flex items-center gap-10 px-10">
    <ChevronLeft
     size={30}
     className="cursor-pointer"
     onClick={() => setImg(false)}
    />
    <div className="flex-1 flex-center h-full">
     <motion.img src={list[index]} className="w-4/5 h-4/5 object-contain" />
    </div>
    <ChevronRight
     size={30}
     className="cursor-pointer"
     onClick={() => setImg(true)}
    />
   </div>
  </Dialog>
 );
}
