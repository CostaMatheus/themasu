
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formFields = [
  {
    id: "name",
    label: "Meu nome é",
    placeholder: "Seu nome",
    type: "input",
    required: true,
  },
  {
    id: "phone",
    label: "Meu telefone é",
    placeholder: "Seu numero de telefone",
    type: "input",
    required: true,
  },
  {
    id: "company",
    label: "Minha empresa é",
    placeholder: "Sua empresa",
    type: "input",
    required: false,
  },
  {
    id: "email",
    label: "Meu e-mail é",
    placeholder: "Seu e-mail",
    type: "input",
    inputType: "email",
    required: true,
  },
  {
    id: "message",
    label: "Mensagem",
    placeholder: "Digite sua mensagem aqui...",
    type: "textarea",
    required: true,
  },
];

const socialLinks = [
  {
    icon: "figmaAssets/linkedin.png",
    text: "linkedin.com/in/themasu-costa",
    alt: "Linkedin",
    href: "https://linkedin.com/in/themasu-costa",
  },
  {
    icon: "figmaAssets/mail.png",
    text: "matheus.costa@themasu.com",
    alt: "Mail",
    href: "mailto:matheus.costa@themasu.com",
  },
  {
    icon: "figmaAssets/group-1841.png",
    text: "behance.net/themasu_design",
    alt: "Group",
    href: "https://behance.net/themasu_design",
  },
  {
    icon: "figmaAssets/intagram.png",
    text: "instagram.com/themasu.design",
    alt: "Intagram",
    href: "https://instagram.com/themasu.design",
  },
];

export const FooterSection = (): JSX.Element => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = formFields.filter(field => field.required);
    const emptyRequired = requiredFields.find(
      field => !formData[field.id as keyof typeof formData]
    );

    if (emptyRequired) {
      toast({
        title: "Erro no formulário",
        description: `Por favor, preencha o campo: ${emptyRequired.label}`,
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornaremos em breve!",
    });

    setFormData({
      name: "",
      phone: "",
      company: "",
      email: "",
      message: "",
    });
  };

  return (
    <footer className="flex flex-col w-full items-center justify-center gap-2.5 p-8 md:p-16 bg-transparent">
      <div className="flex w-full max-w-[1440px] items-start justify-center md:justify-around gap-8 md:gap-2.5 px-4 md:px-6 py-0 flex-col md:flex-row">
        <div className="fade-in w-full md:max-w-[519px] gap-6 flex flex-col items-start">
          <h2 className="self-stretch [font-family:'Outfit',Helvetica] font-bold text-white text-2xl md:text-[32px] tracking-[0] leading-8 md:leading-10">
            Gostou do que viu?
            <br />
            entre em contato conosco.
          </h2>

          <form onSubmit={handleSubmit} className="gap-4 self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
            {formFields.map((field) => (
              <div
                key={field.id}
                className={`flex flex-col items-start gap-2 pt-0 ${
                  field.type === "textarea" ? "pb-16 md:pb-24" : "pb-2"
                } px-0 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ffffff80]`}
              >
                <Label
                  htmlFor={field.id}
                  className="[font-family:'Outfit',Helvetica] font-medium text-white text-sm tracking-[0] leading-[22px]"
                >
                  {field.label}
                  {field.required && <span className="text-red-400 ml-1">*</span>}
                </Label>

                {field.type === "input" ? (
                  <Input
                    id={field.id}
                    type={field.inputType || "text"}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="border-0 bg-transparent p-0 [font-family:'Outfit',Helvetica] font-medium text-[#ffffff80] text-base tracking-[0] leading-6 placeholder:text-[#ffffff80] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
                  />
                ) : (
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="border-0 bg-transparent p-0 [font-family:'Outfit',Helvetica] font-medium text-[#ffffff80] text-base tracking-[0] leading-6 placeholder:text-[#ffffff80] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-0 h-auto"
                    rows={1}
                  />
                )}
              </div>
            ))}

            <Button
              type="submit"
              variant="outline"
              className="border border-solid border-white min-w-[120px] md:min-w-[142px] h-[45px] md:h-[50px] p-3 md:p-4 rounded-3xl bg-transparent hover:bg-white/10"
            >
              <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-sm md:text-base text-center tracking-[0] leading-[19.2px]">
                Enviar
              </span>
            </Button>
          </form>
        </div>

        <div className="fade-in flex flex-col w-full md:max-w-[313px] items-start gap-4">
          <h3 className="self-stretch [font-family:'Outfit',Helvetica] font-bold text-white text-xl md:text-2xl tracking-[0] leading-8 md:leading-10">
            Redes sociais
          </h3>

          <div className="flex flex-col items-start gap-6 md:gap-8 self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 flex-[0_0_auto] hover:opacity-80 transition-opacity"
                >
                  <img className="w-6 md:w-8 h-6 md:h-8" alt={link.alt} src={link.icon} />
                  <span className="[font-family:'Zilla_Slab',Helvetica] font-normal text-[#d9d9d9] text-base md:text-xl tracking-[0] leading-5 whitespace-nowrap">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
