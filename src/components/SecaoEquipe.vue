<template>
  <section class="equipe">
    <h2>Nossa Equipe</h2>
    <p class="subtitulo">As pessoas por trás da plataforma em Joinville</p>

    <div class="cards-equipe">
      <div class="card-membro">
        <img :src="carlosFoto" alt="Carlos Miguel de Oliveira" />
        <h3>Carlos Miguel de Oliveira</h3>
        <span class="cargo">Fundador & Diretor Geral</span>
        <p>Idealizou a plataforma focada na valorização do profissional e no fortalecimento do mercado local em Joinville.</p>
      </div>

      <div class="card-membro">
        <img :src="eloisaFoto" alt="Eloisa Muller" />
        <h3>Eloisa Muller</h3>
        <span class="cargo">Líder de Suporte & Mediação</span>
        <p>Responsável pelo suporte dedicado aos usuários, garantia de reembolsos e mediação transparente de conflitos.</p>
      </div>

      <div class="card-membro">
        <img :src="guilhermeFoto" alt="Guilherme Bloemer" />
        <h3>Guilherme Bloemer</h3>
        <span class="cargo">Desenvolvedor Principal</span>
        <p>Cuida do funcionamento técnico da plataforma, garantindo a navegação, segurança nos pagamentos e organização por categorias.</p>
      </div>

      <div class="card-membro">
        <img :src="nicolasFoto" alt="Nicolas Martins Paiva" />
        <h3>Nicolas Martins Paiva</h3>
        <span class="cargo">Analista de Segurança & Qualidade</span>
        <p>Avalia qualificações e dados dos prestadores antes de disponibilizá-los, mantendo a reputação e confiança na comunidade.</p>
      </div>

      <div class="card-membro">
        <img :src="valentinaFoto" alt="Valentina Damas" />
        <h3>Valentina Damas</h3>
        <span class="cargo">Gestora de Comunidade & Operações</span>
        <p>Conecta os profissionais e clientes da região de Joinville, viabilizando parcerias e mantendo a sustentabilidade financeira.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import carlosFoto from '../assets/carlos.png';
import eloisaFoto from '../assets/eloisa.png';
import guilhermeFoto from '../assets/guilherme.png';
import nicolasFoto from '../assets/nicolas.png';
import valentinaFoto from '../assets/valentina.png';
</script>

<style scoped>
.equipe {
  background: #fff;
  padding: 72px 8% 96px;
  text-align: center;
}

.equipe h2 {
  color: #1d4ed8;
}

.subtitulo {
  margin-bottom: 56px;
  color: #64748b;
}

.cards-equipe {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-membro {
  width: 220px;
  padding: 24px 18px;
  background: #fff;
  border: 1px solid #dbe4f0;
  border-radius: 14px;
}

.card-membro img {
  display: block;
  width: 112px;
  height: 112px;
  margin: 0 auto 18px;
  border-radius: 50%;
  object-fit: cover;
}

.card-membro h3 {
  font-size: 1.05rem;
}

.cargo {
  display: block;
  margin-bottom: 12px;
  color: #1d4ed8;
  font-size: 0.85rem;
  font-weight: 700;
}

.card-membro p {
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.55;
}

</style>
