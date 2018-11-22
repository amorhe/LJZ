<template>
    <div v-if="isTrue">
      <div class="backdrop">
        <div class="punch_wrap">
          <h4>打卡奖励</h4>
          <div class="punch_mid">
            <div>
              <img src="http://img2.imgtn.bdimg.com/it/u=3400722747,3311686833&fm=26&gp=0.jpg" alt="">
              <p>X5</p>
            </div>
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg" alt="">
            <div>
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2310514390,3580363630&fm=27&gp=0.jpg" alt="">
              <p>X1</p>
            </div>
          </div>
          <button class="receive" @click="receiveClick">领取</button>
          <p>学会让每一天的努力都看到成果</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            isTrue:this.isPunch,
            punchs:true
          }
        },
      watch:{
        isPunch(){
          this.isTrue = this.isPunch
        }
      },
      props:{
          isPunch:Boolean
      },
      methods:{
        receiveClick(){
          this.$emit('closePunch',this.punchs)
        }
      }
    }
</script>

<style scoped lang="less">
  .backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(242,242,242,.8);
    z-index: 500;
    .punch_wrap {
      position: fixed;
      left: 40px;
      top: 215px;
      width: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px 36px;
      height: 233px;
      box-sizing: border-box;
      border: 1px #bbb solid;
      border-radius: 12px;
      background: #fff;
      .punch_mid {
        width: 210px;
        margin: 13px 0 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>img {
          width: 24px;
          height: 24px;
        }
        &>div {
          &>img {
            width: 56px;
            height: 56px;
          }
        }
      }
      .receive {
        width: 169px;
        height: 38px;
        background: #ff9800;
        border-radius: 4px;
        border: 1px #bbb solid;
        font-size: 16px;
        font-family: Roboto;
      }
      .receive+p {
        font-size: 10px;
      }
    }
  }
</style>
