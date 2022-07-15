FROM node:14-alpine as builder

WORKDIR /code
ADD package.json package-lock.json /code/
ADD README.md /code/
RUN npm install

ADD docs /code/docs
RUN npm run build

FROM nginx:alpine
# ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD /usr/local/lighthouse/softwares/nginx/conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder code/docs/.vuepress/dist /usr/share/nginx/html