export default function Support() {
  return (
    <section id="supporto" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Supporto emotivo e mentale
          </h2>
          <p className="mt-4 text-gray-600">
            Il cambiamento parte anche dalla mente. Durante MOVE30 avrai il supporto di Natalia Andrea Mainet, counselor professionista. Grazie all’ascolto attivo e alle tecniche creative, ti aiuterà a gestire stress, cali di motivazione e difficoltà personali.
          </p>
          <p className="mt-4 text-gray-600">
            Prenota la tua videocall di 50 minuti e affronta il tuo percorso con più equilibrio e fiducia.
          </p>
          <a href="#offerta" className="mt-6 inline-block rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:bg-rose-700 transition">Prenota ora</a>
        </div>
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="text-xl font-semibold text-gray-900">Bonus inclusi</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />PDF Ricette Fit – 20 ricette sane, gustose e facili da preparare</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />Accesso al gruppo Telegram di supporto</li>
          </ul>
          <div className="mt-6 rounded-xl bg-rose-50 border border-rose-100 p-5 text-rose-900">
            <p className="font-medium">Offerta limitata</p>
            <p className="mt-1">MOVE30 a 27€ invece di 97€.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
