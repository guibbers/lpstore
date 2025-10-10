import React, { useState } from 'react';
import { Palette, Award, Briefcase, Mail, Instagram, Linkedin, Github, X, ExternalLink, Code, Figma, Camera, Eye, Home } from 'lucide-react';

function PortfolioSample({ onClose }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Brand Identity - TechCorp',
      category: 'Branding',
      image: '🎨',
      color: 'from-orange-400 to-red-500',
      description: 'Desenvolvimento completo de identidade visual para startup de tecnologia',
      tools: ['Figma', 'Illustrator', 'Photoshop']
    },
    {
      id: 2,
      title: 'E-commerce Redesign',
      category: 'UI/UX Design',
      image: '🛍️',
      color: 'from-purple-400 to-pink-500',
      description: 'Redesign completo de plataforma e-commerce com foco em conversão',
      tools: ['Figma', 'React', 'Tailwind']
    },
    {
      id: 3,
      title: 'Mobile App - Fitness',
      category: 'App Design',
      image: '📱',
      color: 'from-green-400 to-emerald-500',
      description: 'App de fitness com gamificação e tracking de exercícios',
      tools: ['Figma', 'React Native', 'Firebase']
    },
    {
      id: 4,
      title: 'Photography Series',
      category: 'Photography',
      image: '📸',
      color: 'from-blue-400 to-cyan-500',
      description: 'Série fotográfica urbana capturing the essence of city life',
      tools: ['Lightroom', 'Photoshop', 'Camera']
    },
    {
      id: 5,
      title: 'Dashboard SaaS',
      category: 'Web Design',
      image: '💻',
      color: 'from-yellow-400 to-orange-500',
      description: 'Dashboard analytics para plataforma SaaS B2B',
      tools: ['Figma', 'Vue.js', 'Chart.js']
    },
    {
      id: 6,
      title: 'Illustration Project',
      category: 'Illustration',
      image: '✏️',
      color: 'from-pink-400 to-rose-500',
      description: 'Série de ilustrações para campanha de marketing digital',
      tools: ['Procreate', 'Illustrator', 'After Effects']
    },
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95, icon: <Palette className="w-5 h-5" /> },
    { name: 'Frontend Dev', level: 88, icon: <Code className="w-5 h-5" /> },
    { name: 'Branding', level: 92, icon: <Figma className="w-5 h-5" /> },
    { name: 'Photography', level: 85, icon: <Camera className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-y-auto">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Modo Preview - Sample: Portfólio Criativo</span>
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Alex Morgan
            </h1>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-700 hover:text-orange-600 transition">Trabalhos</a>
                <a href="#" className="text-slate-700 hover:text-orange-600 transition">Sobre</a>
                <a href="#" className="text-slate-700 hover:text-orange-600 transition">Contato</a>
              </nav>
              <button onClick={onClose} className="text-slate-600 hover:text-orange-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full opacity-30 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block mb-4">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Design & Development
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Criando experiências
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  digitais únicas
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Designer & Developer com 8+ anos de experiência transformando ideias em produtos incríveis.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
                  Ver Meu Trabalho
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition">
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110">
                  <Instagram className="w-5 h-5 text-orange-600" />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110">
                  <Linkedin className="w-5 h-5 text-orange-600" />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110">
                  <Github className="w-5 h-5 text-orange-600" />
                </a>
              </div>
            </div>

            {/* Avatar/Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-9xl shadow-2xl">
                  👨‍🎨
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                  <Award className="w-8 h-8 text-orange-600" />
                  <div className="text-sm font-semibold mt-1">+50 Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-slate-600">Projetos Completos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">30+</div>
              <div className="text-slate-600">Clientes Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">8+</div>
              <div className="text-slate-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meus <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Trabalhos</span>
            </h2>
            <p className="text-xl text-slate-600">Projetos selecionados que definem meu trabalho</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl group-hover:scale-110 transition">{project.image}</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-600 font-semibold uppercase tracking-wide">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-orange-600 transition">{project.title}</h3>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Minhas <span className="text-orange-600">Habilidades</span>
            </h2>
            <p className="text-xl text-slate-600">Expertise em design e desenvolvimento</p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-orange-600">{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estou disponível para novos projetos e oportunidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              Entrar em Contato
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Alex Morgan</h3>
          <p className="text-slate-400 mb-4">Designer & Developer</p>
          <div className="flex justify-center gap-4 mb-4">
            <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition" />
            <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition" />
            <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition" />
          </div>
          <p className="text-slate-500 text-sm">&copy; 2025 Alex Morgan. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-8 animate-slide-up max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs text-orange-600 font-semibold uppercase">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mt-2">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className={`h-80 bg-gradient-to-br ${selectedProject.color} rounded-xl flex items-center justify-center mb-6`}>
              <div className="text-9xl">{selectedProject.image}</div>
            </div>

            <p className="text-slate-600 text-lg mb-6">{selectedProject.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Ferramentas utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, idx) => (
                  <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center">
              <ExternalLink className="mr-2 w-5 h-5" />
              Ver Projeto Completo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioSample;
