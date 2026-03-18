# 部署指南

## 环境要求

- Node.js 18+
- npm 9+

## 方式一：Vercel 部署（推荐）

1. 将项目推送到 GitHub/GitLab
2. 登录 [vercel.com](https://vercel.com)，导入仓库
3. 设置环境变量：
   - `NEXT_PUBLIC_SITE_URL` = `https://wardenclaw.com`
   - `NEXT_PUBLIC_GA_ID` = `G-LLLGRCWE84`
   - `NEXT_PUBLIC_BAIDU_VERIFICATION` = `codeva-B7E1oSdmxd`
4. 点击 Deploy

Vercel 会自动检测 Next.js 项目并使用正确的构建命令。

## 方式二：自建服务器

```bash
# 克隆项目
git clone <your-repo-url>
cd wardenclaw-site

# 安装依赖
npm install

# 复制环境变量
cp .env.local.example .env.local
# 编辑 .env.local 填入实际值

# 构建
npm run build

# 启动（使用 PM2）
npm install -g pm2
pm2 start npm --name "wardenclaw" -- start

# 或直接启动
npm start
# → http://localhost:3000
```

### Nginx 反向代理配置

```nginx
server {
    listen 80;
    server_name wardenclaw.com www.wardenclaw.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name wardenclaw.com www.wardenclaw.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 方式三：Docker

创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t wardenclaw .
docker run -p 3000:3000 wardenclaw
```

## 域名配置

将 `wardenclaw.com` 的 DNS 指向你的服务器 IP 或 Vercel 的 CNAME。

## 构建后检查

- [ ] 访问 https://wardenclaw.com 可正常加载
- [ ] 中英文切换正常
- [ ] Sitemap 可访问（/sitemap.xml）
- [ ] RSS 可访问（/rss.xml）
- [ ] Google Analytics 有数据
- [ ] 百度站长验证通过
