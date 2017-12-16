### Ejemplo de proyecto con ITCSS

https://github.com/csswizardry/discovr

## Defender el desarollo

- Hacer el control de las horas que nos lleva mantener el código viejo y tambien el invertido en el nuevo.

## Construir guía de estilos

- Se construye la guía de estilos bajo un arquitectura, en este caso haitiCSS

## haitiCSS layers

Son distintas a las de ITCSS

### Diferencias.

####  Capas que Añade:
- foundations:  es un lenguaje visual para ser heredado como breakpoint,s espacioado, colores, fuentes. Esto nos permite tener en abstracto los valores globales. Ej color-principal  NO escupe código, solo configuración.
- material: Capa demasiado simple para ser componente. util para títulos y cuerpo de letra, iconos, sprite, img, video (esta capa complementa el tema de los elmentnos.)
- animations:
- colro-shemes: patrones de colores heredables. Ejemplo para hacer cambios a bloques, para oferta de productos, se pueden heredar entre distintos componentes.

A nivel práctico hay más capas
