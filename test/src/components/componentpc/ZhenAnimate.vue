<template>
  <div class="box">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
  </div>
</template>

<script>
  export default {
    name: "ZhenAnimate"
  }
</script>

<style scoped>
  .box{
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    /*transform:rotateX(-20deg) rotateY(20deg);*/
    animation:lft 10s infinite linear;
  }
  .box:hover{
    animation:lft 10s infinite linear paused;
  }

  @keyframes lft{
    0%{
      transform:rotateX(0deg) rotateY(0deg);
    }
    100%{
      transform:rotateX(360deg) rotateY(360deg);
    }
  }
  .box a{
    display: block;
    border:1px solid black;
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    opacity: .4;
    transition: all 1s;
  }
  .box a:nth-child(-n+6){
    width: 200px;
    height: 200px;
    background: pink;
  }
  .box a:nth-child(n+7){
    width: 100px;
    height: 100px;
    background: blue;
    position: absolute;
    left:50px;
    top:50px;
  }
  .box a:nth-child(1){
    transform:translateZ(100px);
  }
  .box a:nth-child(2){
    transform:translateZ(-100px);
  }
  .box a:nth-child(3){
    transform:rotateY(-90deg) translateZ(100px);
  }
  .box a:nth-child(4){
    transform:rotateY(90deg) translateZ(100px);
  }
  .box a:nth-child(5){
    transform:rotateX(90deg) translateZ(100px);
  }
  .box a:nth-child(6){
    transform:rotateX(-90deg) translateZ(100px);
  }


  .box:hover a:nth-child(1){
    transform:translateZ(150px);
  }
  .box:hover a:nth-child(2){
    transform:translateZ(-150px);
  }
  .box:hover a:nth-child(3){
    transform:rotateY(-90deg) translateZ(150px);
  }
  .box:hover a:nth-child(4){
    transform:rotateY(90deg) translateZ(150px);
  }
  .box:hover a:nth-child(5){
    transform:rotateX(90deg) translateZ(150px);
  }
  .box:hover a:nth-child(6){
    transform:rotateX(-90deg) translateZ(150px);
  }

  .box a:nth-child(7){
    transform:translateZ(50px);
  }
  .box a:nth-child(8){
    transform:translateZ(-50px);
  }
  .box a:nth-child(9){
    transform:rotateY(-90deg) translateZ(50px);
  }
  .box a:nth-child(10){
    transform:rotateY(90deg) translateZ(50px);
  }
  .box a:nth-child(11){
    transform:rotateX(90deg) translateZ(50px);
  }
  .box a:nth-child(12){
    transform:rotateX(-90deg) translateZ(50px);
  }
</style>
