console.log("probando")


let myStr = "hola" // 0.01s
console.log(myStr) // 0.02s

myStr = "adios" // 0.01s
console.log(myStr) // 0.02s

// JS es un lenguaje sincrono! con comportamiento asincronos.

// 1. asincronia natural. M2 => envios y recepción de data a traves de internet.
// 2. asincronia creada manualmente.

// setTimeout y setInterval


// window.setTimeout()
// 1er argumento: la funcion a ejecutar
// 2do argumento: el tiempo que JS esperará antes de ejecutar la funcion. en milisegundos.

// setTimeout(() => {
//   console.log("cambiando variable a los 2 segundos")
//   miVariable = "patata"
// }, 2000) // 2 segundos

// setTimeout(() => {
//   console.log("a los 1.5 seg", miVariable)
// }, 1500)



// let miVariable;
// console.log("base", miVariable)


// JS siempre intenta ejecutar todo lo sincrono, y luego se lanza todo lo asincrono.

// let count = 0;

// let intervalId = setInterval(() => {
//   // console.log("ejecutando intervalo")
//   count++
//   console.log(count)

//   // if (count === 5) {
//   //   // clearInterval() para limpiar intervalos
//   //   console.log("deteniendo el intervalo a los 5 seg")
//   //   clearInterval(intervalId)
//   // }

// }, 1000)


// setTimeout(() => {
//   console.log("deteniendo el intervalo a los 5 seg")
//   clearInterval(intervalId)
// }, 5000)



// setTimeout(() => {

//   let h1Node = document.createElement("h1")
//   h1Node.innerText = "PUBLICIDAD"
//   h1Node.style.backgroundColor = "red"
//   h1Node.style.color = "white"

//   const cajaNode = document.querySelector("#caja")
//   cajaNode.append(h1Node)

//   setTimeout(() => {
//     h1Node.remove()
//   }, 2000)

// }, 2000)


const cajaNode = document.querySelector("#caja")
cajaNode.style.width = "400px"
cajaNode.style.height = "400px"
cajaNode.style.backgroundColor = "darkgray"
cajaNode.style.position = "relative"

const cuboNode = document.querySelector("#cubo")
cuboNode.style.width = "40px"
cuboNode.style.height = "40px"
cuboNode.style.position = "absolute"
let cubeY = 10;
cuboNode.style.top = `${cubeY}px`
let cubeX = 20
cuboNode.style.left = `${cubeX}px`
let cubeColor = "black"
cuboNode.style.backgroundColor = cubeColor


let intervalId = setInterval(() => {
  console.log("ejecutando intervalo")

  // quiero mover el cubo. Quiero cambiar la posición left.
  cubeX += 5
  console.log(cubeX)
  // console.log(cubeX)
  cuboNode.style.left = `${cubeX}px` // esta es la linea que actualiza el nodo

  cubeY += 5
  cuboNode.style.top = `${cubeY}px`

  if (cubeX >= 300) {
    cubeColor = "red"
    cuboNode.style.backgroundColor = cubeColor
    clearInterval(intervalId)
  }

}, 50)
