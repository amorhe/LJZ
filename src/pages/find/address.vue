<template>
    <div class="address_wrap">
      <headers :title="title"></headers>
      <div class="address_box">
        <div>
          <span>收货人</span>
          <input type="text" placeholder="请输入收货人姓名">
        </div>
        <div>
          <span>手机号码</span>
          <input type="text" placeholder="请输入收货人的手机号">
        </div>
        <div>
          <span>收货地址</span>
          <div class="chooseStep" @click="choose">
            <input type="text" placeholder="请选择地址" readonly="readonly" :value="addressAll">
            <i class="iconfont icon-next colorRed"></i>
          </div>
        </div>
        <div>
          <span>详细地址</span>
          <input type="text" placeholder="请输入街道、门牌等详细信息">
        </div>
        <button class="confirm_address">确认地址</button>
      </div>

      <!--选择地址插件-->
      <div class="divwrap" v-if="show">
        <v-distpicker type="mobile" @selected="selected"></v-distpicker>
      </div>
      <div class="backdrop" v-if="show"></div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
  import VDistpicker from 'v-distpicker'
    export default {
      data(){
        return {
          title:'收货地址',
          show:false,
          addressAll:''
        }
      },
      components:{
        headers,VDistpicker
      },
      methods:{
        choose(){
          this.show=!this.show
        },
        selected(res){
          this.addressAll = `${res.province.value} ${res.city.value} ${res.area.value}`;
          this.show = false;
        }
      }
    }
</script>

<style scoped>
  .divwrap{
    height: 200px;
    overflow-y: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
  }
  .divwrap>>>.distpicker-address-wrapper{
    color: #999;
  }
  .divwrap>>>.address-header{
    position: fixed;
    bottom: 200px;
    width: 100%;
  }
  .divwrap>>>.address-header ul li{
    flex-grow: 1;
    text-align: center;
    color: #000;
  }
  .divwrap>>>.address-header .active{
    color: #000;
    border-bottom:#ff9800 solid 2px
  }
  .divwrap>>>.address-container {
    height: 200px;
  }
  .divwrap>>>.address-container .active{
    color: #000;
  }
  .divwrap>>>.address-container ul li{
    height: 30px;
    line-height: 30px;
  }
  .backdrop {
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
</style>
<style scoped lang="less">
  .address_wrap {
    min-height: 100vh;
    background: #fff;
  }
  .address_box {
    padding: 12px 15px;
    &>div {
      display: flex;
      align-items: center;
      margin-bottom: 19px;
      &>span {
        display: inline-block;
        width: 60px;
        margin-right: 15px;
        text-align: left;
      }
      &>input {
        width: 260px;
        height: 30px;
        border: none;
        outline: none;
      }
      .chooseStep {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: space-between;
        &>input {
          height: 30px;
          border: none;
          outline: none;
          flex: 1;
        }
        .colorRed {
          color: #D0B0B0;
        }
      }
    }

    .confirm_address {
      width: 159px;
      height: 36px;
      background: #ff9800;
      -webkit-border-radius: 42px;
      -moz-border-radius: 42px;
      border-radius: 42px;
      font-size: 12px;
      margin-top: 20px;
    }
  }
</style>
