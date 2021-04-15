FROM node:10

WORKDIR /usr/src/app/react-todo

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]