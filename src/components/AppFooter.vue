<template>
  <footer class="rodape">
    <div class="conteiner-rodape">
      <div class="marca-rodape">
        <div class="cabecalho-marca">
          <img src="" alt="logo" class="imagem-logo" />
          <span class="nome-marca">RemontadaLancers</span>
        </div>
        <p class="descricao-marca">
          Conectando profissionais talentosos com clientes que precisam de serviços de qualidade.
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
          <li>
            <router-link :to="{ path: '/suporte', hash: '#central-de-ajuda' }"
              >Central de Ajuda</router-link
            >
          </li>
          <li><router-link :to="{ path: '/suporte', hash: '#faq' }">FAQ</router-link></li>
          <li>
            <router-link :to="{ path: '/suporte', hash: '#termos-de-uso' }"
              >Termos de uso</router-link
            >
          </li>
          <li>
            <router-link :to="{ path: '/suporte', hash: '#politica-de-privacidade' }"
              >Política de Privacidade</router-link
            >
          </li>
        </ul>
      </div>

      <div class="coluna-rodape">
        <h3>Redes Sociais</h3>
        <div class="social-icons">
          <a href="#" aria-label="Instagram">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.2c0-.9.3-1.6 1.7-1.6H17V2.7c-.3 0-1.3-.2-2.6-.2-2.6 0-4.4 1.5-4.4 4.5v2.5H7.5V14h2.5v8h3.5z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" aria-label="X">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M18.9 2h3.2l-7 8 8.3 12h-6.5l-5.1-7.3L5.1 22H1.9l7.5-8.6L1.5 2h6.7l4.6 6.8L18.9 2zm-1.1 18h1.8L7.4 3.9H5.5L17.8 20z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1zM5.5 10h2.8v9H5.5v-9zm4.7 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.9-1.5 3 0 3.6 2 3.6 4.6V19h-2.8v-17.7c0-1.1-.1-2.5-1.6-2.5-1.6 0-1.8 1.2-1.8 2.5V19h-2.8v-9z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <hr class="divisor-rodape" />

    <p class="direitos-autorais">© 2026 CiroLancers Todos os direitos reservados.</p>
  </footer>
</template>

<script></script>

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
  flex-wrap: wrap;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #2563eb;
  border-radius: 50%;
  color: #ffffff;
}

.social-icon {
  width: 16px;
  height: 16px;
  display: block;
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
