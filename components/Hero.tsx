import React from 'react';
import { WaitlistForm } from './WaitlistForm';
import { ShieldCheck, Activity, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 opacity-60 transition-colors duration-300"></div>
        {/* Light mode blobs - blend-multiply */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:hidden"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:hidden"></div>
        
        {/* Dark mode blobs - blend-screen/normal */}
        <div className="hidden dark:block absolute top-20 left-10 w-72 h-72 bg-teal-900/30 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="hidden dark:block absolute top-40 right-10 w-72 h-72 bg-brand-900/30 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-sm font-medium mb-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 dark:bg-brand-400 mr-2"></span>
              Lançamento em Breve
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors duration-300">
              Sua saúde não aceita erros. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500 dark:from-brand-400 dark:to-teal-400">
                Revisão farmacêutica
              </span> profissional.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-300">
              A FarmaClin conecta você a farmacêuticos qualificados para revisar seus medicamentos, 
              evitar interações perigosas e garantir que seu tratamento seja seguro e eficaz.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-500 mr-2" />
                Segurança Garantida
              </div>
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-brand-500 mr-2" />
                Análise Profissional
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-indigo-500 mr-2" />
                Atendimento Humano
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-5">
            <div className="transform transition-all hover:-translate-y-1 duration-300">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};