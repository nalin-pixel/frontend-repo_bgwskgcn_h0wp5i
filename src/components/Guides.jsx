export default function Guides() {
  return (
    <section id="chi" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Chi ti guida</h2>
          <p className="mt-4 text-gray-600">
            Ciao, siamo Tiziano Mazzocchetti e Natalia Andrea Mainet.
          </p>
          <p className="mt-3 text-gray-600">
            Tiziano è Personal Trainer e insegnante di educazione fisica: da anni aiuta le persone a ritrovare forma, energia e fiducia in sé stesse, con un approccio concreto, motivante e sostenibile.
          </p>
          <p className="mt-3 text-gray-600">
            Natalia Andrea Mainet è counselor professionista: grazie all’ascolto attivo e alle tecniche creative, ti accompagna nel tuo percorso di trasformazione personale, aiutandoti a ritrovare equilibrio, chiarezza e motivazione profonda.
          </p>
          <p className="mt-3 text-gray-600">
            Insieme, ti guideremo passo dopo passo nel programma MOVE30, unendo corpo e mente per un vero cambiamento.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="text-xl font-semibold text-gray-900">Testimonianze</h3>
          <div className="mt-4 space-y-6">
            <blockquote className="rounded-xl bg-gray-50 p-5 text-gray-700">
              “Allenamenti pratici e motivanti! Ho perso 3 kg in un mese e mi sento piena di energia.”
              <footer className="mt-3 text-sm text-gray-500">— Sara, 38 anni</footer>
            </blockquote>
            <blockquote className="rounded-xl bg-gray-50 p-5 text-gray-700">
              “Il mix tra movimento, alimentazione e supporto emotivo è incredibile. Finalmente un programma completo.”
              <footer className="mt-3 text-sm text-gray-500">— Marco, 44 anni</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
