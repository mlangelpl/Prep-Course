// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.keys(objeto).map(function(key){return [key,objeto[key]]
  });
  return matriz
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  objeto = {};
  for(let i=0; i<string.length;i++){
    a = string[i];
    k = 0;
    if(false === objeto.hasOwnProperty(a) ){
        for(let j=i;j<string.length;j++){
          if(a === string[j]){
            k = k + 1;
          }
          objeto[a]=k;
        }
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  string1 = "";
  string2 = ""
  for(let i=0; i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      a = s[i];
      string2 = string2 + a;
    }else{
      a = s[i];
      string1 = string1 + a;
    }
  }
  s = string2 + string1
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  a = 0;
  str = str + " ";
  string = "";
  for(let i=0; i<str.length;i++){
      string2 = "";
      if(str[i]===" "){
          for(let j=a;j<i;j++){
            string2 = str[j] + string2;
          }
          a = i + 1;
          string = string + string2 + " ";
      }
  }
  return string.slice(0,string.length-1);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  str = numero.toString();
  string = "";
  for(let i=0; i<str.length;i++){
    string = str[i] + string;
  }
  if(string===str){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  string = "";
  for(let i=0; i<cadena.length;i++){
    if(cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c"){
      string = string + cadena[i];
    }
  }
  return string;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var array = [];
  longitud = arr.length;
  i=0;
  k=0;
  while(array.length<longitud){
    a = arr[i];
    for(let j=0;j<arr.length;j++){
        if(a.length>arr[j].length){
          a = arr[j];
          k = j ;
        }
    }
    array.push(a);
    arr.splice(k,1);
    k=0;
  }
  return array;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var array = [];
  for(let i=0;i<arreglo1.length;i++){
    for(let j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        array.push(arreglo1[i]);
      }
    }
  }
  return array;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

