import { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, CreditCard, Check } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase';

type NationalityType = 'V' | 'E';

export function ReservationPage() {
  const [nationality, setNationality] = useState<NationalityType>('V');
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Operating hours
  const operatingHours = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30',
    '23:00', '23:30', '00:00', '00:30', '01:00', '01:30', '02:00'
  ];

  // Convert 24h to 12h format
  const formatTo12Hour = (time24: string) => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '');
    setIdNumber(numbers.slice(0, 9));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '');
    setPhone(numbers.slice(0, 11));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idNumber || !fullName || !phone || !selectedDate || !selectedTime) {
      toast.error('Por favor complete todos los campos');
      return;
    }

    if (phone.length < 10) {
      toast.error('El teléfono debe tener al menos 10 dígitos');
      return;
    }

    try {
      const { error } = await supabase
        .from('reservas')
        .insert([
          {
            cedula: `${nationality}-${idNumber}`,
            nombre_cliente: fullName,
            telefono: phone,
            fecha: selectedDate,
            hora: selectedTime,
            comensales: guests,
          },
        ]);

      if (error) {
        toast.error('Error al guardar la reserva');
        console.error('Supabase error:', error);
        return;
      }

      toast.success('¡Reserva confirmada!', {
        description: `${selectedDate} a las ${selectedTime} para ${guests} ${guests === 1 ? 'persona' : 'personas'}`,
        duration: 5000,
      });

      // Reset form
      setIdNumber('');
      setFullName('');
      setPhone('');
      setGuests(2);
      setSelectedDate('');
      setSelectedTime('');
    } catch (error) {
      toast.error('Error al guardar la reserva');
      console.error('Error:', error);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl mb-4">Reservar Mesa</h2>
          <p className="text-[#A8A8A8]">
            Complete el formulario para asegurar su mesa en Rock & Sabor
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1E1E1E] rounded-lg p-8 space-y-6">
          {/* ID Number */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#F59E0B]" />
              Cédula de Identidad
            </label>
            <div className="flex gap-2">
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value as NationalityType)}
                className="bg-[#121212] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] w-20"
              >
                <option value="V">V</option>
                <option value="E">E</option>
              </select>
              <input
                type="text"
                value={idNumber}
                onChange={handleIdChange}
                placeholder="12345678"
                className="bg-[#121212] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] flex-1"
                maxLength={9}
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-[#F59E0B]" />
              Nombre Completo
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ingrese su nombre completo"
              className="bg-[#121212] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] w-full"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#F59E0B]" />
              Teléfono
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="04241234567"
              className="bg-[#121212] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] w-full"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#F59E0B]" />
              Número de Comensales
            </label>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setGuests(num)}
                  className={`w-12 h-12 rounded-lg transition-all ${
                    guests === num
                      ? 'bg-[#F59E0B] text-[#121212]'
                      : 'bg-[#121212] text-[#F5F5F4] hover:bg-[#2A2A2A]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#F59E0B]" />
              Fecha
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={today}
              className="bg-[#121212] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] w-full"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
              Hora
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-[#121212] border border-[#F5F5F4]/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] w-full"
            >
              <option value="">Seleccione una hora</option>
              {operatingHours.map((time) => (
                <option key={time} value={time}>
                  {formatTo12Hour(time)}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F59E0B] text-[#121212] px-6 py-4 rounded-lg hover:bg-[#F59E0B]/90 transition-all flex items-center justify-center gap-2 mt-8"
          >
            <Check className="w-5 h-5" />
            Confirmar Reserva
          </button>
        </form>    
      </div>
    </div>
  );
}
