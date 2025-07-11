export interface Persona {
  id: string;
  nombre: string;
  apellido: string;
  nombreCompleto: string;
  genero: "masculino" | "femenino" | "otro";
  fechaNacimiento: Date;
  edad: number;
  lugarNacimiento: string;
  nacionalidad: string;
  biografia: string;
  resumenBreve: string;
  rasgos: string[];
  ocupacion: string;
  fotoPerfil?: string;
  descripcionFisica?: string;
  semilla: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GenerarPersonaInput {
  semilla?: string;
  genero?: "masculino" | "femenino" | "otro" | "aleatorio";
  rangoEdad?: {
    min: number;
    max: number;
  };
  nacionalidad?: string;
  epoca?: "historica" | "moderna" | "contemporanea";
}

export interface RasgosPersonalidad {
  principales: string[]; // 3-5 rasgos dominantes
  secundarios: string[]; // 5-8 rasgos menores
  quirks: string[]; // 2-3 peculiaridades unicas
}
