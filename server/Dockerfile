FROM node:14.17.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN apk update 
COPY . .
RUN npm install

EXPOSE 4444 4445

CMD ["npm","start"]