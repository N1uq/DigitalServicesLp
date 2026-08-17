# Landing Page Premium: Planos e Contratação de Catálogos Digitais

**Joaquim Lemos | Soluções Digitais**  
*Estrutura digital para empresas que querem apresentar melhor, vender com mais organização e crescer com profissionalismo.*

---

## 🚀 Sobre o Projeto

Landing page premium, completa, responsiva e orientada à conversão para apresentar os planos de **Criação de Catálogos Digitais** para empresas, lojas, distribuidores, fabricantes, fornecedores e representantes comerciais de **qualquer segmento de produtos**.

Desenvolvida com a estética visual **"Design Menos Quadrado"** (composições fluidas, cantos amplamente arredondados, cabeçalho em cápsula flutuante, iluminação azul tecnológica e fundo atmosférico parallax).

---

## 🌐 Atendimento Universal a Múltiplos Segmentos

O serviço não é exclusivo para um único nicho. O catálogo pode ser personalizado para:

- Roupas & Moda
- Calçados & Acessórios
- Joias & Semijoias
- Cosméticos & Produtos de Beleza
- Móveis & Decoração
- Material de Construção
- Ferramentas & Equipamentos
- Eletrônicos & Acessórios de Celular
- Peças Automotivas
- Artigos Esportivos
- Produtos Personalizados & Brindes
- Alimentos Embalados
- Papelaria, Artesanato & Utilidades Domésticas
- Produtos Pet / Animais
- Atacado, Distribuição e Qualquer outro segmento comercial.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível com tags semânticas, atributos ARIA e marcação JSON-LD.
- **CSS3 Puro**: Design System com variáveis de raio fluido (`--radius-pill`, `--radius-large`, `--radius-medium`), tema escuro Deep Navy (`#050B16`), micro-animações, Flexbox e CSS Grid.
- **Vanilla JavaScript (ES6+)**: Interações dinâmicas sem dependências (menu cápsula responsivo, modal de contratação com campos estendidos de segmento e quantidade de itens, cálculo de manutenção em tempo real, acordeão FAQ e fallback inteligente para WhatsApp).
- **Sem Frameworks**: Zero React, Vue, Tailwind, Bootstrap ou jQuery.

---

## 📁 Estrutura de Arquivos

```text
/
├── index.html                # Estrutura semântica multisegmento e modais
├── README.md                 # Manual de edição, testes e publicação
└── assets/
    ├── css/
    │   └── styles.css        # Design System "Design Menos Quadrado"
    ├── js/
    │   ├── config.js         # Central de dados comerciais, preços e links
    │   └── app.js            # Interações, modais, multisegmento e WhatsApp
    └── images/
        ├── hero-catalogo.svg # Visual demonstrativo desktop
        ├── catalogo-preview.svg # Visual demonstrativo seção
        ├── catalogo-mobile.svg  # Visual demonstrativo mobile
        └── placeholders/     # Imagens demonstrativas de produtos
```

---

## 📖 Instruções de Configuração e Manutenção

Todas as informações comerciais do site estão centralizadas no arquivo **`assets/js/config.js`**.

### 1. Como editar o nome da marca
Abra `assets/js/config.js` e altere a propriedade `brand`:
```javascript
brand: "Joaquim Lemos | Soluções Digitais",
shortBrand: "Joaquim Lemos",
```

### 2. Como alterar o WhatsApp e o Instagram
No arquivo `config.js`:
```javascript
whatsapp: "5588992318209",
whatsappDisplay: "+55 88 99231-8209",

instagram: "@joaquimlemosmkt",
instagramUrl: "https://instagram.com/joaquimlemosmkt",
```

### 3. Como alterar os preços dos planos
Localize o objeto `plans` em `config.js`:
```javascript
plans: {
  essencial: {
    price: 1497,
    limit: "Até 300 produtos",
    payment: "50% na contratação e 50% antes da publicação",
    deadline: "7 a 10 dias úteis",
  },
  profissional: {
    price: 2497,
    limit: "Até 600 produtos",
  },
  escala: {
    price: 4497,
    badge: "Catálogo sem limite de crescimento",
    limit: "Produtos ilimitados sob solicitação",
    notice: "Inclui estrutura inicial e cadastro/importação de até 500 produtos.",
  }
}
```

### 4. Como configurar os links de assinatura eletrônica (Contratos)
Para integrar com ZapSign, Clicksign ou DocuSign, insira o link no campo `contractUrl` do plano desejado em `config.js`:
```javascript
plans: {
  profissional: {
    name: "Catálogo Profissional",
    price: 2497,
    contractUrl: "https://app.zapsign.com.br/ver/seu-link-de-contrato",
  }
}
```
*Se `contractUrl` estiver vazio (`""`), o sistema acionará o fallback inteligente enviando todos os dados do cliente (Nome, Empresa, Segmento, Quantidade de Itens, WhatsApp) diretamente para o WhatsApp de Joaquim Lemos.*

---

## 🌐 Como Executar Localmente e Publicar

### Execução Local
Abra o arquivo `index.html` em qualquer navegador web ou utilize extensões como *Live Server* no VS Code.

### Publicação na Vercel / Netlify / GitHub Pages
Como o projeto é 100% estático, basta conectar a pasta raiz do projeto na plataforma escolhida e publicar.

---

**Joaquim Lemos | Soluções Digitais** — Todos os direitos reservados.
