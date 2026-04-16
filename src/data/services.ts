/*
 * @Author: yoyo
 * @Date: 2026-01-12 13:55:39
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 11:37:07
 * @FilePath: \next-react\src\data\services.ts
 * @Description:
 */
import type { LucideIcon } from "lucide-react";
import { siteContent } from "./siteContent";

interface Service {
 name: string;
 des: string;
 icon: LucideIcon;
 tags: string[];
}

const services: Service[] = siteContent.serviceItems;

export { services };
export type { Service };
