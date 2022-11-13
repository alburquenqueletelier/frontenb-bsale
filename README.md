# Ecommerce Bsale

Frontend de ecommerce que consiste en una single web page con dos vistas:
- index, que muestra un listado de productos que puedes filtrar mediante la barra de categoría o por nombre. 
- cart, que muestra el listado de productos agregados al carrito y te permite aumentar/disminuir o quitar productos, junto con un detalle de la compra.
Utiliza localstorage para consistencia de datos.

Puedes visitar el demo [aquí](https://ecommerce-bsale.vercel.app/)

## Requerimientos
- Javascript
- Bootstrap 5.2

## Instalación

1. Clona el repositorio
```bash
git clone https://github.com/alburquenqueletelier/frontenb-bsale
```
2. Entra al directorio del repositorio y ejecuta ```npm install```
3. Levanta el servidor de desarrollo (recomendación: si usas visual studio code instala el plugin live server para levantar el servidor).

## Uso y estructura
La estructura y funcionalidad están inspirados en React. La renderización se basa en cambiar elementos del DOM pre definidos en la plantilla index.

Dentro del repositorio están los 2 archivos que le dan vida a la pagina:

1. app.js: se encarga de ejecutar la vista correspondiente una vez cargado el documento. Tiene funcionalidades para manejar eventos de refrescar navegador y volver atrás.
2. index.html: tiene los elementos que se manipulan para cambiar su contenido. Incorpora un div para generar el toast (notificación cuando se agrega producto al carro), y un contenedor (container-fluid) principal con un header, footer, e hijos (div) identificados por id:
    - main
    - productsContainer
    - leftNav

Dentro del proyecto está la carpeta "src" que contiene código javascript y hojas de estilos separados por carpeta. 

### JS

- API: carpeta con archivo "apiGET.js" que tiene 2 funciones para consumir la API. 

```javascript
get_categories({search: value, attribute: string})
```

| Parametros        | Valores                                     | Descripción                                                                                                                                             |
|-------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| object (optional) | {search: value(any), by: attribute(string)} | Busca la categoría y retorna un arreglo con los valores. Puedes buscar por atributo id o name. Si no se indica argumento devuelve todas las categorías. |

```javascript
get_products({search: value, attribute: string})
```

| Parametros        | Valores                                     | Descripción                                                                                                                                                                    |
|-------------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| object (optional) | {search: value(any), by: attribute(string)} | Busca productos según argumentos y retorna un arreglo con los valores. Puedes buscar por atributo id, name o category. Si no se indica argumento devuelve todos los productos. |

**Importante: hay un limite de consultas diarias a la base de datos. La aplicación utiliza localstorage para almacenar la información y evita así volver a consumir la API. Recomiendo mantener este enfoque**

 - Components

Carpeta con las funciones para generar el contenido. Al ser invocadas retornar código HTML listo para ser anexado al DOM exceptuando el component toast.js que genera el HTML directamente en el contenedor correspondiente.

- Utils

Tiene herramientas que mejoran la funcionalidad y visualización de la aplicación.

- Views

Archivos JS que se encargan de anexar el HTML generado por los componentes en el DOM. 

### Estilos

Tiene una hoja de estilos index.css que tiene principalmente los estilos de las tarjetas (card), header, footer y de imagenes e iconos. La mayoría de los estilos son definidos mediante javascript utilizando Bootstrap al crear los elementos, invocando el método classlist.add('class1', 'class2', ... , 'classn')

### Modo de Uso

Para cambiar el contenido de los elementos se desarrollo una función almacenada dentro de ```src/js/utils``` llamada ```loading``` que cuando se invoca genera un spinner en el elemento mientras ejecuta la función deseada y cuando termina incorpora el HTML generado al DOM. 

```javascript
loading(tag, callback, args)
```

| Parametros | Valores            | Descripción                                                                                                             |
|------------|--------------------|-------------------------------------------------------------------------------------------------------------------------|
| tag        | string             | Se usa para identificar el elemento que se quiere modificar su contenido. Actualmente funciona solo con el atributo ID. |
| callback   | function/component | Se llama la función o componente que se encarga de generar los elementos que se agregarán al DOM.                       |
| args (optional) | any      | Valores asociados a la función del callback                                                                             |

**Ejemplo**
```javascript
import { loading } from "../utils/utils.js";
import {leftNavBar} from "../components/leftNavBar.js"; // Componente a renderizar
// 1er parametro ID donde se realiza el cambio, 2do parametro la funcion/compoenente
loading ('leftNav', leftNavBar); 
```

No es menester usar esta herramienta, puedes modificar el DOM como te plazca pero respetando la plantilla inicial con los ID correspondientes para evitar errores.

## Licencia

Open source. <span style="color:blue">Desarrollado por **Baal**</span>.
Contacto:
alburquenque.letelier@gmail.com
+56979577547