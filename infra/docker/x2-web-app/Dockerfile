FROM node:16-alpine as build

WORKDIR /app

COPY web ./

RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn workspace x2-app build

FROM nginx:1.17.0-alpine

COPY --from=build /app/packages/x2-app/build /var/www
COPY infra/docker/x2-web-app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
