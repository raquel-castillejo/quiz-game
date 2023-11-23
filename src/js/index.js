/*
LÓGICA
======

- tengo que saber en qué pregunta estoy,
    o ir almacenando las respuestas en un array para compararlas luego
- comienzo con la primera pregunta
- hago click en UNA DE LAS CUATRO RESPUESTAS
- guardo la respuesta que es
- desaparece la primera pregunta
- aparece la segunda pregunta y vuelvo a hacer click
- { bucle hasta llegar a la última pregunta }

- al llegar a la última pregunta
- listado con las respuestas correctas e incorrectas
*/

// DOM
// ===

// pillar la pregunta y el contenedor de las respuestas
// las respuestas las puedo comparar y saber solo usando el textcontent

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

