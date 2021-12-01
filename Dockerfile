FROM nginx:1.20
MAINTAINER jiangyang.me@gmail.com
COPY / /usr/share/nginx/html/
COPY ../default.conf /etc/nginx/conf.d/default.conf