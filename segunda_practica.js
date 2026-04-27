let nume1 = document.getElementById("nume1")
let nume2 = document.getElementById("nume2")
let boton = document.getElementById("boton")
let contador = document.getElementById("contador")
let suma 
boton.addEventListener("click", mostrar)

function mostrar(){
      let n = Number(nume1.value)
      let n2 = Number(nume2.value)
      suma = n+n2

      contador.textContent=suma
}
