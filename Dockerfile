FROM node:alpine As build

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

ARG REACT_APP_BASE_URL

ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

RUN npm run build

RUN npm i -g serve

EXPOSE 3000

ENTRYPOINT [ "serve", "-s", "build" ]