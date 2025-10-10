import React, { useState } from 'react';
import { Sparkles, Zap, Palette, Code, Check, ArrowRight, Menu, X, Monitor, Smartphone, Layout } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);

  const samples = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      category: 'Loja Virtual',
      description: 'Landing page para lojas online com carrinho e checkout integrado',
      color: 'from-purple-500 to-pink-500',
      features: ['Carrinho de compras', 'Integração de pagamento', 'Catálogo de produtos'],
      image: '🛍️'
    },
    {
      id: 2,
      title: 'SaaS Tech',
      category: 'Software',
      description: 'Perfeita para produtos SaaS e ferramentas digitais',
      color: 'from-blue-500 to-cyan-500',
      features: ['Dashboard analytics', 'Planos e preços', 'Integrações API'],
      image: '💻'
    },
    {
      id: 3,
      title: 'Portfólio Criativo',
      category: 'Portfólio',
      description: 'Mostre seu trabalho com estilo e profissionalismo',
      color: 'from-orange-500 to-red-500',
      features: ['Galeria de projetos', 'Animações suaves', 'Formulário de contato'],
      image: '🎨'
    },
    {
      id: 4,
      title: 'Agência Digital',
      category: 'Serviços',
      description: 'Ideal para agências e prestadores de serviço',
      color: 'from-green-500 to-emerald-500',
      features: ['Showcase de cases', 'Depoimentos', 'Call-to-action'],
      image: '🚀'
    },
    {
      id: 5,
      title: 'Restaurante Gourmet',
      category: 'Gastronomia',
      description: 'Menu digital e reservas online para restaurantes',
      color: 'from-yellow-500 to-orange-500',
      features: ['Menu interativo', 'Sistema de reservas', 'Galeria de pratos'],
      image: '🍽️'
    },
    {
      id: 6,
      title: 'Fitness & Wellness',
      category: 'Saúde',
      description: 'Landing page para academias e personal trainers',
      color: 'from-indigo-500 to-purple-500',
      features: ['Planos de treino', 'Agendamento', 'Área do aluno'],
      image: '💪'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Otimizada',
      description: 'Carregamento ultra-rápido para melhor experiência do usuário'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: '100% Responsivo',
      description: 'Perfeito em qualquer dispositivo - mobile, tablet ou desktop'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design Moderno',
      description: 'Interfaces elegantes que convertem visitantes em clientes'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Código Limpo',
      description: 'React e Tailwind CSS para fácil manutenção e escalabilidade'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Customizável',
      description: 'Adaptamos cada landing page à identidade da sua marca'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'SEO Otimizado',
      description: 'Estrutura preparada para ranquear bem nos buscadores'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold gradient-text">LandingStore</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#samples" className="text-slate-600 hover:text-purple-600 transition">Samples</a>
              <a href="#features" className="text-slate-600 hover:text-purple-600 transition">Features</a>
              <a href="#contact" className="text-slate-600 hover:text-purple-600 transition">Contato</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Começar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#samples" className="block text-slate-600 hover:text-purple-600">Samples</a>
              <a href="#features" className="block text-slate-600 hover:text-purple-600">Features</a>
              <a href="#contact" className="block text-slate-600 hover:text-purple-600">Contato</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Landing Pages Profissionais
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforme Visitantes em{' '}
              <span className="gradient-text">Clientes</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Landing pages modernas e responsivas, desenvolvidas com React e Tailwind CSS.
              Pronto para alavancar seu negócio online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center">
                Ver Samples
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
                Falar com Vendas
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="mt-16 relative">
            <div className="absolute top-10 left-10 animate-float">
              <div className="bg-purple-200 w-20 h-20 rounded-full opacity-50 blur-xl"></div>
            </div>
            <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-pink-200 w-32 h-32 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nossos <span className="gradient-text">Samples</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Escolha o modelo perfeito para seu negócio. Cada um customizável e otimizado para conversão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samples.map((sample, index) => (
              <div
                key={sample.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedSample(sample)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${sample.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl animate-float">{sample.image}</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-purple-600 mb-2 uppercase tracking-wide">
                    {sample.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition">
                    {sample.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {sample.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {sample.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 text-slate-700 group-hover:text-white py-3 rounded-lg font-semibold transition flex items-center justify-center">
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Por que <span className="gradient-text">Escolher-nos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tecnologia de ponta e design excepcional para resultados que importam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato e receba uma proposta personalizada para seu projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-6 py-4 rounded-full text-slate-900 w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition transform hover:scale-105 flex items-center justify-center">
              Solicitar Contato
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-bold">LandingStore</span>
              </div>
              <p className="text-slate-400">
                Landing pages profissionais para impulsionar seu negócio online.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Samples</a></li>
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Customização</a></li>
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 LandingStore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Sample Modal */}
      {selectedSample && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-semibold text-purple-600 mb-2 uppercase">
                  {selectedSample.category}
                </div>
                <h3 className="text-3xl font-bold">{selectedSample.title}</h3>
              </div>
              <button
                onClick={() => setSelectedSample(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className={`h-48 bg-gradient-to-br ${selectedSample.color} rounded-xl flex items-center justify-center mb-6`}>
              <div className="text-8xl">{selectedSample.image}</div>
            </div>

            <p className="text-slate-600 mb-6">{selectedSample.description}</p>

            <h4 className="font-semibold mb-3">Funcionalidades incluídas:</h4>
            <ul className="space-y-2 mb-6">
              {selectedSample.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-600">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition">
              Solicitar este Sample
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
