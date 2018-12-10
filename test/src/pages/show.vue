<template>
    <div class="showBox">
      <header-component></header-component>
      <div class="section">
        <menu-component id="leftBox" :menuinfo="menuinfo" :clicks="changeSrc"></menu-component>
        <con-component id="centerBox" :idxs="ind" :coninfo = "menuinfo"></con-component>
        <right-component id="rightBox" :parentmethods="changeSrc" :idxs="ind" :rightinfo="menuinfo"></right-component>
      </div>
    </div>
</template>

<script>
   import $ from "jquery"
    import HeaderComponent from "../components/HeaderComponent";
    import MenuComponent from "../components/MenuComponent";
    import ConComponent from "../components/ConComponent";
    import RightComponent from "../components/RightComponent";
    export default {
        name: "show",
      components: {RightComponent, ConComponent, MenuComponent, HeaderComponent},
      data(){
          return{
            ind:'0',
            menuinfo:[
              {title:"介绍",src:"a1",
                pointer:["import { Button } from 'vant';","Vue.use(Button);"],
                codeShow:[
                  "<van-button type='default'>默认按钮1</van-button>",
                  "<van-button type='primary'>主要按钮</van-button>",
                  "<van-button type=\"warning\">警告按钮</van-button>"
                ]
              },
            ]
          }
      },
      methods:{
          changeSrc(i){
            this.ind = i
            if(i>0) {
              $("li a").css({"color": ""})
              $("li a").eq(i).css({"color": "red"})
            }
          },
        test(){
          document.getElementById("rightBox").onclick = function () {
            alert(1)
          }
        },
        toCenter(){
            $("#rightBox")[0].addEventListener("mousedown",()=>{
              console.log("qiang")
              $("#rightBox")[0].addEventListener("mousemove",()=>{
                console.log("qiang")
              $("#rightBox").css({
                "position":"relative",
                "top":"70px",
                "left":"calc(- (50% - 50px))"
              })
              $("#centerBox").css({
                display:"none"
              })
              $("#leftBox").css({
                display:"none"
              })
              })
            })
        }

      },
      created(){
        fetch("/static/data.json").then(res=>{
          res.json().then(data=>{
            // console.info(data)
            this.menuinfo = data;
          })
        })
      },
      mounted(){
        // this.toCenter()
        this.test()
      }
    }

</script>

<style scoped>
  .showBox{
    height:100%;
    overflow: hidden;
    background-color: #f0f0f0;
  }
  .section{
    overflow: hidden;
    width: 100%;
    height: 100%;
    /*display: flex;*/
  }

</style>
