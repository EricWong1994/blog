# 打包服务器中静态页面
FROM node:14-alpine as builder

WORKDIR /code
ADD README.md /code/

FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf

COPY ./docs/.vuepress/dist /usr/share/nginx/html