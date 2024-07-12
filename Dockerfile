# Usa la imagen de Node ligera version 20.11 como mulistage
FROM node:20.11-bookworm-slim AS builder
# Directorio de la aplicacion dentro del contenedor Node
WORKDIR /app
# Copia el archivo json al directorio de trabajo
COPY package.json /app
# Instala las dependencias y crea la carpeta node_modules
RUN npm install
# Copia los archivos restantes, excepto los archivos y carpetas declarados en el .dockerignore
COPY . /app
# Crea la carpeta dist/ donde se encuentra los javascript compilados.
RUN npm run build 

# ----------COMIENZA LA SEGUNDA ETAPA DEL MULTISTAGE UTILIZANDO LA COMPILACION DE NODE---------

# Usa una imagen ligera de Nginx para servir la aplicación
FROM nginx:stable-bookworm
# Etiquetado del autor de la aplicacion
LABEL autor="Juan Carlos Arguello"
# Copia la carpeta dist/ a partir de node y dos archivos de configuracion de Nginx
COPY --from=builder /app/dist/pisa-web/browser /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
# Exponer el puerto 80 para que la aplicación esté disponible externamente
EXPOSE 80
# Comando para iniciar Nginx cuando el contenedor se ejecute
CMD [ "nginx", "-g", "daemon off;" ]
