<template>
    <div class="goods_box">
      <headers :title="title"></headers>
      <img class="goodsPic" src="http://img2.imgtn.bdimg.com/it/u=3699579472,3995360432&fm=26&gp=0.jpg" alt="">
      <div class="goodsDiv">
        <div class="goods_top">
          <div class="goods_top_up">
            <h4>替身符</h4>
            <p>白银</p>
          </div>
          <div class="goods_top_bottom">
            <div class="goodsPrice">
              <span>600灵钻</span>
              <p>￥15</p>
            </div>
            <p>库存12</p>
          </div>
        </div>

        <div class="goods_mid">
          <div class="goods_mid_address">
            <span>送至</span>
            <p @click="chooseAddress">
              <span>你还未填写收货地址，马上去填写</span>
              <i class="iconfont icon-next"></i>
            </p>
          </div>
          <div class="goods_mid_post">
            <span>运费</span>
            <span>包邮</span>
          </div>
        </div>

        <div class="goods_bottom">
          <p>商品详情</p>
        </div>
      </div>


      <div class="goods_position">
        <button>确认兑换</button>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
        data(){
          return {
            title:'商品详情',
          }
        },
        components:{
          headers
        },
        methods:{
          chooseAddress(){
            this.$router.push('/address')
          }
        }
    }
</script>

<style scoped lang="less">
  .goods_box {
    min-height: 100vh;
    .goodsPic {
      width: 100%;
      height: 216px;
      display: block;
    }
    .goodsDiv {
      background: #fff;
      .goods_top {
        display: flex;
        flex-direction: column;
        height: 67px;
        padding: 10px 15px;
        box-sizing: border-box;
        justify-content: space-between;
        border-bottom: 1px #eae3e3 solid;
        .goods_top_up {
          display: flex;
          align-items: center;
          &>p {
            width: 32px;
            height: 16px;
            line-height: 15px;
            background: #ff9800;
            color: rgba(63,81,181,1);
            font-size: 10px;
            text-align: center;
            margin-left: 25px;
          }
        }
        .goods_top_bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .goodsPrice {
            display: flex;
            align-items: center;
            &>span {
              color: #ff9800;
              margin-right: 23px;
            }
            &>p {
              color: #d0b0b0;
              text-decoration: line-through;
            }
          }
        }
      }
      .goods_mid {
        display: flex;
        flex-direction: column;
        height: 86px;
        padding: 16px 15px;
        box-sizing: border-box;
        justify-content: space-between;
        border-bottom: 1px #bbb solid;
        .goods_mid_address {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>p {
            display: flex;
            align-items: center;
            &>span {
              font-size: 12px;
              margin-right: 15px;
            }
          }
        }
        .goods_mid_post {
          display: flex;
          justify-content: space-between;
          margin-right: 30px;
        }
      }
      .goods_bottom {
        padding: 13px 15px;
        &>P {
          text-align: left;
        }
      }
    }
    .goods_position {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      &>button {
        width: 200px;
        height: 36px;
        -webkit-border-radius: 42px;
        -moz-border-radius: 42px;
        border-radius: 42px;
        background: #ff9800;
      }
    }
  }
</style>
