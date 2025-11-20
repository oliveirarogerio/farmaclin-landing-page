import React from 'react';
import { Pill, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg mr-2">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">Farma<span className="text-brand-600 dark:text-brand-500">Clin</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm transition-colors">
              A primeira plataforma dedicada a conectar pacientes e farmacêuticos para uma revisão segura e eficiente da farmacoterapia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors">Plataforma</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><a href="#features" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Para Pacientes</a></li>
              <li><a href="#pharmacists" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Para Farmacêuticos</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Preços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors">Legal</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Compliance LGPD</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Regulamentação</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500 transition-colors">
          <p>&copy; 2025 FarmaClin Tecnologia em Saúde. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com segurança para sua saúde.</p>
        </div>
      </div>
    </footer>
  );
};