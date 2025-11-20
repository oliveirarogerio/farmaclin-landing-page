import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { ForPharmacists } from '../components/ForPharmacists';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ForPharmacists />
      </main>
      <Footer />
    </div>
  );
}
