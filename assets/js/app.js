/**
 * Application Logic - Joaquim Lemos | Soluções Digitais
 * Suporte a múltiplos segmentos, design fluido, modal avançado e WhatsApp Fallback
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  initFAQ();
  initMultiSegmentShowcase();
  initPlanModal();
  initLegalModals();
  updateFooterYear();
  initWhatsAppButtons();
});

/* ==========================================================================
   1. UTILITÁRIOS E FORMATADORES
   ========================================================================== */

/**
 * Formata um valor numérico em Real Brasileiro (BRL)
 * @param {number} value 
 * @returns {string} Exemplo: "R$ 1.497,00"
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

/**
 * Gera URL codificada para o WhatsApp com fallback seguro
 * @param {string} text - Texto da mensagem
 * @returns {string} URL wa.me
 */
function buildWhatsAppLink(text) {
  const number = SITE_CONFIG.whatsapp || "5588992318209";
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/* ==========================================================================
   2. CABEÇALHO FLUTUANTE EM CÁPSULA E MENU MÓVEL
   ========================================================================== */

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const drawer = document.getElementById("mobileDrawer");
  const closeBtn = document.querySelector(".mobile-drawer-close");
  const backdrop = document.querySelector(".mobile-backdrop");
  const drawerLinks = document.querySelectorAll(".mobile-drawer-link, .mobile-drawer-footer a");

  if (!toggleBtn || !drawer || !backdrop) return;

  function openMenu() {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("scroll-locked");
  }

  function closeMenu() {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("scroll-locked");
  }

  toggleBtn.addEventListener("click", () => {
    const isActive = drawer.classList.contains("active");
    if (isActive) closeMenu();
    else openMenu();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   3. ACORDEÃO DE PERGUNTAS FREQUENTES (FAQ ACCORDION ARIA)
   ========================================================================== */

function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fechar outros itens abertos para manter navegabilidade fluida
      faqItems.forEach((other) => {
        other.classList.remove("active");
        const otherTrigger = other.querySelector(".faq-trigger");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ==========================================================================
   4. DEMONSTRAÇÃO MULTISEGMENTO INTERATIVA
   ========================================================================== */

function initMultiSegmentShowcase() {
  const catBtns = document.querySelectorAll(".showcase-cat-btn");
  const products = document.querySelectorAll(".product-demo-card");

  if (!catBtns.length || !products.length) return;

  catBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      catBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      products.forEach((product) => {
        const prodCat = product.getAttribute("data-category");
        if (category === "all" || prodCat === category) {
          product.style.display = "flex";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   5. SELEÇÃO E CONTRATAÇÃO DOS PLANOS (MODAL ARREDONDADO COM MAIS CAMPOS)
   ========================================================================== */

let currentSelectedPlanKey = "profissional";

function initPlanModal() {
  const modalBackdrop = document.getElementById("planModal");
  if (!modalBackdrop) return;

  const modalClose = modalBackdrop.querySelector(".modal-close");
  const modalCancel = modalBackdrop.querySelector(".btn-modal-cancel");
  const planForm = document.getElementById("checkoutForm");
  const maintenanceCheckbox = document.getElementById("modalMaintenanceCheck");

  const selectPlanBtns = document.querySelectorAll("[data-plan-target]");

  selectPlanBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const planKey = btn.getAttribute("data-plan-target");
      openPlanModal(planKey);
    });
  });

  function openPlanModal(planKey) {
    const plan = SITE_CONFIG.plans[planKey];
    if (!plan) return;

    currentSelectedPlanKey = planKey;

    // Salvar escolha no sessionStorage
    sessionStorage.setItem("selectedPlan", JSON.stringify(plan));

    // Atualizar dados no Modal
    document.getElementById("modalPlanName").textContent = plan.name;
    document.getElementById("modalPlanPayment").textContent = plan.payment;
    document.getElementById("modalPlanDeadline").textContent = `Prazo: ${plan.deadline}`;

    if (maintenanceCheckbox) maintenanceCheckbox.checked = false;

    updateModalTotalPrice();

    // Abrir Modal
    modalBackdrop.classList.add("active");
    document.body.classList.add("scroll-locked");
    modalBackdrop.querySelector("input")?.focus();
  }

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.classList.remove("scroll-locked");
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalCancel) modalCancel.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeModal();
    }
  });

  if (maintenanceCheckbox) {
    maintenanceCheckbox.addEventListener("change", updateModalTotalPrice);
  }

  function updateModalTotalPrice() {
    const plan = SITE_CONFIG.plans[currentSelectedPlanKey];
    if (!plan) return;

    let total = plan.price;
    const isMaintenanceSelected = maintenanceCheckbox && maintenanceCheckbox.checked;

    if (isMaintenanceSelected) {
      total += SITE_CONFIG.maintenance.priceFrom;
    }

    const priceEl = document.getElementById("modalPlanPrice");
    if (priceEl) {
      priceEl.textContent = formatCurrency(total);
      if (isMaintenanceSelected) {
        priceEl.innerHTML = `${formatCurrency(total)} <span style="font-size:0.875rem; font-weight:normal; color:var(--primary-light);">(inclui 1º mês Cuidado Contínuo)</span>`;
      }
    }
  }

  // Envio do Formulário de Contratação
  if (planForm) {
    planForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById("clientName")?.value.trim() || "",
        company: document.getElementById("clientCompany")?.value.trim() || "",
        segment: document.getElementById("clientSegment")?.value.trim() || "",
        whatsapp: document.getElementById("clientWhatsapp")?.value.trim() || "",
        email: document.getElementById("clientEmail")?.value.trim() || "",
        cityState: document.getElementById("clientCityState")?.value.trim() || "",
        productCount: document.getElementById("clientProductCount")?.value.trim() || "",
        maintenance: maintenanceCheckbox?.checked || false
      };

      const plan = SITE_CONFIG.plans[currentSelectedPlanKey];

      // Redirecionar para Plataforma de Assinatura se `contractUrl` estiver preenchido
      if (plan && plan.contractUrl) {
        window.location.href = plan.contractUrl;
        return;
      }

      // WhatsApp Fallback detalhado com dados multisegmento
      triggerWhatsAppFallback(plan, formData);
      closeModal();
    });
  }
}

