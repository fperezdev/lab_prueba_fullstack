# Stage 1: Build the backend app
FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run the backend app
FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "dist/app.js"]
