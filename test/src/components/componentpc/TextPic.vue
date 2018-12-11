<template>
  <div class="box">
    <h1>Web Design</h1>
    <h3>Rasty Names</h3>
    <img class="imgs" src="/static/img/image01.jpg"/>
    <a href="#" class="look">Take a Look</a>
  </div>
</template>

<script>
    export default {
        name: "TextPic"
    }
</script>

<style scoped>
  .box{
    width: 200px;
    height: 200px;
    border:5px solid #ac0;
    margin:50px auto;
    text-align: center;
    overflow: hidden;
  }
  .imgs{
    width: 100px;
    height: 100px;
    display: block;
    margin:0 auto;
    transform:scale(2);
    transition: all .5s;
  }
  .look{
    display: block;
    width: 100px;
    height: 30px;
    background: pink;
    color: black;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    text-decoration: none;
    margin:10px auto 0;
    transform:translateY(80px);
    transition: all .5s;
  }
  .box h1{
    font-size: 18px;
    margin-top: 8px;
    transform:translateY(-80px);
    transition: all .5s;
  }
  .box h3{
    font-size: 14px;
    font-weight: 100;
    transform:translateY(-80px);
    transition: all .5s;
  }
  .box:hover .imgs{
    transform:scale(1);
  }
  .box:hover h1{
    transform:translateY(0px);
  }
  .box:hover h3{
    transform:translateY(0px);
  }
  .box:hover .look{
    transform:translateY(0px);
  }
</style>
