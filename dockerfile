FROM node:18.17.1-alpine
WORKDIR /Ekri
COPY package.json ./
RUN npm install -g npm && npm install
COPY ./  ./
CMD [ "npm","start" ]