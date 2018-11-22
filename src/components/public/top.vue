<template>
  <div>
    <div class="empty"></div>
    <div class="header">
      <div>
        <!--<img class="left_icon" src="../images/icon1.png" alt="">-->
        <p class="iconfont icon-xinfeng8"></p>
      </div>
      <ul class="slide_ul">
        <li @click="tabClick(0)" :class="tabIndex==0?'borderBottom':''">计划</li>
        <li @click="tabClick(1)" :class="tabIndex==1?'borderBottom':''">动态</li>
        <li @click="tabClick(2)" :class="tabIndex==2?'borderBottom':''">邀约</li>
      </ul>
      <div @click="goMessage()">
        <!--<img class="right_icon" src="" alt="">-->
        <p class="iconfont icon-xinxi"></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {

          }
        },
        props:{
          tabIndex:Number
        },
        methods:{
          tabClick(index) {
            switch (index) {
              case 0:
                this.$router.push({path:'../plan'})
                    break;
              case 1:
                this.$router.push({path:'../dynamic'})
                break;
              case 2:
                this.$router.push({path:'../invite'})
                break;
            }
          },
          //去消息中心
          goMessage(){
            this.$router.push({path:'../message'})
          }
        }
    }
</script>

<style scoped>
  .empty {
    height: 68px;
  }
  .header {
    width: 360px;
    height: 68px;
    padding: 20px 15px 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    position: fixed;
    left: 0;
    top:0;
    z-index: 100;
    background: #fff;
  }
  .header>div>p {
    font-size: 24px;
  }
  .left_icon {
    width: .24rem;
    height: .24rem;
  }
  .right_icon {
    width: 26px;
    height: 26px;
  }
  .slide_ul {
    width: 80%;
    display: flex;
    justify-content: space-around;
    height: 40px;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }
  .slide_ul li {
    width: 48px;
    height: 100%;
    line-height: 40px;
  }
  .borderBottom {
    border-bottom: 3px  rgb(255,152,0) solid;
    box-sizing: border-box;
  }
</style>
