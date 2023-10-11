FROM node:alpine
WORKDIR /Ekri/
RUN npm install -g npm nodemon
COPY package*.json ./
COPY ./ ./
RUN npm ci
CMD ["npm", "start"]
