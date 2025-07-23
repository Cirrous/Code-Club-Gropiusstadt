import Link from "next/link"
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
  className="py-20 px-4 sm:px-6 lg:px-8 relative"
  aria-hidden="true"
  style={{
    backgroundImage: 'url(https://bilder.deutschlandfunk.de/FI/LE/_0/18/FILE_0189365cbc72afa52bb28d38bda9b8a8/imago91557508h-jpg-100-1920x1080.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Overlay für Transparenz */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-300 opacity-90"></div>
  
  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <div className="flex justify-center items-center mb-6">
      <img 
        src="/Gropi.png" 
        alt="Code Club Maskottchen" 
        className="w-24 h-24 md:w-32 md:h-36 mr-6 pb-2"
      />
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        Code Club
        <span className="block text-indigo-600">Gropiusstadt</span>
      </h1>
    </div>
    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Lern kostenlos programmieren in der Gertrud-Junge-Bibliothek. <br/>
      Für Kinder und Jugendliche von 7 bis 17 Jahren.
    </p>
    <div className="flex justify-center">
      <a 
        href="https://pretix.eu/code-club-gropiusstadt/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105"
      >
        Workshop Tickets 🎫
      </a>
    </div>
  </div>
</section>

{/* Social Media Section */}
<section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Folge uns für mehr Informationen!</h2>
    <div className="flex justify-center space-x-8">
      <a 
        href="https://www.instagram.com/code_club_gropiusstadt/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
      >
        <FaInstagram className="text-2xl mr-3 text-pink-500" />
        Instagram
      </a>
      <a 
        href="https://www.facebook.com/profile.php?id=61577382674677" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
      >
        <FaFacebook className="text-2xl mr-3 text-blue-600" />
        Facebook
      </a>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Was ist der Code Club?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Code Club ist eine ehrenamtliche Initiative,
              die Kindern und Jugendlichen ermöglicht,
               in kostenlosen Nachmittags-Clubs spielerisch Programmieren zu lernen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Programmieren lernen</h3>
              <p className="text-gray-600">
                Von Scratch bis Python - wir starten bei den Grundlagen und arbeiten uns zu echten Programmen vor.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gemeinsam</h3>
              <p className="text-gray-600">
                In kleinen Gruppen unterstützen wir uns gegenseitig und entwickeln zusammen tolle Projekte.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eigene Projekte</h3>
              <p className="text-gray-600">
                Spiele, Websites, Apps - Bringe deine eigenen Ideen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wo?</h2>
            <p className="text-lg text-gray-600 mb-8">
             Du findest uns während der Workshopzeiten in der Trude Jugend Bib am<br/>
              📍 Bat-Yam-Platz 1, 12353 Berlin
            </p>
            <img 
              src="https://www.berlin.de/imgscaler/PBiZWWiSqrdSle-2fpkmzcw6ibkgG1vJg2x-ngvsTr8/rbig2zu1/L3N5czExLXByb2Qvc3RhZHRiaWJsaW90aGVrLW5ldWtvZWxsbi9fYXNzZXRzL2JpbGRlci9nZWJhZXVkZS9nZW1laW5zY2hhZnRzaGF1cy9naHNfYXVzc2VuYW5zaWNodC5qcGc.jpg?ts=1727249559"
              alt="Stadtbibliothek Gertrud-Junge-Bibliothek" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              style={{aspectRatio: '16/9', objectFit: 'cover', backgroundColor: '#f3f4f6'}}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nächster Workshop</h3>
            <p className="text-gray-600 mb-6">
              🕐 Donnerstag 16:30 - 18:30 Uhr<br/>
              📆 24. Juli 2025<br/>
              👥 Für Kinder und Jugendliche von 7-17 Jahren
            </p>
            <a 
              href="https://pretix.eu/dojosw/gjb03/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Jetzt anmelden
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Code Club Gropiusstadt</h3>
              <p className="text-gray-300">
                Programmieren lernen macht Spaß! Komm vorbei und entdecke die Welt des Codes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <a className="text-gray-300" href="mailto:christianraisch@gmail.com">
               christianraisch@gmail.com <br/>
              </a>
              <a className="text-gray-300" href="tel:015781712474">
              +49 15781712474
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="space-y-2">
                <a href="https://pretix.eu/dojosw/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">
                  Workshop Anmeldung
                </a>
                <Link href="/impressum" className="block text-gray-300 hover:text-white">
                  Impressum
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Code Club Gropiusstadt. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
