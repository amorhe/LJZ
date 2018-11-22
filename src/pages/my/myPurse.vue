<template>
    <div class="purse_content">
      <headers :title="title"></headers>
      <div class="purse_wrap">
        <i class="iconfont icon-qian iconMoney"></i>
        <p class="purseMoney">20元</p>
        <button class="wechatTixian" @click="withdraw">微信提现</button>
      </div>
      <router-link class="purse_bottom" to="/balance">
        <span>余额明细</span>
        <i class="iconfont icon-next fontWeight"></i>
      </router-link>
      <p>温馨提示：每日仅可发起一次提现申请，1-2个工作日到账，若出现提现问题，请联系QQ客服。</p>

      <div v-if="isShow">
        <div class="backdrop">
          <div class="withdraw_box">
            <i class="iconfont icon-cuowu" @click="closeAlert"></i>
            <p class="with_title">提现申请</p>
            <div class="with_module">
              <span>￥</span>
              <input type="text" placeholder="请输入提现金额">
            </div>
            <button class="confirm">确认</button>
            <p>PS：若提现失败请联系QQ客服</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'我的钱包',
          isShow:false
        }
      },
      components:{
        headers
      },
      methods:{
        withdraw(){
          this.isShow = true
        },
        closeAlert(){
          this.isShow = false
        }
      }
    }
</script>

<style scoped lang="less">
  .purse_content {
    background: #f2f2f2;
    min-height: 100vh;
    width: 100vw;
    .purse_wrap {
      height: 342px;
      background: #fff;
      border-bottom: 16px #f2f2f2 solid;
      padding: 60px 27px;
      box-sizing: border-box;
      .iconMoney {
        font-size: 75px;
        color: #efb336;
      }
      .purseMoney {
        font-size: 22px;
        font-weight: bold;
        font-family: 'SourceHanSansSC-regular';
      }
      .wechatTixian {
        width: 306px;
        height: 48px;
        color: #fff;
        background: #ff9800;
        margin-top: 52px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
    }
    .purse_bottom {
      height: 54px;
      display: flex;
      background: #fff;
      padding: 0 28px;
      justify-content: space-between;
      align-items: center;
      i {
        color: #D0B0B0;
        font-size: 24px;
      }
    }
    &>p {
      padding: 19px 27px;
      text-align: left;
    }
  }
  .backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(242,242,242,.8);
    z-index: 500;
    .withdraw_box {
      width: 280px;
      height: 252px;
      background: #fff;
      -webkit-border-radius: 12px;
      -moz-border-radius: 12px;
      border-radius: 12px;
      border: 1px #bbb solid;
      margin: 50% auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      &>i {
        position: absolute;
        font-size: 24px;
        right: 10px;
        top: 5px;
      }
      .with_title {
        font-size: 18px;
        font-weight: bold;
        margin: 25px 0 42px;
      }
      .with_module {
        width: 215px;
        border-bottom: 1px #bbb solid;
        padding: 0 5px;
        display: flex;
        align-items: center;
        margin-bottom: 35px;
        &>span {
          color: #efb336;
          font-size: 21px;
          margin-right: 5px;
        }
        &>input {
          border: none;
          outline: none;
          height: 21px;
          line-height: 21px;
        }
        &>input::-webkit-input-placeholder{
          color: #d0c2c2;
        }
      }
      .confirm {
        width: 169px;
        height: 44px;
        background: #ff9800;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Roboto';
        margin-bottom: 6px;
        &+p {
          font-size: 12px;
        }
      }
    }
  }
</style>
