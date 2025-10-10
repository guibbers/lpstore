import React, { useState } from 'react';
import { Eye, Star, Filter, Search, X, Grid, List, ArrowRight, Sparkles, Award, TrendingUp, Home } from 'lucide-react';

function ShowcaseSample({ onClose }) {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['Todos', 'Eletrônicos', 'Moda', 'Casa & Decoração', 'Esportes'];

  const products = [
    {
      id: 1,
      name: 'Smart Watch Pro',
      category: 'Eletrônicos',
      description: 'Relógio inteligente com múltiplas funções',
      image: '⌚',
      rating: 4.9,
      featured: true,
      tags: ['Novo', 'Popular'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Tênis Urban Style',
      category: 'Moda',
      description: 'Conforto e estilo para o dia a dia',
      image: '👟',
      rating: 4.7,
      featured: true,
      tags: ['Bestseller'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Câmera Digital 4K',
      category: 'Eletrônicos',
      description: 'Capture momentos em alta definição',
      image: '📷',
      rating: 4.8,
      featured: false,
      tags: ['Premium'],
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 4,
      name: 'Luminária Smart LED',
      category: 'Casa & Decoração',
      description: 'Iluminação inteligente para sua casa',
      image: '💡',
      rating: 4.6,
      featured: false,
      tags: ['Novo'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      name: 'Mochila Tech Pro',
      category: 'Moda',
      description: 'Design moderno com compartimentos inteligentes',
      image: '🎒',
      rating: 4.8,
      featured: true,
      tags: ['Popular'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 6,
      name: 'Fone Bluetooth Elite',
      category: 'Eletrônicos',
      description: 'Som premium com cancelamento de ruído',
      image: '🎧',
      rating: 4.9,
      featured: true,
      tags: ['Bestseller', 'Premium'],
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 7,
      name: 'Kit Yoga Premium',
      category: 'Esportes',
      description: 'Tudo para sua prática de yoga',
      image: '🧘',
      rating: 4.7,
      featured: false,
      tags: [],
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 8,
      name: 'Vaso Decorativo',
      category: 'Casa & Decoração',
      description: 'Elegância minimalista para seu ambiente',
      image: '🏺',
      rating: 4.5,
      featured: false,
      tags: [],
      color: 'from-teal-400 to-cyan-500'
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Modo Preview - Sample: Showcase</span>
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
      <header className="sticky top-[52px] bg-white/80 backdrop-blur-lg shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center">
                <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
                ShowCase Pro
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Produtos</a>
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Coleções</a>
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Sobre</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center text-slate-700 hover:text-purple-600 transition">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={onClose} className="text-slate-600 hover:text-purple-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Coleção Premium 2025
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Produtos Selecionados
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                com Excelência
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Descubra nossa curadoria especial de produtos premium com qualidade garantida
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-slate-600 text-sm">Produtos</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-slate-600 text-sm">Marcas</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
              <div className="text-slate-600 text-sm">Clientes</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-slate-600 text-sm">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Produtos em <span className="text-purple-600">Destaque</span>
            </h2>
            <p className="text-xl text-slate-600">Nossos itens mais populares</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.filter(p => p.featured).slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative`}>
                  <div className="text-9xl group-hover:scale-110 transition">{product.image}</div>
                  {product.tags.includes('Bestseller') && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs text-purple-600 font-semibold uppercase">{product.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-2 group-hover:text-purple-600 transition">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition flex items-center">
                      Ver Detalhes
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-4xl font-bold mb-4 md:mb-0">
              Todos os <span className="text-purple-600">Produtos</span>
            </h2>

            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2 bg-white rounded-full p-1 shadow-md">
                {['all', ...categories.map(c => c.toLowerCase())].map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat === 'todos' ? 'all' : cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      selectedCategory === cat || (cat === 'todos' && selectedCategory === 'all')
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'text-slate-600 hover:text-purple-600'
                    }`}
                  >
                    {cat === 'all' ? 'Todos' : categories[idx - 1]}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="hidden md:flex items-center space-x-2 bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-slate-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-slate-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  viewMode === 'list' ? 'flex flex-row' : 'transform hover:-translate-y-1'
                }`}
              >
                <div className={`bg-gradient-to-br ${product.color} flex items-center justify-center relative ${
                  viewMode === 'list' ? 'w-48 h-48' : 'h-48'
                }`}>
                  <div className={`group-hover:scale-110 transition ${
                    viewMode === 'list' ? 'text-6xl' : 'text-7xl'
                  }`}>{product.image}</div>
                  {product.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-purple-600 px-2 py-1 rounded-full text-xs font-bold"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                  <span className="text-xs text-purple-600 font-semibold uppercase">{product.category}</span>
                  <h3 className={`font-bold mt-1 mb-1 group-hover:text-purple-600 transition ${
                    viewMode === 'list' ? 'text-xl' : 'text-lg'
                  }`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Explore Nossa Coleção Completa
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Produtos selecionados com qualidade garantida
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center mx-auto">
            Ver Catálogo Completo
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-bold">ShowCase Pro</span>
              </div>
              <p className="text-slate-400">
                Produtos premium cuidadosamente selecionados
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Eletrônicos</a></li>
                <li><a href="#" className="hover:text-white transition">Moda</a></li>
                <li><a href="#" className="hover:text-white transition">Casa & Decoração</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 ShowCase Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ShowcaseSample;
