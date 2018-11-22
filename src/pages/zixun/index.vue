<template>
    <div class="zixun_content">
      <!--头部-->
      <div class="head_Div">
        <p @click="showClick">
          <span>全部内容</span>
          <img src="../../assets/purse.png" alt="">
        </p>
        <h4 class="pageTitle">资讯</h4>
      </div>
      <div class="emptys"></div>
      <ul class="contentUl">
        <matter :url="toUrl"></matter>
      </ul>

      <!--内容展示-->
      <div class="content_down_box" :style="{top:istop?'48px':'-500px'}">
        <p @click="showClick">全部内容</p>
        <p>自律之路</p>
        <p>学习策略</p>
        <p>新闻资讯</p>
        <p>情感生活</p>
        <p>文化艺术</p>
        <p>学生天地</p>
      </div>
    </div>
</template>

<script>
  import matter from '../../components/public/matter'
    export default {
      data(){
        return {
          istop:false,
          toUrl:'/zixunDetail'
        }
      },
      components:{
        matter
      },
      mounted(){
        this.$store.state.pageIndex = 1;
      },
      methods:{
        showClick(){
          this.istop = !this.istop
        }
      }
    }
</script>

<style scoped lang="less">
.zixun_content {
  min-height: 100vh;
  background: #fff;
  .head_Div {
    position: fixed;
    height: 48px;
    left: 0;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    background: #f9f6f6;
    justify-content: center;
    z-index: 20;
    &>P {
      display: flex;
      font-size: 12px;
      position: absolute;
      left: 16px;
      &>img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
    .pageTitle {
      font-size: 18px;
    }
  }
  .contentUl {
    padding: 12px 15px;
  }
  .content_down_box {
    position: fixed;
    left: 0;
    width: 90px;
    border: 1px #ff9800 solid;
    z-index: 10;
    background: #fff;
    transition: all .5s;
    &>p {
      height: 36px;
      text-align: center;
      line-height: 36px;
      font-size: 12px;
      box-sizing: border-box;
      border-bottom: 1px #ff9800 solid;
    }
    &>p:last-child {
      border: none;
    }
  }
}
</style>
