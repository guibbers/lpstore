import React, { useState } from 'react';
import { UtensilsCrossed, Clock, MapPin, Phone, Star, ChefHat, Award, X, Calendar, Heart, Eye, Home } from 'lucide-react';

function RestaurantSample({ onClose }) {
  const [selectedDish, setSelectedDish] = useState(null);

  const menuItems = [
    {
      id: 1,
      name: 'Risotto de Frutos do Mar',
      category: 'Principais',
      price: 'R$ 78,00',
      description: 'Risotto cremoso com camarões, lulas e mexilhões frescos',
      image: '🦐',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Filé Mignon ao Molho Madeira',
      category: 'Principais',
      price: 'R$ 89,00',
      description: 'Filé mignon grelhado com molho madeira e batatas rústicas',
      image: '🥩',
      rating: 5.0
    },
    {
      id: 3,
      name: 'Salmão Grelhado',
      category: 'Principais',
      price: 'R$ 72,00',
      description: 'Salmão fresco grelhado com legumes e molho de limão',
      image: '🐟',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Bruschetta Italiana',
      category: 'Entradas',
      price: 'R$ 32,00',
      description: 'Pão italiano tostado com tomates frescos e manjericão',
      image: '🍞',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Tiramisu',
      category: 'Sobremesas',
      price: 'R$ 28,00',
      description: 'Clássico tiramisu italiano com café expresso',
      image: '🍰',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Petit Gateau',
      category: 'Sobremesas',
      price: 'R$ 32,00',
      description: 'Bolinho de chocolate com sorvete de baunilha',
      image: '🍫',
      rating: 5.0
    },
  ];

  const specialties = [
    { icon: <ChefHat className="w-8 h-8" />, title: 'Chef Premiado', description: 'Comandado pelo Chef Gabriel Santos' },
    { icon: <Award className="w-8 h-8" />, title: 'Michelin Star', description: 'Restaurante com estrela Michelin' },
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: 'Ingredientes Premium', description: 'Produtos selecionados diariamente' },
  ];

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 overflow-y-auto">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Modo Preview - Sample: Restaurante Gourmet</span>
          </div>
          <button
            onClick={onClose}
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar para Home
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-[52px] bg-slate-900/80 backdrop-blur-lg border-b border-yellow-900/20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex items-center">
                <UtensilsCrossed className="w-6 h-6 text-yellow-500 mr-2" />
                Sabor Gourmet
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-300 hover:text-yellow-500 transition">Menu</a>
                <a href="#" className="text-slate-300 hover:text-yellow-500 transition">Reservas</a>
                <a href="#" className="text-slate-300 hover:text-yellow-500 transition">Sobre</a>
                <a href="#" className="text-slate-300 hover:text-yellow-500 transition">Contato</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Reservar Mesa
              </button>
              <button onClick={onClose} className="text-slate-300 hover:text-yellow-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-[52px]">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-orange-600/20 to-red-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-2" />
              Restaurante Premiado com Estrela Michelin
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Uma experiência
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              gastronômica única
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Pratos autorais que celebram a alta gastronomia brasileira e internacional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center">
              <Calendar className="mr-2 w-5 h-5" />
              Fazer Reserva
            </button>
            <button className="border-2 border-yellow-500 text-yellow-300 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500/10 transition">
              Ver Menu Completo
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
              <Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-white font-semibold">Horários</div>
              <div className="text-slate-300 text-sm">Ter-Dom: 12h-23h</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
              <MapPin className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-white font-semibold">Localização</div>
              <div className="text-slate-300 text-sm">Av. Paulista, 1000 - SP</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
              <Phone className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-white font-semibold">Contato</div>
              <div className="text-slate-300 text-sm">(11) 3333-4444</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  {specialty.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{specialty.title}</h3>
                  <p className="text-slate-300">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Nosso <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Menu</span>
            </h2>
            <p className="text-xl text-slate-300">Pratos preparados com ingredientes selecionados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedDish(item)}
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 flex items-center justify-center relative">
                  <div className="text-8xl group-hover:scale-110 transition">{item.image}</div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Heart className="w-5 h-5 text-yellow-500" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-yellow-500 font-semibold uppercase">{item.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm text-slate-300">{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-500">{item.price}</span>
                    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition">
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-9xl mx-auto shadow-2xl">
                  👨‍🍳
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-800 border-2 border-yellow-500 p-4 rounded-2xl">
                  <Award className="w-8 h-8 text-yellow-500 mb-2" />
                  <div className="text-white font-semibold">Michelin Star</div>
                  <div className="text-slate-400 text-sm">2024</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <span className="text-yellow-500 font-semibold mb-4 block">CONHEÇA NOSSO CHEF</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Chef Gabriel Santos
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Com mais de 20 anos de experiência em alta gastronomia, o Chef Gabriel Santos traz para o Sabor Gourmet sua paixão pela culinária brasileira contemporânea.
              </p>
              <p className="text-slate-300 text-lg mb-6">
                Formado nas melhores escolas culinárias da Europa, ele combina técnicas clássicas com ingredientes locais para criar experiências gastronômicas inesquecíveis.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-800 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm">
                  Estrela Michelin 2024
                </span>
                <span className="bg-slate-800 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm">
                  Top 50 Chefs Brasil
                </span>
                <span className="bg-slate-800 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm">
                  Prêmio Paladar 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <UtensilsCrossed className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Reserve sua mesa
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Uma experiência gastronômica que você não vai esquecer
          </p>
          <div className="bg-white p-8 rounded-2xl max-w-md mx-auto">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-lg mb-4 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-3 rounded-lg mb-4 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full px-4 py-3 rounded-lg mb-4 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg mb-4 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition">
              Confirmar Reserva
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <UtensilsCrossed className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold">Sabor Gourmet</h3>
          </div>
          <p className="text-slate-400 mb-4">Alta gastronomia com alma brasileira</p>
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex items-center text-slate-300">
              <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
              Av. Paulista, 1000 - São Paulo
            </div>
            <div className="flex items-center text-slate-300">
              <Phone className="w-4 h-4 mr-2 text-yellow-500" />
              (11) 3333-4444
            </div>
          </div>
          <p className="text-slate-500 text-sm">&copy; 2025 Sabor Gourmet. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Dish Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-2xl w-full p-8 animate-slide-up border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs text-yellow-500 font-semibold uppercase">{selectedDish.category}</span>
                <h3 className="text-3xl font-bold mt-2 text-white">{selectedDish.name}</h3>
              </div>
              <button onClick={() => setSelectedDish(null)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="h-64 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-9xl">{selectedDish.image}</div>
            </div>

            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
              <span className="text-white font-semibold">{selectedDish.rating}</span>
              <span className="text-slate-400 ml-2">(150+ avaliações)</span>
            </div>

            <p className="text-slate-300 text-lg mb-6">{selectedDish.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-yellow-500">{selectedDish.price}</span>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition">
                Adicionar ao Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantSample;
