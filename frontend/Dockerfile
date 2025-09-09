FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# copy all frontend source (including public/index.html)
COPY . .

CMD ["npm", "start"]
