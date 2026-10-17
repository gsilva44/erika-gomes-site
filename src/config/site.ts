/**
 * ARQUIVO ÚNICO DE CONFIGURAÇÃO
 * Edite aqui textos, telefone, Instagram, links e nomes de imagens.
 */

export const siteConfig = {
  /** Endereço final do site (também pode ser definido na Vercel em NEXT_PUBLIC_SITE_URL). */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  name: "Erika Gomes",
  role: "Neuropsicopedagoga",
  roleFull: "Neuropsicopedagoga e Escritora",

  seo: {
    title: "Erika Gomes | Neuropsicopedagoga e Escritora",
    description:
      "Neuropsicopedagoga e escritora. Avaliação, intervenção e orientação que unem ciência e acolhimento para promover o desenvolvimento humano.",
  },

  contact: {
    /** Somente números, com código do país e DDD. Ex.: 5511983416992 */
    whatsappNumber: "5511983416992",
    phoneDisplay: "(11) 98341-6992",
    /** Mensagem que aparece pronta ao abrir o WhatsApp. */
    whatsappMessage:
      "Olá, Erika! Vim pelo seu site e gostaria de conversar sobre um atendimento.",
    whatsappBookMessage:
      "Olá, Erika! Vim pelo seu site e gostaria de saber mais sobre o livro Cérebro, Comportamento e Emoção.",
    /** Sem o @ */
    instagramHandle: "erika_neuropsicopedagogaa",
    region: "Campo Limpo e Vila Andrade",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Livro", href: "#livro" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    eyebrow: "Prazer, eu sou a",
    firstName: "Erika",
    lastName: "Gomes",
    tagline: "Neuropsicopedagoga e Escritora",
    description:
      "Acredito no potencial de cada cérebro e no poder de um olhar sensível, científico e individualizado para transformar histórias.",
    primaryCta: "Falar no WhatsApp",
    secondaryCta: "Conheça meu trabalho",
    secondaryHref: "#atuacao",
  },

  about: {
    eyebrow: "Sobre mim",
    title: "Mais que uma profissão, um propósito de vida.",
    text: "Sou Erika Gomes, neuropsicopedagoga e escritora. Atuo com avaliação, intervenção e orientação, unindo ciência e acolhimento para promover o desenvolvimento humano de forma única e respeitosa.",
  },

  services: {
    eyebrow: "Minha atuação",
    title: "Conhecimento que acolhe e desenvolve.",
    items: [
      {
        icon: "brain",
        title: "Neuropsicopedagogia",
        description:
          "Avaliação e intervenção para compreender o cérebro, o comportamento e a aprendizagem.",
      },
      {
        icon: "pencil",
        title: "Psicopedagogia",
        description:
          "Estratégias personalizadas para superar dificuldades e potencializar aprendizagens.",
      },
      {
        icon: "puzzle",
        title: "Desenvolvimento Infantil",
        description:
          "Apoio integral ao desenvolvimento cognitivo, emocional e comportamental da criança.",
      },
      {
        icon: "users",
        title: "Orientação às Famílias e Escolas",
        description:
          "Escuta, orientação e parcerias para um ambiente mais saudável e acolhedor para aprender.",
      },
    ],
  },

  book: {
    eyebrow: "Meu livro",
    title: "Cérebro, Comportamento e Emoção",
    subtitle: "Estratégias comprovadas para pais conscientes",
    description:
      "Um guia prático e sensível para ajudar pais e cuidadores a entenderem o desenvolvimento infantil com base na ciência, fortalecendo o vínculo e promovendo mais consciência, equilíbrio e segurança no dia a dia.",
    cta: "Saiba mais sobre o livro",
    /**
     * LINK REAL DO LIVRO (página da editora, loja etc.).
     * Enquanto estiver vazio, o botão abre o WhatsApp com uma pergunta sobre o livro.
     */
    url: "",
  },

  cta: {
    title: "Vamos conversar sobre como posso ajudar?",
    text: "Estou aqui para acolher, orientar e caminhar com você nessa jornada.",
    button: "Falar no WhatsApp",
  },

  footer: {
    specialties: [
      "Neuropsicopedagogia",
      "Psicopedagogia",
      "Escritora",
      "Desenvolvimento Infantil",
    ],
  },

  /**
   * Imagens ficam em /public/images. Basta colocar os arquivos com estes nomes
   * (ou trocar os nomes aqui). Enquanto não existirem, aparece um espaço reservado.
   */
  images: {
    heroPortrait: "/images/erika-hero.jpg",
    aboutPortrait: "/images/erika-sobre.jpg", // se não existir, usa a imagem do hero
    bookCover: "/images/livro-capa.png",
    bookCoverAlt: "Capa do livro Cérebro, Comportamento e Emoção",
  },
};

export type SiteConfig = typeof siteConfig;
