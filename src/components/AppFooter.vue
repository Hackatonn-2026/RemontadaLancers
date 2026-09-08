<template>
  <footer class="rodape">
    <div class="conteiner-rodape">
      <div class="marca-rodape">
        <div class="cabecalho-marca">
          <img src="" alt="logo" class="imagem-logo" />
          <span class="nome-marca">RemontadaLancers</span>
        </div>
        <p class="descricao-marca">
          Conectando profissionais talentosos com clientes que precisam de
          serviços de qualidade.
        </p>
      </div>

      <div class="coluna-rodape">
        <h3>Empresa</h3>
        <ul>
          <li><RouterLink to="/sobre">Sobre Nós</RouterLink></li>
          <li><RouterLink to="/como-funciona">Como funciona</RouterLink></li>
          <li><RouterLink to="/categorias">Categorias</RouterLink></li>
        </ul>
      </div>

      <div class="coluna-rodape">
        <h3>Suporte</h3>
        <ul>
          <li><router-link :to="{ path: '/suporte', hash: '#central-de-ajuda' }">Central de Ajuda</router-link></li>
          <li><router-link :to="{ path: '/suporte', hash: '#faq' }">FAQ</router-link></li>
          <li><router-link :to="{ path: '/suporte', hash: '#termos-de-uso' }">Termos de uso</router-link></li>
        <li><router-link :to="{ path: '/suporte', hash: '#politica-de-privacidade' }">Política de Privacidade</router-link></li>
  </ul>
</div>

      <div class="coluna-rodape">
        <h3>Redes Sociais</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <hr class="divisor-rodape" />

    <p class="direitos-autorais">© 2026 CiroLancers Todos os direitos reservados.</p>
  </footer>
</template>

<script>

</script>

<style scoped>

.rodape {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #153885;
  color: #ffffff;
  padding: 40px 60px 30px;
}

.conteiner-rodape {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px;
  margin-left: 10px;
  margin-bottom: 20px;
}

.marca-rodape {
  max-width: 250px;
}

.cabecalho-marca {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.imagem-logo {
  width: 40px;
  height: 40px;
  background: #2563eb;
  border-radius: 50%;
}

.nome-marca {
  font-size: 18px;
  font-weight: bold;
}

.descricao-marca {
  font-size: 14px;
  color: #d1d5db;
  line-height: 1.4;
}

.coluna-rodape h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.coluna-rodape ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.coluna-rodape li {
  margin-bottom: 8px;
}

.coluna-rodape a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 15px;
}

.coluna-rodape a:hover {
  color: #ffffff;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #2563eb;
  border-radius: 50%;
  color: #ffffff;
  font-size: 14px;
}

.divisor-rodape {
  border: none;
  border-top: 1px solid #2563eb;
  margin: 15px 0;
}

.direitos-autorais {
  text-align: center;
  font-size: 14px;
  color: #d1d5db;
  margin: 0;
}
</style>
