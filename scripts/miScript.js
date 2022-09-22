/*let nombre="Julian"
console.log("Hola "+nombre)
console.log(`Hola ${nombre}`)
/*cadena=prompt("Dame un número")
dato=confirm("Si o no")

numero=5/0
document.write(numero)*/

/*const julian={
    nombre:"Julian",
    email:"julian@gmail"
}

console.log(julian)

julian.nombre="Andres Julian"

console.log(julian)

const PI=3-1415
PI=3.16*/

/* let x=5.0
let y=Number (-5)

let z="7"

console.log(x+z) */

let nombre ="Julian"
let correo="mayor.julian@gmail.com"


let julian={
    nombre:"Julian",
    email:"email@julian",
    edad:30,
    saludar:function(){
        console.log(`Hola me llamo${this.nombre}`)
    }
}

console.log(julian["nombre"])
const claves=Object.keys(julian)

const numero=[1,2,3]
const[uno,dos,tres]=numero //asigna 1 a uno, 2 a dos... y así se da valor a las variables


julian.saludar()

function doble(x){
    return 2*x
}
console.log(doble(4))


function doble1(x=2,y=4){
    return 2*x*y
}
console.log(doble1(2,5))



let x=5
console.log(++x)  //aumenta en uno el valor de la variable


console.log(5=="5")//esto da true porque tienen el mismo valor
console.log(5==="5")//esto da false porque ademas de comparar el valor compara el tipo


 