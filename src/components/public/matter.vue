<template>
    <div>
      <div class="matter_box" v-for="item in 2" @click="goDetail">
        <img class="matter_box_img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3579570380,3354587210&fm=27&gp=0.jpg" alt="">
        <div class="matter_div">
          <div class="line-yellow"></div>
          <h4>备战高考十大策略分析</h4>
        </div>

        <div class="matter_box_down">
          <p>学习策略</p>
          <div class="matter_count">
            <div>
              <i class="iconfont icon-yanjing"></i>
              <span>1455</span>
            </div>
            <div>
              <i class="iconfont icon-xin"></i>
              <span>21</span>
            </div>
            <i class="iconfont icon-iconfontfenxiang"></i>
          </div>
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
        url:String
      },
      methods:{
        goDetail(){
          this.$router.push(this.url)
        }
      }
    }
</script>

<style scoped lang="less">
  .matter_box {
    width: 330px;
    height: 215px;
    border: 1px #bbb solid;
    border-radius: 4px;
    background:  rgb(253,251,251);
    margin: 0 auto 12px;
    .matter_box_img {
      width: 100%;
      height: 142px;
    }
    .matter_div {
      display: flex;
      padding: 12px 11px;
      align-items: center;
      .line-yellow {
        width: 4px;
        height: 16px;
        background: #ffcc00;
        margin-right: 7px;
      }
    }
    .matter_box_down {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .matter_count {
        display: flex;
        align-items: center;
        &>div {
          display: flex;
          margin-right: 25px;
          i {
            margin-right: 3px;
          }
        }
      }
    }
  }
</style>
