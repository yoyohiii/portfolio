/*
 * @Author: yoyo
 * @Date: 2026-01-05 11:14:56
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-14 18:32:38
 * @FilePath: \next-react\src\data\portfolio.ts
 * @Description:
 */
export interface IPortfolio {
 name: string;
 time: string;
 site: string;
 technology: string[];
 des: string;
 imgs: string[];
 duties: string[];
}

const portfolios: IPortfolio[] = [
 {
  name: "纵横星图桌面端",
  time: "2025年9月",
  site: "http://223.85.99.73:9091/",
  technology: [
   "Vue3",
   "TypeScript",
   "Electron",
   "Vite",
   "Koa",
   "SQLite",
   "WebSocket",
   "Cesium",
  ],
  des: "面向无人机任务规划与执行的桌面端应用，定位为“地图可视化 + 航线规划 + 任务管理 + 本地服务协同”的一体化作业平台。系统覆盖了任务全流程：计划创建、目标管理、航线生成、禁飞与高程校验、航线上传/回传、执行状态跟踪、数据导入导出等。",
  duties: [
   "负责桌面端三层架构设计与落地，构建“渲染进程业务层 + Electron 主进程能力层 + 本地 Koa 服务层”的协同模型，统一 IPC、HTTP、WS 通信边界，提升复杂业务迭代的可维护性与可扩展性。",
   "三维地图可视化引擎集成： 深度集成定制化 joCesium（基于 Cesium.js 二次封装），实现无人机实时三维轨迹渲染、视频脚印投影、航线规划交互绘制，支持多图层管理与动态样式切换。",
   "实时遥测数据流处理： 基于 SSE（EventSource）接入无人机 OSD 遥测数据流，结合 MQTT 实现云端指令下发（起降、吊舱控制等），构建双向实时通讯链路，保障多机并发监控的数据可靠性。",
   "高性能文件回放模块： 利用 Web Worker 在独立线程中解析大型地理数据文件（GeoPackage / GeoJSON），规避主线程阻塞，配合时间戳帧驱动的 Cesium 动画渲染实现飞行轨迹高清回放。",
   "工程化建设： 开发多个自定义 Vite 插件（Cesium 资源特殊打包处理、原生模块编译适配、开发/生产双环境 Electron 启动），配合 Husky + commitlint + ESLint 构建规范化 Git 工作流，有效提升团队协作一致性。",
   "国际化与权限体系： 落地 vue-i18n 多语言方案（中/英），封装 v-auth / v-auths 自定义指令实现细粒度按钮级权限控制，覆盖前后端 JWT 鉴权全链路。",
  ],
  imgs: ["hnjt1.png", "hnjt2.png", "hnjt3.png", "hnjt4.png"],
 },
 {
  name: "河南交投低空巡检可视化平台",
  time: "2025年9月",
  site: "http://223.85.99.73:9091/",
  technology: [
   "Vue3",
   "TypeScript",
   "Vite",
   "Pinia",
   "Element Plus",
   "UnoCSS",
   "Cesium",
   "ECharts",
   "Alova",
   "WebSocket",
  ],
  des: "面向低空巡检与空域运行场景，建设集数据大屏、飞行计划申报审批、专项巡检管理、档案管理、AI 病害识别、三维模型查看于一体的综合可视化平台，支撑巡检任务展示、空域态势分析、影像资料管理及识别结果闭环处理。",
  duties: [
   "主导前端架构搭建，统一路由、状态管理、请求鉴权与异常处理，提升项目可维护性与协作效率。",
   "负责 Cesium/GIS 地图可视化能力建设，完成空域、禁飞区、机库点位与巡检区域等空间数据联动展示。",
   "负责飞行计划核心流程开发，落地飞行申请、审批展示、冲突检测与飞行范围回显。",
   "负责专项巡检与档案管理模块建设，打通项目集、照片分组、模型查看、病害数据的业务闭环。",
   "设计并实现大文件上传方案（分片、断点续传、重试、MD5 校验），保障大体积影像资料稳定上传。",
   "沉淀 WebSocket 重连与地图实例复用等通用能力，提升系统稳定性并降低重复开发成本。",
  ],
  imgs: ["hnjt1.png", "hnjt2.png", "hnjt3.png", "hnjt4.png"],
 },
 {
  name: "仿真考核系统",
  time: "2025.08 ~ 2026.03",
  site: "http://223.85.99.73:9091/",
  technology: [
   "Vue3",
   "TypeScript",
   "Three.js",
   "Cesium",
   "ECharts",
   "WebSocket",
   "Alova",
   "Pinia",
   "UnoCSS",
  ],
  des: "面向无人机专业教学场景的 Web 端仿真考核平台，支持载荷三维交互仿真、在线智能组卷与考试监控、成绩多维可视化分析，覆盖教师与学生双端完整业务闭环。",
  duties: [
   " 工程化体系搭建：独立完成技术选型与工程基建，采用文件系统路由 + 多布局隔离方案；集成 Husky + Commitlint + lint-staged 质量门禁，构建从代码规范到产物优化（Terser 压缩）的完整工程链路。",
   "三维仿真引擎设计：基于 Three.js 封装 ModelView 工具类，实现载荷模型加载、零部件爆炸图动画；设计射线投影 + 吸附阈值拖拽装配系统，完整还原载荷仿真操作流程。",
   "在线考试引擎：独立设计多题型动态渲染与差异化评分模型，实现倒计时调度与切屏反作弊；采用 VeeValidate + Zod 构建类型安全表单校验，打通命题→分发→作答→评分→归档全流程闭环。",
   "成绩可视化模块：封装 useECharts Hook 统一管理图表生命周期，设计分数分布与班级对比多维看板，支持联动筛选、分页加载与 xlsx 导出。",
  ],
  imgs: ["hnjt1.png", "hnjt2.png", "hnjt3.png", "hnjt4.png"],
 },
 {
  name: "低空飞行调度指挥中心大屏",
  time: "2025.08 ~ 2026.03",
  site: "http://223.85.99.73:9091/",
  technology: [
   "Vue3",
   "TypeScript",
   "Vite",
   "Pinia",
   "Vue Router",
   "Element Plus",
   "Sass",
   "ECharts/Highcharts 3D",
   "MapLibre/ThreeGISMap",
   "Axios/WebSocket",
  ],
  des: "面向无人机专业教学场景的 Web 端仿真考核平台，支持载荷三维交互仿真、在线智能组卷与考试监控、成绩多维可视化分析，覆盖教师与学生双端完整业务闭环。",
  duties: [
   " 工程化体系搭建：独立完成技术选型与工程基建，采用文件系统路由 + 多布局隔离方案；集成 Husky + Commitlint + lint-staged 质量门禁，构建从代码规范到产物优化（Terser 压缩）的完整工程链路。",
   "三维仿真引擎设计：基于 Three.js 封装 ModelView 工具类，实现载荷模型加载、零部件爆炸图动画；设计射线投影 + 吸附阈值拖拽装配系统，完整还原载荷仿真操作流程。",
   "在线考试引擎：独立设计多题型动态渲染与差异化评分模型，实现倒计时调度与切屏反作弊；采用 VeeValidate + Zod 构建类型安全表单校验，打通命题→分发→作答→评分→归档全流程闭环。",
   "成绩可视化模块：封装 useECharts Hook 统一管理图表生命周期，设计分数分布与班级对比多维看板，支持联动筛选、分页加载与 xlsx 导出。",
  ],
  imgs: ["hnjt1.png", "hnjt2.png", "hnjt3.png", "hnjt4.png"],
 },
];

export default portfolios;
