<template>
    <div class="classBody">
      <div class="jia"><img src="/static/img/bracket.png" width="200"/></div>
      <div class="small_jia"><img src="/static/img/bracketsmall.png" width="200"></div>
      <!-- <div class="lun"><img src="img/fsw.png" width="650"/></div> -->
      <div class="word"><img src="/static/img/big-title.png"/></div>
      <div class="jiantou"><img src="/static/img/arrow.png"/></div>
      <div class="photo"><img src="/static/img/big-title.png"/></div>
      <div class="img_list">
        <img src="/static/img/boy.png" alt="">
        <img src="/static/img/dog.png" alt="">
        <img src="/static/img/girl.png" alt="">
        <img src="/static/img/girls.png" alt="">
        <img src="/static/img/hairboy.png" alt="">
        <img src="/static/img/mimi.png" alt="">
        <img src="/static/img/mudog.png" alt="">
        <img src="/static/img/shamegirl.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "MoTianLun"
    }
</script>

<style scoped>
  .classBody{
    overflow: hidden;
    background: url(/static/img/2.jpg);
    background-size: 100% 100%;
  }
  .jia{
    width: 200px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    margin-left: -100px;
    z-index: 10;
    transform:scale(1.2);
  }
  .lun{
    position: absolute;
    left: 50%;
    top: 0;
    width: 650px;
    margin-left: -325px;
    transform:scale(1.1);
    /*-webkit-animation:lun_ani 10s linear infinite;
      animation:lun_ani 10s linear infinite;*/
  }
  @keyframes lun_ani{
    0%{
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    100%{
      -webkit-transform:rotate(360deg);
      transform:rotate(360deg);
    }
  }
  .word{
    position: absolute;
    left: 50%;
    margin-left: -288px;
    top: 200px;
    z-index: 20;
  }
  .jiantou{
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -24px;
  }
  .photo{
    position: absolute;
    top:380px;
    left: 53%;
    margin-left: -206px;
    z-index: 30;
  }
  .small_jia{
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: 10px;
    transform:scale(0.6);
  }
  .img_list{
    width: 715px;
    height: 715px;
    position: relative;
    margin: 0 auto;
    -webkit-animation:lun_ani 10s linear infinite;
    animation:lun_ani 10s linear infinite;
    background:url(/static/img/fsw.png) center center no-repeat;
  }
  .img_list img:nth-child(1){
    position: absolute;
    left: 300px;
    top: 0;
  }
  .img_list img:nth-child(2){
    position: absolute;
    left: 300px;
    top: 675px;
  }
  .img_list img:nth-child(3){
    position: absolute;
    left: -20px;
    top: 272px;
    z-index: 40;
  }
  .img_list img:nth-child(4){
    position: absolute;
    left: 650px;
    top: 338px;
    z-index: 40;
  }
  .img_list img:nth-child(5){
    position: absolute;
    left: 60px;
    top: 51px;
    z-index: 40;
  }
  .img_list img:nth-child(6){
    position: absolute;
    left: 550px;
    top: 51px;
    z-index: 40;
  }
  .img_list img:nth-child(7){
    position: absolute;
    left: 0px;
    top: 507px;
    z-index: 40;
  }
  .img_list img:nth-child(8){
    position: absolute;
    left: 595px;
    top: 580px;
    z-index: 40;
  }

  .img_list img{
    transform-origin: 50% 0;
    -webkit-animation:img_ani 10s linear infinite;
    animation:img_ani 10s linear infinite;
  }
  @keyframes img_ani{
    0%{
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    100%{
      -webkit-transform:rotate(-360deg);
      transform:rotate(-360deg);
    }
  }
</style>
