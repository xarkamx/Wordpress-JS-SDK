# Wordpress-JS-SDK
SDK para la API de Wordpress en JS (early)


El script esta escrito en TS
## QuickStart
Primero ocupas importar la libreria (En caso de TS (proximamente vanilla)).

`import { Wordpress } from './Commons/Consumers/Wordpress/Wordpress.js';`

Para inicializar el SDK solo ocupas correr la siguiente linea

```
const wp = new Wordpress(
  path: string,
  credentials: iJWTCredentials = null,
  access: JWTAccess = null
)
```
### Donde:

`path` es la ruta de tu wordpress

`credentials` es un objeto que consiste en las credenciales de tu WP (`username` y `password` por lo general).

`access` indica la clase que manejara las reglas de acceso, este script esta probado con `JWT`. 

## Posts

`wp.posts(iWpost)` 

prepara el objeto wp para hacer una consulta en posts.

ejemplo de uso
```
await wp.posts(
      {
        page: 2,
        per_page: 3
      }
    ).get()
```

Para publicar un nuevo post es 

```
await wp.posts(
      {
        title: "titulo",
        extract: "extracto",
        content: "contenido"
      }
    ).publish()

```

## Pages

`wp.pages(iWPage)` 

prepara el objeto wp para hacer una consulta en pages.

ejemplo de uso
```
await wp.pages().get()
```

## Media

`wp.media(iWMedia)` 

prepara el objeto wp para hacer una consulta en media.

ejemplo de uso
```
await wp.media().get()
```

## Tipos

`wp.types()` 

prepara el objeto wp para hacer una consulta en types.

ejemplo de uso
```
await wp.types().get()
```

## Estatus

`wp.statuses()` 

prepara el objeto wp para hacer una consulta en statuses.

ejemplo de uso
```
await wp.statuses().get()
```

## Taxonomias

`wp.taxonomies()` 

prepara el objeto wp para hacer una consulta en taxonomies.

ejemplo de uso
```
await wp.taxonomies().get()
```

## Categorias

`wp.categories()` 

prepara el objeto wp para hacer una consulta en categories.

ejemplo de uso
```
await wp.categories().get()
```

## Tags

`wp.tags()` 

prepara el objeto wp para hacer una consulta en tags.

ejemplo de uso
```
await wp.tags().get()
```

## Usuarios

`wp.users()` 

prepara el objeto wp para hacer una consulta en users.

ejemplo de uso
```
await wp.users().get()
```

## Comentarios

`wp.comments()` 

prepara el objeto wp para hacer una consulta en comments.

ejemplo de uso
```
await wp.comments().get()
```

