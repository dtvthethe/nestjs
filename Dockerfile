FROM node:20-alpine

WORKDIR /project

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev"]
