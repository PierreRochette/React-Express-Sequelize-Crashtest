# Étape 1 : Build de l'app
FROM node:22.18.0 AS builder

# Crée le dossier de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package.json package-lock.json* ./

ARG VITE_API_URL

ENV VITE_API_URL ${VITE_API_URL}

COPY vite.config.* ./
COPY index.html ./
COPY public ./public
COPY src ./src

# Installation des dépendances
RUN npm install

# Build de l'app
RUN npm run build

# Étape 2 : Serveur Nginx pour servir les fichiers statiques
FROM nginx:stable-alpine

# Copie le build dans le dossier nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Supprime la configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Ajoute ta propre configuration Nginx (optionnel mais recommandé pour SPA)
COPY nginx.conf /etc/nginx/conf.d

# Expose le port 80
EXPOSE 80

# Commande de lancement
CMD ["nginx", "-g", "daemon off;"]