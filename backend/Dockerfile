# Dockerfile

FROM node:20.15.0
WORKDIR /app
COPY package.json package-log.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]
