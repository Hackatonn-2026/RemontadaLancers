<script setup>
import AppHeader from '@/components/AppHeader.vue'
import SearchBar from '@/components/SearchBar.vue'

const categoriasHome = [
  {
    nome: 'Desenvolvimento',
    descricao: 'Sites, aplicativos e sistemas',
    icone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  },
  {
    nome: 'Design',
    descricao: 'Logotipos e identidade visual',
    icone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.37 2.63 14 7l-1.5-1.5L17 1c.3-.3.7-.5 1.2-.5.4 0 .8.2 1.1.5l1.7 1.7c.3.3.5.7.5 1.1 0 .5-.2.9-.5 1.2Z"></path><path d="m14 7-8.5 8.5c-.3.3-.5.7-.5 1.2v3.8h3.8c.5 0 .9-.2 1.2-.5L18.5 11"></path><line x1="9" y1="9" x2="10.5" y2="10.5"></line></svg>',
  },
  {
    nome: 'Elétrica',
    descricao: 'Instalações e reparos',
    icone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  },
  {
    nome: 'Informática',
    descricao: 'Suporte técnico e redes',
    icone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
  },
]


// const para a section "Como Funciona"
   const etapas = [
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h9a4 4 0 0 1 4 4v12l-3.5-1.5L10 20l-3.5-1.5L3 20V8a4 4 0 0 1 1-2.6" />
      <path d="M8 9h5M8 13h5" />
    </svg>`,
    titulo: '1. Descreva seu projeto',
    descricao: 'Conte-nos o que você precisa de forma simples e rápida'
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 21v-1.5a6.5 6.5 0 0 1 13 0V21" />
      <circle cx="18.5" cy="8" r="2.8" />
      <path d="M16 21v-1a4.5 4.5 0 0 1 6.5-4" />
    </svg>`,
    titulo: '2. Receba propostas',
    descricao: 'Profissionais qualificados enviarão orçamentos para você'
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.1V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9.5" />
      <path d="M8 12l3 3 8-9" />
    </svg>`,
    titulo: '3. Escolha o melhor',
    descricao: 'Compare avaliações, preços e portfólios'
  },
  {
    icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l8 3.5v6c0 5.5-3.4 9.5-8 11-4.6-1.5-8-5.5-8-11v-6L12 2z" />
      <path d="M9 12l2.2 2.2L15.5 9.5" />
    </svg>`,
    titulo: '4. Pague com segurança',
    descricao: 'Seu dinheiro fica protegido até a conclusão do trabalho'
  }
]
</script>

<template>
  <AppHeader />

  <main class="home-view">
    <section class="hero">
      <h1>Encontre um profissional agora</h1>
      <p>Conecte-se com os melhores freelancers para seu projeto</p>
      <SearchBar />

      <div class="stats">
        <div class="stat">
          <h2>35</h2>
          <span>Profissionais Ativos</span>
        </div>

        <div class="stat">
          <h2>670+</h2>
          <span>Projetos Concluídos</span>
        </div>

        <div class="stat">
          <h2>98%</h2>
          <span>Satisfação</span>
        </div>

        <div class="stat">
          <h2>1000</h2>
          <span>Clientes Atendidos</span>
        </div>
      </div>
    </section>

    <section class="destaqueCategorias">
      <div class="cabecalhoCategorias">
        <p class="destaque">Categorias em alta</p>
        <h2>Principais áreas de atendimento</h2>
      </div>

      <div class="lista">
        <RouterLink
          v-for="categoria in categoriasHome"
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
        <RouterLink to="/categorias" class="botao">Ver todas as categorias</RouterLink>
      </div>
    </section>


    // espaço para seção profissionais em destaque

    <section class="comoFunciona">
      <div class="cabecalhoCategorias">
        <h2>Como Funciona</h2>
        <p class="destaque">Contrate profissionais em 4 passos simples</p>
      </div>
      <div class="passos">
        <div class="passo" v-for="(etapa, indice) in etapas" :key="indice">
          <div class="iconeWrapper">
            <span class="iconePasso" v-html="etapa.icone"></span>
          </div>
          <h3>{{ etapa.titulo }}</h3>
          <p>{{ etapa.descricao }}</p>
        </div>
      </div>
    </section>
    <section class="oqueDizem">
      <div class="titulo">
        <h2>O que dizem nossos usuários</h2>
      </div>
      <div class="depoimentos">
        <div class="depoimento">
          <p>"A plataforma me ajudou a encontrar um profissional incrível para meu projeto. Recomendo!"</p>
          <span>- João Silva</span>
        </div>
        <div class="depoimento">
          <p>"Fiquei impressionado com a qualidade dos freelancers disponíveis. Excelente experiência!"</p>
          <span>- Maria Oliveira</span>
        </div>
        <div class="depoimento">
          <p>"O processo foi rápido e seguro. Consegui contratar alguém confiável em pouco tempo."</p>
          <span>- Carlos Souza</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px 100px;
  h1 {
    font-size: 3.6rem;
    margin-bottom: 10px;
    color: #2563eb;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: #8b8f94;
  }
}

.stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 60px;
}

.stat h2 {
  color: #2563eb;
  font-size: 34px;
}

.stat span {
  color: #6b7280;
}

.destaqueCategorias {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px;
}

.cabecalhoCategorias {
  text-align: center;
  margin-bottom: 24px;
}

.destaque {
  margin: 0 0 8px;
  color: #2563eb;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cabecalhoCategorias h2 {
  margin: 0;
  color: #111827;
  font-size: 2.5rem;
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

.comoFunciona {
  padding: 60px 20px;
  text-align: center;
}

.destaque {
  color: #6b7280;
  margin-bottom: 40px;
}

.passos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.iconeWrapper {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iconePasso {
  width: 28px;
  height: 28px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iconePasso :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.passo h3 {
  color: #111827;
  margin-bottom: 6px;
}

.passo p {
  color: #6b7280;
  font-size: 0.9rem;
}

</style>
