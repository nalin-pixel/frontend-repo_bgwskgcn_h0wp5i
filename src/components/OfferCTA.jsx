export default function OfferCTA() {
  return (
    <section id="offerta" className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-3xl border bg-gradient-to-br from-rose-600 to-rose-500 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Il cambiamento inizia da un movimento</h3>
              <p className="mt-3 text-rose-50/90">
                30 giorni, 30 minuti, 3 volte a settimana. Niente scuse. Solo risultati.
              </p>
              <p className="mt-4 text-white font-semibold">Solo per pochi giorni: 27€ invece di 97€</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white text-rose-700 px-6 py-3 font-semibold shadow hover:bg-rose-50 transition w-full md:w-auto"
              >
                INIZIA ORA MOVE30 A 27€
              </a>
            </div>
          </div>
          <p className="mt-6 text-rose-50/80 text-sm">Offerta valida ancora per poco</p>
        </div>
      </div>
    </section>
  );
}
