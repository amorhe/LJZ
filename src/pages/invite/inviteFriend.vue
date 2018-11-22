<template>
    <div class="invite_box">
      <headers :title="title"></headers>
      <img src="../../assets/invite_up.jpg" alt="">
      <button @click="inviteClick">发起邀请</button>
      <img src="../../assets/invite_down.jpg" alt="">
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'邀请好友'
        }
      },
      components:{
        headers
      },
      methods:{
        inviteClick(){
          this.$router.push('/friend')
        }
      }
    }
</script>

<style scoped lang="less">
  .invite_box {
    width: 100vw;
    background: #fff;
    min-height: 100vh;
    &>img {
      width: 100%;
    }
    &>button {
      width: 200px;
      height: 46px;
      background: #f0a822;
      color: #fff;
      -webkit-border-radius: 46px;
      -moz-border-radius: 46px;
      border-radius: 46px;
    }
  }
</style>
