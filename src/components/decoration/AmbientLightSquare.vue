<template>
  <div class="cube-container">
    <div class="cube">
      <div class="top"></div>
      <div>
        <span style="--i:0"></span>
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
      </div>
    </div>
  </div>
</template>
// source : https://www.youtube.com/watch?v=nOdDtnHWaDo
<script>
</script>

<style scoped>
  .cube-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /*min-height: 100vh;*/
    width: fit-content;
    padding: 120px;
    border: 5px solid #151515;
    border-radius: 10px ;
    /*background: #050505;*/
  }

  .cube {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 4s linear infinite;
  }
  
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, blueviolet);
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  }

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #151515;
    transform: rotateX(90deg) translateZ(150px);
  }

  .top::before {
     content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: blueviolet;
    transform: translateZ(-350px);
    filter: blur(20px);
  }
</style>