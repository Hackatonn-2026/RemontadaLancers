<template>
    <div class="criar">
        <h1>
            Criar conta
        </h1>
        <p>
            Junte-se à maior plataforma de freelancers do Brasil
        </p>
    </div>
    <div class="tipo-usuario">
        <button type="button" :class="{ ativo: tipoUsuario === 'cliente' }" @click="tipoUsuario = 'cliente'">
            Quero Contratar
        </button>

        <button type="button" :class="{ ativo: tipoUsuario === 'freelancer' }" @click="tipoUsuario = 'freelancer'">
            Sou Profissional
        </button>
    </div>
    <div class="dados">
        <form class="cadastro-form" @submit.prevent="CriaConta">
            <Inputs v-model="Nome" label="Nome" type="text" placeholder="Seu nome completo" />
            <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />
            <Inputs v-model="senha" label="Senha" type="password" placeholder="Digite sua senha" />
            <Inputs v-model="telefone" label="Telefone" type="tel" placeholder="Seu telefone" />

            <div v-if="tipoUsuario === 'freelancer'" class="dados-profissional">
                <h4>Informações Profissionais</h4>
                <Inputs v-model="profissao" label="Profissão/Especialidade" type="text"
                    placeholder="Ex: Dev Full Stack" />
                <div class="campo">
                    <label for="anos">Anos de Experiência</label>

                    <select id="anos" v-model="AnosDeExperiencia">
                        <option value="">Selecione seus anos de experiência</option>
                        <option value="0-1">0-1 anos</option>
                        <option value="1-3">1-3 anos</option>
                        <option value="3-5">3-5 anos</option>
                        <option value="5+">5+ anos</option>
                    </select>
                </div>
                <Inputs v-model="descricao" label="Descrição Profissional" type="textarea"
                    placeholder="Fale sobre sua experiência" />
                    <div class="categorias">
    <label>Categorias de Atuação</label>

    <div class="lista-categorias">
        <label>
            <input type="checkbox" value="marketing" v-model="categorias">
            Marketing
        </label>

        <label>
            <input type="checkbox" value="design" v-model="categorias">
            Design
        </label>

        <label>
            <input type="checkbox" value="edicao" v-model="categorias">
            Edição
        </label>

        <label>
            <input type="checkbox" value="consultoria" v-model="categorias">
            Consultoria
        </label>

        <label>
            <input type="checkbox" value="desenvolvimento" v-model="categorias">
            Desenvolvimento
        </label>

        <label>
            <input type="checkbox" value="traducao" v-model="categorias">
            Tradução
        </label>
    </div>
</div>
            </div>

            <button type="submit" class="botao-criar">
                Criar conta
            </button>
            <p class="tem-conta"> Ja tem uma conta?</p>
            <RouterLink to="/login" class="botao-login">
                Faça login
            </RouterLink>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Inputs from '../components/Inputs.vue'
const tipoUsuario = ref('cliente')
const nome = ref('')
const email = ref('')
const senha = ref('')
const telefone = ref('')
const profissao = ref('')
const AnosDeExperiencia = ref('')
const descricao = ref('')
const categorias = ref([])
function CriaConta() {
    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value,
        tipoUsuario: tipoUsuario.value,
        profissao: profissao.value,
        anosExperiencia: AnosDeExperiencia.value,
        descricao: descricao.value,
        categorias: categorias.value
    }

    localStorage.setItem('usuario', JSON.stringify(usuario))

    console.log(usuario)
}
</script>

<style scoped>
h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p {
    font-size: 16px;
    color: #6b7280;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tipo-usuario {
    display: flex;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 8px;
    gap: 4px;
    margin-bottom: 20px;
}
.tipo-usuario button {
    flex: 1;
    border: none;
    background: transparent;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
}
.tipo-usuario button.ativo {
    background: #2563eb;
    color: white;
}
.cadastro-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    background: #f5f7fb;
}
.cadastro-card {
    width: 100%;
    max-width: 710px;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 28px 20px;
}
.cadastro-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 34px;
    padding: 2rem;
    margin: 2rem;
    border: 1px solid #d1d5db;
    border-radius: 15px;
}
.dados-profissional {
    grid-column: 1 / -1;
    display: grid;
    gap: 20px;
}
.dados-profissional h4 {
    margin: 0;
    font-size: 16px;
    color: #111827;
}
.campo {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.campo label {
    font-size: 14px;
    color: #111827;
}
.campo select {
    width: 100%;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: white;
    font-size: 14px;
    color: #374151;
    cursor: pointer;
    box-sizing: border-box;
}
.categorias {
    margin-top: 0;
}
.categorias > label {
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    color: #111827;
}
.lista-categorias {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 40px;
}
.lista-categorias label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #374151;
}
.lista-categorias input {
    margin: 0;
    width: 15px;
    height: 15px;
    cursor: pointer;
}
.botao-criar {
    grid-column: 1 / -1;
    width: 100%;
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: white;
    padding: 12px 18px;
    font-size: 18px;
    cursor: pointer;
}
.botao-criar:hover {
    background: #1d4ed8;
}
.tem-conta {
    margin: 0;
    color: #111827;
    font-size: 14px;
    display: inline;
    grid-column: 1;
    text-align: right;
}
.botao-login {
    margin: 0;
    color: #2563eb;
    font-size: 14px;
    text-decoration: none;
    grid-column: 2;
    align-self: center;
}
.botao-login:hover {
    text-decoration: underline;
}
</style>