/*
 * @Author: yoyo
 * @Date: 2026-01-07 16:12:43
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-27 17:41:59
 * @FilePath: \next-react\src\components\AnimateCom.tsx
 * @Description:
 */
// 1. 创建全局动画包装组件
import { motion, Easing } from "framer-motion";
import { CSSProperties } from "react";

// 全局动画配置
const fadeInVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0 },
};

// 淡入
export function AnimateFadeIn({
 children,
 className,
 style,
 delay = 0.5,
 once = true,
 ease = "easeOut",
 duration = 0.4,
}: {
 children: React.ReactNode;
 className?: string;
 style?: CSSProperties;
 delay?: number;
 once?: boolean;
 ease?: Easing;
 duration?: number;
}) {
 return (
  <motion.div
   initial="hidden"
   whileInView="visible"
   variants={fadeInVariants}
   viewport={{ once, amount: 0.1 }}
   transition={{ duration, ease, delay }}
   className={className}
   style={style}
  >
   {children}
  </motion.div>
 );
}
