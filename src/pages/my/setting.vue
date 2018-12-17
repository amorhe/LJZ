<template>
    <div class="setBox">
      <headers :title="title"></headers>
      <ul class="setUl">
        <li @click="binding">手机绑定</li>
        <li>QQ绑定</li>
        <li>微信绑定</li>
        <li>清除缓存</li>
        <li>版本更新</li>
        <li>关于我们</li>
      </ul>
      <button class="outLogin" @click="outL">退出登录</button>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
  import {doLoginOut} from "../../http/login"
  import qs from 'qs'

  export default {
      data(){
        return {
          title:'设置'
        }
      },
      components:{
        headers
      },
      methods:{
        binding(){
          this.$router.push('/binding')
        },
        async outLogins(token){
          let res = await doLoginOut(qs.stringify(token));
          if(res.code==0){
            localStorage.removeItem('token')
            this.$router.push('/loginWays');
          }
        },
        outL(){
          this.outLogins(localStorage.token)
        }
      }
    }
</script>

<style scoped lang="less">
  .setBox {
    min-height: 100vh;
    width: 100vw;
    background: #fff;
    .setUl {
      li {
        height: 50px;
        border-bottom: 1px #f4f1f1 solid;
        display: flex;
        align-items: center;
        padding-left: 20px;
        font-size: 16px;
      }
    }
    .outLogin {
      position: fixed;
      left: 92px;
      bottom: 40px;
      width: 176px;
      height: 40px;
      background: #ff9800;
      border-radius: 8px;
      border: 1px #ff4081 solid;
    }
  }
</style>
