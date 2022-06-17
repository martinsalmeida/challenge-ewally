FROM node:lts-alpine

WORKDIR /home/node/app

COPY package.json ./

RUN npm install --force

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
