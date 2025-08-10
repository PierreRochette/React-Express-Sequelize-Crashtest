FROM node:22 AS server-build

# Installer le client postgresql pour utiliser pg_isready
RUN apt-get update && apt-get install -y postgresql-client
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app 
CMD ["node", "index.js"]