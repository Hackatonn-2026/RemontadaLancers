
<script setup>
function iniciarDenuncia() {
  alert('Recebemos seu pedido! Nossa equipe entrará em contato.')
}
</script>

<template>
  <div class="suporte">

    <!-- banner -->
    <section class="banner">
      <h1>Como podemos ajudar?</h1>
      <p>Encontre respostas para suas dúvidas ou entre em contato conosco.</p>
    </section>

    <!-- contatos -->
    <section class="contatos">
      <div class="cards">

        <div class="card">
          <h3>E-mail</h3>
          <p>suporte@cirolancers.com.br</p>
        </div>

        <div class="card">
          <h3>Telefone</h3>
          <p>0800 777 1234</p>
        </div>

        <div class="card">
          <h3>Horário de Atendimento</h3>
          <p>Segunda a sexta, das 9h às 18h</p>
        </div>

      </div>
    </section>

    <!-- central de ajuda -->
    <section class="bloco">
      <h2 id="central-de-ajuda">Central de Ajuda</h2>

      <p>
        Encontre respostas rápidas para as dúvidas mais comuns sobre a plataforma.
      </p>

      <ul>
        <li>Como criar uma conta na plataforma</li>
        <li>Como contratar um freelancer</li>
        <li>Como me cadastrar como freelancer</li>
        <li>Como acompanhar o status de um serviço</li>
      </ul>
    </section>

    <!-- perguntas frequentes -->
    <section class="bloco">
      <h2 id="faq">Perguntas Frequentes</h2>

      <details class="pergunta">
        <summary class="titulo-pergunta">Quais são as formas de pagamento aceitas?</summary>

        <p>
          Aceitamos cartão de crédito, débito, Pix e boleto bancário
          para pagamento dos serviços contratados.
        </p>
      </details>

      <details class="pergunta">
        <summary class="titulo-pergunta">Como funciona o pagamento protegido?</summary>

        <p>
          O valor pago fica retido pela plataforma até a confirmação
          de que o serviço foi entregue, e só então é liberado ao freelancer.
        </p>
      </details>

      <details class="pergunta">
        <summary class="titulo-pergunta">Posso pedir reembolso?</summary>

        <p>
          Sim. Caso o serviço não seja entregue conforme combinado,
          você pode solicitar reembolso pelo e-mail de suporte em até 7 dias.
        </p>
      </details>

      <details class="pergunta">
        <summary class="titulo-pergunta">Como me cadastro como freelancer?</summary>

        <p>
          Clique em "Cadastrar" no topo da página, selecione a opção
          de freelancer e preencha seus dados e categorias de serviço.
        </p>
      </details>
    </section>

    <!-- termos de uso -->
    <section class="bloco">
      <h2 id="termos-de-uso">Termos de Uso</h2>

      <p class="data">Última atualização: agosto de 2026</p>

      <h3>1. Aceitação dos termos</h3>
      <p>
        Ao acessar ou usar a plataforma Ciro Lancers, você concorda em
        cumprir estes Termos de Uso.
      </p>

      <h3>2. Cadastro e conta</h3>
      <p>
        Para contratar ou oferecer serviços, é necessário criar uma conta
        com informações verdadeiras e atualizadas. Você é responsável
        pela sua senha e pelas atividades da sua conta.
      </p>

      <h3>3. Uso da plataforma</h3>
      <p>
        O Ciro Lancers conecta clientes a freelancers autônomos, mas não
        é parte dos contratos firmados entre eles.
      </p>

      <h3>4. Pagamentos</h3>
      <p>
        Os pagamentos passam por um sistema protegido, que retém o valor
        até a conclusão do serviço.
      </p>

      <h3>5. Conduta do usuário</h3>
      <p>
        É proibido usar a plataforma para fins ilícitos, fraudulentos ou
        que violem direitos de terceiros.
      </p>

      <h3>6. Alterações nos termos</h3>
      <p>
        Estes termos podem ser atualizados periodicamente. Recomendamos
        que você revise esta página.
      </p>
    </section>

    <!-- política de privacidade -->
    <section class="bloco">
      <h2 id="politica-de-privacidade">Política de Privacidade</h2>

      <p>
        Saiba como seus dados são tratados e protegidos ao utilizar a
        plataforma Ciro Lancers.
      </p>

      <h3>1. Dados coletados</h3>
      <p>
        Coletamos informações fornecidas no cadastro, como nome, e-mail
        e telefone, além de dados de uso da plataforma.
      </p>

      <h3>2. Uso dos dados</h3>
      <p>
        Utilizamos seus dados para conectar clientes e freelancers,
        melhorar a experiência e enviar comunicações sobre sua conta.
      </p>

      <h3>3. Compartilhamento</h3>
      <p>
        Não vendemos seus dados pessoais. Compartilhamos apenas as
        informações necessárias para executar os serviços.
      </p>

      <h3>4. Seus direitos</h3>
      <p>
        Você pode solicitar a atualização ou exclusão dos seus dados
        pelo e-mail suporte@cirolancers.com.br.
      </p>
    </section>

    <!-- denúncia -->
    <section class="denuncia">
      <h2>Denunciar um Problema</h2>

      <p>
        Identificou uma fraude ou comportamento inadequado?
        Informe nossa equipe.
      </p>

      <button
        class="btn-denuncia"
        type="button"
        @click="iniciarDenuncia"
      >
        Fazer Denúncia
      </button>
    </section>

  </div>
</template>

<style scoped>
.suporte {
  background: #f8fafc;
  color: #1f2937;
  font-family: inherit;
}

.suporte h1,
.suporte h2,
.suporte h3 {
  font-weight: 700;
}

.suporte h2 {
  color: #1d4ed8;
  font-size: 1.8rem;
  margin-bottom: 16px;
}

.suporte h3 {
  color: #111827;
  font-size: 1.1rem;
  margin-top: 24px;
  margin-bottom: 8px;
}

.suporte p {
  color: #64748b;
  line-height: 1.7;
}

section {
  padding: 72px 8%;
}

/* banner */
.banner {
  background: #1d4ed8;
  color: white;
  text-align: center;
  padding: 96px 8%;
}

.banner h1 {
  color: white;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
}

.banner p {
  color: #dbeafe;
  margin: 18px auto 0;
  max-width: 620px;
}

/* contatos */
.contatos {
  background: #fff;
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
  text-align: center;
}

.card h3 {
  margin-top: 0;
}

.card p {
  font-size: 14px;
}

/* textos */
.bloco {
  max-width: 1080px;
  margin: 0 auto;
}

.bloco ul {
  padding-left: 20px;
  color: #64748b;
  line-height: 1.8;
}

.data {
  font-size: 13px;
  color: #94a3b8;
}

/* perguntas frequentes */
.pergunta {
  border-bottom: 1px solid #dbe4f0;
  padding: 16px 0;
}

.titulo-pergunta {
  list-style: none;
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.titulo-pergunta::-webkit-details-marker {
  display: none;
}

.titulo-pergunta:hover {
  color: #1d4ed8;
}

.pergunta[open] .titulo-pergunta {
  color: #1d4ed8;
}

.pergunta p {
  font-size: 14px;
  margin-top: 12px;
}

/* denúncia */
.denuncia {
  max-width: 1080px;
  margin: 0 auto 60px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 14px;
}

.denuncia h2 {
  color: #b91c1c;
}

.denuncia p {
  color: #7f1d1d;
}

.btn-denuncia {
  padding: 12px 22px;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 9px;
  font-size: 15px;
  cursor: pointer;
}

.btn-denuncia:hover {
  background: #b91c1c;
}
</style>
