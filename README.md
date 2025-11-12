
# DAO 星秀 — 静态站点（与参考站同布局的可替换版本）

> 本项目为纯静态网站，可直接上传到 GitHub 并用 Netlify / Vercel 部署。
> 已满足：不使用 SVG；所有图片可替换为高清 JPG/PNG；布局、导航、文字区域与参考站一致的栅格结构与位置。

## 结构
```
.
├─ index.html        首页（英雄图 + 模特卡片）
├─ models.html       模特列表页（网格）
├─ about.html        关于我们
├─ contact.html      联系我们（占位表单）
├─ model-1.html…     模特详情模板（已生成 1-12）
├─ styles.css        样式（白/灰/黑/金）
├─ js/main.js        交互脚本
└─ images/           图片（均为 JPG/PNG 占位，不含 SVG）
```

## 替换图片（高清）
- 将 `images/logo.png` 换成你的品牌 PNG（建议 280×80 或相同比例，透明背景）
- 将 `images/hero@1x.jpg / @2x.jpg / @3x.jpg` 换成你的主视觉（宽度分别 800/1600/2400）
- 将 `images/models/model-*.jpg` 替换为你的模特图片（1x 建议 800×1000，2x 建议 1200×1500）
- 如需更多模特，复制 `model-12.html` 改名并在 `models.html` 增加卡片即可。

## 保持清晰度
- 所有图片都提供 `srcset` 和 `sizes`，浏览器会自动按屏幕密度选择清晰度合适的版本。
- **不使用 SVG**（已满足你的要求）

## 部署（GitHub + Netlify）
1. 新建 GitHub 仓库（例如 `dao-site`），把本文件夹所有内容上传
2. 登录 Netlify → **Add new site → Import from Git** → 授权 GitHub → 选择仓库
3. Build command 留空（静态站无需构建），Publish directory 填 `.`
4. 点击 **Deploy** 完成部署，获得 `https://xxxx.netlify.app`
5. 域名 `daoxx001.com` 解析到 Netlify：在 Netlify 添加自定义域名，去域名服务商（Google Domains / Cloudflare）添加 CNAME 记录指向 Netlify 提供的地址

## 修改导航与文字
- 导航文字在每个页面的 `<header>` 中；
- 页面主文案在对应页面 `<main>` 标签内；
- 样式颜色在 `styles.css` 的 `:root` 变量里调整（当前为白/灰/黑/金，与参考站一致）。

## 接入表单
- 目前 `contact.html` 是占位。你可以在 `js/main.js` 写入你自己的请求逻辑，或使用 Netlify Forms / Formspree / Supabase 等。

如需我继续：
- 增加分页 / 搜索
- 批量生成更多详情页
- 替你把 GitHub/Netlify 流程跑通
请直接告诉我。
