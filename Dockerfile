FROM nginx:alpine
WORKDIR /app
COPY . /usr/share/nginx/html
EXPOSE 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
