const clasificarNota = (nota) => {
  if (nota < 4) return "Desaprobado";
  if (nota >= 4 && nota <= 7) return "Aprobado";
  if (nota >= 8  && nota <= 10) return "Promocionado";
  else return "Nota invalida";
};

const diaDeLaSemana = (numero) => {
  switch (numero) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sábado (fin de semana)";
    case 7: return "Domingo (fin de semana)";
    default: return "Día inválido";
  }
};

console.log(clasificarNota(1));
console.log(clasificarNota(5));
console.log(clasificarNota(9));
console.log(clasificarNota(11));

console.log(diaDeLaSemana(1));
console.log(diaDeLaSemana(7));
console.log(diaDeLaSemana(10))