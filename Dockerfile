FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install && npm install ts-node
COPY . .

FROM node:alpine
COPY --from=build /app /app
WORKDIR /app