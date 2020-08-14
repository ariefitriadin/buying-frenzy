FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm i -g @nestjs/cli
RUN npm i -g typeorm -g
RUN npm install -g ts-node
RUN rm -rf node_modules package-lock.json
RUN npm install
RUN npm run build
# RUN npm run migrate

EXPOSE 3000
CMD [ "npm", "run", "start" ]
