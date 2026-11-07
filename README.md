# July Workshop 统一门户 V1.0

这是一个纯静态网站，使用 HTML、CSS、JavaScript 编写，无需 Node.js、npm、数据库或后端服务。

## 文件结构

- `index.html`：门户首页
- `styles.css`：页面样式、响应式布局和深浅色主题
- `script.js`：主题切换、导航高亮和年份显示
- `favicon.svg`：网站图标

## 本地预览

最简单的方法：直接双击 `index.html`，使用浏览器打开。

如果浏览器限制本地文件行为，也可以在该文件夹打开 PowerShell，运行：

```powershell
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 发布到 GitHub

1. 在 GitHub 创建新仓库：`JulyWorkshop-Portal`
2. 将本文件夹内的文件上传到仓库根目录（不要把外层 ZIP 文件上传进去）
3. 确认 `index.html` 位于仓库根目录

也可以使用 Git 命令：

```powershell
git init
git add .
git commit -m "Initial July Workshop portal"
git branch -M main
git remote add origin https://github.com/JulyWorkshop/JulyWorkshop-Portal.git
git push -u origin main
```

如果仓库已存在，不要重复执行 `git init` 或 `git remote add`，先检查现有 Git 配置。

## Cloudflare Pages 部署

1. 登录 Cloudflare
2. 进入 Workers & Pages
3. 创建应用，选择 Pages，再选择连接 Git 仓库
4. 授权 GitHub 并选择 `JulyWorkshop-Portal`
5. Production branch：`main`
6. Framework preset：`None`
7. Build command：留空（如果界面要求填写，可使用 `exit 0`）
8. Build output directory：`.`
9. 开始部署

部署成功后会获得一个 `*.pages.dev` 网址。

## 上线前需要确认

- 指南针入口当前使用 Tailscale Funnel：`https://july.tail87c39a.ts.net/`
- 该入口指向本地 LibreChat。电脑关机、Docker/LibreChat 停止或 Funnel 断开时，朋友可能无法访问。
- 软件介绍入口链接到公开 GitHub 仓库：`https://github.com/JulyWorkshop/Stock-V1.0`
- 量化投资工具箱和 A 股每日复盘当前展示为规划状态，没有伪装成已上线功能。

## 后续修改

- 修改产品链接：编辑 `index.html` 中对应卡片的 `href`
- 修改介绍文字：编辑 `index.html` 中对应卡片的文本
- 修改颜色和排版：编辑 `styles.css`
- 修改交互：编辑 `script.js`

不要把 DeepSeek API Key、LibreChat 环境变量或其他密钥放入这个静态网站。
