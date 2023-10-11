FROM node:alpine
WORKDIR /Ekri/

COPY ./package*.json ./
RUN npm ci
COPY ./ ./
CMD ["ping", "www.google.com"]
