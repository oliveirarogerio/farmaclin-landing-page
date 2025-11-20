'use client';

import React from 'react';
import { Upload, Search, FileCheck, Download } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-white" />,
      title: "Envie suas Receitas",
      desc: "Faça upload das fotos das suas receitas e informe os medicamentos que já utiliza.",
      color: "bg-blue-500"
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Análise Especializada",
      desc: "Um farmacêutico revisa minuciosamente as interações, dosagens e redundâncias.",
      color: "bg-teal-500"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-white" />,
      title: "Receba o Relatório",
      desc: "Acesse um documento claro com recomendações para otimizar seu tratamento.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Como Funciona</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            Simplificamos o processo de revisão farmacêutica para que você foque no que importa: sua saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 dark:bg-slate-800 z-0 transition-colors"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 dark:shadow-none mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="bg-white dark:bg-slate-900 px-4 transition-colors duration-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-brand-100 dark:border-slate-700 transition-colors duration-300">
          <div className="mb-6 md:mb-0 md:pr-8">
            <h4 className="text-2xl font-bold text-brand-900 dark:text-white mb-2 transition-colors">Pronto para começar?</h4>
            <p className="text-brand-700 dark:text-slate-300 transition-colors">Junte-se à lista de espera e ganhe prioridade no lançamento.</p>
          </div>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-brand-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 whitespace-nowrap"
          >
            Quero Acesso Antecipado
          </button>
        </div>
      </div>
    </section>
  );
};
