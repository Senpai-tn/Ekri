FROM node:alpine
WORKDIR /Ekri
COPY package.json ./
RUN npm i 
COPY ./  ./
CMD [ "npm","start" ]