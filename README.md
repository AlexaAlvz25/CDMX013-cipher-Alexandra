# Cifrado César Empresa- Alexandra, actualizado

## Índice

* [1. Introducción](#1-Introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Definición del Problema y su Desarrollo](#3-definición-del-problema-y-su-desarrollo)
* [4. Definición del producto](#4-definición-del-producto)
* [5. Interfaz UI](#5-interfaz-ui)
* [6. Checklist](#6-checklist)


***

## 1. Introducción

La comunicación hoy en día es algo imprescindible, nos encontramos conectados aún
cuando no ocupamos el mismo espacio o habitación con la otra persona. Es por ello
que el desarrollo del lenguaje escrito para comunicar ideas, pensamientos o hasta
secretos a través de la distancia ha sido fundamental para el avance en la historia,
un gran ejemplo es el gobernante romano Julio César (100 a. C. – 44 a. C.), quien
creó un cifrado muy simple para la comunicación secreta, que en sus días fue primordial
para informar a sus tropas del siguiente paso en su conquista.

A lo largo de los años, hemos avanzado en nuestra forma de comunicarnos y los medios
por los cuales lo hacemos, sin embargo, sigue siendo un punto critico mantener la
privacidad de la información que transmitimos y que solo queremos que una o ciertas
personas sean capaces de conocerlo. Es así que, bajo esta premisa, las empresas deben
de considerar de fundamental tener un canal de comunicación que tenga un nivel mayor
de seguridad para la intercomunicación entre áreas, departamentos o socios.

Con la finalidad de proporcionar una herramienta que ayude a las empresas, ha sido
creado el presente proyecto, Cifrado César. Basado en el famoso cifrado del emperador,
sin embargo con modificaciones que harán de su información más segura.


## 2. Resumen del proyecto

![Imagen1](https://user-images.githubusercontent.com/104030163/179890761-6a22e4ba-bfe0-498d-aa78-44c774c33a47.jpg)

Realizar una aplicación web que  servirá para que el usuario (directivo) pueda cifrar
y descifrar un texto, indicando un desplazamiento específico de caracteres (offset).
Dicho desplazamientos, son dados por medio de mensaje.

La aplicación tiene como finalidad cifrar textos o avisos que contienen información
sobre próximos proyectos de una empresa, memos o  información reservada solo a ciertas
áreas o personas. Para cifrar/descifrar el directivo deberá de hacerlo a través del
portal web con su cuenta de usuario y contraseña.

Al acceder al mensaje, podrá ingresar al apartado de “CIPHER” y navegar por las dos
opciones "CIFRADO", en donde podrá redactar su mensaje para codificarlo o, "DESCIFRADO"
para ingresar un texto y conocer la información contenida.


## 3. Definición del Problema y su Desarrollo

En criptografía, el cifrado César, también conocido como cifrado por desplazamiento,
es una de las técnicas de codificación más simples y más usadas. Es un tipo de
cifrado por sustitución en el que una letra en el texto original es reemplazada
por otra letra que se encuentra un número fijo de posiciones más adelante en el
alfabeto. Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la
D (situada 3 lugares a la derecha de la A ), la B sería reemplazada por la E, etc.

![Imagen2](https://user-images.githubusercontent.com/104030163/179890810-972183a4-65b8-480b-ba3e-79595e8bf803.png)

La codificación se puede representar usando una formula aritmética, transformando
las letras en números, de acuerdo a su valor en el Código Estadounidense Estándar
para el Intercambio de Información (ASCII).

![Imagen3](https://user-images.githubusercontent.com/104030163/179890834-fd9b22f5-c5fd-4478-9753-e2731bd085f9.png)

A partir de lo anterior, podemos definir que contamos con dos parámetros que
serán ingresados por el usuario. El texto/palabra y el número de desplazamientos
para cambiar la letra. Sin embargo, para comenzar a codificar debemos de pasar de
lo general a lo particular, es decir, cambiando cada letra individualmente hasta
convertir la totalidad de la palabra.

Cada letra tiene un valor especifico que le fue asignado de acuerdo a su posición
en el abecedario, por lo que tomaremos ese valor para poder realizar los desplazamientos.

Es así que, partiremos de la siguiente formula para cambiar las letras:
( x + n ) % 26
“X” representa el valor de la posición de la letra original que será cambiada,
mientras que “N” será un valor fijo por el número de desplazamientos, ambos
deberán de sumarse y su resultado será dividido entre 26. El número 26, representa
la totalidad de los caracteres dentro del abecedario (sin incluir la ñ).

Al utilizar el operador %, estamos usando el residuo de la división, en este caso
del valor resultante de la suma anterior con el total de caracteres en el abecedario.
El resultado nos dará el número exacto de desplazamientos, aún cuando el valor ingresado
por el usuario es más alto que 26, facilitando su intercambio.

Dado que ya se tiene codificado el abecedario en nuestros ordenadores, utilizaremos
el código ASCII para completar nuestro cifrado, de esta manera no seria necesario
ingresar información adicional para resolverlo.

Con ayuda del método string.charCodeAt(), obtendremos el valor ASCII de cada una de
las letras, valor que remplazará a “X” dentro de nuestra formula.

La modificaremos un poco para quedar de la siguiente manera:
( x - 65 + n ) % 26 + 65
Los dos valores añadidos nos ayudaran a manejar el valor de la posición que arroje
cada letra al trabajar sobre ella. Representando el número 65, el código (valor)
base que se tiene del abecedario (A=65, B=66, C=67, etc).

El número obtenido bajo esa formula, representa el código ASCII de la nueva posición,
por lo que tendremos que codificarlo con el método String.fromCharCode() para
poder visualizarlo correctamente.

Como ejemplo podemos tener lo siguiente: Obtener el valor de A al desplazarlo 33 letras.
Let x = “A”;
Let n = 33;
Let codigoLetra = x.charCodeAt(); // 65
Let codigoLetraNueva = ( x – 65 + n ) % 26 + 65; // 72
Let letraNueva = String.fromCharCode(codigoLetraNueva);
Console.log ( letraNueva ); // H

![Imagen4](https://user-images.githubusercontent.com/104030163/179890928-4643d143-19bc-451d-b02d-0269a5e0659e.png)


## 4. Definición del Producto

* ¿Quiénes son los principales usuarios de producto?
Únicamente los directivos de la empresa dueña del sitio web.

* ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
Utilizar la plataforma en línea para agilizar la comunicación interna sobre nuevos
proyectos, campañas o información relevante, los textos codificados tienen el único
propósito de informar sobre dichos temas a las áreas correspondientes.

* ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?
De manera personal y asíncrona, los directivos podrán consultar (cifrar/descifrar) los
anuncios o textos que necesiten, agilizando la comunicación entre áreas.


## 5. Interfaz UI

Se decidió manejar una interfaz sencilla pero intuitiva para el usuario, donde
solo podrá ingresar el texto a codificar/decodificar e indicar el número de
desplazamientoss para su transformación.

Los colores son de acuerdo a la imagen de la empresa, con una imagen de la CDMX,
donde se encuentra su sede.

![Imagen5](https://user-images.githubusercontent.com/104030163/179890979-2915f848-3c4a-4961-bf18-690494f9da58.png)
![Imagen6](https://user-images.githubusercontent.com/104030163/179890983-bad746a6-2de4-4600-86f6-93ded913a254.png)


## 6. Checklist

Esta sección de los hits completados.

### Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [x] Cifra/descifra minúsculas
* [x] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
