import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as S from "./Contact.styled";
import { useLanguage } from "../../../contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set([titleRef.current, descriptionRef.current, formRef.current, infoRef.current], {
      opacity: 0,
      y: 44
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.68,
      ease: "power2.out"
    })
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.62,
      ease: "power2.out"
    }, "-=0.31")
    .to(formRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.66,
      ease: "power2.out"
    }, "-=0.28")
    .to(infoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.62,
      ease: "power2.out"
    }, "-=0.22");

    return () => {
      tl.kill();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1400));
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <S.Wrapper ref={sectionRef} id="contact">
      <S.Container>
        <S.Title ref={titleRef}>
          {t("contact.title")}
        </S.Title>
        <S.Description ref={descriptionRef}>
          {t("contact.description")}
        </S.Description>
        
        <S.Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <S.InputGroup>
            <S.Input
              type="text"
              name="name"
              placeholder={t("contact.name")}
              value={formData.name}
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
            <S.Input
              type="email"
              name="email"
              placeholder={t("contact.email")}
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
          </S.InputGroup>
          <S.Textarea
            name="message"
            placeholder={t("contact.message")}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <S.Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("contact.sending") || "Sending..." : t("contact.send")}
          </S.Button>
        </S.Form>
        
        <S.Info ref={infoRef}>
          <S.InfoItem>
            <h4>Email</h4>
            <a href="mailto:trae.ide@example.com">popescu_tudor@outlook.com</a>
          </S.InfoItem>
          <S.InfoItem>
            <h4>Phone</h4>
            <a href="tel:+40750405291">+40 750 405 291</a>
          </S.InfoItem>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
};

export default Contact;
