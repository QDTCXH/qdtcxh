<template>
  <div class="box">
    <img class="imgs" src="/static/img/pic1.jpg"/>
    <div class="bgDiv">Car shop</div>
    <div class="borderDiv"></div>
  </div>
</template>
<script>
    export default {
        name: "CarZhuan"
    }
</script>

<style scoped>
  .box{
    width: 220px;
    height: 220px;
    margin:50px auto;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
  .imgs{
    width: 220px;
    height: 220px;
    border-radius: 50%;
    transition: all 1s;
  }
  .bgDiv{
    width: 220px;
    height: 220px;
    background: rgba(0,0,0,.4);
    text-align: center;
    line-height: 220px;
    color: white;
    font-size: 30px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 1s;
  }
  .borderDiv{
    width: 200px;
    height: 200px;
    border:10px solid blue;
    border-radius: 50%;
    border-top-color: yellow;
    border-left-color: yellow;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 1s;
  }
  .box:hover .bgDiv{
    opacity: 1;
  }
  .box:hover .imgs{
    transform:scale(1.2);
  }
  .box:hover .borderDiv{
    transform:rotate(180deg);
  }
</style>
