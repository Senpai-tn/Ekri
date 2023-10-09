FROM node:18.17.1-alpine
WORKDIR /Ekri
COPY package*.json /
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "index"]
