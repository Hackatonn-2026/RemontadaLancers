<script setup>
import AppHeader from '@/components/AppHeader.vue'
import BaseButton from '@/components/Button.vue'
import SearchBar from '@/components/SearchBar.vue'

const categoriasHome = [
  {
    nome: 'Desenvolvimento',
    descricao: 'Sites, aplicativos e sistemas',
    icone:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  },
  {
    nome: 'Design',
    descricao: 'Logotipos e identidade visual',
    icone:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.37 2.63 14 7l-1.5-1.5L17 1c.3-.3.7-.5 1.2-.5.4 0 .8.2 1.1.5l1.7 1.7c.3.3.5.7.5 1.1 0 .5-.2.9-.5 1.2Z"></path><path d="m14 7-8.5 8.5c-.3.3-.5.7-.5 1.2v3.8h3.8c.5 0 .9-.2 1.2-.5L18.5 11"></path><line x1="9" y1="9" x2="10.5" y2="10.5"></line></svg>',
  },
  {
    nome: 'Elétrica',
    descricao: 'Instalações e reparos',
    icone:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  },
  {
    nome: 'Informática',
    descricao: 'Suporte técnico e redes',
    icone:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
  },
]

// const para a section "Como Funciona"
const etapas = [
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h9a4 4 0 0 1 4 4v12l-3.5-1.5L10 20l-3.5-1.5L3 20V8a4 4 0 0 1 1-2.6" />
      <path d="M8 9h5M8 13h5" />
    </svg>`,
    titulo: '1. Descreva seu projeto',
    descricao: 'Conte-nos o que você precisa de forma simples e rápida',
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 21v-1.5a6.5 6.5 0 0 1 13 0V21" />
      <circle cx="18.5" cy="8" r="2.8" />
      <path d="M16 21v-1a4.5 4.5 0 0 1 6.5-4" />
    </svg>`,
    titulo: '2. Receba propostas',
    descricao: 'Profissionais qualificados enviarão orçamentos para você',
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.1V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9.5" />
      <path d="M8 12l3 3 8-9" />
    </svg>`,
    titulo: '3. Escolha o melhor',
    descricao: 'Compare avaliações, preços e portfólios',
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l8 3.5v6c0 5.5-3.4 9.5-8 11-4.6-1.5-8-5.5-8-11v-6L12 2z" />
      <path d="M9 12l2.2 2.2L15.5 9.5" />
    </svg>`,
    titulo: '4. Pague com segurança',
    descricao: 'Seu dinheiro fica protegido até a conclusão do trabalho',
  },
]

// const para a section "O que dizem nossos usuários"
const depoimentos = [
  {
    texto:
      'Encontrei um desenvolvedor excelente em menos de 24 horas. O projeto ficou melhor do que esperava!',
    autor: 'João Pereira',
  },
  {
    texto: 'Plataforma fácil de usar e profissionais qualificados. Recomendo!',
    autor: 'Maria Fernanda',
  },
  {
    texto: 'Consegui vários clientes através do Cirolancers. Mudou meu negócio!',
    autor: 'Pedro Oliveira',
  },
]

const profissionaisEmDestaque = [
  {
    id: 1,
    nome: 'Carlos Silva',
    cargo: 'Desenvolvedor Full Stack',
    avaliacao: 4.9,
    totalAvaliacoes: 127,
    preco: 150,
    avatar: '/img/carlos.jpg',
  },
  {
    id: 2,
    nome: 'Ana Costa',
    cargo: 'Designer Gráfica',
    avaliacao: 5,
    totalAvaliacoes: 89,
    preco: 120,
    avatar: '/img/ana.jpg',
  },
  {
    id: 3,
    nome: 'Roberto Santos',
    cargo: 'Eletricista',
    avaliacao: 4.8,
    totalAvaliacoes: 203,
    preco: 80,
    avatar: '/img/roberto.jpg',
  },
  {
    id: 4,
    nome: 'Mariana Lima',
    cargo: 'Professora de Inglês',
    avaliacao: 4.9,
    totalAvaliacoes: 156,
    preco: 60,
    avatar: '/img/mariana.jpg',
  },
]
</script>

