<template>
    <div class="bind_content">
      <headers :title="title"></headers>
      <form>
        <label for="input">
          <i class="iconfont icon-shouji01"></i>
        </label>
        <input id="input" type="text" placeholder="请输入手机号" v-model="phone">
      </form>
      <div class="codeDiv">
        <input type="text" class="codeInput" v-model="code">
        <button v-show="isCode==0" class="getCode" @click="getCodeClick">获取验证码</button>
        <button :disabled="time==''?false:'disabled'" v-show="isCode==1&&code==''" class="reGet" @click="getCodeClick">重新获取{{time}}</button>
        <button v-show="code.length>0&&isCode==1" class="getCode" @click="binding(phone,0,code)">确认</button>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
  import {binding} from "../../http/user";
  import {BASE_URL} from "../../http/BASE_URL";
  import qs from 'qs'

  export default {
      data(){
        return{
          BASE_URL,
          title:'绑定手机',
          phone:'',
          isCode:0,
          time:60,
          code:''
        }
      },
      components:{headers},
      methods:{
        getCodeClick(){
          let numberPattern = /^[0-9]{11}$/;
          if(this.phone.length>=11 || numberPattern.test(this.phone)){
            this.$ajax.post(BASE_URL + 'common/getMsgCode', qs.stringify({
              phone:this.phone,
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
            this.$dialog.notify({
              mes: '手机号格式不正确',
              timeout: 3000,
            });
            return
          }
        },
        async binding(account,type,code){
          let data = await binding(account,type,code);
          this.$dialog.notify({
            mes: data.message,
            timeout: 2000,
          });
        }
      }
    }
</script>

<style scoped lang="less">
  .bind_content {
    min-height: 100vh;
    background: #fff;
    width: 100vw;
    form {
      margin: 122px 0 40px;
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
