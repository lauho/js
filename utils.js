export function calcularPromedio(notas) {
  return (
    notas.reduce((acumulador, actual) => acumulador + actual, 0) / notas.length
  );
}

export function estaAprobado(nota, minima = 6) {
  return nota >= minima;
}
