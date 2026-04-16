import {
 ArrowUpRight,
 BarChart3,
 Boxes,
 BriefcaseBusiness,
 ChartColumnBig,
 Clock3,
 Cpu,
 FolderKanban,
 Gauge,
 Globe,
 GraduationCap,
 Layers,
 Layers3,
 Map,
 Monitor,
 Sparkles,
 Target,
 Workflow,
 type LucideIcon,
} from "lucide-react";

export interface ContentItem {
 label: string;
 value: string;
}

export interface IconContentItem extends ContentItem {
 icon: LucideIcon;
}

export interface SkillTextItem {
 name: string;
 skills: string;
}

export interface HomeHighlight {
 label: string;
 value: string;
}

export interface HomeQuickLink {
 title: string;
 desc: string;
 href: string;
}

export interface ProcessStep {
 step: string;
 title: string;
 desc: string;
}

export interface OverviewCard {
 title: string;
 value: string;
 icon: LucideIcon;
}

export interface ContactField {
 label: string;
 placeholder: string;
 type: "text" | "textarea";
}

export const siteContent = {
 brand: {
  subtitle: "Frontend Engineer / WebGIS",
 },
 sections: [
  { id: "home", name: "首页" },
  { id: "about", name: "关于" },
  { id: "experience", name: "经历" },
  { id: "skill", name: "技能" },
  { id: "portfolio", name: "作品" },
  { id: "service", name: "服务" },
  { id: "concat", name: "联系" },
 ],
 home: {
  cooperationBadge: "开放合作",
  englishRole: "Senior Frontend Engineer | WebGIS Specialist",
  summary:
   "聚焦WebGIS、低空巡检与复杂业务前端工程化，能够独立推进从方案设计、核心模块开发到上线交付的完整前端闭环。",
  highlights: [
   { label: "工作经历", value: "experienceCount" },
   { label: "精选项目", value: "portfolioCount" },
   { label: "主力方向", value: "WebGIS / 可视化" },
   { label: "交付方式", value: "远程 / 项目制" },
  ] satisfies HomeHighlight[],
  coreSkills: [
   { name: "地图引擎", skills: "Cesium / Mapbox / Leaflet" },
   { name: "前端框架", skills: "Vue3 / React / Next.js" },
   { name: "桌面应用", skills: "Electron / 工程化" },
  ] satisfies SkillTextItem[],
  focusTitle: "我能解决的问题",
  focusAreas: [
   "复杂 WebGIS 平台架构与核心模块落地",
   "低空巡检、任务回放、实时遥测等业务交互实现",
   "中后台系统组件化、权限治理与工程规范建设",
   "官网、展示站与数据可视化页面的体验表达与性能优化",
  ],
  featuredTitle: "精选项目",
  featuredDescription: "聚焦复杂业务、地图能力与工程稳定性的代表性项目。",
  quickLinks: [
   {
    title: "查看项目作品",
    desc: "浏览 WebGIS、低空巡检与桌面端代表项目",
    href: "/portfolio",
   },
   {
    title: "了解职业经历",
    desc: "查看教育背景与近年的核心工作经验",
    href: "/experience",
   },
   {
    title: "咨询合作方式",
    desc: "适合项目制、远程长期与复杂前端系统协作",
    href: "/contact",
   },
  ] satisfies HomeQuickLink[],
  contactCta: "立即联系",
  resumeCta: "查看简历",
  scrollHint: "向下滚动了解更多",
 },
 about: {
  title: "关于我",
  tags: ["WebGIS", "低空巡检", "地图可视化", "前端工程化", "Electron"],
  resumeCta: "下载简历",
 },
 portfolio: {
  title: "项目作品",
  visitCta: "访问项目",
  previewCta: "查看演示",
  listEyebrow: "Project List",
  listTitle: "选择项目",
  summaryCards: [
   { label: "项目数量", value: "count", icon: FolderKanban },
   { label: "技术标签", value: "techCount", icon: Boxes },
   { label: "项目方向", value: "WebGIS / 可视化", icon: Sparkles },
  ],
 },
 service: {
  title: "服务内容",
  intro:
   "深耕 WebGIS 与前端工程化领域 6 年，提供从架构设计到上线交付的全流程技术服务",
  consultCta: "立即咨询",
  processSteps: [
   { step: "01", title: "需求沟通", desc: "深入了解业务目标与技术现状" },
   { step: "02", title: "方案设计", desc: "制定技术架构与实现路径" },
   { step: "03", title: "迭代交付", desc: "敏捷开发，阶段性演示与验收" },
   { step: "04", title: "上线维护", desc: "部署上线并提供持续技术支持" },
  ] satisfies ProcessStep[],
 },
 skill: {
  title: "专业技能",
  overviewTitle: "能力概览",
  overviewDescription:
   "技术栈覆盖现代前端基础、框架生态、WebGIS 与复杂业务工程化，能够在保证体验表达的同时，兼顾系统稳定性、模块复用度与长期维护成本，适合承担平台型、可视化与中后台类项目建设。",
  capabilityNotes: [
   "可独立完成复杂前端系统从架构到交付",
   "擅长地图可视化、大文件上传与实时通信场景",
   "注重可维护性、性能指标与协作效率平衡",
  ],
  overviewCards: [
   {
    title: "主力技术栈",
    value: "Vue3 / React / TypeScript",
    icon: Layers3,
   },
   {
    title: "核心业务场景",
    value: "WebGIS / 中后台 / 可视化",
    icon: Map,
   },
   {
    title: "综合熟练度",
    value: "averageProficiency",
    icon: Gauge,
   },
   {
    title: "交付关注点",
    value: "稳定性 / 性能 / 可维护性",
    icon: Workflow,
   },
  ] satisfies OverviewCard[],
  matrixEyebrow: "Skill Matrix",
  matrixTitle: "核心技能矩阵",
  matrixCountLabel: "6 项核心能力",
  skillDescriptions: {
   "HTML5 / CSS3 / JavaScript":
    "具备扎实的前端基础能力，能高质量完成页面结构、交互细节与兼容性处理。",
   TypeScript: "习惯以类型约束复杂业务模型，提升接口联调效率与长期维护稳定性。",
   "Vue3 生态（Pinia / Vite / UnoCSS）":
    "熟悉现代 Vue 工程体系，能够落地组件化、状态治理与工程化规范。",
   "React / Next.js":
    "能够使用 React/Next.js 构建内容型与交互型页面，兼顾性能与体验表达。",
   "WebGIS（Cesium / Mapbox / 地图可视化）":
    "在地图渲染、空间信息展示与业务联动方面有完整项目实战经验。",
   "工程化与性能优化（权限/上传/实时通信）":
    "具备权限模型、分片上传、实时通信与性能治理等复杂场景落地经验。",
  } as Record<string, string>,
 },
 experience: {
  title: "教育与工作经历",
  profileTitle: "职业画像",
  profileDescription:
   "具备完整前端项目交付经验，长期深耕 WebGIS、复杂中后台与可视化场景。擅长将复杂业务拆解为可演进模块，在保证体验的同时提升系统稳定性、维护性与团队协作效率。",
  capabilityTags: [
   "WebGIS 架构",
   "地图可视化",
   "Electron 客户端",
   "TypeScript 工程化",
   "实时通信",
   "复杂业务交付",
  ],
  stats: [
   { label: "工作经历", value: "experienceCount", icon: BriefcaseBusiness },
   { label: "教育经历", value: "educationCount", icon: GraduationCap },
   { label: "核心方向", value: "WebGIS + 工程化", icon: Target },
   { label: "当前状态", value: "在职 · 持续迭代", icon: ChartColumnBig },
  ] satisfies IconContentItem[],
  educationTitle: "教育经历",
  experienceTitle: "工作经历",
  prevEducationAria: "上一条教育经历",
  nextEducationAria: "下一条教育经历",
  prevExperienceAria: "上一条工作经历",
  nextExperienceAria: "下一条工作经历",
 },
 contact: {
  titlePrefix: "Get In",
  titleHighlight: " Touch",
  description:
   "如果你正在寻找能够独立推进复杂前端系统、并兼顾地图可视化与工程稳定性的开发伙伴，欢迎随时联系。",
  workInfoTitle: "工作信息",
  availableText: "Available for work",
  contactInfoTitle: "联系方式",
  cooperationTitle: "协作说明",
  cooperation: [
   { label: "合作类型", value: "项目制 / 驻场 / 远程长期" },
   { label: "响应时间", value: "通常 24 小时内" },
   { label: "可支持时区", value: "北京时间为主，可跨时区协作" },
  ] satisfies ContentItem[],
  formTitle: "联系表单",
  formDescription: "简要描述你的项目背景、目标和时间计划",
  formFields: [
   { label: "姓名 / 公司", placeholder: "请输入姓名或团队名称", type: "text" },
   { label: "邮箱", placeholder: "请输入有效邮箱", type: "text" },
   {
    label: "项目类型",
    placeholder: "WebGIS / 官网 / 中后台 / 其他",
    type: "text",
   },
   {
    label: "留言内容",
    placeholder: "可补充项目规模、交付周期和预算范围",
    type: "textarea",
   },
  ] satisfies ContactField[],
  submitCta: "发送留言",
  cooperationIcon: Clock3,
 },
 resume: {
  timelineTitle: "教育与工作经历",
  skillTitle: "专业技能",
 },
 serviceItems: [
  {
   name: "WebGIS 地图应用开发",
   des: "基于 Cesium.js / Mapbox GL / Leaflet 等引擎开发 2D/3D 地图应用，涵盖坐标系转换、空间计算与大规模矢量/栅格数据渲染优化，构建高性能地理可视化系统。",
   icon: Map,
   tags: ["Cesium.js", "Mapbox GL", "WebGL"],
  },
  {
   name: "无人机调度与低空巡检系统",
   des: "提供航线规划、遥测监控、任务回放、飞行审批等全链路前端能力，结合 Electron 构建跨平台桌面端软件，支撑复杂低空作业场景的完整业务闭环。",
   icon: Cpu,
   tags: ["Electron", "WebSocket", "Cesium", "Vue3"],
  },
  {
   name: "前端系统架构设计",
   des: "从需求拆解到模块划分，制定可维护、可扩展的前端架构方案，覆盖工程化体系搭建、权限控制、组件库封装及大型项目代码治理。",
   icon: Layers,
   tags: ["Vue3", "React", "TypeScript", "Vite"],
  },
  {
   name: "企业官网与品牌展示站",
   des: "定制响应式官网与品牌展示站，注重视觉表达与动效体验，兼顾 SEO 优化、性能调优与跨浏览器兼容，助力品牌形象数字化升级。",
   icon: Globe,
   tags: ["Next.js", "TailwindCSS", "Framer Motion", "SEO"],
  },
  {
   name: "互动数据可视化",
   des: "将复杂业务数据转化为直观的可视化界面，涵盖数据大屏、报表看板与演示场景，提升信息传达效率与决策支撑能力。",
   icon: BarChart3,
   tags: ["ECharts", "Canvas", "Three.js"],
  },
  {
   name: "Electron 跨平台桌面应用",
   des: "基于 Electron 搭建兼容 Windows / macOS 的桌面应用，采用渲染/主进程/本地服务三层解耦架构，实现分片上传、断点续传、离线地图等本地增强能力。",
   icon: Monitor,
   tags: ["Electron", "Node.js", "IPC 通信", "本地存储"],
  },
 ],
};

export const skillHighlights = [
 {
  title: "复杂系统交付",
  desc: "能够从需求拆解、模块设计到落地联调，独立推进复杂前端项目闭环。",
  icon: Cpu,
 },
 {
  title: "性能与稳定性",
  desc: "关注首屏体验、模块复用与异常治理，减少复杂业务下的维护成本。",
  icon: ChartColumnBig,
 },
 {
  title: "业务理解与抽象",
  desc: "擅长把业务流程抽象成可复用能力，提升团队协作一致性与开发效率。",
  icon: Sparkles,
 },
];

export const skillScenarioTags = [
 "地图可视化",
 "低空巡检",
 "后台系统",
 "多角色权限",
 "实时通信",
 "分片上传",
 "组件化建设",
 "性能治理",
];

export const portfolioSummaryIcons = {
 FolderKanban,
 Boxes,
 Sparkles,
};

export const contactArrowIcon = ArrowUpRight;
