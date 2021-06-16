FROM node:alpine3.13
WORKDIR /usr/app
COPY package.json .
RUN yarn
COPY . .
RUN yarn run build
EXPOSE 3000
CMD yarn run start