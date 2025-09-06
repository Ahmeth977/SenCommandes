# Dockerfile simple pour une application Node.js (exemple)
FROM node:18-alpine

WORKDIR /app

# Copier les fichiers package d'abord pour mieux utiliser le cache
COPY package*.json ./
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]