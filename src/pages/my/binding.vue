<template>
    <div class="bind_content">
      <headers :title="title"></headers>
      <form>
        <label for="input">
          <i class="iconfont icon-shouji01"></i>
        </label>
        <input id="input" type="text" placeholder="请输入手机号">
      </form>
      <div class="codeDiv">
        <input type="text" class="codeInput">
        <button class="getCode">获取验证码</button>
        <!--<button class="reGet">重新获取60</button>-->
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return{
          title:'绑定手机'
        }
      },
      components:{headers}
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
