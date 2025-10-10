import React, { useState } from 'react';
import { Sparkles, Zap, Palette, Code, Check, ArrowRight, Menu, X, Monitor, Smartphone, Layout, Eye, Mail, MessageCircle, Award, Briefcase } from 'lucide-react';
import ShowcaseSample from './samples/ShowcaseSample';
import SaasSample from './samples/SaasSample';
import PortfolioSample from './samples/PortfolioSample';
import AgencySample from './samples/AgencySample';
import RestaurantSample from './samples/RestaurantSample';
import FitnessSample from './samples/FitnessSample';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);
  const [previewSample, setPreviewSample] = useState(null);

  const samples = [
    {
      id: 1,
      title: 'Showcase',
      category: 'Vitrine de Produtos',
      description: 'Exiba seus produtos de forma elegante e profissional',
      color: 'from-purple-500 to-pink-500',
      features: ['Galeria de produtos', 'Filtros por categoria', 'Design responsivo'],
      image: '✨'
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
      title: 'Rápido que só',
      description: 'Página carrega na velocidade da luz. Ninguém tem paciência pra esperar, né?'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Funciona em tudo',
      description: 'Celular, tablet, desktop... Em qualquer tela fica perfeito'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Bonito de verdade',
      description: 'Design moderno que chama atenção e faz as pessoas agirem'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Código que não dá dor de cabeça',
      description: 'Limpo, organizado e fácil de dar manutenção depois'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Do seu jeito',
      description: 'Adapto tudo pra combinar com a cara da sua marca'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Google vai amar',
      description: 'Otimizado pra aparecer bem nos resultados de busca'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-purple-600">Guilherme Torres</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#samples" className="text-slate-600 hover:text-purple-600 transition">Samples</a>
              <a href="#features" className="text-slate-600 hover:text-purple-600 transition">Skills</a>
              <a href="#about" className="text-slate-600 hover:text-purple-600 transition">Sobre</a>
              <a href="#contact" className="text-slate-600 hover:text-purple-600 transition">Contato</a>
              <a
                href="https://wa.me/5521983781120"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
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
              <a href="#features" className="block text-slate-600 hover:text-purple-600">Skills</a>
              <a href="#about" className="block text-slate-600 hover:text-purple-600">Sobre</a>
              <a href="#contact" className="block text-slate-600 hover:text-purple-600">Contato</a>
              <a
                href="https://wa.me/5521983781120"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center">
                <Award className="w-4 h-4 mr-2" />
                Dev Full Stack • Rio de Janeiro 🌴
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Oi, eu sou o{' '}
              <span className="text-purple-600">Guilherme</span>
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Transformo suas ideias em <strong>landing pages incríveis</strong> que fazem seu negócio decolar 🚀
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              React, Tailwind e 5 anos criando experiências que convertem. Simples assim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#samples"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center"
              >
                Bora ver uns trabalhos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5521983781120"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition flex items-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Vamos conversar?
              </a>
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
              O que eu <span className="text-purple-600">faço</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Aqui tem alguns exemplos do que posso criar pra você. Cada página é pensada pra converter visitantes em clientes de verdade.
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-8xl shadow-2xl flex-shrink-0">
                👨‍💻
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Quem sou eu</h2>
                <p className="text-lg text-slate-700 mb-4">
                  Prazer! Sou o <strong>Guilherme</strong>, carioca de 32 anos que ama transformar café em código ☕
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  Comecei a programar há mais de <strong>5 anos</strong> e desde então não parei mais. Me formei em
                  Análise e Desenvolvimento de Sistemas, mas é na prática que a gente aprende de verdade, né?
                </p>
                <p className="text-lg text-slate-700 mb-6">
                  Meu negócio é criar landing pages que <strong>convertem</strong>. Nada de site bonito só pra enfeitar -
                  tem que trazer resultado pro seu bolso. React, Tailwind, aquele código limpo que não dá dor de cabeça depois.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 shadow">React</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 shadow">Tailwind CSS</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 shadow">JavaScript</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 shadow">TypeScript</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 shadow">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Como eu <span className="text-purple-600">trabalho</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              O que você ganha trabalhando comigo (além de um código top, claro)
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
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Bora criar algo incrível?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Manda uma mensagem que a gente conversa sobre seu projeto. Respondo rapidinho!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:guiatorres8@gmail.com"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center"
            >
              <Mail className="mr-3 w-5 h-5" />
              guiatorres8@gmail.com
            </a>
            <a
              href="https://wa.me/5521983781120"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center"
            >
              <MessageCircle className="mr-3 w-5 h-5" />
              (21) 98378-1120
            </a>
          </div>
          <p className="text-sm mt-6 opacity-75">📍 Rio de Janeiro, RJ</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-bold">Guilherme Torres</span>
              </div>
              <p className="text-slate-400 mb-4">
                Dev que transforma café em landing pages que convertem ☕→💰
              </p>
              <p className="text-slate-400 text-sm">
                📍 Rio de Janeiro, RJ<br />
                💼 +5 anos fazendo magia com código<br />
                🎓 Formado, mas aprendi mesmo foi na prática
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#samples" className="hover:text-white transition">Meus Trabalhos</a></li>
                <li><a href="#about" className="hover:text-white transition">Sobre Mim</a></li>
                <li><a href="#features" className="hover:text-white transition">Skills</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="mailto:guiatorres8@gmail.com"
                    className="hover:text-white transition flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    guiatorres8@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5521983781120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    (21) 98378-1120
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Guilherme Torres • Feito com ❤️ e muito café • Rio de Janeiro, RJ</p>
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

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setPreviewSample(selectedSample.id);
                  setSelectedSample(null);
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-4 rounded-xl font-semibold transition flex items-center justify-center"
              >
                <Eye className="mr-2 w-5 h-5" />
                Ver Preview
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition">
                Solicitar este Sample
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sample Preview - Full Page */}
      {previewSample === 1 && <ShowcaseSample onClose={() => setPreviewSample(null)} />}
      {previewSample === 2 && <SaasSample onClose={() => setPreviewSample(null)} />}
      {previewSample === 3 && <PortfolioSample onClose={() => setPreviewSample(null)} />}
      {previewSample === 4 && <AgencySample onClose={() => setPreviewSample(null)} />}
      {previewSample === 5 && <RestaurantSample onClose={() => setPreviewSample(null)} />}
      {previewSample === 6 && <FitnessSample onClose={() => setPreviewSample(null)} />}
    </div>
  );
}

export default App;
