###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

RUN npm cache clean --force

USER node

CMD [ "npm", "run", "start" ]
