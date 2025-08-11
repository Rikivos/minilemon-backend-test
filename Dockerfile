FROM node:18

WORKDIR /app

# Salin file dependency
COPY package.json .

# Install pakai yarn
RUN npm install

# Salin semua file project
COPY . .

# Environment
ENV PORT=3000

# Jalankan server
CMD ["nodemon", "api/index.js"]
