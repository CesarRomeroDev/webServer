# Web Server

## Instalaciones

    - Crear package.json: recomendado para saber que instalamos en el proyecto. 
      comando: npm init -y 
      '-y' Acepta todo por defecto
    
    - Instalar Express
      comando npm i express
      Documentacón: https://expressjs.com/es/starter/installing.html

    -  ¿Qué es Handlebars? es una extensión template
    - Instalar Handlebars : https://www.npmjs.com/package/handlebars
      En la pagina buscamos el aprtado: hbs: An Express.js view engine adapter for Handlebars.js, from Don Park.
      comando npm install hbs

    - Instalar env : Variables de entorno
      comando npm i dotenv
    - Creamos nuestro archivo .env en la raiz
    - en el archivo app.js llamamos el archivo .env
      require('dotenv').config();
    - El mismo archivo: const port = process.env.PORT;
    - En el archivo package.json hacer la configuración en scripts: "start": "node app.js"
