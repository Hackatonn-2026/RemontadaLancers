<template>
     <div class="input-container">
    <label>{{label}}</label>
    <input v-model="model" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script setup>
defineProps({
    label: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text'
    }
})
const model = defineModel()
</script>

<style scoped>
.input-container{
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 16px;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}
</style>