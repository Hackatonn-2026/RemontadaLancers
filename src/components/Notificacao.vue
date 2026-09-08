<template>
    <div class="notificacao">
        {{ mensagem }}
    <button @click="fechar">x</button>
     </div>
</template>
<script setup>
defineProps({
    mensagem: String
})     
const emit = defineEmits(['fechar'])
function fechar() {
    emit('fechar');
}     
</script>

<style scoped>
/*tem que fazer a estilização da notificação, como cor de fundo, borda, padding, etc.*/
</style>