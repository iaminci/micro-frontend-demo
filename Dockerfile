FROM nginx:alpine

ARG SERVICE_NAME
COPY ./pods/${SERVICE_NAME}/dist /usr/share/nginx/html/
COPY ./pods/${SERVICE_NAME}/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]