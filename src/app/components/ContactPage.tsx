import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('¡Mensaje enviado! Te contactaremos pronto.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4">Contacto</h1>
          <p className="text-[#A8A8A8] text-lg max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
            Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-8">Información de Contacto</h2>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Dirección</h3>
                  <p className="text-[#A8A8A8]">Calle 14 entre carrera 20 y 21</p>
                  <p className="text-[#A8A8A8]">Barrio Obrero, San Cristóbal, Táchira</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Teléfono</h3>
                  <p className="text-[#A8A8A8]">0276-3550841</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-[#A8A8A8]">info@sargentopimienta.com</p>
                  <p className="text-[#A8A8A8]">reservas@sargentopimienta.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Horarios</h3>
                  <p className="text-[#A8A8A8]">Sábado - Jueves: 5:00 PM - 02:00 AM</p>
                  <p className="text-[#A8A8A8]">Domingo - Lunes: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h3 className="mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/sargentopimienta_sc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2A2A2A] hover:bg-[#F59E0B] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-6 h-6 text-[#F5F5F4] group-hover:text-[#121212]" />
                </a>
                <a
                  href="https://www.facebook.com/sargentopimientaSC/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2A2A2A] hover:bg-[#F59E0B] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-6 h-6 text-[#F5F5F4] group-hover:text-[#121212]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#1E1E1E] rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl mb-6">Envíanos un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2A2A2A] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F59E0B] transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2A2A2A] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F59E0B] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F59E0B] transition-colors"
                    placeholder="(212) 555-1234"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#2A2A2A] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F59E0B] transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F59E0B] text-[#121212] px-6 py-4 rounded-lg hover:bg-[#F59E0B]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-[#2A2A2A] rounded-2xl overflow-hidden h-96">
            <div className="w-full h-full flex items-center justify-center text-[#A8A8A8]">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#F59E0B] mx-auto mb-4" />
                <p className="text-lg">Mapa interactivo</p>
                <p className="text-sm">Calle 14 entre carrera 20 y 21, Barrio Obrero</p>
                <p className="text-sm">San Cristóbal, Táchira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