<template>
  <AppHeader />

  <main class="home-view">
    <section class="hero">
      <h1>Encontre um profissional agora</h1>
      <p>Conecte-se com os melhores freelancers para seu projeto</p>

      <div class="buscaHero">
        <input type="text" placeholder="Qual serviço você procura?" />
        <button class="botaoBuscar">Buscar</button>
      </div>
    </section>

    <section class="estatisticas">
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
      <div class="cabecalho">
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
        <BaseButton to="/categorias" variant="secondary">
          Ver todas as categorias
        </BaseButton>
      </div>
    </section>

    <section class="profissionaisDestaque">
      <div class="cabecalho">
        <h2>Profissionais em Destaque</h2>
        <p class="subtitulo">Conheça alguns dos nossos melhores profissionais</p>
      </div>

      <div class="listaProfissionais">
        <div
          v-for="profissional in profissionaisEmDestaque"
          :key="profissional.id"
          class="cardProfissional"
        >
          <img :src="profissional.avatar" :alt="profissional.nome" class="fotoProfissional" />

          <div class="infoProfissional">
            <h3>{{ profissional.nome }}</h3>
            <p class="cargo">{{ profissional.cargo }}</p>

            <div class="linhaAvaliacao">
              <span class="nota">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon
                    points="12 2 15.1 8.6 22 9.5 17 14.4 18.2 21.5 12 18.2 5.8 21.5 7 14.4 2 9.5 8.9 8.6 12 2"
                  />
                </svg>
                {{ profissional.avaliacao }} ({{ profissional.totalAvaliacoes }})
              </span>

              <span class="preco">R$ {{ profissional.preco }}/h</span>
            </div>

            <RouterLink to="/buscar" class="botaoPerfil">Ver perfil</RouterLink>
          </div>
        </div>
      </div>

      <div class="areaBotao">
        <RouterLink to="/buscar" class="botao">Ver todos os profissionais</RouterLink>
      </div>
    </section>

    <section class="comoFunciona">
      <div class="cabecalho">
        <h2>Como Funciona</h2>
        <p class="subtitulo">Contrate profissionais em 4 passos simples</p>
      </div>

      <div class="passos">
        <div class="passo" v-for="etapa in etapas" :key="etapa.titulo">
          <div class="iconePasso" v-html="etapa.icone"></div>
          <h3>{{ etapa.titulo }}</h3>
          <p>{{ etapa.descricao }}</p>
        </div>
      </div>
    </section>

    <section class="oqueDizem">
      <div class="cabecalho">
        <h2>O que dizem nossos usuários</h2>
      </div>

      <div class="depoimentos">
        <div class="depoimento" v-for="depoimento in depoimentos" :key="depoimento.autor">
          <p>"{{ depoimento.texto }}"</p>
          <span>- {{ depoimento.autor }}</span>
        </div>
      </div>
    </section>

    <section class="prontoParaComecar">
      <div class="cabecalho">
        <h2>Pronto para começar?</h2>
        <p class="subtitulo">Junte-se a centenas de profissionais e clientes satisfeitos</p>
      </div>

      <div class="areaBotao">
        <RouterLink to="/categorias" class="botaoSolido">Buscar Profissionais</RouterLink>
        <RouterLink to="/cadastro" class="botaoContorno">Torne-se um Freelancer</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background-color: #2563eb;
  color: white;
  text-align: center;
  padding: 70px 20px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 30px;
}

.buscaHero {
  background-color: white;
  border-radius: 30px;
  padding: 6px;
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
}

.buscaHero input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 16px;
  font-size: 16px;
}

.botaoBuscar {
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
}

/* numeros */
.estatisticas {
  background-color: white;
  padding: 40px 20px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
}

