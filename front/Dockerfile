FROM node:alpine As builder

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

ARG REACT_APP_BASE_URL

ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]