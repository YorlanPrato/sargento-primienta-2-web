import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Music } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  artist: string;
  genre: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Noche de Rock Clásico',
    date: 'Viernes 6 de Junio',
    time: '9:00 PM',
    artist: 'Los Rebeldes',
    genre: 'Rock Clásico',
    description: 'Un tributo a las mejores bandas de los 70s y 80s',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    id: 2,
    title: 'Blues & Soul Night',
    date: 'Sábado 7 de Junio',
    time: '8:30 PM',
    artist: 'María González Trío',
    genre: 'Blues/Soul',
    description: 'Una noche íntima con los mejores blues y soul',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    id: 3,
    title: 'Indie Acoustic Sessions',
    date: 'Viernes 13 de Junio',
    time: '9:00 PM',
    artist: 'The Wanderers',
    genre: 'Indie/Acústico',
    description: 'Sonidos frescos y melodías inolvidables',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
];

interface EventsCarouselProps {
  inline?: boolean;
  onReserveClick?: () => void;
}

export function EventsCarousel({ inline = false, onReserveClick }: EventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  if (inline) {
    // Inline version for hero section (desktop only)
    return (
      <div className="relative w-full max-w-sm">
        <div className="bg-[#2A2A2A]/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          {/* Event Image - Vertical format like Instagram post */}
          <div className="relative h-[500px]">
            <img
              src={currentEvent.image}
              alt={currentEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Event info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-block bg-[#F59E0B] text-[#121212] text-xs px-3 py-1 rounded-full mb-3">
                {currentEvent.genre}
              </div>

              <h3 className="text-2xl mb-3">{currentEvent.title}</h3>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Music className="w-4 h-4 text-[#F59E0B]" />
                  <span>{currentEvent.artist}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-[#F59E0B]" />
                  <span>{currentEvent.date}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#F59E0B]" />
                  <span>{currentEvent.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#F59E0B] text-[#121212] p-2 rounded-full hover:bg-[#F59E0B]/90 transition-all shadow-lg"
          aria-label="Evento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#F59E0B] text-[#121212] p-2 rounded-full hover:bg-[#F59E0B]/90 transition-all shadow-lg"
          aria-label="Evento siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-[#F59E0B]'
                  : 'w-2 bg-[#F5F5F4]/30 hover:bg-[#F5F5F4]/50'
              }`}
              aria-label={`Ir al evento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Mobile version - standalone section
  return (
    <div className="bg-[#1E1E1E] py-16 px-4 md:hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Music className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
          <h2 className="text-4xl mb-3">Eventos en Vivo</h2>
        </div>

        <div className="relative max-w-sm mx-auto">
          {/* Carousel Card - Vertical image */}
          <div className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl">
            {/* Event Image - Vertical format */}
            <div className="relative h-[400px]">
              <img
                src={currentEvent.image}
                alt={currentEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Event Details */}
            <div className="p-6">
              <div className="inline-block bg-[#F59E0B] text-[#121212] text-sm px-3 py-1 rounded-full mb-4">
                {currentEvent.genre}
              </div>

              <h3 className="text-2xl mb-4">{currentEvent.title}</h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-[#F5F5F4]/80">
                  <Music className="w-5 h-5 text-[#F59E0B]" />
                  <span>{currentEvent.artist}</span>
                </div>

                <div className="flex items-center gap-3 text-[#F5F5F4]/80">
                  <Calendar className="w-5 h-5 text-[#F59E0B]" />
                  <span>{currentEvent.date}</span>
                </div>

                <div className="flex items-center gap-3 text-[#F5F5F4]/80">
                  <Clock className="w-5 h-5 text-[#F59E0B]" />
                  <span>{currentEvent.time}</span>
                </div>
              </div>

              <p className="text-[#A8A8A8] text-sm">{currentEvent.description}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#F59E0B] text-[#121212] p-3 rounded-full hover:bg-[#F59E0B]/90 transition-all shadow-lg"
            aria-label="Evento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#F59E0B] text-[#121212] p-3 rounded-full hover:bg-[#F59E0B]/90 transition-all shadow-lg"
            aria-label="Evento siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-[#F59E0B]'
                    : 'w-2 bg-[#F5F5F4]/30 hover:bg-[#F5F5F4]/50'
                }`}
                aria-label={`Ir al evento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
