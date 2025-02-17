# Basis-Image verwenden (Node.js LTS)
FROM node:22

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Package.json und package-lock.json kopieren, um Abhängigkeiten zu installieren
COPY package*.json package-lock.json ./

# Abhängigkeiten installieren (ohne devDependencies für Produktion)
RUN npm install 

# Restliche Backend-Dateien kopieren
COPY . .

# Umgebungsvariablen setzen (Alternativ .env verwenden)
ENV PORT=5000

# Port freigeben
EXPOSE 5000 

# Startbefehl für den Container
CMD ["node", "server.js"]
