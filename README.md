# Chuck Norris Jokes App

Este proyecto es una aplicación web desarrollada con React y Vite que permite obtener chistes aleatorios de Chuck Norris desde una API pública.

## 🚀 Características
- Muestra chistes aleatorios de Chuck Norris.
- Permite seleccionar categorías para filtrar los chistes.
- Uso de React Hooks (`useState`, `useEffect`).
- Estilizado con Tailwind CSS para una mayor eficiencia y mantenibilidad.

## 📌 Nota Importante
Intenté utilizar el boilerplate recomendado, pero encontré un problema de compatibilidad entre la versión de Node que estaba usando y la requerida por el proyecto. Para solucionarlo, agregué la siguiente línea en el `package.json`, lo que permitió que el proyecto se ejecutara correctamente:
```json
"start": "cross-env NODE_OPTIONS=--openssl-legacy-provider node server"
```

Sin embargo, al comenzar a desarrollar la prueba, surgieron múltiples conflictos de dependencias debido a versiones desactualizadas de librerías clave como `react-redux`, `styled-components` y `connected-react-router`. Resolver estos errores habría requerido una inversión de tiempo considerable, desviando el enfoque de la funcionalidad del proyecto.

Por esta razón, decidí crear un nuevo proyecto con **Vite**, asegurando un entorno moderno, optimizado y sin problemas de compatibilidad. Esto me permitió desarrollar la solución de manera más eficiente.

### Implementaciones realizadas:
- Uso de **Redux-Saga** para gestionar llamadas asíncronas de manera estructurada y eficiente.
- Creación de un **selector de categorías** para filtrar chistes.
- Código estructurado bajo principios de **modularidad y reutilización**.

## 🛠️ Tecnologías Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (para estilos rápidos y personalizables)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Chuck Norris API](https://api.chucknorris.io/)

### 📌 Razón para usar Tailwind CSS
Tailwind CSS permite un desarrollo rápido y eficiente mediante clases utilitarias que reducen la necesidad de escribir CSS personalizado. Además, facilita el mantenimiento del código y mejora el rendimiento al generar estilos optimizados.

## 📂 Estructura del Proyecto
```
joke-app/
│── public/                # Archivos estáticos
│── src/
│   ├── api/               # Funciones para llamadas a APIs
│   │   ├── jokeApi.js
│   ├── components/        # Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── CategorySelect.jsx
│   │   ├── JokeCard.jsx
│   ├── features/          # Estado global con Redux + Saga
│   │   ├── jokeSlice.js   # Slice para manejo de chistes
│   │   ├── jokeSaga.js    # Saga para manejo de llamadas API
│   ├── hooks/             # Custom Hooks
│   │   ├── useFetchJoke.js
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx
│   ├── store/             # Configuración del store de Redux
│   │   ├── store.js
│   │      
│   ├── styles/            # Estilos globales
│   │   ├── global.css
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx           # Punto de entrada de React
│── .eslintrc.js           # Configuración de ESLint
│── .prettierrc            # Configuración de Prettier
│── package.json           # Dependencias del proyecto
│── README.md              # Documentación del proyecto
```

## 📌 Uso de API y Custom Hook
Para manejar las llamadas a la API de Chuck Norris, se implementó un **hook personalizado** llamado `useFetchJoke.js`, lo que facilita la reutilización del código y mejora la separación de responsabilidades. Esta técnica permite centralizar la lógica de obtención de datos y reduce la repetición de código en los componentes.

## 🚀 Instalación y Uso
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Elizabeth1690/joke-fetch.git
   cd chuck-norris-app
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar la aplicación:
   ```bash
   npm run dev
   ```

