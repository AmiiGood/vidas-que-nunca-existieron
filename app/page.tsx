export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 font-serif">
          Vidas que Nunca Existieron
        </h1>
        <p className="text-xl text-tinta/70 max-w-2xl mx-auto">
          Cada persona aquí tiene una historia completa: biografía, diarios,
          miedos y sueños. Ninguna existió realmente, pero todas pudieron haber
          sido.
        </p>
      </header>

      <section className="max-w-7xl mx-auto">
        <div className="bg-white/50 backdrop-blur p-12 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl mb-4">🚧 En Construcción</h2>
          <p className="text-lg mb-6">
            Día 1: Configurando los cimientos de este proyecto.
          </p>
          <div className="flex gap-4 justify-center">
            <div className="bg-sepia-100 p-4 rounded">
              <span className="text-4xl">👤</span>
              <p className="mt-2">Personas</p>
            </div>
            <div className="bg-sepia-100 p-4 rounded">
              <span className="text-4xl">📖</span>
              <p className="mt-2">Diarios</p>
            </div>
            <div className="bg-sepia-100 p-4 rounded">
              <span className="text-4xl">🎭</span>
              <p className="mt-2">Historias</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
