<template>
  <section class="bloco">
    <div class="topo">
      <p class="tag">Explore por categoria</p>
      <h2>Encontre o que você precisa</h2>
      <p class="texto">Profissionais prontos para ajudar em projetos, reformas, serviços e muito mais.</p>
    </div>

    <div class="lista">
      <RouterLink
        v-for="categoria in listaCategorias"
        :key="categoria.nome"
        :to="{ path: '/buscar', query: { busca: categoria.nome } }"
        class="card"
      >
        <div class="icone" v-html="categoria.icone"></div>
        <h3>{{ categoria.nome }}</h3>
        <p>{{ categoria.descricao }}</p>
      </RouterLink>
    </div>

    <div class="areaBotao">
      <RouterLink to="/categorias" class="botao">
        Ver todas as categorias
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const listaCategorias = [
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    nome: "Desenvolvimento",
    descricao: "Sites, aplicativos e sistemas",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.37 2.63 14 7l-1.5-1.5L17 1c.3-.3.7-.5 1.2-.5.4 0 .8.2 1.1.5l1.7 1.7c.3.3.5.7.5 1.1 0 .5-.2.9-.5 1.2Z"></path><path d="m14 7-8.5 8.5c-.3.3-.5.7-.5 1.2v3.8h3.8c.5 0 .9-.2 1.2-.5L18.5 11"></path><line x1="9" y1="9" x2="10.5" y2="10.5"></line></svg>`,
    nome: "Design",
    descricao: "Logotipos e identidade visual",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    nome: "Elétrica",
    descricao: "Instalações e reparos",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    nome: "Informática",
    descricao: "Suporte técnico e redes",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`,
    nome: "Jardinagem",
    descricao: "Paisagismo e manutenção",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>`,
    nome: "Fotografia",
    descricao: "Eventos e produtos",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    nome: "Aulas",
    descricao: "Particulares e reforço escolar",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.622 17.897-10.68-2.913c-1.35-.454-1.35-2.3-.6-3.6l5.66-8.663c.6-1.13 2.4-1.3 3-.15l2.62 4.8"></path><path d="M18.5 2.5c1 1 3 2.5 3 5.5 0 4-3.5 6-3.5 6L14 20l-4-1.5 4-6.5s3.5-2 3.5-6c0-3-2-4.5-3-5.5"></path><path d="m11 13-1 6.5"></path></svg>`,
    nome: "Pintura",
    descricao: "Residencial e comercial",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9L2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>`,
    nome: "Mecânica",
    descricao: "Automotiva e geral",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A8 8 0 0 1 11.87 8l1.79-1.79a2 2 0 0 1 2.83 0l2.3 2.3a2 2 0 0 1 0 2.83L17 13.13A8 8 0 0 1 11.13 19z"></path><path d="m11 13 8 8"></path></svg>`,
    nome: "Hidráulica",
    descricao: "Encanamento e desentupimento",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    nome: "Estética & Beleza",
    descricao: "Maquiagem, cabelo e unhas",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    nome: "Segurança",
    descricao: "Câmeras e alarmes",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    nome: "Finanças & Contabilidade",
    descricao: "Imposto de renda e consultoria",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    nome: "Reformas & Construção",
    descricao: "Pedreiros, azulejistas e gesso",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path><path d="M12 3v6"></path></svg>`,
    nome: "Gastronomia & Eventos",
    descricao: "Buffet, bolos e confeitaria",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    nome: "Marketing & Redes Sociais",
    descricao: "Gestão de tráfego e conteúdo",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.432 2.5 6.5 2.5S3 3.782 3 5.172c0 1.268.86 2.457 2.182 3.123L3 18h7l-2.182-9.705C9.14 7.629 10 6.44 10 5.172Z"></path><path d="M21 5.172c0-1.39-1.568-2.672-3.5-2.672S14 3.782 14 5.172c0 1.268.86 2.457 2.182 3.123L14 18h7l-2.182-9.705C19.86 7.629 21 6.44 21 5.172Z"></path></svg>`,
    nome: "Serviços Jurídicos",
    descricao: "Advocacia e contratos",
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    nome: "Tradução & Idiomas",
    descricao: "Tradução juramentada e revisão",
  },
]

</script>

<style scoped>
.bloco {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px 60px;
}

.topo {
  text-align: center;
  margin-bottom: 30px;
}

.tag {
  margin: 0 0 8px;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.topo h2 {
  margin: 0 0 8px;
  color: #111827;
  font-size: 2.2rem;
}

.texto {
  margin: 0 auto;
  max-width: 630px;
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 22px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  text-decoration: none;
}

.card:hover {
  border-color: #93c5fd;
}

.icone {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #eff6ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.icone :deep(svg) {
  width: 24px;
  height: 24px;
}

.card h3 {
  margin: 0 0 6px;
  color: #111827;
  font-size: 1rem;
  font-weight: 700;
}

.card p {
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.4;
}

.areaBotao {
  margin-top: 28px;
  text-align: center;
}

.botao {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid #dbeafe;
  color: #1d4ed8;
  font-weight: 600;
  text-decoration: none;
}
</style>
