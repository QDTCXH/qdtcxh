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
    <a href="#"></a>
  </div>
</template>

<script>
    export default {
        name: "ZheShan"
    }
</script>

<style scoped>
  .box{
    width:50px;
    height: 200px;
    margin:50px auto;
    position: relative;
  }
  .box a{
    display: block;
    width: 50px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 1s;
    transform-origin: bottom center;
    box-shadow: -5px 5px 5px black;
  }
  .box a:nth-child(1){
    background: red;
  }
  .box a:nth-child(13){
    background: red;
    box-shadow: 5px 5px 5px black;
  }

  .box:hover a:nth-child(1){
    transform:rotate(-90deg);
  }
  .box:hover a:nth-child(13){
    transform:rotate(90deg);
  }

  .box a:nth-child(2){
    background: blue;
  }
  .box a:nth-child(12){
    background: blue;
  }

  .box:hover a:nth-child(2){
    transform:rotate(-75deg);
  }
  .box:hover a:nth-child(12){
    transform:rotate(75deg);
  }

  .box a:nth-child(3){
    background: yellow;
  }
  .box a:nth-child(11){
    background: yellow;
  }

  .box:hover a:nth-child(3){
    transform:rotate(-60deg);
  }
  .box:hover a:nth-child(11){
    transform:rotate(60deg);
  }

  .box a:nth-child(4){
    background: pink;
  }
  .box a:nth-child(10){
    background: pink;
  }

  .box:hover a:nth-child(4){
    transform:rotate(-45deg);
  }
  .box:hover a:nth-child(10){
    transform:rotate(45deg);
  }

  .box a:nth-child(5){
    background: purple;
  }
  .box a:nth-child(9){
    background: purple;
  }

  .box:hover a:nth-child(5){
    transform:rotate(-30deg);
  }
  .box:hover a:nth-child(9){
    transform:rotate(30deg);
  }

  .box a:nth-child(6){
    background: orange;
  }
  .box a:nth-child(8){
    background: orange;
  }

  .box:hover a:nth-child(6){
    transform:rotate(-15deg);
  }
  .box:hover a:nth-child(8){
    transform:rotate(15deg);
  }

  .box a:nth-child(7){
    background: black;
  }
</style>
