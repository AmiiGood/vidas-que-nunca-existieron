export const personaCompleta = {
  // Identidad basica
  identidad: {
    nombre: "Elena",
    apellido: "Martínez Soto",
    nombreCompleto: "Elena Martínez Soto",
    apodos: ["Elenita", "Lena"],
    genero: "femenino",
    fechaNacimiento: "1985-03-15",
    lugarNacimiento: "Valladolid, España",
    nacionalidad: "Española",
  },

  // Descripcion fisica
  apariencia: {
    altura: "1.68m",
    complexion: "delgada",
    cabello: "castaño oscuro, ondulado, hasta los hombros",
    ojos: "verdes con motas doradas",
    rasgosDistintivos: [
      "lunar en la mejilla izquierda",
      "cicatriz pequeña en la ceja derecha",
    ],
    estiloVestir: "clásico con toques bohemios",
  },

  // Personalidad
  personalidad: {
    rasgos: {
      principales: ["empática", "creativa", "nostálgica"],
      secundarios: ["indecisa", "soñadora", "leal", "algo ansiosa"],
      quirks: [
        "colecciona tickets de tren",
        "habla con las plantas",
        "no puede dormir sin calcetines",
      ],
    },
    miedos: ["el olvido", "decepcionar a su madre", "las alturas"],
    deseos: [
      "escribir un libro",
      "reconciliarse con su hermana",
      "viajar a Japón",
    ],
  },

  // Historia vital
  biografia: {
    resumen: "Elena creció en una librería familiar...",
    eventos_clave: [
      {
        edad: 7,
        evento: "Muerte de su padre",
        impacto: 9,
        descripcion: "El día que las páginas perdieron color...",
      },
      {
        edad: 23,
        evento: "Mudanza a Madrid",
        impacto: 7,
        descripcion: "Dejó la librería para perseguir sus sueños...",
      },
    ],
  },

  // Contexto actual
  presente: {
    edad: 39,
    ocupacion: "Editora en una pequeña editorial",
    estadoCivil: "soltera",
    residencia: "Madrid, España",
    situacionActual: "Considerando volver a Valladolid...",
  },

  // Relaciones
  relaciones: [
    {
      nombre: "Carmen Soto",
      relacion: "madre",
      estado: "cercana pero complicada",
      descripcion: "Espera que Elena se haga cargo de la librería",
    },
    {
      nombre: "Pablo Martínez",
      relacion: "hermano menor",
      estado: "distante",
      descripcion: "No se hablan desde la disputa por la herencia",
    },
  ],

  // Metadata del sistema
  _meta: {
    semilla: "elena_martinez_1985_valladolid",
    version: "1.0",
    fechaCreacion: "2024-01-15",
    ultimaActualizacion: "2024-01-15",
  },
};
