# 🟥⚫⬜ PokeRoll Project 🟥⚫⬜
### 🧲 Created by Magnet Studio 🧲

> [!IMPORTANT]
> Current version: 0.2.3 (Still Special Beta Events Update)

## 📜 Magnet Studio is formed by... 📜
- [Mario Cortés Herrera](https://github.com/SimulationOfMario)
- [Javier Molina Colmenero](https://github.com/CreatorBeastGD)
- [Nicoló Melley](https://github.com/Mel-Nicolo)
- [Andrés Ruiz Sánchez](https://github.com/andresruiiz)
- [Jose Canto Peral](https://github.com/Anon2148)

## ⚛️ Additional React Libraries Used ⚛️
- React Router Dom: ```npm install react-router-dom```
- MUI Core: ```npm install @mui/material @emotion/react @emotion/styled```
- MUI Icons: ```npm install @mui/icons-material```
- Bootstrap: ```npm install react-bootstrap bootstrap```
- React CountUp: ```npm install react-countup```
- React Spring: ```npm install react-spring```
- React Confetti: ```npm install react-confetti```

> [!NOTE]
> - Use ```npm install``` to install all the project libraries

## 🚀 Deployment Instructions 🚀

### ☝️ Prerequisites ☝️
- Ensure you have Node.js and npm installed. You can download them from the [official Node.js website](https://nodejs.org/).

---

### 🖥️ Run on your local machine 🖥️

To deploy the PokeRoll Project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/SimulationOfMario/pokeroll.git
    cd pokeroll
    ```

2. **Install the dependencies:**
    ```sh
    npm install
    ```

3. **Install additional libraries:**
    ```sh
    npm install react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material react-bootstrap bootstrap react-countup react-spring react-confetti
    ```

4. **Run the application:**
    ```sh
    npm start
    ```

5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

Now you should see the PokeRoll Project running on your local machine.

---

### 🔨 Deployment to Production 🔨

For deploying to a production environment, you can build the app and serve it using a web server of your choice:

1. **Build the application:**
    ```sh
    npm run build
    ```

2. **Deploy the contents of the `build` directory to your web server.** 

You can use services like Netlify, Vercel, or GitHub Pages for an easy deployment process. Refer to their documentation for specific deployment steps.

---

### 🌐 Deployment to GitHub Pages 🌐

If not already set up, follow these steps to deploy the PokeRoll Project on GitHub Pages:

1. **Install the `gh-pages` package:**
    ```sh
    npm install gh-pages --save-dev
    ```

2. **Add the following scripts to your `package.json` file:**
    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

3. **Update the `homepage` field in your `package.json` file:**
    ```json
    "homepage": "https://simulationofmario.github.io/pokeroll"
    ```

4. **Build and deploy the application to GitHub Pages:**
    ```sh
    npm run deploy
    ```

5. **Go to your repository settings on GitHub and ensure GitHub Pages is set to use the `gh-pages` branch.**

Now your PokeRoll Project should be live on GitHub Pages at `https://simulationofmario.github.io/pokeroll`.

---

🐹🧲