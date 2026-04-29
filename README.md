# 中华文化平台前端

深色国风数字展馆风格的中华文化平台前端。页面以文化地图、佛教文化之旅、互动工坊、主题活动和文创展示为核心，所有交互均为前端本地模拟。

## 功能概览

- 首页展示文化主题入口、更多主题和长卷预告
- 文化地图页展示道教、佛教、丝绸之路三张地图素材
- 佛教主题可进入“佛教文化之旅”详情页
- 交互体验页包含印章小案、纹样调色、灯影听风
- 主题活动页保留佛教活动入口和后续主题预告
- 文创商城页使用真实商品图展示海报、明信片、卷轴
- 龙门石窟视频通过本地视频资源播放，不调用外部接口

## 技术栈

- React
- TypeScript
- Vite
- CSS
- Git LFS，用于管理较大的视频素材

## 本地运行

```bash
npm install
npm run dev
```

默认访问：

```text
http://127.0.0.1:5173/
```

## 公网部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。推送到 `main` 分支后会自动构建并发布。

部署地址：

```text
https://yukai-fish.github.io/zhonghua-culture-platform-frontend/
```

## 构建与检查

```bash
npm run lint
npm run build
npm run test
```

## 项目结构

```text
public/assets              静态图片与视频素材
src/components/layout      全局布局与导航
src/components/pages       路由页面
src/components/sections    页面区块
src/components/widgets     可交互小组件
src/components/cards       卡片展示组件
src/data                   素材、主题、经文、签文、时间轴配置
src/styles                 全局页面样式
```

## 素材说明

项目使用本地静态素材实现视觉内容，包括品牌 logo、道教地图、佛教地图、丝绸之路地图、佛教长图、道教长图、海洋信俗长图、文创商品图以及龙门石窟视频 demo。
