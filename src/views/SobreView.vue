<script setup>
import SecaoEquipe from '../components/SecaoEquipe.vue';
import teamImage from '../assets/team.jpg';
import personImage from '../assets/person.jpg';
import maosIcon from '../assets/icons/maos.png';
import segurancaIcon from '../assets/icons/seguranca.png';
import avaliacaoIcon from '../assets/icons/avaliacao.png';
import localizacaoIcon from '../assets/icons/localizacao.png';
import cartaoIcon from '../assets/icons/card.png';
import ouvidoriaIcon from '../assets/icons/ouvidoria.png';
</script>


<template>
  <div class="sobre">

    <!-- banner -->
    <section class="banner">
      <h1>Sobre a CiroLancers</h1>
      <p>Conectando profissionais e clientes em Joinville, Santa Catarina</p>
    </section>

    <!-- missão e visão -->
    <section class="bloco">
      <div class="texto-imagem">
        <div class="texto">
          <h2>Nossa Missão</h2>
          <p>
            Democratizar o acesso a serviços de qualidade e criar oportunidades para que profissionais talentosos possam prosperar, utilizando suas habilidades como fonte de renda ou atividade profissional complementar.
          </p>
        </div>
        <img :src="teamImage" alt="Profissionais trabalhando em Joinville" />
      </div>
      <div class="texto-imagem inverso">
        <div class="texto">
          <h2>Nossa Visão</h2>
          <p>
            Tornar a CiroLancers a principal plataforma de conexão entre profissionais e clientes de Joinville, reconhecida pela confiança, inovação e excelência.
          </p>
        </div>
        <img :src="personImage" alt="Cliente e prestador de serviço" />
      </div>
    </section>

    <!-- diferencial -->
    <section class="valores">
      <h2>O Que Nos Diferencia</h2>
      <p class="subtitulo">
        Diferente das plataformas tradicionais de trabalho sob demanda, valorizamos o profissional em cada etapa
      </p>
      <div class="cards">
        <div class="card">
          <img class="card-icone" :src="maosIcon" alt="" />
          <h3>Valorização do Profissional</h3>
          <p>Condições justas de trabalho, sem uberização ou disputa constante por tarefas.</p>
        </div>
        <div class="card">
          <img class="card-icone" :src="segurancaIcon" alt="" />
          <h3>Segurança</h3>
          <p>Pagamento protegido até a conclusão do serviço, conforme combinado entre as partes.</p>
        </div>
        <div class="card">
          <img class="card-icone" :src="avaliacaoIcon" alt="" />
          <h3>Transparência</h3>
          <p>Avaliações reais de clientes constroem o histórico e a reputação de cada profissional.</p>
        </div>
        <div class="card">
          <img class="card-icone" :src="localizacaoIcon" alt="" />
          <h3>Comunidade Local</h3>
          <p>Conectamos profissionais e clientes que fazem parte da mesma comunidade em Joinville.</p>
        </div>
      </div>
    </section>

    <!-- como funciona -->
    <section class="como-funciona">
      <h2>Como Funciona</h2>
      <p class="subtitulo claro">Dois perfis, uma mesma plataforma</p>
      <div class="colunas">
        <div class="coluna">
          <h3>Para Clientes</h3>
          <ol>
            <li>Cadastro gratuito na plataforma</li>
            <li>Publica uma demanda descrevendo o serviço e a categoria</li>
            <li>Recebe propostas de profissionais da área ou pesquisa diretamente por um perfil</li>
            <li>Compara profissionais pelo portfólio, experiência e avaliações</li>
            <li>Contrata com o pagamento protegido até a conclusão do serviço</li>
          </ol>
        </div>
        <div class="coluna">
          <h3>Para Prestadores de Serviço</h3>
          <ol>
            <li>Cadastro gratuito na plataforma</li>
            <li>Cria um perfil profissional com áreas de atuação e portfólio</li>
            <li>Cadastra os serviços oferecidos</li>
            <li>Visualiza demandas da sua categoria e envia propostas</li>
            <li>Recebe o pagamento com segurança após a conclusão do serviço</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- segurança e qualidade -->
    <section class="seguranca">
      <h2>Segurança e Qualidade</h2>
      <p class="subtitulo">Pilares que sustentam cada contratação</p>
      <div class="cards">
        <div class="card">
          <img class="card-icone" :src="segurancaIcon" alt="" />
          <h3>Perfis Avaliados</h3>
          <p>Antes de disponibilizar um profissional, avaliamos informações sobre atuação e qualificação.</p>
        </div>
        <div class="card">
          <img class="card-icone" :src="cartaoIcon" alt="" />
          <h3>Pagamento Protegido</h3>
          <p>O valor fica retido até que o serviço seja concluído conforme o combinado.</p>
        </div>
        <div class="card">
          <img class="card-icone" :src="avaliacaoIcon" alt="" />
          <h3>Avaliações</h3>
          <p>Cada serviço concluído gera uma avaliação que constrói o histórico do profissional.</p>
        </div>
        <div class="card">
          <img class="card-icone" :src="ouvidoriaIcon" alt="" />
          <h3>Suporte Dedicado</h3>
          <p>Nossa equipe auxilia em contratações e eventuais conflitos, com reembolso quando previsto.</p>
        </div>
      </div>
    </section>

    <!-- equipe -->
    <SecaoEquipe />

    <!-- joinville -->
    <section class="joinville">
      <h2>Uma Empresa Construída para Joinville</h2>
      <p>
        Ao concentrar a plataforma em uma única cidade, conseguimos aproximar profissionais e clientes que fazem parte da mesma comunidade, favorecendo relações mais próximas, confiáveis e acessíveis. A longo prazo, buscamos consolidar a CiroLancers como referência na conexão entre profissionais e clientes da cidade, promovendo oportunidades e movimentando a economia local.
      </p>
    </section>

    <!-- chamada final -->
    <section class="chamada-final">
      <h2>Faça Parte da CiroLancers</h2>
      <p>Junte-se a profissionais e clientes de Joinville que já confiam na CiroLancers</p>
      <div class="botoes">
        <RouterLink to="/login" class="btn-primario">Começar Agora</RouterLink>
      </div>
    </section>
  </div>
