FROM node:16-alpine as builder

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn cache clean
RUN yarn build
RUN yarn export

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html
