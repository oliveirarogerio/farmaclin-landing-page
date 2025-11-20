'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const ForPharmacists: React.FC = () => {
  const benefits = [
    "Renda extra com horários flexíveis",
    "Atuação em Farmácia Clínica Remota",
    "Valorização da sua expertise profissional",
    "Plataforma segura e fácil de usar",
    "Pagamentos garantidos por análise realizada"
  ];

  return (
    <section id="pharmacists" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-600 rounded-full opacity-20 blur-3xl"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-4">
              Área Profissional
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Você é Farmacêutico? <br />
              <span className="text-teal-400">Transforme seu conhecimento em renda.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              A FarmaClin oferece a oportunidade de exercer a farmácia clínica de onde você estiver.
              Analise receitas, identifique interações e ajude pacientes a terem um tratamento mais seguro,
              sendo remunerado por cada análise.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('waitlist');
                if (element) {
                   // Pre-select pharmacist option logic would go here in a real app state manager
                   // For now just scroll
                   element.scrollIntoView({behavior: 'smooth'});
                }
              }}
            >
              Cadastrar como Farmacêutico
            </Button>
          </div>

          <div className="relative">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <div>
                  <h4 className="font-semibold text-white">Painel do Farmacêutico</h4>
                  <p className="text-sm text-slate-400">Visão geral das solicitações</p>
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">CRF Ativo</div>
              </div>

              {/* Mock Content */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between hover:bg-slate-700 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400 font-bold">
                        P{i}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-200">Solicitação #{20240 + i}</div>
                        <div className="text-xs text-slate-400">3 medicamentos • Diabetes</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">R$ 45,00</div>
                      <div className="text-xs text-teal-400">Aceitar</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between text-sm text-slate-400">
                <span>Ganhos este mês</span>
                <span className="text-white font-bold">R$ 1.240,00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
