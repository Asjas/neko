FROM node:lts

EXPOSE 5000

ARG FRONTEND_URL
ARG SESSION_SECRET
ARG DATABASE_URL
# ARG MAIL_HOST
# ARG MAIL_PORT
# ARG MAIN_USER
# ARG MAIL_PASS

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build

CMD ["./node_modules/.bin/keystone", "start"]
