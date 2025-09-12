FROM node:18

WORKDIR /app

# کپی package.json
COPY package.json ./

# نصب dependencies
RUN npm install

# کپی کد منبع
COPY . .

# Build کردن پروژه
RUN npm run build

# شروع سرور
EXPOSE 3000

CMD ["npm", "start"]
