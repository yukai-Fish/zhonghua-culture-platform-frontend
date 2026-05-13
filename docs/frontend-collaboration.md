# 前端协作规范（简版）

## 1. 命名规范
- 组件文件：`PascalCase.tsx`，例如 `CultureMapPage.tsx`。
- hooks/工具函数：`camelCase.ts`，变量名语义清晰。
- 样式类名：按“页面-模块-元素”组织，避免无意义缩写。
- 提交信息：`type: summary`（如 `feat: ...`、`fix: ...`、`refactor: ...`）。

## 2. 资源放置规范
- 可上线资源只放 `public/assets/`。
- 原始素材放 `design-assets/raw/`（不入库）。
- 禁止提交压缩包、源设计文件到主仓：`*.zip/*.7z/*.rar/*.psd/*.ai`。
- 新增图片优先提供压缩格式（`webp`），并补齐语义化 `alt`。

## 3. 代码与样式改动规范
- 小改动优先使用 `apply_patch`，避免批量替换误伤。
- 背景层与主题色优先走 CSS 变量，不复制整段高权重规则。
- 交互元素保持最小触控区域 `44px`，并保留 `:focus-visible`。
- 涉及动画的新增效果必须兼容 `prefers-reduced-motion`。

## 4. 提交粒度规范
- 一个提交只做一件事：功能、重构、样式、文档尽量分开。
- 禁止 `git add .`；只暂存目标文件。
- 提交前必须执行：
  - `git status --short`
  - `npm run repo:guard`
  - `npm run lint`
  - 必要时 `npm run build`

## 5. 发布流程规范
- `main` 分支推送会触发 GitHub Pages 自动部署。
- 改动工作流文件后，必须人工检查 YAML 缩进与 steps 层级。
- 发布后至少完成首页、万象图、感应场、藏书阁、禅修房的快速回归。
