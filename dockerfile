FROM node:18.17.1-alpine
WORKDIR /Ekri
COPY package.json ./
RUN npm i 
RUN npm i -g nodemon
COPY ./  ./
CMD [ "npm","start" ]