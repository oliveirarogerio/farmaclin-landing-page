'use client';

import React, { useState } from 'react';
import { UserType, WaitlistFormState } from '../types';
import { Button } from './Button';
import { CheckCircle, Loader2 } from 'lucide-react';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormState>({
    name: '',
    email: '',
    userType: UserType.PATIENT
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center shadow-sm animate-fade-in">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-800 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
        </div>
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Sucesso!</h3>
        <p className="text-green-700 dark:text-green-300">
          Obrigado, {formData.name}. Você foi adicionado à nossa lista de espera prioritária. Entraremos em contato em breve no e-mail {formData.email}.
        </p>
      </div>
    );
  }

  return (
    <div id="waitlist" className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 md:p-8 transition-colors duration-300">
      <div className="mb-6 text-center md:text-left">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Garanta seu acesso antecipado</h3>
        <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors">Seja um dos primeiros a experimentar o futuro da farmácia clínica.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Seu Nome</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            placeholder="João Silva"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Seu melhor E-mail</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            placeholder="joao@exemplo.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Eu sou:</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`flex items-center justify-center px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                formData.userType === UserType.PATIENT
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500'
                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
              onClick={() => setFormData({...formData, userType: UserType.PATIENT})}
            >
              Paciente / Cuidador
            </button>
            <button
              type="button"
              className={`flex items-center justify-center px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                formData.userType === UserType.PHARMACIST
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500'
                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
              onClick={() => setFormData({...formData, userType: UserType.PHARMACIST})}
            >
              Farmacêutico
            </button>
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          size="lg"
          disabled={status === 'submitting'}
          className="mt-4"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" /> Enviando...
            </>
          ) : (
            'Entrar na Lista de Espera'
          )}
        </Button>

        <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-4">
          Seus dados estão seguros. Respeitamos a LGPD e não enviamos spam.
        </p>
      </form>
    </div>
  );
};
