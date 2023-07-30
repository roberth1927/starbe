# Nombre del Proyecto

El proyecto "Starbe" es una aplicación web que permite obtener y gestionar datos de usuarios. Utiliza tecnologías como Node.js, Express.js, MongoDB y Cloudinary para proporcionar una interfaz de servidor y almacenar imágenes de firma de usuario.

## Requisitos

- Node.js v16.15.0 (asegúrate de tener esta versión instalada)

## Instalación

1. Clona el repositorio o descarga el código fuente.

2. Instala las dependencias del proyecto ejecutando el siguiente comando en la terminal:

npm install


## Configuración

Crea un archivo `.env` en el directorio raíz del proyecto con las siguientes variables de entorno:

MONGODB_CNN = 
PORT=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
frontendDomain=


## Uso

Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:

npm run dev


El servidor se ejecutará en `http://localhost:3001` (o el puerto que hayas configurado en el archivo `.env`).

## Endpoints

- `GET /users`: Obtiene una lista de todos los usuarios.
- `POST /users`: Crea un nuevo usuario.




