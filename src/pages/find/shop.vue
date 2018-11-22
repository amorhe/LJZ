<template>
    <div>
      <headers :title="title" :record="isrecord"></headers>

      <div class="message_swipe">
        <i class="iconfont icon-xiaoxi message_icon"></i>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in messageList" :key="index">{{item.text}}</swiper-slide>
        </swiper>
      </div>
      <div class="shopBox">
        <div class="shop_class">
          <p :class="pp==1?'pActive':''" @click="pActive(1)">虚拟电子</p>
          <p :class="pp==2?'pActive':''" @click="pActive(2)">实物商品</p>
        </div>
        <div class="shopList">
          <div v-for="item in shopArr" @click="goDetail()">
            <img :src="item.imgSrc" alt="">
            <h5>{{item.shopName}}</h5>
            <div>
              <p class="shopprice">{{item.price}}灵钻</p>
              <p class="rank">{{item.rank}}</p>
            </div>
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
            title:'灵钻商城',
            isShow:false,
            isrecord:true,
            pp:1,
            messageList:[
              {text:'诸神的黄金兑换了海尔电热锅'},
              {text:'微乎其微兑换了替身符'},
              {text:'问问群二兑换了牛肉面'},
            ],
            shopArr:[
              {
                imgSrc:'http://img5.imgtn.bdimg.com/it/u=2148127656,3022764141&fm=11&gp=0.jpg',
                shopName:'替身符',
                price:200,
                rank:'白银'
              },
              {
                imgSrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1181062145,1954327019&fm=27&gp=0.jpg',
                shopName:'辣子鸡',
                price:500,
                rank:'黄金'
              },
              {
                imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922740179,1840515713&fm=27&gp=0.jpg',
                shopName:'酸菜鱼',
                price:1500,
                rank:'钻石'
              },
              {
                imgSrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=124155087,2314196803&fm=27&gp=0.jpg',
                shopName:'饺子',
                price:600,
                rank:'青铜'
              }
            ],
            swiperOption: {
              // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              // notNextTick: true,
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: true,
              direction : 'vertical',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              loop:true,
              observeParents:true,
              // if you need use plugins in the swiper, you can config in here like this
              // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
              debugger: true,
              // swiper callbacks
              // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
              onTransitionStart(swiper){
                console.log(swiper)
              },
              // more Swiper configs and callbacks...
              // ...
            },
          }
        },
        components:{
          headers
        },
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
        mounted(){
          // console.log('this is current swiper instance object', this.swiper)
          this.swiper.autoplay.start();
        },
        methods:{
          pActive(index){
            this.pp = index
          },
          goDetail(){
            this.$router.push('/goodsDetail')
          }
        }
    }
</script>

<style scoped lang="less">
  .message_swipe {
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    .message_icon {
      color: #ff9800;
      font-size: 16px;
      margin-right: 8px;
    }
    .swiper-container {
      height: 18px;
      overflow: hidden;
      text-align: left;
    }
  }
  .shopBox {
    background: #fff;
    min-height: 90vh;
    .shop_class {
      height: 26px;
      padding: 6px 0 2px;
      display: flex;
      justify-content: space-between;
      &>p {
        width: 50%;
        box-sizing: border-box;
        text-align: center;
        line-height: 26px;
      }
      &>p:nth-child(1){
        border-right: 1px #bbb solid;
      }
      .pActive {
        color: #ff9800;
      }
    }
    .shopList {
      padding: 18px 12px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      &>div {
        width: 160px;
        height: 160px;
        border: 1px #bbb solid;
        border-radius: 8px;
        padding: 18px 15px 13px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 16px;
        &>img {
          width: 130px;
          height: 75px;
          margin-bottom: 10px;
        }
        &>h5 {
          text-align: left;
        }
        &>div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .shopprice {
            color: #ff9800;
          }
          .rank {
            width: 32px;
            height: 16px;
            line-height: 15px;
            text-align: center;
            background: #ff9800;
            color: #3f51b5;
            border: 1px #bbb solid;
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
