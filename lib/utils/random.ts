export function generarSemilla(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function seleccionarAleatorio<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function seleccionarMultiple<T>(array: T[], cantidad: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, cantidad);
}
