
import React from "react";
import { cn } from "@/lib/utils";

interface NavigationDotsProps {
  sections: string[];
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  sections,
  activeSection,
  onNavigate,
}) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer",
            activeSection === section
              ? "bg-white scale-125 shadow-lg shadow-white/50"
              : "bg-white/40 hover:bg-white/60"
          )}
          aria-label={`Navegar para ${section}`}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  );
};
