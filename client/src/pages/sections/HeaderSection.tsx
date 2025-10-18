import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const navigationItems = [
  { label: "Início", href: "hero" },
  { label: "Projetos", href: "projects" },
  { label: "Contato", href: "contact" },
  { label: "Currículo", href: "resume" },
];

interface HeaderSectionProps {
  onNavigate: (section: string) => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href === "resume") {
      setResumeModalOpen(true);
      setMobileMenuOpen(false);
    } else {
      onNavigate(href);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between px-4 md:px-32 py-6 md:py-12 relative">
        <img
          className="relative w-32 md:w-52 h-auto"
          alt="Logo"
          src="figmaAssets/logo.svg"
        />

        <nav className="hidden md:inline-flex items-center justify-center gap-8">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-0 hover:bg-transparent"
              onClick={() => handleNavClick(item.href)}
            >
              <span className="relative w-fit [font-family:'Zilla_Slab',Helvetica] font-normal text-white text-xl md:text-2xl tracking-[0] leading-[normal] hover:text-white/80 transition-colors">
                {item.label}
              </span>
            </Button>
          ))}
        </nav>

        <img
          className="hidden md:block relative flex-[0_0_auto]"
          alt="Social media links"
          src="figmaAssets/social-media-links.svg"
        />

        <Button
          variant="ghost"
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-2 hover:bg-transparent"
                onClick={() => handleNavClick(item.href)}
              >
                <span className="text-white text-lg [font-family:'Zilla_Slab',Helvetica] font-normal">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      )}

      <Dialog open={resumeModalOpen} onOpenChange={setResumeModalOpen}>
        <DialogContent className="max-w-full h-screen w-screen p-0 bg-black/95">
          <DialogClose className="absolute right-6 top-6 z-50">
            <Button variant="ghost" className="h-10 w-10 p-0 rounded-full hover:bg-white/10">
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Fechar</span>
            </Button>
          </DialogClose>

          <div className="h-full w-full overflow-y-auto p-8 md:p-16">
            <div className="max-w-4xl mx-auto bg-white text-black p-8 md:p-12 rounded-lg">
              <div className="space-y-8">
                <div className="border-b pb-6">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">João Silva</h1>
                  <p className="text-xl text-gray-600">Designer UI/UX & Desenvolvedor Front-end</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                    <span>✉️ joao.silva@email.com</span>
                    <span>📱 (11) 99999-9999</span>
                    <span>📍 São Paulo, SP</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Resumo Profissional</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Designer UI/UX e desenvolvedor front-end com mais de 5 anos de experiência em criar experiências digitais inovadoras e centradas no usuário. Especializado em design de interfaces modernas, prototipagem interativa e desenvolvimento de aplicações web responsivas.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold">Designer UI/UX Sênior</h3>
                      <p className="text-gray-600">Tech Solutions Inc. • 2021 - Presente</p>
                      <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                        <li>Liderança de projetos de design para aplicações web e mobile</li>
                        <li>Criação de sistemas de design e guias de estilo</li>
                        <li>Condução de pesquisas de usuário e testes de usabilidade</li>
                        <li>Colaboração com equipes de desenvolvimento para implementação</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">Designer UI/UX Pleno</h3>
                      <p className="text-gray-600">Digital Agency • 2019 - 2021</p>
                      <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                        <li>Design de interfaces para aplicações SaaS</li>
                        <li>Prototipagem de alta fidelidade no Figma</li>
                        <li>Implementação de melhorias de UX baseadas em métricas</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">Designer Júnior</h3>
                      <p className="text-gray-600">Creative Studio • 2018 - 2019</p>
                      <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                        <li>Criação de wireframes e mockups</li>
                        <li>Desenvolvimento de identidade visual para marcas</li>
                        <li>Design responsivo para sites e landing pages</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Formação Acadêmica</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">Bacharelado em Design Digital</h3>
                      <p className="text-gray-600">Universidade de São Paulo • 2014 - 2018</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Especialização em UX Design</h3>
                      <p className="text-gray-600">FIAP • 2019 - 2020</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Design</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Figma & Adobe XD</li>
                        <li>• Design Systems</li>
                        <li>• Prototipagem Interativa</li>
                        <li>• UI/UX Design</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Desenvolvimento</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• HTML, CSS, JavaScript</li>
                        <li>• React & TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Responsive Design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Idiomas</h2>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Português - Nativo</li>
                    <li>• Inglês - Fluente</li>
                    <li>• Espanhol - Intermediário</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};