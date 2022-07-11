FROM node:14-alpine as builder

WORKDIR /code
ADD ./actions/.vuepress /code

RUN echo shihao

FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/dist /usr/share/nginx/html

# ADD ./actions/.vuepress/dist/index.html /usr/share/nginx/html/
