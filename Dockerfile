# 1. Usamos una imagen de Node.js como base (la estufa)
FROM node:18-alpine

# 2. Creamos una carpeta dentro del contenedor donde vivirá el código
WORKDIR /app

# 3. Copiamos los archivos de configuración de dependencias
COPY package*.json ./

# 4. Instalamos las librerías necesarias para que NestJS funcione
RUN npm install

# 5. Copiamos el resto de tu código al contenedor
COPY . .

# 6. Construimos la versión de producción (compilación)
RUN npm run build

# 7. Exponemos el puerto que configuramos en el main.ts
EXPOSE 3000

# 8. El comando para encender tu servidor
CMD ["npm", "run", "start:prod"]