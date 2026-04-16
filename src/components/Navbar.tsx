/*
 * @Author: yoyo
 * @Date: 2025-12-23 17:01:17
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 17:03:50
 * @FilePath: \next-react\src\components\Navbar.tsx
 * @Description:
 */

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
 const pathName = usePathname();

 const bars = [
  { title: "首页", link: "/" },
  { title: "关于", link: "/about" },
  { title: "经历", link: "/experience" },
  { title: "技能", link: "/skill" },
  { title: "作品", link: "/portfolio" },
  { title: "服务", link: "/service" },
  { title: "联系", link: "/contact" },
 ];

 return (
  <div className="mx-4 mt-20 sm:mt-4 sm:mx-20 lg:mx-[24%] xl:mx-[30%] transition-all duration-1000 border rounded-2xl overflow-x-auto whitespace-nowrap">
   <div className="h-12 min-w-max rounded-2xl flex items-center gap-2 px-2 sm:gap-4 sm:px-4 justify-start sm:justify-around">
    {bars.map((bar) => (
     <Link
      key={bar.title}
      href={bar.link}
      className="shrink-0 rounded-full px-3 py-1.5 text-sm sm:text-base transition-colors"
      style={{
       color: pathName === bar.link ? "var(--active)" : "var(--primary)",
      }}
     >
      {bar.title}
     </Link>
    ))}
   </div>
  </div>
 );
};

export default Navbar;
