import { Instagram, Clock, MapPin, Music } from 'lucide-react';
import { EventsCarousel } from './EventsCarousel';

interface LandingPageProps {
  onReserveClick: () => void;
}

export function LandingPage({ onReserveClick }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] md:min-h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1709548145082-04d0cde481d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcm9jayUyMGJhciUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMGF0bW9zcGhlcmljfGVufDF8fHx8MTc3OTU0MzMxMnww&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            {/* Mobile: Centered content */}
            <div className="md:hidden flex flex-col items-center justify-center text-center min-h-[50vh]">
              <Music className="w-16 h-16 text-[#F59E0B] mb-6" />
              <h1 className="text-5xl mb-4 tracking-tight">Sargento Pimienta 2.0</h1>
              <p className="text-xl text-[#F5F5F4]/80 mb-8 max-w-2xl">
                Donde la música se encuentra con la gastronomía excepcional
              </p>
              <button
                onClick={onReserveClick}
                className="bg-[#F59E0B] text-[#121212] px-8 py-4 rounded-lg hover:bg-[#F59E0B]/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Reservar Mesa
              </button>
            </div>

            {/* Desktop: Two columns layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
              {/* Left: Main content */}
              <div className="text-left">
                <Music className="w-16 h-16 text-[#F59E0B] mb-6" />
                <h1 className="text-6xl lg:text-7xl mb-6 tracking-tight">Sargento Pimienta 2.0</h1>
                <p className="text-2xl text-[#F5F5F4]/80 mb-8">
                  Donde la música se encuentra con la gastronomía excepcional
                </p>
                <button
                  onClick={onReserveClick}
                  className="bg-[#F59E0B] text-[#121212] px-8 py-4 rounded-lg hover:bg-[#F59E0B]/90 transition-all transform hover:scale-105 shadow-lg text-lg"
                >
                  Reservar Mesa
                </button>
              </div>

              {/* Right: Carousel */}
              <div className="flex justify-center">
                <EventsCarousel inline onReserveClick={onReserveClick} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Carousel - Mobile only */}
      <EventsCarousel onReserveClick={onReserveClick} />

      {/* Info Section */}
      <div className="bg-[#1E1E1E] py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Clock className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
            <h3 className="mb-2">Horarios</h3>
            <p className="text-[#A8A8A8]">Sábado - Jueves: 5:00 PM - 02:00 AM</p>
            <p className="text-[#A8A8A8]">Domingo - Lunes: Cerrado</p>
          </div>

          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
            <h3 className="mb-2">Ubicación</h3>
            <p className="text-[#A8A8A8]">Calle 14 entre carrera 20 y 21</p>
            <p className="text-[#A8A8A8]">Barrio Obrero, San Cristóbal, Táchira</p>
          </div>

          <div className="text-center">
            <Instagram className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
            <h3 className="mb-2">Instagram</h3>
            <a
              href="https://www.instagram.com/sargentopimienta_sc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8A8A8] hover:text-[#F59E0B] transition-colors"
            >
              @sargentopimienta_sc
            </a>
          </div>
        </div>
      </div>

      {/* Atmosphere Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Una Experiencia Única</h2>
          <p className="text-[#A8A8A8] text-lg leading-relaxed">
            Sumérgete en la atmósfera bohemia de nuestro bar-restaurante, donde cada noche
            es una celebración del rock clásico y la cocina contemporánea. Desde los acordes
            de las guitarras hasta los sabores exquisitos de nuestros platos, cada detalle
            está diseñado para crear momentos inolvidables.
          </p>
        </div>
      </div>
    </div>
  );
}
