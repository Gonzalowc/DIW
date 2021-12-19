console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;
let colores = ["red", "blue", "green", "yellow", "black" , "purple","maroon", "coral"];
let velocidades = [0.5, 1, 1.5, 2, 2.5, 3]
let contadorVelocidad = velocidades.length-1;
//-- Velocidades del objeto
let velx = 3;
let vely = 1;
let contador = 0;
//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;
    if(contador<colores.length){
        ctx.fillStyle = colores[contador];
        contador++;
    }else{
        contador = 0
        ctx.fillStyle = colores[contador]
        contador++;
        if(contadorVelocidad>0){
            if(velx>0){
                velx = velocidades[contadorVelocidad]
            }
            if(vely<0){
                vely = velocidades[contadorVelocidad]/2
            }else{
                vely = -(velocidades[contadorVelocidad]/2)
            }
            contadorVelocidad--;
          }else{
            contadorVelocidad = velocidades.length-1;
          }
          console.log(velx+","+vely)
    }
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 0 || y > canvas.height - 20) {
    vely = -vely;
    if(contador<colores.length){
        ctx.fillStyle = colores[contador];
        contador++;
    }else{
        contador = 0
        ctx.fillStyle = colores[contador]
        contador++;
        if(contadorVelocidad>0){
            if(velx>0){
                velx = velocidades[contadorVelocidad]
            }else{
                velx = -velocidades[contadorVelocidad]
            }
            if(vely >0){
                vely = velocidades[contadorVelocidad]/2
            }else{
                vely = -velocidades[contadorVelocidad]/2
            }
            contadorVelocidad--;
          }else{
            contadorVelocidad = velocidades.length-1;
          }
          console.log(velx+","+vely)
    }
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();