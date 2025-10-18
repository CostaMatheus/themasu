import React from "react";

const decorativeImages = [
  {
    className:
      "absolute top-[20%] left-[62%] right-[0%] md:right-[15%] w-[50px] md:w-[70px] h-[35px] md:h-[45px]",
    src: "figmaAssets/group.png",
    alt: "Group",
  },
  {
    className:
      "absolute top-[80%] right-[0%] left-[90%] md:left-[43%] w-[40px] md:w-[52px] h-[40px] md:h-[52px]",
    src: "figmaAssets/group-1.png",
    alt: "Group",
  },
  {
    className:
      "absolute bottom-[17%] right-[3%] md:right-[27%] w-[70px] md:w-28 h-[55px] md:h-[88px]",
    src: "figmaAssets/group-2.png",
    alt: "Group",
  },
  {
    className:
      "absolute top-[49%] left-[30%] md:left-[35%] w-[45px] md:w-[58px] h-[52px] md:h-[66px]",
    src: "figmaAssets/group-3.png",
    alt: "Group",
  },
  {
    className:
      "absolute top-[20%] left-[8%] md:left-[33%] w-[25px] md:w-8 h-[26px] md:h-[33px]",
    src: "figmaAssets/group-4.png",
    alt: "Group",
  },
  {
    className:
      "absolute top-[45%] right-[2%] md:right-[35%] w-[55px] md:w-[73px] h-[55px] md:h-[73px]",
    src: "figmaAssets/group-5.png",
    alt: "Group",
  },
];

const badges = [
  {
    className: "absolute top-[45%] left-[10%] md:left-[26%]",
    text: "UI Design",
  },
  {
    className: "absolute bottom-[12%] right-[8%] md:right-[36%]",
    text: "Developing",
  },
  {
    className: "absolute top-[49%] right-[10%] md:right-[26%]",
    text: "UX Design",
  },
  {
    className: "absolute bottom-[15%] left-[8%] md:left-[28%]",
    text: "Branding",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4 mt-20 md:mt-0 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="fade-in [font-family:'Outfit',Helvetica] font-bold text-white text-[48px] md:text-[120px] lg:text-[176px] text-center tracking-[0] leading-[52px] md:leading-[120px] lg:leading-[176px]">
          Transformando pixels
          <br />
          em soluções
        </h1>
      </div>

      {decorativeImages.map((image, index) => (
        <img
          key={`decorative-${index}`}
          className={`${image.className} fade-in`}
          alt={image.alt}
          src={image.src}
        />
      ))}

      {badges.map((badge, index) => (
        <div
          key={`badge-${index}`}
          className={`inline-flex h-10 md:h-12 items-center justify-center gap-2.5 px-4 md:px-5 py-2 rounded-[48px] border-[1.5px] border-solid border-white ${badge.className} fade-in`}
        >
          <div className="relative flex items-center justify-center w-fit [font-family:'Outfit',Helvetica] font-normal text-white text-lg md:text-2xl text-center tracking-[0] leading-6 md:leading-8 whitespace-nowrap">
            {badge.text}
          </div>
        </div>
      ))}
    </section>
  );
};
