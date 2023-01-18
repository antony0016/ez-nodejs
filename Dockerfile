FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install && npm install ts-node
COPY . .

FROM node:alpine
COPY --from=build /app /app
RUN apk add --no-cache bash vim
WORKDIR /app