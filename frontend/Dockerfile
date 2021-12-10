FROM node:lts

EXPOSE 6000

ARG BACKEND_URL

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build

CMD ["cross-env NODE_ENV=production node", "server/index.js"]
