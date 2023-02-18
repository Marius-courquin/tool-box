<template>
  <BackToHome/>
  <div class="loader-container">
    <input type="text" v-model="firstColor" placeholder="firstColor">
    <input type="text" v-model="secondColor" placeholder="secondColor">
  </div>
  <WaveAnimation :first-color="firstColor" :second-color="secondColor" :block-actions="false"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {Ref} from "vue";

import WaveAnimation from "../components/loader/WaveAnimation.vue"
import BackToHome from "@/components/link/BackToHome.vue"

const firstColor: Ref<string> = ref("#151515");
const secondColor = ref("blueviolet")
</script>
<style scoped>

.loader-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

</style>