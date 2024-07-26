FROM node:20-alpine

WORKDIR /project

COPY package*.json ./

# RUN apk add yarn
# RUN yarn global add @nestjs/cli
# RUN yarn install

RUN npm i -g @nestjs/cli
RUN npm i --save @nestjs/config
RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
