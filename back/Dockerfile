###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .
COPY --chown=node:node .env.example .env

RUN npm run build

ENV NODE_ENV production

RUN npm cache clean --force

USER node

CMD [ "node", "dist/main.js" ]
