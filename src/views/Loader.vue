<template>
  <BackToHome/>
  <div class="loader-container">
    <input type="text" v-model="firstColor" placeholder="firstColor">
    <input type="text" v-model="secondColor" placeholder="secondColor">
  </div>
  <WaveAnimation :first-color="firstColor" :second-color="secondColor"/>
</template>

<script setup lang="ts">
import {ref} from "vue";

import WaveAnimation from "../components/loader/WaveAnimation.vue"
import BackToHome from "@/components/link/BackToHome.vue"

const firstColor = ref("");
const secondColor = ref("")
</script>
<style scoped>

.loader-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.loader-container input {

}

</style>