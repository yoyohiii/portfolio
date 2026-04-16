import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/*
 * @Author: yoyo
 * @Date: 2026-01-28 14:29:13
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 15:52:14
 * @FilePath: \next-react\src\components\Dialog.tsx
 * @Description:
 */
export default function Dialog({
 children,
 visible,
 onClose,
}: {
 children: React.ReactNode;
 visible: boolean;
 onClose: () => void;
}) {
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMounted(true);
 }, []);

 if (!mounted) {
  return null;
 }

 return createPortal(
  <AnimatePresence>
   {visible && (
    <motion.div
     className="w-screen h-screen fixed top-0 left-0 z-1000"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.3 }}
     exit={{ opacity: 0 }}
    >
     <div className="size-full absolute bg-(--background)"></div>

     <div className="size-full absolute z-1">{children}</div>

     <div
      className="absolute top-5 right-5 cursor-pointer z-2"
      onClick={onClose}
     >
      <X></X>
     </div>
    </motion.div>
   )}
  </AnimatePresence>,
  document.body,
 );
}
