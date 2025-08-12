FROM node:20

WORKDIR /app

COPY package.json .


RUN npm install


COPY . .


ENV PORT=3000

# Jalankan server
CMD ["nodemon", "api/index.js"]
