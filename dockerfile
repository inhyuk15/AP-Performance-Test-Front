FROM node:14

COPY . /app

WORKDIR /app

RUN npm install && npm run build

CMD ["npm", "run", "serve"]
