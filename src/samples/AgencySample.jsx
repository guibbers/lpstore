import React from 'react';
import { Rocket, Target, Lightbulb, TrendingUp, Star, Users, Award, X, ArrowRight, CheckCircle, Zap, Eye, Home } from 'lucide-react';

function AgencySample({ onClose }) {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Branding & Identidade',
      description: 'Criamos marcas que se destacam e conectam com seu público',
      features: ['Logo Design', 'Manual da Marca', 'Papelaria']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Marketing Digital',
      description: 'Estratégias data-driven para crescimento acelerado',
      features: ['Social Media', 'Google Ads', 'SEO']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações que convertem visitantes em clientes',
      features: ['Landing Pages', 'E-commerce', 'Web Apps']
    },
  ];

  const cases = [
    {
      title: 'TechStart',
      category: 'Startup de Tecnologia',
      result: '+250% em conversões',
      metric: '3x ROI',
      image: '🚀',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'FashionHub',
      category: 'E-commerce de Moda',
      result: '+180% em vendas',
      metric: 'R$ 2M faturamento',
      image: '👗',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'HealthPlus',
      category: 'Saúde & Bem-estar',
      result: '+320% em leads',
      metric: '50k usuários',
      image: '💚',
      color: 'from-blue-400 to-cyan-500'
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, TechCorp',
      text: 'A melhor agência com quem já trabalhei. Resultados incríveis em tempo recorde!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Marina Costa',
      role: 'Founder, StyleBrand',
      text: 'Profissionalismo e criatividade em cada projeto. Superaram todas as expectativas.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Pedro Santos',
      role: 'Marketing Director',
      text: 'ROI excepcional! Nossa empresa cresceu 300% após a parceria.',
      rating: 5,
      avatar: '🧑‍💼'
    },
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Modo Preview - Sample: Agência Digital</span>
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent flex items-center">
                <Rocket className="w-6 h-6 text-green-600 mr-2" />
                GrowthLab
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-700 hover:text-green-600 transition">Serviços</a>
                <a href="#" className="text-slate-700 hover:text-green-600 transition">Cases</a>
                <a href="#" className="text-slate-700 hover:text-green-600 transition">Sobre</a>
                <a href="#" className="text-slate-700 hover:text-green-600 transition">Blog</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Fale Conosco
              </button>
              <button onClick={onClose} className="text-slate-600 hover:text-green-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Agência Top 10 no Brasil 2024
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              Transformamos marcas em
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                líderes de mercado
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Estratégias inovadoras de marketing e design para empresas que querem crescer de verdade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center">
                Iniciar Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition">
                Ver Portfólio
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-slate-600 text-sm">Projetos Entregues</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-600 text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
              <div className="text-slate-600 text-sm">ROI Médio</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12+</div>
              <div className="text-slate-600 text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nossos <span className="text-green-600">Serviços</span>
            </h2>
            <p className="text-xl text-slate-600">Soluções completas para o crescimento do seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Cases de <span className="text-green-600">Sucesso</span>
            </h2>
            <p className="text-xl text-slate-600">Resultados reais de clientes reais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${caseItem.color} flex items-center justify-center relative`}>
                  <div className="text-8xl group-hover:scale-110 transition">{caseItem.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{caseItem.category}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{caseItem.result}</div>
                      <div className="text-sm text-slate-600">Aumento</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{caseItem.metric}</div>
                      <div className="text-sm text-slate-600">Resultado</div>
                    </div>
                  </div>
                  <button className="w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 text-slate-700 group-hover:text-white py-3 rounded-lg font-semibold transition">
                    Ver Case Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              O que dizem <span className="text-green-600">nossos clientes</span>
            </h2>
            <p className="text-xl text-slate-600">Avaliações reais de quem confia em nosso trabalho</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para crescer?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Vamos criar algo incrível juntos. Agende uma conversa gratuita com nosso time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-6 py-4 rounded-full text-slate-900 w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Agendar Consulta
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">✓ Sem compromisso ✓ 100% gratuito ✓ Resposta em 24h</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="w-6 h-6 text-green-400" />
                <span className="text-lg font-bold">GrowthLab</span>
              </div>
              <p className="text-slate-400">
                Transformando marcas desde 2012
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Branding</a></li>
                <li><a href="#" className="hover:text-white transition">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition">Web Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-slate-400">
                <li>contato@growthlab.com</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 GrowthLab. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AgencySample;
