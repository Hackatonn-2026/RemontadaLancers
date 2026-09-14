<template>
    <main class="login-page">
        <section class="login-card">
            <div class="login-header">
                <h1>Entrar na sua conta</h1>
                <p>Bem-vindo de volta!</p>
            </div>

            <form class="login-form" @submit.prevent="entrar">
                <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />

                <Inputs v-model="senha" label="Senha" type="password" placeholder="Digite sua senha" />

                <button type="submit" class="botao-entrar">Entrar</button>
                <div class="cadastro-link">
                <p>Não tem uma conta?</p>
                <RouterLink to="/cadastro" class="botao-cadastro">
                    Cadastre-se grátis
                </RouterLink>
</div>
            </form>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Inputs from '../components/Inputs.vue'

const email = ref('')
const senha = ref('')
function entrar() {
    console.log('E-mail:', email.value)
    console.log('Senha:', senha.value)
}
</script>

<style scoped>
.login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    background: #f5f7fb;
}

.login-card {
    width: min(100%, 420px);
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 12px 28px rgb(15 23 42 / 12%);
    padding: 32px 28px;
}

.login-header {
    margin-bottom: 24px;
}

.login-header h1 {
    margin: 0 0 8px;
    font-size: 2rem;
    color: #111827;
}

.login-header p {
    margin: 0;
    font-size: 1rem;
    color: #4b5563;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.botao-entrar {
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: #fff;
    padding: 12px 18px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}
.cadastro-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
}
</style>