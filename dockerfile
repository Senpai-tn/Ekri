FROM node:alpine
WORKDIR /Ekri/
RUN npm i -g npm nodemon
COPY ./package*.json ./
RUN npm ci
COPY ./ ./
CMD ["npm", "start"]