</template>


<style scoped>
.sobre {
  background: #f8fafc;
  color: #1f2937;
  font-family: inherit;
}

.sobre h1,
.sobre h2,
.sobre h3 {
  color: #111827;
  font-weight: 700;
}

.subtitulo {
  margin: 0 auto 40px;
  color: #64748b;
}

.subtitulo.claro {
  color: #dbeafe;
}

section {
  padding: 72px 8%;
}

.banner {
  position: relative;
  display: grid;
  min-height: 360px;
  place-items: center;
  padding: 96px 8%;
  overflow: hidden;
  background-color: #1d4ed8;
  background-image: url('../assets/team.jpg');
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: center;
}

.banner::before {
  position: absolute;
  inset: 0;
  background: rgb(15 53 120 / 72%);
  content: '';
}

.banner h1,
.banner p {
  position: relative;
  z-index: 1;
}

.banner h1 {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.1;
}

.banner p {
  margin: 18px auto 0;
  color: #dbeafe;
  font-size: 1.1rem;
  max-width: 620px;
}

.texto-imagem {
  display: flex;
  align-items: center;
  gap: 56px;
  max-width: 1080px;
  margin: 0 auto 72px;
}

.texto-imagem.inverso {
  margin-bottom: 0;
  flex-direction: row-reverse;
}

.texto-imagem .texto {
  flex: 1 1 0;
  max-width: 680px;
}

.texto-imagem h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
}

.secao-icone {
  width: 28px;
  height: 28px;
}

.texto-imagem p,
.joinville p {
  color: #64748b;
  line-height: 1.7;
}

.texto-imagem img {
  flex: 0 1 340px;
  width: min(34%, 340px);
  border: 1px solid #dbe4f0;
  border-radius: 14px;
}

.valores,
.seguranca {
  text-align: center;
}

.valores {
  background: #fff;
}

.seguranca {
  background: #eff6ff;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
}

.card {
  flex: 1 1 220px;
  padding: 28px 24px;
  background: #fff;
  border: 1px solid #dbe4f0;
  border-radius: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  border-color: #bfdbfe;
  box-shadow: 0 12px 24px rgb(30 64 175 / 10%);
  transform: translateY(-5px);
}

.card-icone {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto 12px;
}

.card h3 {
  font-size: 1.15rem;
}

.card p {
  color: #64748b;
  line-height: 1.6;
}

.como-funciona {
  background: #1d4ed8;
  color: #fff;
  text-align: center;
}

.como-funciona h2,
.como-funciona h3 {
  color: #fff;
}

.colunas {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.coluna {
  flex: 1 1 280px;
  padding: 28px;
  background: rgb(255 255 255 / 10%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 14px;
}

.coluna h3 {
  text-align: center;
}

.coluna ol {
  padding-left: 20px;
  color: #dbeafe;
  font-weight: 500;
  line-height: 1.8;
}

.joinville {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 88px;
  padding-bottom: 88px;
  text-align: center;
}

.joinville h2 {
  color: #1d4ed8;
  margin-bottom: 16px;
}

.chamada-final {
  text-align: center;
  background: #fff;
}

.chamada-final h2 {
  margin-bottom: 12px;
}

.chamada-final p {
  color: #64748b;
}

.botoes {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}

.btn-primario {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 9px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.btn-primario:hover {
  transform: translateY(-2px);
  color: #1d4ed8;
}

.btn-primario {
  background: #1d4ed8;
  color: white;
  border: none;
}

.btn-primario:hover {
  background: #1e3a8a;
  box-shadow: 0 8px 16px rgb(30 58 138 / 18%);
}


</style>

