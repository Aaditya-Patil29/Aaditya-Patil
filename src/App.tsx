import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CicdSection } from './components/CicdSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { GitHubSection } from './components/GitHubSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] antialiased selection:bg-[#58A6FF]/30 selection:text-[#58A6FF]">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main className="space-y-12 sm:space-y-16">
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <CicdSection />
        <ArchitectureSection />
        <GitHubSection />
      </main>

      {/* Terminal Footer */}
      <Footer />
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
