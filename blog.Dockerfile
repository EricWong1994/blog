FROM node:14-alpine as builder

WORKDIR /code
ADD package.json package-lock.json /code/
ADD README.md /code/
RUN npm install

ADD docs /code/dosc
RUN npm run build

FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf

# COPY ./docs/.vuepress/dist /usr/share/nginx/html
COPY docs/.vuepress/dist /usr/share/nginx/html