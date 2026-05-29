import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  'Entradas': [
    {
      id: '1',
      name: 'Tostadas de Hongos Silvestres',
      description: 'Hongos salteados con ajo, tomillo y aceite de trufa sobre pan artesanal',
      price: 12.50,
      image: 'https://images.unsplash.com/photo-1692197275441-40c874f40385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwcmVzdGF1cmFudCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzk1NDMzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: '2',
      name: 'Carpaccio de Res',
      description: 'Láminas finas de res con rúcula, parmesano y reducción balsámica',
      price: 15.00,
      image: 'https://images.unsplash.com/photo-1692197275931-0793e08efcc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwcmVzdGF1cmFudCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzk1NDMzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
  ],
  'Platos': [
    {
      id: '3',
      name: 'Steak Rock & Roll',
      description: 'Filete de res 300g con salsa de whisky, papas gratinadas y vegetales asados',
      price: 28.50,
      image: 'https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwcmVzdGF1cmFudCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzk1NDMzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: '4',
      name: 'Risotto de Hongos',
      description: 'Arroz arborio con mezcla de hongos, parmesano y aceite de trufa',
      price: 22.00,
      image: 'https://images.unsplash.com/photo-1692197275441-40c874f40385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwcmVzdGF1cmFudCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzk1NDMzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: false,
    },
  ],
  'Postres': [
    {
      id: '5',
      name: 'Brownie del Guitarrista',
      description: 'Brownie de chocolate con helado de vainilla y salsa de caramelo',
      price: 9.50,
      image: 'https://images.unsplash.com/photo-1590741664176-7fbd7e2592a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwcmVzdGF1cmFudCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzk1NDMzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: '6',
      name: 'Tarta de Limón',
      description: 'Tarta de limón con merengue tostado y coulis de frutos rojos',
      price: 8.50,
      image: 'https://images.unsplash.com/photo-1637944220604-c5f28faac604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwcmVzdGF1cmFudCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzk1NDMzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
  ],
  'Cócteles': [
    {
      id: '7',
      name: 'Old Fashioned Rock',
      description: 'Whisky bourbon, azúcar, bitter angostura y cáscara de naranja',
      price: 11.00,
      image: 'https://images.unsplash.com/photo-1469234496837-d0101f54be3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcm9jayUyMGJhciUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMGF0bW9zcGhlcmljfGVufDF8fHx8MTc3OTU0MzMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: '8',
      name: 'Margarita Eléctrica',
      description: 'Tequila premium, triple sec, lima fresca y sal de mar',
      price: 10.00,
      image: 'https://images.unsplash.com/photo-1550520293-d34b3f2e116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkYXJrJTIwcm9jayUyMGJhciUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMGF0bW9zcGhlcmljfGVufDF8fHx8MTc3OTU0MzMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
  ],
};

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Entradas');
  const categories = Object.keys(menuData);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-center mb-8">Nuestra Carta</h2>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-[#F59E0B] text-[#121212]'
                  : 'bg-[#1E1E1E] text-[#F5F5F4] hover:bg-[#2A2A2A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuData[activeCategory].map((item) => (
            <div
              key={item.id}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden hover:ring-2 hover:ring-[#F59E0B] transition-all"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {!item.available && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="bg-[#DC2626] px-4 py-2 rounded-lg flex items-center gap-2">
                      <X className="w-5 h-5" />
                      No Disponible
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="flex-1">{item.name}</h3>
                  <span className="text-[#F59E0B] ml-4 whitespace-nowrap">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-[#A8A8A8] text-sm mb-3">{item.description}</p>
                {item.available && (
                  <div className="flex items-center gap-2 text-[#4ADE80] text-sm">
                    <Check className="w-4 h-4" />
                    Disponible
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
