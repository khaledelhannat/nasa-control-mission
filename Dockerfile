FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build-react-unix

COPY server/ server/

USER node 

CMD [ "npm", "run", "server" ]

EXPOSE 8080

