<template>
  <main class="como-funciona">
    <section class="intro">
      <p class="etiqueta">CIROLANCERS</p>
      <h1>Encontre o profissional certo em poucos passos</h1>
      <p>
        A CiroLancers une você a profissionais qualificados, tornando a contratação de serviços simples, segura e rápida.
      </p>
    </section>

    <section class="passos" aria-label="Como funciona a CiroLancers">
      <article v-for="passo in passos" :key="passo.numero" class="passo">
        <span class="numero">{{ passo.numero }}</span>
        <div class="passo-texto">
          <h2>{{ passo.titulo }}</h2>
          <p>{{ passo.descricao }}</p>
        </div>
      </article>
    </section>

    <section class="cta">
      <h2>Pronto para começar?</h2>
      <p>Navegue pelas categorias e descubra o profissional ideal para o seu projeto.</p>
      <RouterLink to="/categorias" class="cta-button">
        Ver categorias
        <span class="cta-seta">→</span>
      </RouterLink>
    </section>
  </main>
</template>

<script setup>
const passos = [
  {
    numero: '01',
    titulo: 'Pesquise o serviço',
    descricao: 'Navegue pelas categorias disponíveis e veja quais profissionais atendem sua necessidade.',
  },
  {
    numero: '02',
    titulo: 'Compare e decida',
    descricao: 'Analise perfis, avaliações de outros clientes e valores antes de fechar negócio.',
  },
  {
    numero: '03',
    titulo: 'Contrate com confiança',
    descricao: 'Converse com o profissional, alinhe os detalhes e acompanhe tudo até a entrega.',
  },
]
</script>

<style scoped>
.como-funciona {
  min-height: 70vh;
  background: #f9fafb;
  padding: 40px 8% 48px;
}

.intro {
  max-width: 640px;
  margin: 0 auto 32px;
  text-align: center;
}

.etiqueta {
  margin: 0 0 8px;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.intro h1 {
  margin: 0;
  color: #111827;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.15;
}

.intro p {
  margin: 12px 0 0;
  color: #6b7280;
  font-size: 0.98rem;
  line-height: 1.5;
}

.passos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 1080px;
  margin: 0 auto;
}

.passo {
  display: flex;
  gap: 12px;
  padding: 20px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}

.numero {
  flex-shrink: 0;
  color: #2563eb;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 1;
}

.passo h2 {
  margin: 0 0 6px;
  color: #1f2937;
  font-size: 1.05rem;
}

.passo p {
  margin: 0;
  color: #6b7280;
  font-size: 0.92rem;
  line-height: 1.5;
}

.cta {
  max-width: 1080px;
  margin: 36px auto 0;
  padding: 32px 24px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
}

.cta h2 {
  margin: 0;
  color: #111827;
  font-size: 1.4rem;
}

.cta p {
  margin: 8px 0 18px;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
}

.cta-seta {
  transition: transform 0.2s ease;
}

.cta-button:hover .cta-seta {
  transform: translateX(4px);
}

.cta-button:hover {
  background: #1d4ed8;
}

@media (max-width: 768px) {
  .como-funciona {
    padding: 32px 6% 40px;
  }

  .passos {
    grid-template-columns: 1fr;
  }

  .cta {
    padding: 24px 22px;
  }
}
</style>