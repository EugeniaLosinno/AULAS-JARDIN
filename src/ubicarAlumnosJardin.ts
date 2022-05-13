let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let numero = <HTMLInputElement>document.getElementById("cantidad");

let respuesta = <HTMLParagraphElement>document.getElementById("respuesta");

const bancosAulaAzul: number = 40;
const bancosAulaVerde: number = 35;
const bancosAulaAmarilla: number = 30;
let cantidadAlumnos: number;
let sala: string;

function averiguarSala(cantidad: number): string {
  let salita: string;

  if (cantidad <= bancosAulaAmarilla) {
    salita = "amarilla";
  } else {
    if (cantidad <= bancosAulaVerde) {
      salita = "verde";
    } else {
      if (cantidad <= bancosAulaAzul) {
        salita = "azul";
      } else {
        salita = "sin lugar";
      }
    }
  }
  return salita;
}

btnEnviar.addEventListener("click", () => {
  cantidadAlumnos = Number(numero.value);

  sala = averiguarSala(cantidadAlumnos);
  switch (sala) {
    case "amarilla":
      respuesta.innerHTML = `La sala para sentar ${cantidadAlumnos} alumnos, es la sala amarilla`;
      console.log(respuesta.innerHTML);
      break;
    case "verde":
      respuesta.innerHTML = `La sala para sentar ${cantidadAlumnos} alumnos, es la sala verde`;
      console.log(respuesta.innerHTML);
      break;
    case "azul":
      respuesta.innerHTML = `La sala para sentar ${cantidadAlumnos} alumnos, es la sala azul`;
      console.log(respuesta.innerHTML);
      break;
    default:
      respuesta.innerHTML = `la cantidad de alumnos ingresada, supera la capacidad de las aulas`;
      console.log(respuesta.innerHTML);
      break;
  }
});
