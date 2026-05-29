import { useState, useEffect } from 'react';
import { Home, UtensilsCrossed, Calendar, Mail, Menu, X } from 'lucide-react';
import { Toaster } from 'sonner';
import { LandingPage } from './components/LandingPage';
import { MenuPage } from './components/MenuPage';
import { ReservationPage } from './components/ReservationPage';
import { ContactPage } from './components/ContactPage';
import logo from '../imports/468929974_2005502923195485_9183379246974127614_n.png';

type PageType = 'landing' | 'menu' | 'reservation' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onReserveClick={() => setCurrentPage('reservation')} />;
      case 'menu':
        return <MenuPage />;
      case 'reservation':
        return <ReservationPage />;
      case 'contact':
        return <ContactPage />;
    }
  };

  const navigationItems = [
    { id: 'landing' as PageType, label: 'Inicio', icon: Home },
    { id: 'menu' as PageType, label: 'Carta', icon: UtensilsCrossed },
    { id: 'reservation' as PageType, label: 'Reservar', icon: Calendar },
    { id: 'contact' as PageType, label: 'Contacto', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F4]">
      <Toaster position="top-center" theme="dark" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1E1E1E]/95 backdrop-blur-sm border-b border-[#F5F5F4]/10 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => setCurrentPage('landing')}
              className={`relative hover:opacity-80 transition-all duration-300 z-50 ${
                isScrolled ? 'translate-y-0' : 'translate-y-1/2'
              }`}
            >
              <img
                src={logo}
                alt="Sargento Pimienta 2.0"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-24'
                }`}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-[#F59E0B] text-[#121212]'
                        : 'hover:bg-[#2A2A2A]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#F5F5F4]/10">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-end gap-3 px-4 py-3 rounded-lg transition-all mb-2 ${
                      currentPage === item.id
                        ? 'bg-[#F59E0B] text-[#121212]'
                        : 'hover:bg-[#2A2A2A]'
                    }`}
                  >
                    {item.label}
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-28">{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] border-t border-[#F5F5F4]/10 py-8 px-4 text-center">
        <p className="text-[#A8A8A8]">
          © 2026 Sargento Pimienta 2.0. Donde la música y el sabor se encuentran.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-[#A8A8A8]">
          <a
            href="https://www.instagram.com/sargentopimienta_sc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F59E0B] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/sargentopimientaSC/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F59E0B] transition-colors"
          >
            Facebook
          </a>
          <a href="tel:0276-3550841" className="hover:text-[#F59E0B] transition-colors">
            0276-3550841
          </a>
        </div>
      </footer>
    </div>
  );
}