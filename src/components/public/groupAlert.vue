<template>
    <div v-if="isTrue">
      <div class="backdrop">
        <div class="showBox">
          <div class="showBox_top">
            <i class="iconfont icon-cuowu close" @click="closeBox"></i>
          </div>
          <h4>{{title}}</h4>
          <div class="showBox_content">{{content}}</div>
          <button @click="closeBox">我已了解</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          isTrue:this.alertBool
        }
      },
      props:{
        alertBool:Boolean,
        title:String,
        content:String
      },
      watch:{
        alertBool(){
          this.isTrue = this.alertBool
        }
      },
      methods:{
        closeBox(){
          this.$emit('closeBox')
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
    .showBox {
      width: 280px;
      border-radius: 12px;
      background: #fff;
      border: 1px rgb(187,187,187) solid;
      margin: 50% auto;
      .showBox_top {
        text-align: right;
        padding: 7px;
        .close {
          font-size: 24px;
        }
      }
      .showBox_content{
        margin: 16px 26px 21px;
        line-height: 21px;
      }
      button {
        background: #ff9800;
        width: 170px;
        height: 44px;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 25px;
      }
    }
  }
</style>
