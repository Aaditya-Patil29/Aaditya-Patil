import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, FileText, Menu, X, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const sections = ['about', 'skills', 'projects', 'cicd', 'architecture', 'github'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'CI/CD Pipeline', href: '#cicd', id: 'cicd' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'GitHub', href: '#github', id: 'github' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1117]/85 backdrop-blur-md border-b border-[#30363D] shadow-lg shadow-black/40 py-3'
          : 'bg-[#0D1117]/60 backdrop-blur-sm border-b border-[#30363D]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Terminal Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="p-1.5 rounded-lg bg-[#161B22] border border-[#30363D] text-[#3FB950] group-hover:border-[#58A6FF] transition-colors">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="font-mono text-sm font-semibold tracking-tight text-[#E6EDF3] flex items-center gap-1.5">
            <span className="text-[#3FB950]">aaditya@devops</span>
            <span className="text-[#8B949E]">:</span>
            <span className="text-[#58A6FF]">~$</span>
            <span className="w-2 h-4 bg-[#3FB950] inline-block animate-pulse ml-0.5"></span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                activeSection === link.id
                  ? 'text-[#58A6FF] bg-[#161B22] border border-[#30363D]'
                  : 'text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]/60'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Aaditya_Patil_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161B22] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] text-xs font-mono font-medium transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#58A6FF]" />
            <span>Resume</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-[#161B22] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-[#161B22] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-[#58A6FF] transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161B22] border-b border-[#30363D] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-mono text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#0D1117]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#30363D] flex items-center justify-between">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Aaditya_Patil_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D1117] border border-[#30363D] text-[#E6EDF3] text-xs font-mono"
            >
              <FileText className="w-3.5 h-3.5 text-[#58A6FF]" />
              Resume
            </a>
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#0D1117] border border-[#30363D] text-[#8B949E]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#0D1117] border border-[#30363D] text-[#8B949E]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
