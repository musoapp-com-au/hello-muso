# Build App
FROM node:alpine3.13 as build
WORKDIR /usr/app
COPY . .
RUN yarn && yarn run build

#Deploy with nginx
FROM nginx:1.21.0-alpine
COPY --from=build /usr/app/dist/song-list /usr/share/nginx/html
EXPOSE 80

