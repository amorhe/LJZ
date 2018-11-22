<template>
    <div>
      <!--<div class="head_discuss">-->
        <!--<i class="iconfont icon-fanhui" @click="back()"></i>-->
        <!--<p>邀请组队</p>-->
        <!--<div class="empty"></div>-->
      <!--</div>-->
      <headers :title="title"></headers>
      <!--列表-->
      <div class="shareMenu">
        <div>
          <i class="iconfont icon-qq qq"></i>
          <p>QQ好友</p>
        </div>
        <div>
          <i class="iconfont icon-qunfengqqkongjian qqzone"></i>
          <p>QQ空间</p>
        </div>
        <div>
          <i class="iconfont icon-weixin-copy wechat"></i>
          <p>微信好友</p>
        </div>
        <div>
          <i class="iconfont icon-pengyouquan wechatzone"></i>
          <p>朋友圈</p>
        </div>
      </div>

      <div class="showWrap">
        <div class="showWrap_top">
         <div>
           <p :class="tabNum==0?'active':''" @click="tabClick(0)">关注</p>
         </div>
         <div>
           <p :class="tabNum==1?'active':''" @click="tabClick(1)">粉丝</p>
         </div>
        </div>
        
        <div class="showWrap_list">
          <div>
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=714278041,394130067&fm=27&gp=0.jpg" alt="">
            <div>
              <p>清心钰</p>
              <p class="grade">青铜LV1</p>
            </div>
          </div>
          <p class="care">已关注</p>
        </div>
        <div class="showWrap_list">
          <div>
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3102390729,849681462&fm=27&gp=0.jpg" alt="">
            <div>
              <p>火花是好还</p>
              <p class="grade">白银LV1</p>
            </div>
          </div>
          <p class="care">已关注</p>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
       data(){
         return {
            tabNum:0,
            title:'邀请组队'
         }
       },
      components:{
         headers
      },
      methods:{
        back(){
          this.$router.go(-1)
        },
        tabClick(index){
          this.tabNum = index;
        }
      }
    }
</script>

<style scoped lang="less">
  /*.head_discuss {*/
    /*height: 48px;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: space-between;*/
    /*padding: 0 14px;*/
    /*background: rgb(248, 248, 248);*/
    /*i {*/
      /*font-size: 20px;*/
    /*}*/
    /*p {*/
      /*font-size: 18px;*/
    /*}*/
  /*}*/
  .shareMenu {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    height: 118px;
    align-items: center;
    background: #fff;
    font-size: 12px;
    border-bottom: 15px #f2f2f2 solid;
    &>div {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        font-size: 44px;
        margin-bottom: 8px;
      }
      .qq {
        color: #30a5dd;
      }
      .qqzone {
        color: #efb336;
      }
      .wechat {
        color: #2acf1d;
      }
      .wechatzone {
        color: #9aca25;
      }
    }
  }
  .showWrap {
    background: #fafafa;
    .showWrap_top {
      height: 48px;
      border-bottom: 1px #eae3e3 solid;
      align-items: center;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      &>div {
        width: 50%;
        line-height: 48px;
        display: flex;
        justify-content: center;
        &>p {
          width: 48px;
        }
        .active {
          color: #ff9800;
          border-bottom: 3px #ff9800 solid;
        }
      }
    }
    .showWrap_list {
      padding: 0 20px;
      height: 59px;
      border-bottom: 1px #f2f2f2 solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>p {
        width: 58px;
        height: 28px;
        border-radius: 32px;
        color: #d0b0b0;
        border: 1px #d0b0b0 solid;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
      }
      &>div {
        display: flex;
        &>img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 8px;
        }
        &>div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .grade {
            color: #ff9800;
            font-size: 12px;
          }
        }
      }
    }

  }
</style>
