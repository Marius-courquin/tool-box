<template>
  <div class="white-blur" v-if="blockActions"></div>
  <div class="music" >
    <div class="bar" :style="{background: firstColor}"></div>
    <div class="bar" :style="{background: secondColor}"></div>
    <div class="bar" :style="{background: firstColor ? firstColor : '#151515'}"></div>
    <div class="bar" :style="{background: secondColor ? secondColor : 'blueviolet'}"></div>
    <div class="bar" :style="{background: firstColor ? firstColor : '#151515'}"></div>
    <div class="bar" :style="{background: secondColor ? secondColor : 'blueviolet'}"></div>
    <div class="bar" :style="{background: firstColor ? firstColor : '#151515'}"></div>
    <div class="bar" :style="{background: secondColor ? secondColor : 'blueviolet'}"></div>
    <div class="bar" :style="{background: firstColor ? firstColor : '#151515'}"></div>
    <div class="bar" :style="{background: secondColor ? secondColor : 'blueviolet'}"></div>
  </div>
</template>

// source : https://www.youtube.com/shorts/VG-EBJcm88M
<script setup lang="ts">
const props = defineProps<{
  firstColor?: string,
  secondColor?: string,
  blockActions?: boolean
}>()
</script>

<style scoped>

.music {
  width: 200px;
  height: 100px;
  position: fixed;
  top: 35%;
  left: calc(50% - 100px);
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}

.music .bar {
  width: 10px;
  border-radius: 8px;
  background: white;
  animation: movement 1.5s ease-in-out infinite;
}

@keyframes movement {
  0%, 100% {
    height: 5%;
  }
  50%{
    height: 80%;
  }
}

.music .bar:nth-child(1) {
  animation-delay: 1s;
}

.music .bar:nth-child(2) {
  animation-delay: 0.8s;
}

.music .bar:nth-child(3) {
  animation-delay: 0.6s;
}

.music .bar:nth-child(4) {
  animation-delay: 0.4s;
}

.music .bar:nth-child(5) {
  animation-delay: 0.2s;
}

.music .bar:nth-child(6) {
  animation-delay: 0.2s;
}

.music .bar:nth-child(7) {
  animation-delay: 0.4s;
}

.music .bar:nth-child(8) {
  animation-delay: 0.6s;
}

.music .bar:nth-child(9) {
  animation-delay: 0.8s;
}

.music .bar:nth-child(10) {
  animation-delay: 1s;
}

.white-blur {
  background: white;
  opacity: 0.2;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>