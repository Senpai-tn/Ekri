FROM node:18.17.1-alpine
WORKDIR /Ekri
COPY ./  ./
RUN npm i 
CMD [ "npm","start" ]