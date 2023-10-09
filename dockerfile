FROM node:18.17.1-alpine
WORKDIR /Ekri
COPY package.json ./
COPY ./  ./
RUN npm install -g npm && npm install
CMD [ "npm","start" ]