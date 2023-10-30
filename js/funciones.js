console.log("----------------------- EJEMPLOS FUNCIONES ------------------------------------")

//FUNCIONES
function sumar(a,b){
    return a+b
}

//Funcion flecha
const sumarFlecha = (a,b)=>{
    return a + b
}

// console.log(sumar(3,4))
// console.log(sumarFlecha(3,4))

//ARRAY
let array = [1,2,3,4,5,6];

// console.log(array[1])

//FOR
//Inicialización; condicion; actualización
// for (let i = 0; i <= 6; i++) {
//     console.log(i)
// }

//WHILE
let i = 0
while (i<=10) {
    console.log("Aun no valgo 10! En esta iteración del while valgo: ",i)
    i++
}


if (10 === "10") {
    console.log("10 es igual a 10")
} else {
    console.log("falso")
}
