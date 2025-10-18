import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  bgColor: string;
  image?: string;
  imageClasses?: string;
  customContent?: boolean;
  hasOverlay?: boolean;
  tags: string;
  tagColor: string;
  title: string;
  titleColor: string;
  description: string;
  descriptionColor: string;
  buttonBg: string;
  buttonText: string;
}

const initialProjectsData: Project[] = [
  {
    id: 1,
    bgColor: "bg-[#f7f7f7]",
    image: "/figmaAssets/product.png",
    imageClasses: "w-full max-w-[380.69px] h-auto",
    tags: "#UI / UX Design  #Identidade visual",
    tagColor: "text-[#2d0087]",
    title: "VVeio",
    titleColor: "text-[#2e008b]",
    description: "Lorem ipsum dolor sit amet consectetur.",
    descriptionColor: "text-[#2e0188]",
    buttonBg: "bg-[#2d0087]",
    buttonText: "text-[#f8f8f8]",
  },
  {
    id: 2,
    bgColor: "bg-white",
    customContent: true,
    tags: "#UI / UX Design",
    tagColor: "text-[#6a69f3]",
    title: "Consulta+",
    titleColor: "text-[#6a69f3]",
    description: "Lorem ipsum dolor sit amet consectetur.",
    descriptionColor: "text-[#6a69f3]",
    buttonBg: "bg-[#6a69f3]",
    buttonText: "text-[#f8f8f8]",
  },
  {
    id: 3,
    bgColor: "bg-[#1e1f1e]",
    image: "/figmaAssets/close-up-hand-holding-phone-2.png",
    imageClasses: "w-full max-w-[654px] h-auto object-cover",
    hasOverlay: true,
    tags: "#UI / UX Design",
    tagColor: "text-[#45e6b3]",
    title: "AI Study Mate",
    titleColor: "text-[#45e6b3]",
    description: "Lorem ipsum dolor sit amet consectetur.",
    descriptionColor: "text-[#45e6b3]",
    buttonBg: "bg-[#45e6b3]",
    buttonText: "text-[#f8f8f8]",
  },
];

const additionalProjects: Project[] = [
  {
    id: 4,
    bgColor: "bg-[#e8f4f8]",
    tags: "#Web Development",
    tagColor: "text-[#0066cc]",
    title: "Portfolio Pro",
    titleColor: "text-[#0066cc]",
    description: "Modern portfolio solution for professionals.",
    descriptionColor: "text-[#0066cc]",
    buttonBg: "bg-[#0066cc]",
    buttonText: "text-white",
  },
  {
    id: 5,
    bgColor: "bg-[#fff0f0]",
    tags: "#Mobile App",
    tagColor: "text-[#cc0000]",
    title: "Fitness Tracker",
    titleColor: "text-[#cc0000]",
    description: "Track your fitness goals with ease.",
    descriptionColor: "text-[#cc0000]",
    buttonBg: "bg-[#cc0000]",
    buttonText: "text-white",
  },
  {
    id: 6,
    bgColor: "bg-[#f0f8f0]",
    tags: "#E-commerce",
    tagColor: "text-[#00cc66]",
    title: "Shop Master",
    titleColor: "text-[#00cc66]",
    description: "Complete e-commerce platform solution.",
    descriptionColor: "text-[#00cc66]",
    buttonBg: "bg-[#00cc66]",
    buttonText: "text-white",
  },
];

export const ProjectsSection = (): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjectsData);

  const handleToggleProjects = () => {
    if (showMore) {
      setProjects(initialProjectsData);
      setShowMore(false);
    } else {
      setProjects([...initialProjectsData, ...additionalProjects]);
      setShowMore(true);
      
      // Trigger fade-in animation for new cards
      setTimeout(() => {
        const newCards = document.querySelectorAll('.fade-in:not(.show)');
        newCards.forEach((card) => {
          card.classList.add('show');
        });
      }, 50);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 md:gap-16 px-4 md:px-0 py-8 md:py-16 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`fade-in flex flex-col w-full max-w-[448px] min-h-[500px] md:h-[736px] justify-end gap-6 md:gap-8 px-6 md:px-8 py-12 md:py-16 ${
                project.bgColor
              } rounded-3xl overflow-hidden items-center relative border-0 shadow-none`}
            >
              <CardContent className="p-0 flex flex-col items-center gap-6 md:gap-8 w-full">
                {project.id === 1 && (
                  <img
                    className={project.imageClasses}
                    alt="Product"
                    src={project.image}
                  />
                )}

                {project.id === 2 && (
                  <div className="relative self-stretch w-full h-[250px] md:h-[350px]">
                    <div className="relative top-[40px] md:top-[61px] w-full max-w-96 mx-auto h-[180px] md:h-[228px]">
                      <div className="absolute top-40 md:top-56 left-1/2 -translate-x-1/2 w-[280px] md:w-[345px] h-1 bg-defaultshadeblack rounded-[172.38px/1.97px] blur-[8.66px]" />

                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[311px] h-[180px] md:h-[218px] bg-defaultgray-300 border-[0.79px] border-solid border-[#cbd5e0]">
                        <div className="absolute top-0.5 left-0.5 right-0.5 bottom-12 bg-defaultgray-300 rounded-[8.66px_8.66px_0px_0px]" />
                      </div>

                      <img
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-96 h-auto"
                        alt="Bottom"
                        src="/figmaAssets/bottom.png"
                      />
                    </div>
                  </div>
                )}

                {project.id === 3 && project.image && (
                  <>
                    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
                      <img
                        className="object-contain max-w-full max-h-full"
                        alt="Close up hand"
                        src={project.image}
                      />
                    </div>
                  </>
                )}

                <div className="w-full gap-6 md:gap-8 flex flex-col items-center justify-center relative">
                  <div className="gap-2 self-stretch w-full flex flex-col items-center justify-center relative">
                    <p
                      className={`relative self-stretch [font-family:'Zilla_Slab',Helvetica] font-normal ${project.tagColor} text-sm md:text-base text-center tracking-[0] leading-5 md:leading-6`}
                    >
                      {project.tags}
                    </p>

                    <h3
                      className={`relative self-stretch [font-family:'Outfit',Helvetica] font-bold ${project.titleColor} text-2xl md:text-[32px] text-center tracking-[0] leading-8 md:leading-10`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`${project.descriptionColor} relative self-stretch [font-family:'Zilla_Slab',Helvetica] font-normal text-lg md:text-2xl text-center tracking-[0] leading-6 md:leading-7`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <Button
                    className={`gap-2 ${project.buttonBg} inline-flex min-w-[120px] md:min-w-[142px] h-auto items-center justify-center p-3 md:p-4 rounded-3xl hover:opacity-90`}
                  >
                    <span
                      className={`relative w-fit [font-family:'Outfit',Helvetica] font-bold ${project.buttonText} text-sm md:text-base text-center tracking-[0] leading-[19.2px] whitespace-nowrap`}
                    >
                      Ver mais
                    </span>

                    <img
                      className="relative w-3 md:w-[14.5px] h-1.5"
                      alt="Vector"
                      src="/figmaAssets/vector-36.svg"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        onClick={handleToggleProjects}
        className="border border-solid border-white inline-flex min-w-[120px] md:min-w-[142px] h-auto items-center justify-center p-3 md:p-4 rounded-3xl bg-transparent hover:bg-white/10"
      >
        <span className="relative flex-1 [font-family:'Outfit',Helvetica] font-bold text-white text-sm md:text-base text-center tracking-[0] leading-[19.2px]">
          {showMore ? "Ver menos" : "Ver mais"}
        </span>
      </Button>
    </section>
  );
};