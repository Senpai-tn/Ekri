FROM node:alpine
WORKDIR /Ekri/
COPY package*.json ./
COPY ./ ./
CMD ["ping", "www.google.com"]
