FROM node:alpine
WORKDIR /Ekri/
RUN npm install -g npm nodemon
COPY package*.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
