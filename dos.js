import { calcularPromedio, estaAprobado } from "./utils";

const estudiantes = [
  { nombre: "Lautaro", notas: [10, 9, 9, 8.5] },
  { nombre: "Lucas", notas: [6, 5, 6, 8.5] },
  { nombre: "Alan", notas: [3, 5, 10, 2] },
  { nombre: "Hitoshi", notas: [7.5, 8, 9, 10] },
  { nombre: "Ramón", notas: [10, 9, 9.5, 8] },
];

const estudiantesConPromedios = estudiantes.map((e) => ({
  ...e,
  promedio: calcularPromedio(e.notas),
}));

const estudiantesAprobados = estudiantesConPromedios.filter((e) =>
  estaAprobado(e.promedio),
);

console.log(
  `Los estudiantes aprobados son:\n${estudiantesAprobados.map((e) => `${e.nombre} con ${e.promedio} de promedio.`).join("\n")}`,
);
