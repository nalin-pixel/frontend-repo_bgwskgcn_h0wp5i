export default function WhatIs() {
  return (
    <section id="cos-e" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cos’è MOVE30
          </h2>
          <p className="mt-4 text-gray-600">
            MOVE30 è una challenge di 30 giorni pensata per chi vuole migliorare il proprio aspetto, perdere peso e ritrovare energia… anche se ha poco tempo o fatica a trovare la motivazione.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              3 allenamenti online a settimana in stile HIIT
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              Durata di soli 30 minuti
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              Nessun attrezzo – puoi allenarti a casa o all’aperto
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              Programma adatto a tutti i livelli di forma fisica
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Allenati dove vuoi, quando vuoi — e scopri quanto può cambiare il tuo corpo in 30 giorni.
          </p>
        </div>
        <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
          <h3 className="text-xl font-semibold text-rose-800">Mangia meglio senza stress</h3>
          <p className="mt-3 text-rose-900/80">
            Dimentica diete rigide, bilance e calorie da contare. Con MOVE30 impari una strategia alimentare semplice e sostenibile, perfetta per chi ha una vita piena:
          </p>
          <ul className="mt-4 space-y-2 text-rose-900">
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />Mangiare sano senza rinunce</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />Idee pratiche per pasti veloci</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />Consigli per restare costante anche nei giorni più impegnativi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