/**
 * Monta mensagem e redireciona para o WhatsApp de Joaquim Lemos
 */
function triggerWhatsAppFallback(plan, formData) {
  const priceFormatted = formatCurrency(plan.price);
  let message = `Olá, Joaquim! Analisei os planos e escolhi o *${plan.name}*, no valor de *${priceFormatted}*.\n\nGostaria de receber o contrato e as orientações para iniciar o projeto.`;

  if (formData.maintenance) {
    message += `\n\n*Aviso:* Também tenho interesse no plano de manutenção *Cuidado Contínuo* (a partir de R$ 197/mês).`;
  }

  if (formData.name || formData.company || formData.segment) {
    message += `\n\n--- DADOS DA EMPRESA ---`;
    if (formData.name) message += `\n• Nome: ${formData.name}`;
    if (formData.company) message += `\n• Empresa: ${formData.company}`;
    if (formData.segment) message += `\n• Segmento: ${formData.segment}`;
    if (formData.productCount) message += `\n• Quantidade aprox. de produtos: ${formData.productCount}`;
    if (formData.whatsapp) message += `\n• WhatsApp: ${formData.whatsapp}`;
    if (formData.email) message += `\n• E-mail: ${formData.email}`;
    if (formData.cityState) message += `\n• Cidade/Estado: ${formData.cityState}`;
  }

  const waLink = buildWhatsAppLink(message);
  window.open(waLink, "_blank", "noopener,noreferrer");
}

/* ==========================================================================
   6. BOTÕES DIRETOS DE ATENDIMENTO NO WHATSAPP
   ========================================================================== */

