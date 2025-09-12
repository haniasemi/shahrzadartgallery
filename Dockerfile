FROM node:18-alpine

# نصب dependencies مورد نیاز
RUN apk add --no-cache libc6-compat

WORKDIR /app

# کپی package.json و package-lock.json
COPY package*.json ./

# نصب dependencies با cache
RUN npm install --frozen-lockfile=false

# کپی کد منبع
COPY . .

# Build کردن پروژه
RUN npm run build

# شروع سرور
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]
