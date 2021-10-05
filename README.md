# Proyecto Final Modelos de Programación 
## Autores ✒️

* Jhojan Esneyder Rizo Arias – 20192020027
* José Miguel Guzmán Quevedo – 20182020127
* Juan Sebastián González Forero – 20181020029	

## Descripcón📢

_Este proyecto esta orientado a la creación y desarollo de un juego utilizando diferentes tecnologias con ambiente web, integracion de multiples paradigamas y lenguajes, ademas de persistencia de datos mediante una base de datos para poder entregar un proyecto con los todos los conocimientos adquiridos en la materia_

## Tecnologias 🛠️
### * Lenguajes de programación 

* _java._
* _java script._


### * Paradigmas 

* _Declarativo_
* _Programación orientada a objetos_
* _imperativo_

### * Otras Tecnologias
* _HTML5_
* _CSS_
* _Base de datos Oracle_

### Codificación ⚙️

_El proyecto contara con una base en java para poder ralizar la conexión web y para realizar la logica del guardado de datos, contara con una gran parte de archivos javaScript para el controlamiento del sistema del juego y para la porte estetica contara con un css acompañado de archivos visuales y funcionalidades de sonido_

_la estructura del proyecto esta definida por:_


_La parte de datos la cual es encargada de la de conexión y codificacion del manejo de puntajes de la base de datos y la parte Web que es la encargadad de controlar todo el manejo y ejecución del proyecto, como se puede ver a continuación:_

![alt text](https://raw.githubusercontent.com/Sgonzalezf97/Proyecto-Final-Modelos2/main/EstructuraDelCodigo.jpg)

_Dentro de la estructura web podremos encontrar  3 carpetas, Juego, principal y web-inf que contendran respectivamente los archivos de imagenes y los archivos javaScript que mas adelante abordaremos a profundidad, dentro de la carpeta Principal podremos encontrar el archivo de estilos css y e imagenes para el menú principal del proyeto y por ultimo en la carpeta Web-inf encontraremos el archivo del servidor Glassfish_

## Descripción de funcionamiento JavaScript 🔧

_dentro de la carpeta JS encontraremos 6 archivos javaScript los cuales nos mostraran el comportamiento de cada uno de los elementos de nuestro juego, principalmente podremos ver los siguientes componentes_

* Enemigo.js
* Energia.js
* Heroe.js
* jquery-1-11-0.js
* jquery-1-11-0.min.js.js
* Lienzo.js

_Dentro de cada uno de estos se establecera sus valores predeterminados, propiedades y atributos, ademas de cada una de las acciones e interacciones_

_Particularmente para el archivo Lienzo.js será el encargado de manejar el inicio del juego creando un canvas y cada uno de los elementos necesarios para el desarollo del juego, ademas estara encargado de la captura de movimiento por teclado  para el desplazamiento del jugador y sus interacciones, finalmente tendra la funcionalidad mas importante que será la encargado de mantener el control del estatus del juego, teniendo en cuenta la correcta inicialización del juego, vida del jugador, la puntuación , la colisión y la finalizacion del juego_

_ademas tendremos los archivos jsp que estaran encargados principalmente de establecer y controlar la conexión con la base de datos para poder asi tener un control y persistencia de los puntajes realizados por el jugador_

## Despliegue 📦🚀

_Para el despliegue del juego lo unico que tendra que hacer es clonar o descargar este repositorio, y correrlo, asi de sencillo_

_Una vez dentro encontrara todos los componentes anteriormente mencionados_

_Al ejecutar la aplicacion se le mostrara una pantalla como esta:_

_Y ¡listo! estara listo para poder jugar y disfrutar de nuestro proyecto_

_Dentro de la pantalla principal encontrara una rapida descripcion de como jugar, pero si quiere ver a profundidad podra dirigirse al [manual de usuario](https://docs.google.com/document/d/1_1xG-I4BUe_AhZXbyncn41_YGPMd3mYa5fidoe1czKA/edit?usp=sharing) donde encontrara una descripción completa y detallada de los componentes y caracteristicas del juego_

_Bienvenido y buena suerte_

## Agradecimientos  📋

_Agradecemos al profesor Alejandro Paolo Daza Corredor por los conocimientos brindados_

