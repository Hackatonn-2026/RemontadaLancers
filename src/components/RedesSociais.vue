<template>
  <div v-if="instagram || facebook || linkedin || whatsapp" class="redes-sociais">
    <a v-if="instagram" :href="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg viewBox="0 0 640 640" aria-hidden="true"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
    </a>

    <a v-if="facebook" :href="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg viewBox="0 0 320 512" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91V127.2c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
    </a>

    <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 0 1 53.79 0c29.7 0 53.79 24.1 53.79 53.8s-24.09 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
    </a>

    <a v-if="whatsapp" :href="whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <svg class="icone-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 8.2c.2 3 2.3 5.1 5.3 5.3l1.1-1.1 1.5.7c.4.2.5.7.2 1.1l-.7.9c-.3.3-.7.5-1.1.4-4.6-.6-7.8-3.8-8.4-8.4-.1-.4.1-.8.4-1.1l.9-.7c.4-.3.9-.2 1.1.2l.7 1.5z" />
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  instagram: String,
  facebook: String,
  linkedin: String,
  whatsapp: String,
})
</script>

<style scoped>
.redes-sociais {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.redes-sociais a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: #2563eb;
}

.redes-sociais a:hover {
  opacity: 0.7;
}

.redes-sociais svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.redes-sociais .icone-whatsapp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}
</style>
