FROM node:alpine
COPY . /app

WORKDIR /app
RUN yarn install --prod
RUN yarn build

EXPOSE 3000
CMD yarn start
