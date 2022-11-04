# Reporte

Realicé el test utilizando una librería para usar un icono para el _dropdown_ que es el **chevron_down** de FontAwesome. Además, la función del componente `created` ahora es asíncrona para recibir los datos de un API, que se almacenarán en una variable llamada `fruit` que es retornada por la función `data`.

El componente funciona independientemente, cuenta con sus estilos integrados de igual forma que su funcionamiento con JavaScript. El componente cuenta con los siguientes métodos para filtrar y mostrar/ocultar frutas:

1. `showItems`: alterna las clases de los elementos del dropdown para ocultarlos, mostrarlos, o rotarlos en el caso del icono.
2. `findFruits`: filtrado del dropdown para encontrar una fruta específica, puede:
    1. Encontrar frutas sin importar si las letras están en _MAYÚSCULAS_, _minúsculas_ o incluso _MixTAs_.
    2. Encontrar frutas sin importar dónde se encuentren las letras, si al final, centro o inicio, lo que importa es el **orden**.
