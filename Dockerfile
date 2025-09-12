# استفاده از Node.js 18 Alpine
FROM node:18-alpine AS base

# نصب dependencies مورد نیاز
RUN apk add --no-cache libc6-compat
WORKDIR /app

# کپی package.json و package-lock.json
COPY package*.json ./

# نصب همه dependencies (شامل devDependencies)
RUN npm ci

# کپی کد منبع
COPY . .

# Build کردن پروژه
RUN npm run build

# مرحله production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# ایجاد user غیر root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# کپی فایل‌های build شده از مرحله قبل
COPY --from=base /app/public ./public
COPY --from=base --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=base --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
