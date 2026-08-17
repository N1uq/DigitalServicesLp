/**
 * Configuração Central do Site - Joaquim Lemos | Soluções Digitais
 * 
 * Todas as informações comerciais, contatos, preços dos planos,
 * manutenção e links de contrato estão centralizados neste arquivo.
 */

const SITE_CONFIG = {
  brand: "Joaquim Lemos | Soluções Digitais",
  shortBrand: "Joaquim Lemos",
  tagline: "Soluções Digitais",
  positioning:
    "Estrutura digital para empresas que querem apresentar melhor, vender com mais organização e crescer com profissionalismo.",

  whatsapp: "5588992318209",
  whatsappDisplay: "+55 88 99231-8209",

  instagram: "@joaquimlemosmkt",
  instagramUrl: "https://instagram.com/joaquimlemosmkt",

  maintenance: {
    name: "Cuidado Contínuo",
    priceFrom: 197,
    period: "mês",
    description:
      "Para empresas que desejam manter o catálogo acompanhado, atualizado e funcionando corretamente depois da publicação."
  },

  plans: {
    essencial: {
      key: "essencial",
      name: "Catálogo Essencial",
      badge: "",
      price: 1497,
      payment: "50% na contratação e 50% antes da publicação",
      deadline: "7 a 10 dias úteis",
      description:
        "Para empresas que precisam substituir a apresentação improvisada por um catálogo organizado e profissional.",
      contractUrl: "", // Insira o link da plataforma de assinatura eletrônica (ZapSign, Clicksign, DocuSign)
      features: [
        "Catálogo com até 300 produtos",
        "Até 8 categorias",
        "Design responsivo (celular, tablet e computador)",
        "Apresentação em grade organizada",
        "Visualização ampliada dos produtos",
        "Nome, código e descrição dos produtos",
        "Integração direta com WhatsApp",
        "Botão flutuante de atendimento",
        "Configuração básica para mecanismos de busca (SEO)",
        "Conexão com domínio adquirido pelo cliente",
        "Uma rodada de revisão incluída",
        "Orientação para organização dos materiais",
        "Prazo estimado de 7 a 10 dias úteis"
      ]
    },

    profissional: {
      key: "profissional",
      name: "Catálogo Profissional",
      badge: "Mais recomendado",
      recommended: true,
      price: 2497,
      payment: "50% na contratação e 50% antes da publicação",
      deadline: "10 a 15 dias úteis",
      description:
        "Para empresas com maior variedade de produtos que precisam oferecer uma experiência de navegação mais completa.",
      contractUrl: "",
      features: [
        "Tudo do plano Essencial, mais:",
        "Catálogo com até 600 produtos",
        "Até 20 categorias e subcategorias",
        "Campo de busca instantânea",
        "Filtros combinados por categoria",
        "Pesquisa por nome ou código do produto",
        "Página ou janela de detalhes completos do produto",
        "Galeria com várias imagens por item",
        "Navegação avançada por categorias",
        "URLs amigáveis quando a estrutura permitir",
        "Modo claro e escuro (Light / Dark mode)",
        "Restauração da posição de navegação",
        "Organização otimizada das imagens",
        "Cuidados adicionais de desempenho e velocidade",
        "Duas rodadas de revisão incluídas",
        "Prazo estimado de 10 a 15 dias úteis"
      ]
    },

    escala: {
      key: "escala",
      name: "Catálogo Escala",
      badge: "Catálogo sem limite de crescimento",
      price: 4497,
      payment: "50% na contratação e 50% antes da publicação",
      deadline: "15 a 25 dias úteis",
      description:
        "Para empresas com grande volume de produtos que precisam de desempenho, organização e capacidade de crescimento.",
      contractUrl: "",
      features: [
        "Tudo do plano Profissional, mais:",
        "Produtos ilimitados sob solicitação",
        "Integração com armazenamento de imagens e CDN",
        "Miniaturas otimizadas",
        "Carregamento progressivo (Lazy loading inteligente)",
        "Busca tolerante a pequenas variações de digitação",
        "Paginação ou carregamento incremental",
        "Otimização avançada de desempenho",
        "Estrutura preparada para grandes catálogos",
        "Relatório de organização e indexação",
        "Três rodadas de revisão incluídas",
        "Prazo estimado de 15 a 25 dias úteis"
      ],
      notice: "O catálogo possui estrutura escalável e pode receber uma quantidade ilimitada de produtos, conforme a necessidade da empresa. O valor de R$ 4.497 inclui a estrutura inicial e o cadastro ou importação de até 500 produtos. Quantidades superiores poderão ser adicionadas mediante envio de planilha organizada, integração automatizada e orçamento complementar."
    }
  }
};
