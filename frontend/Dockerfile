FROM node:lts

EXPOSE 6000

ARG BACKEND_URL
ARG PORT
ARG NODE_ENV

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build

CMD ["node", "server/index.js"]
