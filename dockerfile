FROM node:16.20.2
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "run", "docker-start"]