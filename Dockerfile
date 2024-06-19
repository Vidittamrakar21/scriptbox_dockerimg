FROM node:latest

ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8080


CMD ["npm", "start"]