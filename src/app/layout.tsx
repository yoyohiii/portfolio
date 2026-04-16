/*
 * @Author: yoyo
 * @Date: 2025-12-12 17:31:13
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 11:30:07
 * @FilePath: \next-react\src\app\layout.tsx
 * @Description:
 */
import type { Metadata } from "next";
import { ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import Theme from "../components/Theme";
// Bitcount ZCOOL_KuaiLe
const geistSans = ZCOOL_KuaiLe({
 variable: "--font-geist-sans",
 subsets: ["latin"],
 weight: "400",
});

export const metadata: Metadata = {
 title: "Yoyo's Personal Profile",
 description: "基于 Next.js 构建的个人简历与作品展示站",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="zh-CN" suppressHydrationWarning>
   <body className={`${geistSans.variable} antialiased`}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
     <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="mesh-panel absolute inset-0 opacity-35" />
      <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full blur-3xl bg-(--active)/15" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full blur-3xl bg-cyan-400/12" />
     </div>

     <main className="size-full relative z-10">
      {/* <Navbar /> */}
      {children}
     </main>

     <Theme />
    </ThemeProvider>
   </body>
  </html>
 );
}
