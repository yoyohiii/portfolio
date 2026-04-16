/*
 * @Author: yoyo
 * @Date: 2025-12-26 17:15:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 16:24:41
 * @FilePath: \next-react\src\data\about.ts
 * @Description:
 */

import { Facebook, Github, Linkedin } from "lucide-react";

const personal = {
 name: "杨 玥",
 englishName: "Yoyo",
 occupation: "前端开发工程师",
 email: "1468032960@qq.com",
 phone: "19182105197",
 address: "中国成都",
 imgs: ["yoyo1.jpg", "yoyo2.jpg", "yoyo4.jpg", "yoyo5.jpg"],
 introduce:
  "你好，我是杨玥，一名拥有6年经验的前端开发工程师。我长期深耕 WebGIS 与无人机调度领域，具备复杂 2D/3D 地图应用架构设计能力；精通 Cesium.js / Mapbox GL / Leaflet 等地图引擎，深入理解坐标系转换、空间计算及大规模矢量/栅格数据渲染优化；熟练使用 Vue3 / React / TypeScript 等前端技术栈，具备模块化开发与性能调优实战经验；同时具备 Electron 桌面端开发能力，能够构建跨平台地图可视化工具；具备从 0-1 搭建前端工程化体系的能力，能独立完成复杂业务组件库的封装与维护。我热衷于技术创新与工程实践，期待在前沿项目中持续成长与贡献。",
 socialMedia: [
  {
   platform: "GitHub",
   url: "https://github.com/yoyo",
   icon: Github,
  },
  {
   platform: "LinkedIn",
   url: "https://www.linkedin.com/in/yoyo",
   icon: Linkedin,
  },
  {
   platform: "facebook",
   url: "https://www.facebook.com/yoyo",
   icon: Facebook,
  },
 ],
};

export default personal;
