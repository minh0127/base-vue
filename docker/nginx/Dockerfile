FROM nginx:latest
WORKDIR /var/www/

COPY docker/nginx/nginx-reverse-proxy.conf /etc/nginx/conf.d/default.conf

EXPOSE 8400
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
