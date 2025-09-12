# استفاده از Node.js 18 Alpine به عنوان base image
FROM node:18-alpine AS base

# نصب dependencies مورد نیاز
RUN apk add --no-cache libc6-compat
WORKDIR /app

# کپی package.json و package-lock.json
COPY package*.json ./

# نصب dependencies
RUN npm ci --only=production

# مرحله build
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build

# مرحله production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# ایجاد user غیر root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# کپی فایل‌های build شده
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
