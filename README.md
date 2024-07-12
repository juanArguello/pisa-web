<h1 align="center">PISA - Proveedora Integral S.A.</h1>

<p align="center">
  <img src="https://github.com/juanArguello/pisa-web/blob/main/src/assets/images/pisa.png?raw=true" alt="pisa-logo" width="200px" height="80px"/>
  <br>
  <em>El proyecto fue generado con Angular CLI versión 17.1.1.</em>
  <br>
</p>

# Descripción
PISA es un Sitio Web para la empresa Proveedora Integral S.A., donde presenta información relevante sobre la empresa, sus productos y servicios, su historia y contacto, así como interactuar con clientes, socios y otros interesados.

## Herramientas utilizadas
  <p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Angular_gradient.png/600px-Angular_gradient.png?20231107180344" alt="angular logo" width="30px" height="25px">
    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="30px" height="25px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png" alt="Docker logo" width="35px" height="25px" >
  </p>

 - [Angular](https://angular.dev/) 
 - [Bootstrap](https://getbootstrap.com/)
 - [Docker](https://www.docker.com/)

## Pre-requisitos
 - Asegúrate de tener [Node.js](https://nodejs.org/en) y [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instalados en tu máquina.
 - [Git](https://git-scm.com/)

## Deploy del proyecto

Clonar el proyecto 

```
git clone https://github.com/juanArguello/pisa-web.git
```

Instalar las dependencias

```
npm install 
```

Compilar los archivos javascript y crear el directorio `dist/`

```
npm run build
```

Se obtiene el directorio `dist/pisa-web/browser/` donde se encuenta los archivos estaticos html5, css3 y 
javascript compilados. Estos archivos se pueden alojar en un servidor Apache, Nginx o en un hosting.

## Ejecutando en un contenedor

La imagen de pisa-web esta alojado en [Docker Hub](https://hub.docker.com/u/jarguello). El comando para ejecutar
el contenedor:

```
docker run --name algun-nombre -p 80:80 jarguello/pisa-web
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
