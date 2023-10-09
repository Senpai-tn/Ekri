FROM node:18.17.1-alpine
WORKDIR /Ekri
RUN npm install -g npm nodemon 
COPY package.json ./
COPY ./  ./
RUN npm install
CMD [ "npm","start" ]