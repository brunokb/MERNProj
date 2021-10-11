FROM node:10.16-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["server.js"]