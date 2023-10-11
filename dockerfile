FROM node:alpine
WORKDIR /Ekri/
RUN npm i -g npm nodemon
COPY ./package*.json ./
RUN npm ci
COPY ./ ./
CMD ["ping", "www.google.com"]
