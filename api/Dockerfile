FROM node:alpine3.13
WORKDIR /usr/app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000