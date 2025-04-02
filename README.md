# Base Web Repository

## 📌 Overview
This repository serves as the foundation for all my web projects. It includes a structured setup for both frontend and backend development using **Vite + React** for the frontend and **Node.js + PostgreSQL** for the backend.

## 🚀 Getting Started

### 1️⃣ Clone the repository and create a new repository
```sh
git clone https://github.com/JoaquinCatanzaritiTorrens/CodigoBaseWeb.git
cd CodigoBaseWeb
```
After cloning the repository, follow these steps to push it to a new repository on GitHub:
#### Rename the project directory (optional but recommended)
On Windows, use the `ren` command to rename the directory:

```sh
cd ..
Rename-Item CodigoBaseWeb YOUR-NEW-PROJECT-NAME
cd YOUR-NEW-PROJECT-NAME
```

#### Remove the current Git history
On Windows, use the `rmdir` command to remove the `.git` folder:

```sh
Remove-Item -Recurse -Force .git
```

#### Initialize a new Git repository

```sh
git init
git branch -M main
```

#### Add the remote URL for your new repository
Go to GitHub and create a new repository. Then, add the new repository as the remote origin:

```sh
git remote add origin https://github.com/JoaquinCatanzaritiTorrens/YOUR-NEW-PROJECT-NAME.git
```

#### Add, commit, and push the changes

```sh
git add .
git commit -m "Initial commit"
git push -u origin main
```

Your project is now set up in a new GitHub repository.


### 2️⃣ Backend Setup
```sh
cd backend
npm install  # Install dependencies
```

#### ➤ Run the backend
```sh
npm run dev  # Starts backend with Nodemon
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install  # Install dependencies
```

#### ➤ Run the frontend
```sh
npm run dev  # Starts Vite development server
```
### 4️⃣ Docker Compose Setup

To run the entire stack using Docker Compose, follow these steps:

#### ➤ Build and start the containers
```sh
docker-compose up --build
```

#### ➤ Stop the containers
```sh
docker-compose down
```

### 5️⃣ Cloudflare Tunnel Setup

#### ➤ Create the new tunnel
```sh
cloudflared tunnel create {NUEVO_TUNEL}
```

#### ➤ Configure the tunnel

Edit or create a new configuration file, for example:
📄 `C:\Users\Joako\.cloudflared\config-{nuevo}.yml`

```yaml
tunnel: {TUNNEL_ID_NUEVO}
credentials-file: C:\Users\Joako\.cloudflared\{TUNNEL_ID_NUEVO}.json

ingress:
    - hostname: {nuevo}.joaquincatanzariti.com
        service: http://localhost:{PUERTO}
    - service: http_status:404
```

#### ➤ Link the tunnel with Cloudflare
```sh
cloudflared tunnel route dns {NUEVO_TUNEL} {nuevo}.joaquincatanzariti.com
```

#### ➤ Test the tunnel manually
```sh
cloudflared tunnel --config C:\Users\Joako\.cloudflared\config-{nuevo}.yml run
```

#### ➤ Create the service
```sh
sc create cloudflared-{nuevo} binPath= "\"C:\Program Files (x86)\cloudflared\cloudflared.exe\" --config C:\Users\Joako\.cloudflared\config-{nuevo}.yml tunnel run"
```

#### ➤ Start the service
```sh
net start cloudflared-{nuevo}
```
## 📌 Tech Stack
### 🖥️ Frontend
- **Vite + React**
- TypeScript

### 🛠️ Backend
- **Node.js + Express**
- PostgreSQL (pg library)
- TypeScript

## 📜 License
This project is licensed under the MIT License. Feel free to use and modify it! 🎉

