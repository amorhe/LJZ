<template>
    <div>
      <div class="findhead">
        <h4>发现</h4>
      </div>
      <div class="swiperBox">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in imgList" :key="index">
            <img :src="item" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--发现分类-->
      <div class="findList">
        <router-link class="findli" to="/shop">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=658942913,2860438964&fm=111&gp=0.jpg" alt="">
          <div>
            <p>灵钻商店</p>
            <p>不定期发放福利，以橙钻兑换请假条、书籍、文具、充值卡等物品。</p>
          </div>
        </router-link>
        <div class="findli">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4127978443,3621625360&fm=111&gp=0.jpg" alt="">
          <div>
            <p>任务中心</p>
            <p>学习、生活、情感烦恼，请在此处吐露出来吧，我们一定给予回应。</p>
          </div>
        </div>
        <div class="findli">
          <img src="http://img0.imgtn.bdimg.com/it/u=2577811927,228535961&fm=26&gp=0.jpg" alt="">
          <div>
            <p>邀请好友</p>
            <p>成功引荐仙苗入门，使壮大仙派，与好友各获得灵钻奖励。</p>
          </div>
        </div>
        <div class="findli">
          <img src="http://img5.imgtn.bdimg.com/it/u=2995602998,708988329&fm=11&gp=0.jpg" alt="">
          <div>
            <p>图书馆</p>
            <p>散文、小说、诗歌、情感励志、作文素材，各类秘籍。</p>
          </div>
        </div>
        <router-link class="findli" to="/answer">
          <img src="http://img2.imgtn.bdimg.com/it/u=1185178324,2877667798&fm=11&gp=0.jpg" alt="">
          <div>
            <p>解忧反馈</p>
            <p>学习、生活、情感烦恼，请在此处吐露出来吧，我们一定给予回应。</p>
          </div>
        </router-link>

      </div>
    </div>
</template>

<script>

    export default {
        data(){
          return {
            imgList:['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3360690558,3623061169&fm=111&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2599346206,437424084&fm=27&gp=0.jpg']
          }
        },
        components:{

        },
        mounted(){
          this.$store.state.pageIndex = 3;
        }
    }
</script>

<style scoped lang="less">
  .findhead {
    padding-top: 20px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 48px;
  }
  .swiperBox {
    height: 116px;
    margin-top: 48px;
    img {
      width: 100%;
      height: 100%;
    }
    .mint-swipe-indicators {
      left: 0;
      right: 10px;
    }
  }
  .findList {
    padding: 0 10px 30px;
    .findli {
      margin-top: 18px;
      display: flex;
      align-items: center;
      &>img {
        width: 75px;
        height: 65px;
        border-radius: 6px;
        border: 1px #bbb solid;
        margin-right: 12px;
      }
      &>div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 65px;
        line-height: 20px;
        &>p {
          text-align: left;
        }
        &>p:nth-child(1){
          font-size: 16px;
        }
        &>p:nth-child(2){
          font-size: 13px;
        }
      }
    }
  }
</style>
