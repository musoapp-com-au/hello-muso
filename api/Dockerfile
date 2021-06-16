FROM node:alpine3.13
WORKDIR /usr/app
COPY . .
RUN yarn && yarn run build
EXPOSE 3000