function initWhatsAppButtons() {
  // Hero & Cabeçalho
  const heroWaBtn = document.querySelectorAll(".btn-hero-wa");
  heroWaBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = `Olá, Joaquim! Conheci seu serviço de criação de catálogos digitais e gostaria de saber qual plano é mais adequado para minha empresa.`;
      window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    });
  });

  // Manutenção Cuidado Contínuo
  const maintWaBtn = document.querySelectorAll(".btn-maint-wa");
  maintWaBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = `Olá, Joaquim! Gostaria de receber mais informações sobre o plano de manutenção Cuidado Contínuo para meu catálogo digital.`;
      window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    });
  });

  // FAQ & Chamada Final
  const faqWaBtn = document.querySelectorAll(".btn-faq-wa");
  faqWaBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = `Olá, Joaquim! Conheci seus planos de criação de catálogos digitais e gostaria de tirar algumas dúvidas antes de escolher.`;
      window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    });
  });
}

/* ==========================================================================
   7. MODAIS JURÍDICOS (POLÍTICA DE PRIVACIDADE E TERMOS)
   ========================================================================== */

function initLegalModals() {
  const legalModal = document.getElementById("legalModal");
  if (!legalModal) return;

  const modalTitle = document.getElementById("legalModalTitle");
  const modalContent = document.getElementById("legalModalContent");
  const closeBtn = legalModal.querySelector(".modal-close");

  function openLegal(title, htmlContent) {
    modalTitle.textContent = title;
    modalContent.innerHTML = htmlContent;
    legalModal.classList.add("active");
    document.body.classList.add("scroll-locked");
  }

  function closeLegal() {
    legalModal.classList.remove("active");
    document.body.classList.remove("scroll-locked");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLegal);
  legalModal.addEventListener("click", (e) => {
    if (e.target === legalModal) closeLegal();
  });

  const privacyBtn = document.getElementById("linkPrivacy");
  if (privacyBtn) {
    privacyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openLegal(
        "Política de Privacidade",
        `<p><strong>Joaquim Lemos | Soluções Digitais</strong> respeita a privacidade e a segurança dos dados das empresas atendidas.</p>
         <p>1. <strong>Coleta de Informações:</strong> Dados preenchidos nos formulários (Nome, Empresa, Segmento, WhatsApp) são utilizados estritamente para comunicação comercial, orçamento e elaboração contratual.</p>
         <p>2. <strong>Sigilo Profissional:</strong> Fotos, dados de produtos e especificações fornecidos pelos clientes serão tratados com estrito sigilo e usados exclusivamente no desenvolvimento do catálogo.</p>
         <p>3. <strong>Proteção:</strong> Não vendemos nem compartilhamos dados com terceiros sem consentimento formal.</p>`
      );
    });
  }

  const termsBtn = document.getElementById("linkTerms");
  if (termsBtn) {
    termsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openLegal(
        "Termos de Uso",
        `<p>Diretrizes de contratação dos serviços de <strong>Joaquim Lemos | Soluções Digitais</strong>:</p>
         <p>1. <strong>Segmentos Atendidos:</strong> Desenvolvemos catálogos digitais para empresas de qualquer segmento de produto permitido pela legislação vigente.</p>
         <p>2. <strong>Envio de Materiais:</strong> O cliente é responsável por enviar logotipo, fotos, códigos, categorias e informações dos itens de forma organizada.</p>
         <p>3. <strong>Prazos:</strong> A contagem do prazo inicia após confirmação do pagamento inicial e entrega completa dos materiais necessários.</p>
         <p>4. <strong>Resultados Comerciais:</strong> Fornecemos estrutura técnica, organização e apresentação profissional, sem garantia de faturamento ou volume fixo de vendas.</p>`
      );
    });
  }
}

/* ==========================================================================
   8. ATUALIZAÇÃO AUTOMÁTICA DO ANO DO RODAPÉ
   ========================================================================== */

function updateFooterYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
