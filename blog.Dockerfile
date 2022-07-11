FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD ./actions/.vuepress/dist/index.html /usr/share/nginx/html/
