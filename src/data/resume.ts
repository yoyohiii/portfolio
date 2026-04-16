/*
 * @Author: yoyo
 * @Date: 2026-01-04 17:19:01
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 11:22:05
 * @FilePath: \next-react\src\data\resume.ts
 * @Description:
 */
const education = [
 {
  school: "攀枝花学院",
  time: "2016.09 - 2020.06",
  info:
   "网络工程专业，本科。系统学习数据结构、计算机网络、数据库与软件工程等核心课程，打下扎实计算机基础；在校期间持续参与项目实践，形成了工程化开发、问题拆解与跨团队协作能力。",
 },
];

const experience = [
 {
  company: "成都纵横自动化技术股份有限公司",
  occupation: "前端开发工程师(webgis方向)",
  time: "2023.09 - 至今",
  info:
   "主导 WebGIS 与低空巡检类项目前端架构设计与核心模块交付，负责 Vue3 + TypeScript + Cesium + Electron 技术体系落地。完成三层解耦架构（渲染/主进程/本地服务）建设，支撑航线规划、遥测监控、任务回放、飞行审批、档案管理等复杂业务闭环；沉淀 WebSocket 重连、地图实例复用、分片上传与断点续传等通用能力，显著提升系统稳定性与可维护性。",
 },
 {
  company: "北京顺娱网络科技有限公司",
  occupation: "前端开发工程师",
  time: "2022.03 - 2023.06",
  info:
   "负责中后台与活动业务前端开发，推动组件化与规范化建设。基于 Vue 生态完成核心页面重构，统一状态管理、请求封装与权限控制流程，提升研发协作效率与需求交付质量；同时参与性能优化与线上问题治理，保障活动高峰期间页面稳定运行。",
 },
 {
  company: "中教智汇信息技术有限公司",
  occupation: "前端开发工程师",
  time: "2019.09 - 2022.03",
  info:
   "参与教育信息化平台前端研发，负责教务场景下的数据可视化、表单交互与业务流程实现。围绕教学管理与考试场景完成多角色端能力建设，沉淀可复用组件与基础工具方法，持续优化页面体验与系统可维护性，具备从需求分析到上线交付的完整项目经验。",
 },
];

const skills = [
 { name: "HTML5 / CSS3 / JavaScript", percent: "95%" },
 { name: "TypeScript", percent: "90%" },
 { name: "Vue3 生态（Pinia / Vite / UnoCSS）", percent: "92%" },
 { name: "React / Next.js", percent: "80%" },
 { name: "WebGIS（Cesium / Mapbox / 地图可视化）", percent: "90%" },
 { name: "工程化与性能优化（权限/上传/实时通信）", percent: "88%" },
];

export { education, experience, skills };
