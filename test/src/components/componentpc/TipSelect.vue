<template>
  <div class="box">
    <div class="menu" id="news">
      <a href="#news">新闻频道<span></span></a>
      <ol>
        <li>两会即将在北京召开</li>
        <li>两会即将在北京召开</li>
        <li>两会即将在北京召开</li>
        <li>两会即将在北京召开</li>
      </ol>
    </div>
    <div class="menu" id="sport">
      <a href="#sport">体育频道<span></span></a>
      <ol>
        <li>愚人节即将到来，要小心哦！！！</li>
        <li>愚人节即将到来，要小心哦！！！</li>
        <li>愚人节即将到来，要小心哦！！！</li>
        <li>愚人节即将到来，要小心哦！！！</li>
      </ol>
    </div>
    <div class="menu" id="play">
      <a href="#play">娱乐频道<span></span></a>
      <ol>
        <li>北京市在两会期间将进行交通管制</li>
        <li>北京市在两会期间将进行交通管制</li>
        <li>北京市在两会期间将进行交通管制</li>
        <li>北京市在两会期间将进行交通管制</li>
      </ol>
    </div>
    <div class="menu" id="music">
      <a href="#music">音乐频道<span></span></a>
      <ol>
        <li>北京市启动空气重污染橙色预警</li>
        <li>北京市启动空气重污染橙色预警</li>
        <li>北京市启动空气重污染橙色预警</li>
        <li>北京市启动空气重污染橙色预警</li>
      </ol>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TipSelect"
    }
</script>

<style scoped>
  .box{
    width: 300px;
    border:2px solid black;
  }
  .box a{
    display: block;
    width: 300px;
    height: 30px;
    border-bottom: 1px solid gray;
    background: skyblue;
    text-decoration: none;
    font-size: 14px;
    text-indent: 20px;
    line-height: 30px;
    color: black;
  }
  .box ol{
    font-size: 14px;
    line-height: 30px;
    background: #eee;
    /*display: none;*/
    height: 0;
    overflow: hidden;
    transition: all 1s;
  }
  .box ol li{
    list-style-position: inside;
  }

  .box .menu:target ol{
    /*display: block;*/
    height:120px;
  }
  .box .menu:target span{
    border-top-color: transparent;
    border-bottom-color: black;
    margin-top: 5px;
  }
  .box span{
    float: right;
    width: 0;
    height: 0;
    border:8px solid transparent;
    border-top-color: black;
    margin-top: 10px;
    margin-right: 7px;
  }
</style>
