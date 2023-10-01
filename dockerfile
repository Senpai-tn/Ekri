FROM node:18.17.1-alpine
WORKDIR /Ekri
RUN npm i -g nodemon express
COPY package.json ./
RUN npm install
COPY ./  ./
CMD [ "npm","start" ]