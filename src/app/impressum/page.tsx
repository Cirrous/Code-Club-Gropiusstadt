import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Code Club Gropiusstadt</strong></p>
                <p>Verantwortliche Person: Christian Raisch</p>
                <p>Zwergasternweg 14</p>
                <p>12357 Berlin, Deutschland</p>
                <p>E-Mail: christianraisch@gmail.com</p>
                <p>Telefon: +49 15781712474</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veranstaltungsort</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Stadtbibliothek Gertrud-Junge-Bibliothek</strong></p>
                <p>Bat-Yam-Platz 1, 12353 Berlin</p>
                <p>12353 Berlin</p>
                <p>Telefon: +49 1511 5075002</p>
                <p>E-Mail: gemeinschaftshaus@stadtbibliothek-neukoelln.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="font-semibold">Inhalt des Onlineangebotes</h3>
                <p>
                  Der Code Club Gropiusstadt übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, 
                  Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen 
                  den Code Club Gropiusstadt, welche sich auf Schäden materieller oder ideeller Art beziehen, 
                  die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung 
                  fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
                </p>

                <h3 className="font-semibold">Verweise und Links</h3>
                <p>
                  Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des 
                  Verantwortungsbereiches des Code Club Gropiusstadt liegen, würde eine Haftungsverpflichtung 
                  ausschließlich in dem Fall in Kraft treten, in dem der Code Club Gropiusstadt von den Inhalten 
                  Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger 
                  Inhalte zu verhindern.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datenschutz</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder 
                  geschäftlicher Daten (E-Mail-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe 
                  dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und 
                  Bezahlung aller angebotenen Dienste ist - soweit technisch möglich und zumutbar - auch ohne 
                  Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
                </p>
                <p>
                  Für die Anmeldung zu unseren Workshops über pretix.eu gelten die Datenschutzbestimmungen 
                  des jeweiligen Anbieters.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechtswirksamkeit</h2>
              <div className="text-gray-700">
                <p>
                  Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf 
                  diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der 
                  geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben 
                  die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 