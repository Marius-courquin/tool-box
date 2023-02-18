<template>
  <header>
    <h1 class="title">TOOL BOX</h1>
  </header>
  <ul>
    <li>
      <RouterLink to="/decoration">Decoration</RouterLink>
    </li>
    <li>
      <RouterLink to="/loader">Loader</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .title {
    border-radius: 5px;
    background: blueviolet;
    padding: 1rem;
    width: fit-content;
    color: white;
  }
</style>