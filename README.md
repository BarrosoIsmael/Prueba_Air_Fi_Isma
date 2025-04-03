# Base Web Repository

## 📌 Overview
Este repositorio contiene la base para proyectos web con una arquitectura de frontend y backend. El frontend utiliza **Angular** y el backend está construido con **Node.js** y **PostgreSQL**. Además, se incluye soporte para ejecución local y en contenedores Docker.

---

## 🚀 Getting Started

### 1️⃣ Requisitos previos
Asegúrate de tener instalados los siguientes programas:
- [Node.js](https://nodejs.org/) (versión 20 o superior)
- [Docker](https://www.docker.com/)
- [Angular CLI](https://angular.io/cli) (para desarrollo del frontend)

---

### 2️⃣ Configuración inicial
1. Clona este repositorio:
   ```sh
   git clone https://github.com/BarrosoIsmael/Prueba_Air_Fi_Isma.git
   cd Prueba_Air_Fi_Isma
   ```

2. Configura las variables de entorno:
   - Copia el archivo `.env` en la raíz del proyecto y ajusta los valores según tu entorno. (En mi caso te he subido el.env para que no tengas que hacerlo de zero)

---

## 🛠️ Ejecución en modo desarrollo

### Backend
1. Ve al directorio del backend:
   ```sh
   cd backend
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor en modo desarrollo:
   ```sh
   npm run dev
   ```

4. El backend estará disponible en `http://localhost:5002`.

---

### Frontend
1. Ve al directorio del frontend:
   ```sh
   cd frontend
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor en modo desarrollo:
   ```sh
   npm start o ng serve
   ```
- si hay problema de permisos en tu pc ejecutar esta comanda 
    
    ```sh
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 
   ```  

4. El frontend estará disponible en `http://localhost:4200`.

---

## 🐳 Ejecución con Docker

### DOCKER COMPOSE DEV

1. Ve al directorio del backend:
   ```sh
   cd backend
   ```

2. Construye y levanta el contenedor de la base de datos:
   ```sh
   docker-compose up -d
   ```
3. Accede a la base de datos de prueba:
   - **Postgress** : `http://localhost:5432`

4. Para detener los contenedores:
   ```sh
   docker-compose down
   ```

   ![alt text](image.png)
   password: admin

---

### DOCKER COMPOSE PROD
1. Acceder a la carpeta raiz

2. Construye y levanta el contenedor de la base de datos:
   ```sh
   docker-compose up -d
   ```
3. Accede a la base de datos de prueba:
   - **Postgress** : `http://localhost:7002`
   - **Frontend**: `http://localhost:6002`
   - **Backend**: `http://localhost:5002`

4. Para detener los contenedores:
   ```sh
   docker-compose down
   ```
---

## 📌 Tech Stack
### 🖥️ Frontend
- **Angular**
- TypeScript

### 🛠️ Backend
- **Node.js + Express**
- PostgreSQL
- TypeScript
