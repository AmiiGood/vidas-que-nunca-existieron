import { format, differenceInYears } from "date-fns";
import { es } from "date-fns/locale";

export function calcularEdad(fechaNacimiento: Date): number {
  return differenceInYears(new Date(), fechaNacimiento);
}

export function formatearFecha(fecha: Date, formato: string = "PPP"): string {
  return format(fecha, formato, { locale: es });
}

export function generarFechaNacimiento(edadMin: number, edadMax: number): Date {
  const edad = Math.floor(Math.random() * (edadMax - edadMin + 1)) + edadMin;
  const año = new Date().getFullYear() - edad;
  const mes = Math.floor(Math.random() * 12);
  const dia = Math.floor(Math.random() * 28) + 1;
  return new Date(año, mes, dia);
}
