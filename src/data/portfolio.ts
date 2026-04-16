/*
 * @Author: yoyo
 * @Date: 2026-01-05 11:14:56
 * @LastEditors: yoyo
 * @LastEditTime: 2026-04-16 15:31:22
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
  time: "2024.01 ~ 2025.08",
  site: "http://223.85.99.73:9091/",
  technology: [
   "Electron",
   "Koa",
   "SQLite",
   "EventSource",
   "Vue3",
   "TypeScript",
   "Vite",
   "Cesium",
  ],
  des: "面向无人机全生命周期作业的桌面端核心系统，集成地图可视化、航线高精度规划、任务协同管理及本地服务调度。系统支撑了从计划创建、高程校验、航线下发到执行状态实时监控的全流程业务。",
  duties: [
   "参与基于 Electron 的三层解耦架构落地（渲染进程/业务层 + 主进程/能力层 + 本地 Koa/服务层）。通过统一 IPC 通信协议与 HTTP/WS 边界，解决了复杂业务逻辑导致的进程阻塞问题，使系统具备极强的可扩展性与本地资源调度能力",
   "基于 Cesium.js 深度定制 joCesium 引擎。实现海量动态轨迹平滑渲染、视频脚印空间投影及交互式航线编辑器。针对航线规划，引入高程数据校验算法，确保了任务在三维空间下的安全性与精准度。",
   "构建了基于 SSE (EventSource) 的单向高频遥测（OSD）接收方案与基于 MQTT 的双向指令下发体系。针对多机并发场景，设计了数据缓冲与帧平滑机制，确保了在复杂网络环境下监控界面的实时性与操控指令的可靠达",
   "设计并实现了基于时间戳驱动的飞行轨迹镜像回放模块。通过对离线回放文件的解析与插值算法处理，在 Cesium 中实现了丝滑的 1:1 飞行场景复现，支持倍速切换与关键事件标记。",
   "基于 Vue3 + TS 体系，封装了高可用的业务组件库；落地了 vue-i18n 国际化方案及基于 JWT 的全链路鉴权体系；通过自定义指令（v-auth）实现了细粒度到按钮级的动态权限控制，保障了工业级应用的安全性。",
  ],
  imgs: ["zhxt1.png", "zhxt2.png", "zhxt3.png", "zhxt4.png", "zhxt5.png"],
 },
 {
  name: "河南交投低空巡检可视化平台",
  time: "2025.09 ~ 至今",
  site: "http://223.85.99.73:9091/",
  technology: [
   "maplibre-gl",
   "Vue3",
   "TypeScript",
   "Pinia",
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
  imgs: ["hnjt1.png", "hnjt2.png", "hnjt3.png", "hnjt4.png", "hnjt5.png"],
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
   "基于 Three.js 深度定制 ModelView 工具类，支撑高精航空载荷模型的交互展示。针对载荷装配环节，自主实现了基于射线投影（Raycaster）与空间吸附算法的精密装配系统，通过碰撞检测与 3D 坐标纠偏，1:1 还原了航院校准级操作标准。",
   "针对成航职大的考核标准，设计并实现了一套基于 Schema 驱动的多维题型渲染引擎。系统打通了“命题-分发-作答-评分-归档”的全链路闭环，重点解决了“3D 操作题”的自动化评分逻辑，通过状态机捕获用户轨迹并与标准作业流程（SOP）进行实时对比。",
   "封装 useECharts Hook 实现教学数据的响应式看板。针对大规模学生同时考试的场景，设计了毫秒级校准的分布式倒计时调度器及多维度切屏反作弊逻辑，确保了教学考核的严肃性与系统稳定性。",
   "引入 VeeValidate + Zod 构建全链路类型安全表单，在前端完成严格的数据格式校验与业务逻辑预审，显著降低了后端接口的无效负载，提升了教务系统的响应速度。。",
  ],
  imgs: [
   "zhfz1.png",
   "zhfz2.png",
   "zhfz3.png",
   "zhfz4.png",
   "zhfz5.png",
   "zhfz6.png",
   "zhfz7.png",
  ],
 },
];

export default portfolios;
