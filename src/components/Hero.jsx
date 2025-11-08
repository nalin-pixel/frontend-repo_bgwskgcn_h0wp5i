import { Rocket, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-200/50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-4 py-1.5 text-sm font-medium">
            <Rocket className="h-4 w-4" />
            MOVE30 – La tua sfida di 30 giorni
          </span>

          <h1 className="mt-6 font-extrabold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl">
            Cambia corpo, energia e mente in soli 30 giorni
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
            Allenamenti brevi. Nessuna palestra. Nessun conteggio calorie. Solo risultati reali in 30 minuti, 3 volte a settimana.
          </p>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Scopri come muoverti meglio, mangiare in modo semplice e sentirti finalmente in forma.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#offerta"
              className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-white font-semibold shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition"
            >
              INIZIA ORA LA TUA SFIDA
            </a>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="h-5 w-5 text-rose-600" />
              <span>Iscriviti ora a soli 27€ (anziché 97€)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
