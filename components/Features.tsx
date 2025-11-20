import React from 'react';
import { AlertTriangle, FileText, MessageSquare, Shield, Zap, Clock } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Evite Interações Perigosas",
    description: "Identificamos riscos na combinação de múltiplos medicamentos que podem afetar sua saúde.",
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Relatórios Detalhados",
    description: "Receba um PDF completo com orientações de administração, posologia e alertas.",
    icon: <FileText className="w-6 h-6 text-brand-500" />,
  },
  {
    title: "Profissionais Verificados",
    description: "Todos os farmacêuticos são registrados no CRF e passam por rigorosa validação.",
    icon: <Shield className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Acompanhamento em Tempo Real",
    description: "Saiba exatamente quando sua análise está sendo feita e quando fica pronta.",
    icon: <Clock className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Rapidez e Praticidade",
    description: "Envie fotos das suas receitas pelo celular e receba a análise sem sair de casa.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Comunicação Direta",
    description: "Tire dúvidas pontuais sobre o relatório diretamente com o farmacêutico responsável.",
    icon: <MessageSquare className="w-6 h-6 text-pink-500" />,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-2">Por que usar a FarmaClin?</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Cuidado especializado para quem mais precisa</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors">
            O uso inadequado de medicamentos é um risco silencioso. Nossa plataforma traz a expertise clínica para o seu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};