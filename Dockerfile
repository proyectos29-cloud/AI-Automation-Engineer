# Usa una imagen oficial de Node.js
FROM node:18-alpine
WORKDIR /app

# Copia los archivos de dependencias e instálalos
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa tu server.js (usualmente 3000)
EXPOSE 3000

# Comando para iniciar tu servidor
CMD ["node", "server.js"]