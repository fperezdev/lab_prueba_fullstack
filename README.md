# Lab Prueba Fullstack

Este proyecto es una aplicación full-stack que permite al usuario ver cartas Pokemon TCG listadas por set. Incluye una aplicacion de frontend de React, una API creada con Express y la base de datos PostgreSQL
</br>
El contexto de creación de esta aplicación es resolver una prueba elaborada por Lab Microsystem.

## Estructura del Proyecto

- **.devcontainer**: Contiene archivos de configuración para contenedores de desarrollo.
- **frontend**: Contiene la aplicación frontend de React.
- **backend**: Contiene la aplicación backend de Express. Se utilizó Swagger para crear la documentación de la API. 
- **resources**: Contiene el dump para inicializar la base de datos.

## Comenzando

### Ejecutar la Aplicación en Desarrollo

1. **Requisitos previos**:
    - Tener instalado Docker Engine o Docker Desktop
    - Tener instalado VSCode
    - Tener instalada la extensión `Dev Containers` en VSCode

2. **Clonar el repositorio**:
   ```sh
   git clone https://github.com/tu-usuario/lab_prueba_fullstack.git
   cd lab_prueba_fullstack
   ```

3. **Variables de entorno**:
    - Conseguir archivo `.env` con fperez y pegarlo en la carpeta raíz del proyecto, debe contener las siguientes variables:
    ```env
    NODE_ENV=development
    FRONTEND_URL=http://localhost:3001
    POSTGRES_DB=${POSTGRES_DB}
    POSTGRES_HOST=${POSTGRES_HOST}
    POSTGRES_USER=${POSTGRES_USER}
    POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    POSTGRES_PORT=${POSTGRES_PORT}
    VITE_API_URL=http://localhost:3000/api/v1
    ```    

3. **Iniciar el entorno de desarrollo**:
    - Abre la lista de comandos de VSCode:
        - **Windows/Linux**: `Ctrl+Shift+P`
        - **macOS**: `Cmd+Shift+P`
    - Selecciona la opción `Dev Containers: Reopen in Container`
    - Selecciona la opción Frontend, espera que cargue el contenedor y luego, en la nueva instancia de VSCode para la aplicación de Frontend, correr los comandos `npm install` y `npm run dev`
    - Aparte, abre otra instancia de VSCode del proyecto lab_prueba_fullstack y repite los pasos para la aplicación de Backend.

4. **Acceder a la aplicación**:
   - Frontend: [http://localhost:3001](http://localhost:3001)
   - Backend: [http://localhost:3000](http://localhost:3000)

## Producción
    - La aplicación está productiva y se puede acceder visitando https://pokelab.fperezdev.com/
    - La arquitectura consta de 4 instancias desplegadas en Railway:
        - Base de datos PostgreSQL desplegada con archivo Dockerfile, se decidió así por facilidad, no es recomendado
        - Backend (API) desplegada con archivo Dockerfile
        - Frontend desplegada con archivo Dockerfile utilizando Nginx
        - Reverse proxy para consultar al Frontend y Backend de la aplicación desde la misma url y así no necesitar especificar la url del Backend desde el Frontend.
    - Se puede ver la documentación de la API en https://pokelab.fperezdev.com/api/v1/api-docs

## Personalización

### Extensiones de VS Code

El proyecto incluye extensiones recomendadas de VS Code para una mejor experiencia de desarrollo. Estas extensiones están listadas en los archivos `devcontainer.json`.

## Oportunidades de mejora
Algunos features que podrian mejorar la experiencia de usuario y el rendimiento de la aplicación no fueron desarrollados porque supondrían demorar el proyecto, tales como:
    - Agregar paginación
    - Agregar opción para ordenar por nombre, tipo o rareza
    - Poder hacer zoom a la carta seleccionada

## Contribuidores

Francisco Perez


