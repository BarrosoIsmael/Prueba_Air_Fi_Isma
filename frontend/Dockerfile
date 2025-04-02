FROM node:20 AS builder

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos necesarios
COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./
COPY . .

# Instalamos las dependencias
RUN npm install

# Compilamos la app Angular en modo producción
RUN npm run build -- --configuration production


# ---- Nginx ----
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/frontend /usr/share/nginx/html

EXPOSE 6002

CMD ["nginx", "-g", "daemon off;"]