<template>
    <div class="loginContent">
      <div>
        <p>请选择登录或注册方式</p>
        <div>
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weixin-copy"></i>
          <img src="../../assets/phone_login.png" alt="" @click="phoneLogin">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      methods:{
        phoneLogin(){
          this.$router.push('/phoneLogin')
        }
      }
    }
</script>

<style scoped lang="less">
 .loginContent {
   min-height: 100vh;
   background: #fff;
   width: 100vw;
   display: flex;
   align-items: center;
   &>div {
     width: 100%;
     padding: 0 45px;
     &>p {
       margin-bottom: 40px;
       text-align: left;
     }
     &>div {
       display: flex;
       justify-content: space-between;
       &>i:nth-child(1){
         font-size: 56px;
         color: #30a5dd;
       }
       &>i:nth-child(2){
         font-size: 56px;
         color: #2acf1d;
       }
     }
   }
 }
</style>
