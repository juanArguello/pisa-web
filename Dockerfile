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

# ----------COMIENZA LA SEGUNDA ETAPA DEL MULISTAGE UTILIZANDO LA COMPILACION DE NODE---------

FROM nginx:stable-bookworm

# Etiquetado del autor de la aplicacion
LABEL autor="Juan Carlos Arguello"

COPY --from=builder /app/dist/pisa-web/browser /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]



# Usa una imagen ligera de Apache para servir la aplicación
#FROM httpd:2.4-alpine
# Elimina el archivo por defecto de apache index.html 
#RUN rm /usr/local/apache2/htdocs/index.html
# Copia la carpeta dist/ a partir del contendor node al directorio htdocs/ de apache
#COPY --from=builder /app/dist/pisa-web/browser/  /usr/local/apache2/htdocs/
# Exponer el puerto 80 para que la aplicación esté disponible externamente
#EXPOSE 80
# Comando para iniciar Apache cuando el contenedor se ejecute
#CMD [ "httpd", "-D", "FOREGROUND" ]
