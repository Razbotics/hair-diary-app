FROM node:12.18.1

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./src /app/src
COPY ./public /app/public

RUN npm install
RUN npm i -g serve
RUN npm run build