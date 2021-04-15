FROM node:14.16-alpine3.13
LABEL maintainer="Andri Junaedi andri@sawala.tech"
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]