// e ---> enter
// o---> ober  ///vocales
// i----> imes
// a----> ai
// u---> ufat

//amarillo --->  aimairillo
// amairillo --> aimesmaimesrimesllo

function encriptar() {
  var text = document.getElementById('data').value.toLowerCase()
  // i es para que afecte tanto mayusculas como minusculas
  // g es para toda la linea u oracion
  // m es para afecte a multiples leneas o parrafo
  var txtcifrado = text.replace(/e/gim, 'enter')
  var txtcifrado = txtcifrado.replace(/o/gim, 'ober')
  var txtcifrado = txtcifrado.replace(/i/gim, 'imes')
  var txtcifrado = txtcifrado.replace(/a/gim, 'ai')
  var txtcifrado = txtcifrado.replace(/u/gim, 'ufat')

  document.getElementById('imgDer').style.display = 'none'
  document.getElementById('texth2').style.display = 'none'
  document.getElementById('name').innerHTML = txtcifrado
  document.getElementById('copy').style.display = 'show'
  document.getElementById('copy').style.display = 'inherit'
}

function desencriptar() {
  let text = document.getElementById('data').value.toLowerCase()
  // i es para que afecte tanto mayusculas como minusculas
  // g es para toda la linea u oracion
  // m es para afecte a multiples leneas o parrafo
  var txtcifrado = text.replace(/enter/gim, 'e')
  var txtcifrado = txtcifrado.replace(/ober/gim, 'o')
  var txtcifrado = txtcifrado.replace(/imes/gim, 'i')
  var txtcifrado = txtcifrado.replace(/ai/gim, 'a')
  var txtcifrado = txtcifrado.replace(/ufat/gim, 'u')

  document.getElementById('imgDer').style.display = 'none'
  document.getElementById('texth2').style.display = 'none'
  document.getElementById('name').innerHTML = txtcifrado
  document.getElementById('copy').style.display = 'show'
  document.getElementById('copy').style.display = 'inherit'
}

function copy() {
  var contenido = document.querySelector('#name')
  contenido.select()
  document.execCommand('copy')
  alert('se copio')
}
