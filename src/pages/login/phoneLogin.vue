<template>
  <div class="bind_content">
    <img class="logo" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3754339362,1578897383&fm=27&gp=0.jpg" alt="">
    <form>
      <label for="input">
        <i class="iconfont icon-shouji01"></i>
      </label>
      <input id="input" type="text" placeholder="请输入手机号" v-model="phoneNUm">
    </form>
    <div class="codeDiv">
      <input type="text" class="codeInput" v-model="codeNum">
      <button v-show="isCode==0" class="getCode" @click="getCodeClick">获取验证码</button>
      <button :disabled="time==''?false:'disabled'" v-show="isCode==1&&codeNum==''" class="reGet" @click="getCodeClick">重新获取{{time}}</button>
      <button v-show="codeNum.length>0" class="getCode" @click="login()">确认</button>
    </div>
  </div>
</template>

<script>
  import headers from '../../components/public/headers'
  import qs from 'qs'
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        title:'绑定手机',
        phoneNUm:'',
        isCode:0,
        time:3,
        codeNum:''
      }
    },
    components:{
      headers
    },
    methods:{
      getCodeClick(){
        if(!this.phoneNUm ==''){
          this.$ajax.post('common/getMsgCode', qs.stringify({
            phone:this.phoneNUm,
            type:'register'
          })).then((res) => {
            if(res.data.code==0){
              this.isCode = 1;
              this.timers((s) => {
                if(s<10){
                  s = `0${s}`
                }
                if(s<=0){
                  s= '';
                }
                this.time = s;
              })
            }
          }).catch((res) => {
              console.log(res,'请求失败')
            })
        }else {
          Toast('请输入手机号码')
        }
      },
      login(){
        this.$ajax.post('user/getLogin',qs.stringify({
          phone:this.phoneNUm,
          code:this.codeNum
        })).then((res) => {
          if(res.data.code==0){
            
          }
        }).catch((res) => {
          console.log(res,'请求失败')
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .bind_content {
    min-height: 100vh;
    background: #fff;
    width: 100vw;
    .logo {
      width: 90px;
      height: 90px;
      margin: 60px 0 40px;
    }
    form {
      margin: 0 0 40px;
      position: relative;
      i {
        font-size: 18px;
        position: absolute;
        left: 40px;
        top: 15px;
        color: #ff9800;
      }
      input {
        width: 300px;
        height: 48px;
        outline: none;
        border: 1px #ff9800 solid;
        border-radius: 32px;
        padding-left: 30px;
        box-sizing: border-box;
      }
    }
    .codeDiv {
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      .codeInput {
        width: 195px;
        height: 36px;
        border: none;
        border-bottom: 1px #bbb solid;
        outline: none;
      }
      &>button {
        width: 80px;
        height: 36px;
        -webkit-border-radius: 32px;
        -moz-border-radius: 32px;
        border-radius: 32px;
        font-size: 12px;
        border: 1px #bbb solid;
      }
      .getCode {
        background: #ff9800;
        color: #fff;
      }
      .reGet {
        background: #D0C3C3;
      }
    }

  }
</style>
