import React from 'react';
import { BarChart3, Zap, Users, Globe, TrendingUp, Shield, Check, X, ChevronRight, Play, Eye, Home } from 'lucide-react';

function SaasSample({ onClose }) {
  const features = [
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics Avançado', description: 'Métricas em tempo real' },
    { icon: <Users className="w-6 h-6" />, title: 'Colaboração em Equipe', description: 'Trabalhe junto, cresça junto' },
    { icon: <Zap className="w-6 h-6" />, title: 'Automação Inteligente', description: 'Economize horas de trabalho' },
    { icon: <Shield className="w-6 h-6" />, title: 'Segurança Máxima', description: 'Dados criptografados e seguros' },
    { icon: <Globe className="w-6 h-6" />, title: 'Integrações', description: 'Conecte suas ferramentas favoritas' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Crescimento Garantido', description: 'Escale sem limites' },
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 49',
      period: '/mês',
      description: 'Perfeito para começar',
      features: ['5 projetos', '10 GB de armazenamento', 'Suporte por email', 'Analytics básico'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 149',
      period: '/mês',
      description: 'Para equipes em crescimento',
      features: ['Projetos ilimitados', '100 GB de armazenamento', 'Suporte prioritário', 'Analytics avançado', 'Integrações premium', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Para grandes empresas',
      features: ['Tudo do Professional', 'Armazenamento ilimitado', 'Suporte 24/7', 'SLA garantido', 'Segurança avançada', 'Gerente dedicado'],
      popular: false
    }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Modo Preview - Sample: SaaS Tech</span>
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                DataFlow
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-700 hover:text-blue-600 transition">Produto</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 transition">Soluções</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 transition">Preços</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 transition">Recursos</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-slate-700 hover:text-blue-600 transition">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                Começar Grátis
              </button>
              <button onClick={onClose} className="text-slate-600 hover:text-blue-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ Trusted by 10,000+ teams
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              Gerencie seus projetos<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                com inteligência
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              A plataforma completa de gestão que cresce com seu negócio.
              Analytics, automação e colaboração em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center">
                Começar Grátis - 14 dias
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Ver Demo
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                  <TrendingUp className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">+28%</div>
                  <div className="text-sm opacity-90">Crescimento</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-xl">
                  <Users className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">1,234</div>
                  <div className="text-sm opacity-90">Usuários Ativos</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                  <BarChart3 className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">$45k</div>
                  <div className="text-sm opacity-90">Receita MRR</div>
                </div>
              </div>
              <div className="h-40 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-blue-600 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Tudo que você precisa para <span className="text-blue-600">crescer</span>
            </h2>
            <p className="text-xl text-slate-600">Recursos poderosos para equipes de todos os tamanhos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Planos que se adaptam ao seu <span className="text-blue-600">ritmo</span>
            </h2>
            <p className="text-xl text-slate-600">Comece grátis, escale quando precisar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'ring-4 ring-blue-600 shadow-2xl transform scale-105'
                    : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}>
                  Começar Agora
                </button>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de empresas que já usam DataFlow
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
            Começar Grátis Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">DataFlow</h3>
          <p className="text-slate-400 mb-4">A plataforma de gestão inteligente</p>
          <p className="text-slate-500 text-sm">&copy; 2025 DataFlow. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default SaasSample;
