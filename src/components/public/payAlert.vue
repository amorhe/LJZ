<template>
    <div>
      <mt-popup
        v-model="isTrue"
        position="bottom">
        <div class="pk_box">
          <div>
            <div></div>
            <p>诚意金</p>
            <i class="iconfont icon-cuowu" @click="closeAlert"></i>
          </div>
          <div class="pk_payWay">
            <div>
              <div class="pk_left">
                <img src="../../assets/purse.png" alt="">
                <span>余额：20元</span>
              </div>
              <div class="circle_div" @click="choose(0)" :class="num==0?'circle_active':''">
                <p v-if="num==0"></p>
              </div>
            </div>
            <div>
              <div class="pk_left">
                <i class="iconfont icon-zhifubaozhifu color2"></i>
                <span>支付宝支付</span>
              </div>
              <div class="circle_div" @click="choose(1)" :class="num==1?'circle_active':''">
                <p v-if="num==1"></p>
              </div>
            </div>
            <div>
              <div class="pk_left">
                <i class="iconfont icon-weixinzhifu color3"></i>
                <span>微信支付</span>
              </div>
              <div class="circle_div" @click="choose(2)" :class="num==2?'circle_active':''">
                <p v-if="num==2"></p>
              </div>
            </div>
          </div>
          <div class="pk_bottom">
            <div>
              <p>
                <span>总计：</span>
                <span>￥</span>
                <span>18</span>
              </p>
              <p>完成计划返还</p>
            </div>
            <button>确认支付</button>
          </div>
        </div>
      </mt-popup>
    </div>
</template>

<script>
    export default {
       data(){
         return {
           num:1,
           isTrue:this.isShow
         }
       },
       props:{
         isShow:Boolean
       },
        watch:{
          isShow(){
            this.isTrue = this.isShow
          }
        },
       methods:{
         //选择支付方式
         choose(num){
           this.num = num
         },
         closeAlert(){
           this.$emit('closeAlert')
         }
       },
      mounted(){

      }
    }
</script>

<style scoped lang="less">
  .pk_box {
    width: 100vw;
    background: #fff;
    &>div:nth-child(1) {
      padding: 0 14px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px #f1f3f7 solid;
      font-size: 18px;
      i {
        font-size: 24px;
      }
    }
    .pk_payWay {
      margin: 22px;
      &>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
        .pk_left {
          display: flex;
          align-items: center;
          i {
            font-size: 28px;
            margin-right: 12px;
          }
          img {
            width: 28px;
            height: 28px;
            margin-right: 12px;
          }
          .color2 {
            color: rgb(18,150,219);
          }
          .color3 {
            color: rgb(61,203,29);
          }
        }
        .circle_div {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px #bbb solid;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ff9800;
          }
        }
        .circle_active {
          border: 1px #ff9800 solid;
        }
      }
    }
    .pk_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;
      &>button {
        width: 106px;
        height: 48px;
        background: #ff9800;
        color: #fff;
        font-size: 16px;
        outline: none;
        border: none;
      }
      &>div {
        display: flex;
        &>p {
          width: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &>p:nth-child(1){
          border-right: 3px #2851f2 solid;
          span:nth-child(1){
            font-size: 16px;
            font-weight: bold;
          }
          span:nth-child(2){
            font-size: 18px;
            color: rgb(234,154,33);
          }
          span:nth-child(3){
            color: #ff9800;
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
