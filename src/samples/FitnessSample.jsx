import React from 'react';
import { Dumbbell, Heart, Target, Users, Clock, Award, TrendingUp, CheckCircle, X, Play, Calendar, Zap, Eye, Home } from 'lucide-react';

function FitnessSample({ onClose }) {
  const plans = [
    {
      name: 'Basic',
      price: 'R$ 99',
      period: '/mês',
      description: 'Para quem está começando',
      features: ['Acesso à academia', 'Vestiário completo', '2 aulas por semana', 'App de treinos'],
      popular: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Premium',
      price: 'R$ 189',
      period: '/mês',
      description: 'O mais escolhido',
      features: ['Tudo do Basic', 'Aulas ilimitadas', 'Avaliação física mensal', 'Nutricionista', 'Personal trainer 2x/mês'],
      popular: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Elite',
      price: 'R$ 349',
      period: '/mês',
      description: 'Resultados máximos',
      features: ['Tudo do Premium', 'Personal trainer ilimitado', 'Spa & sauna', 'Nutricionista semanal', 'Acesso 24/7'],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const classes = [
    { name: 'CrossFit', time: '06:00', instructor: 'João Silva', level: 'Avançado', icon: '🏋️' },
    { name: 'Yoga', time: '08:00', instructor: 'Maria Santos', level: 'Todos', icon: '🧘' },
    { name: 'Spinning', time: '18:00', instructor: 'Carlos Mendes', level: 'Intermediário', icon: '🚴' },
    { name: 'Pilates', time: '19:00', instructor: 'Ana Costa', level: 'Todos', icon: '🤸' },
  ];

  const benefits = [
    { icon: <Target className="w-8 h-8" />, title: 'Resultados Garantidos', description: '90% dos alunos atingem suas metas' },
    { icon: <Users className="w-8 h-8" />, title: 'Comunidade Ativa', description: 'Mais de 5.000 alunos ativos' },
    { icon: <Award className="w-8 h-8" />, title: 'Profissionais Certificados', description: 'Equipe com certificações internacionais' },
    { icon: <Clock className="w-8 h-8" />, title: 'Horários Flexíveis', description: 'Aberto das 5h às 23h todos os dias' },
  ];

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-y-auto">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Modo Preview - Sample: Fitness & Wellness</span>
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
                <Dumbbell className="w-6 h-6 text-purple-600 mr-2" />
                FitZone Pro
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Aulas</a>
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Planos</a>
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Unidades</a>
                <a href="#" className="text-slate-700 hover:text-purple-600 transition">Blog</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-slate-700 hover:text-purple-600 transition">
                Login
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Aula Grátis
              </button>
              <button onClick={onClose} className="text-slate-600 hover:text-purple-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block mb-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Transforme seu corpo e mente
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
                Sua jornada
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  fitness começa aqui
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Academia completa com equipamentos de última geração, aulas especializadas e profissionais qualificados
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Agendar Aula Experimental
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
                  Ver Planos
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <div className="text-4xl font-bold text-purple-600">5k+</div>
                  <div className="text-slate-600 text-sm">Alunos Ativos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600">50+</div>
                  <div className="text-slate-600 text-sm">Aulas/Semana</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600">15+</div>
                  <div className="text-slate-600 text-sm">Anos</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center text-9xl shadow-2xl transform rotate-3 hover:rotate-0 transition">
                  💪
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-purple-600">+47%</div>
                  <div className="text-sm text-slate-600">Evolução média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Por que escolher a <span className="text-purple-600">FitZone Pro</span>
            </h2>
            <p className="text-xl text-slate-600">Mais do que uma academia, uma experiência completa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transform hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Schedule */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Aulas <span className="text-purple-600">Especializadas</span>
            </h2>
            <p className="text-xl text-slate-600">Grade de horários com instrutores certificados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((classItem, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{classItem.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{classItem.name}</h3>
                    <p className="text-slate-600 text-sm">com {classItem.instructor}</p>
                    <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                      {classItem.level}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-purple-600 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{classItem.time}</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition">
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
              Ver Grade Completa
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Planos que <span className="text-purple-600">cabem no seu bolso</span>
            </h2>
            <p className="text-xl text-slate-600">Escolha o plano ideal para seus objetivos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 ${
                  plan.popular
                    ? 'ring-4 ring-purple-600 shadow-2xl transform scale-105 relative'
                    : 'shadow-lg border-2 border-slate-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}>
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-center mb-6">{plan.description}</p>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
                <button className={`w-full py-4 rounded-xl font-semibold transition mb-6 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl`
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}>
                  Começar Agora
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Histórias de sucesso
            </h2>
            <p className="text-xl opacity-90">Veja o que nossos alunos têm a dizer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl mr-4">
                  👩
                </div>
                <div>
                  <div className="font-bold">Juliana Costa</div>
                  <div className="text-sm opacity-75">Perdeu 15kg em 6 meses</div>
                </div>
              </div>
              <p className="italic opacity-90">
                "Melhor decisão que tomei! A equipe é incrível e os resultados surpreendentes."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-3xl mr-4">
                  👨
                </div>
                <div>
                  <div className="font-bold">Ricardo Silva</div>
                  <div className="text-sm opacity-75">Ganhou 8kg de massa</div>
                </div>
              </div>
              <p className="italic opacity-90">
                "Estrutura de primeiro mundo e profissionais extremamente capacitados!"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-3xl mr-4">
                  👩
                </div>
                <div>
                  <div className="font-bold">Amanda Lima</div>
                  <div className="text-sm opacity-75">Melhorou disposição</div>
                </div>
              </div>
              <p className="italic opacity-90">
                "As aulas são viciantes! Não consigo mais ficar sem treinar aqui."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Comece sua <span className="text-purple-600">transformação hoje</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Agende uma aula experimental gratuita e conheça nossa estrutura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="Seu nome"
              className="px-6 py-4 rounded-full border-2 border-purple-200 w-full focus:outline-none focus:ring-4 focus:ring-purple-200"
            />
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 w-full sm:w-auto whitespace-nowrap flex items-center justify-center">
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Agora
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-4">✓ Sem compromisso ✓ 100% gratuito</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-bold">FitZone Pro</span>
              </div>
              <p className="text-slate-400">
                Sua melhor versão começa aqui
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Academia</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Aulas</a></li>
                <li><a href="#" className="hover:text-white transition">Planos</a></li>
                <li><a href="#" className="hover:text-white transition">Unidades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horários</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Seg-Sex: 5h - 23h</li>
                <li>Sábado: 7h - 20h</li>
                <li>Domingo: 8h - 18h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 FitZone Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FitnessSample;
