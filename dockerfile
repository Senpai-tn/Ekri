FROM node:18.17.1-alpine
WORKDIR /Ekri
RUN npm install -g nodemon
RUN npm install express
COPY package.json ./
RUN npm install
COPY ./  ./
CMD [ "npm","start" ]