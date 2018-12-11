<template>
    <div class="register_backimgs">
      <div style="padding-top: 280px">
      <div class="register_top">
          <img src="../../static/image/logo-login@2x.png"/>
        <form class="form_top">
         <div class="div1">
           <input v-model="username" id="username" ref="username" type="text" placeholder="Username or Email"/>
         </div>
          <div class="div1">
            <input v-model="userpass" id="userpass" ref="userpass" type="password" placeholder="Password"/>
          </div>
          <div class="allcheck">
            <div>
              <input type="checkbox"/><span>Remember me</span>
            </div>
            <div class="forget"><a hred="javascript:;">Forgot password?</a></div>
          </div>
        </form>
        <div class="login">
          <div id="logins" @click="lod" >login</div>
          <div id="register" @click="reg" >register</div>
        </div>
        <div class="register_bottom">
          Don't have an account yet?<a href="javascript:;" class="aa">Sign up now</a>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
          return{
            username:'',
            userpass:''
          }
        },
        methods:{
          lod(){
            let xhr=new XMLHttpRequest();
            xhr.open('get','http://127.0.0.1:3000/a/login?username='+this.username,true);
            xhr.onreadystatechange=()=>{
              if(xhr.readyState==4&&xhr.status==200){
                let str=xhr.responseText;
                if(str=='1'){
                  alert('登陆成功')
                  window.location.href = "http://localhost:8080/#/home"
                  window.localStorage.username = this.username
                }else{
                  alert('用户名或密码错误！')
                }
              }
            };
            xhr.send();
          },
          reg(){
            let xhr=new XMLHttpRequest();
            xhr.open("get","http://127.0.0.1:3000/a/register?username="+this.username,true);
            xhr.onreadystatechange=function(){
              if(xhr.readyState==4&&xhr.status==200){
                let str=xhr.responseText;
                // alert(str)
                if(str=='1'){
                  alert('注册成功,请登录')
                }else{
                  alert('程序猿已下班！')
                }
              }
            };
            xhr.send();
          }
      },
      mounted(){

      }
    }
</script>

<style scoped>
.register_backimgs{
  width:100%;
  height:990px;
  background: url(../../static/image/a.png);
  background-size:100% 100%;

}
  .register_top{
    width:500px;
    height:500px;
    background: #fff;
    margin:0 auto;
    border-radius: 50px;



  }
.register_top img{
  margin: 0 auto;
  display: block;
  padding-top:30px;
  width:100px;
}
  .form_top {
    margin: 0 auto;
    width:400px;
    margin-top: 30px;
  }
 .div1{
   margin-bottom: 10px;
   width:400px;
   border-bottom: 1px solid #ccc;
   height:40px;
 }

  .div1 input{
     border:none;
     outline: none;
   }
.allcheck{
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  margin-top: 30px;
}
  .login{
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .login div{
    width:170px;
    height:50px;
    line-height: 50px;
    text-align: center;
    color:#fff;
    border-radius: 10px;

  }
  .login div:first-child{
    background: #335397;
    margin-right: 10px;
  }
.login div:last-child{
  background: #007aff;
}
  .register_bottom{
    margin-top: 30px;
    text-align: center;
  }
  .forget,.aa{
    color:#007aff;
  }
</style>