.stat {
  text-align: center;
}

.stat h2 {
  color: #2563eb;
  font-size: 34px;
  margin-bottom: 4px;
}

.stat span {
  color: #6b7280;
}

.cabecalho {
  text-align: center;
  margin-bottom: 30px;
}

.cabecalho h2 {
  color: #111827;
  font-size: 36px;
  margin-bottom: 8px;
}

.destaque {
  color: #2563eb;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.subtitulo {
  color: #6b7280;
  font-size: 18px;
}

/* caegorias */
.destaqueCategorias {
  background-color: #f8fafc;
  padding: 60px 20px;
}

.lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 250px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 22px 16px;
  text-align: center;
  text-decoration: none;
}

.card:hover {
  border-color: #93c5fd;
}

.icone {
  width: 52px;
  height: 52px;
  line-height: 52px;
  border-radius: 12px;
  background-color: #eff6ff;
  color: #2563eb;
  margin: 0 auto 12px auto;
}

.card h3 {
  color: #111827;
  font-size: 16px;
  margin-bottom: 6px;
}

.card p {
  color: #6b7280;
  font-size: 14px;
}

.areaBotao {
  text-align: center;
  margin-top: 30px;
}

.botao {
  background-color: white;
  border: 1px solid #dbeafe;
  border-radius: 30px;
  color: #1d4ed8;
  font-weight: bold;
  padding: 12px 20px;
  text-decoration: none;
}

/* profissionais  */
.profissionaisDestaque {
  background-color: white;
  padding: 60px 20px;
}

.listaProfissionais {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.cardProfissional {
  width: 270px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
}

.cardProfissional:hover {
  border-color: #93c5fd;
}

.fotoProfissional {
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
}

.infoProfissional {
  padding: 18px;
}

.infoProfissional h3 {
  color: #111827;
  font-size: 20px;
  margin-bottom: 4px;
}

.cargo {
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 14px;
}

.linhaAvaliacao {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.nota {
  color: #111827;
  font-size: 15px;
}

.nota svg {
  color: #facc15;
  vertical-align: text-bottom;
}

.preco {
  color: #2563eb;
  font-weight: bold;
}

.botaoPerfil {
  display: block;
  background-color: #2563eb;
  color: white;
  border-radius: 8px;
  padding: 11px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

.botaoPerfil:hover {
  background-color: #1d4ed8;
}

/* como funciona */
.comoFunciona {
  background-color: #f8fafc;
  padding: 60px 20px;
}

.passos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.passo {
  width: 240px;
  text-align: center;
}

.iconePasso {
  width: 72px;
  height: 72px;
  line-height: 72px;
  border-radius: 50%;
  background-color: #2563eb;
  color: white;
  margin: 0 auto 16px auto;
}

.passo h3 {
  color: #111827;
  font-size: 17px;
  margin-bottom: 6px;
}

.passo p {
  color: #6b7280;
  font-size: 14px;
}

/* depoimentos */
.oqueDizem {
  background-color: white;
  padding: 60px 20px;
}

.depoimentos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.depoimento {
  width: 320px;
  background-color: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 24px 20px;
}

.depoimento p {
  color: #374151;
  line-height: 1.6;
  margin-bottom: 14px;
}

.depoimento span {
  color: #111827;
  font-weight: bold;
}

/* chamada final */
.prontoParaComecar {
  background-color: #2563eb;
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.prontoParaComecar h2 {
  color: white;
}

.prontoParaComecar .subtitulo {
  color: #dbeafe;
}

.botaoSolido {
  background-color: white;
  color: #2563eb;
  border-radius: 8px;
  padding: 12px 24px;
  margin: 0 8px;
  font-weight: bold;
  text-decoration: none;
}

.botaoContorno {
  border: 2px solid white;
  color: white;
  border-radius: 8px;
  padding: 12px 24px;
  margin: 0 8px;
  font-weight: bold;
  text-decoration: none;
}
</style>
