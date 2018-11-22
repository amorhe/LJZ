<template>
    <div class="answer_content">
      <headers :title="title"></headers>
      <ul class="view_div_list">
        <li v-for="item in 2">
          <div>
            <div class="view_div_user">
              <img src="http://img2.imgtn.bdimg.com/it/u=764856423,3994964277&fm=26&gp=0.jpg" alt="">
              <div>
                <p>火花是好还</p>
                <p class="colorY fontSm">青铜LV1</p>
              </div>
            </div>
            <p class="sixin">
              <i class="iconfont icon-icon-p_xinfeng"></i>
              <span>私信</span>
            </p>
          </div>
          <div class="view_div_content">
            <div class="view_div_text">只因这夜色太迷人然而在哪里跌倒就在哪里爬起来,
              只因这夜色太迷人，只因这夜色太迷人,只因这夜色太迷人,我没能忍住尘世的诱惑，
              然而在哪里跌倒就在哪里爬起来，所以我还会回来的，谢谢哪里跌倒就在哪里爬起来，所以我还会回来的，谢谢所有鼓励我的人。</div>
            <div class="view_div_content_wrap">
              <span>昨天 23:24</span>
              <div>
                <span>回复</span>
                <div>
                  <i class="iconfont icon-xin"></i>
                  <span>155</span>
                </div>
              </div>
            </div>
          </div>
          <div class="view_div_bottom">
            <div>
              <div>
                <div>
                  <img src="http://img2.imgtn.bdimg.com/it/u=764856423,3994964277&fm=26&gp=0.jpg" alt="">
                  <p>火花是好还是坏</p>
                </div>
                <p class="colorY">青铜LV5</p>
              </div>
              <p>今天背诵单词成果35个,态度决定一切,消极对待的注重基础知识当你看到这里的时候。</p>
            </div>
            <p class="moreP">
              <span>更多23条回复</span>
              <i class="iconfont icon-next"></i>
            </p>
          </div>
        </li>
      </ul>

      <div class="emptys"></div>
      <div class="answer_bottom">
        <div class="answer_left" @click="answerPublic">公开咨询</div>
        <div class="answer_right">
          <p>私密倾诉</p>
          <p>向小昭悄悄地吐露</p>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'答题解忧',
        }
      },
      components:{
        headers
      },
      methods:{
        answerPublic(){
          this.$router.push({path:'/punch',query:{text:'',place:'请写下你的心情状态或你的疑问'}})
        }
      }
    }
</script>

<style scoped lang="less">
  .answer_content {
    background: #fff;
    min-height: 100vh;
    .view_div_list {
      li {
        width: 100%;
        padding: 16px 10px 24px 15px;
        box-sizing: border-box;
        border-bottom: 1px #eae3e3 solid;

        &>div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          .view_div_user {
            display: flex;
            div {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: flex-start;
            }
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 7px;
            }
          }
          .view_div_card {
            width: 40px;
            height: 40px;
            border: 1px #bbb solid;
            border-radius: 6px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            &>p:nth-child(1){
              border-bottom: 1px #bbb solid;
            }
          }
          .sixin {
            align-self: center;
            margin-right: 10px;
          }
        }
        .view_div_content {
          margin-left: 36px;
          &>div:first-child {
            display: flex;
            align-items: flex-end;
            margin: 10px 0 6px;
            background: #f4f1f1;
            line-height: 20px;
            &>h4 {
              margin: 0 4px;
            }
            .colorY {
              font-weight: bolder;
              margin-left: 6px;
            }
          }
          .view_div_text {
            text-align: left;
          }
          &>p {
            float: right;
          }
          .view_div_content_wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &>div {
              width: 100px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              i {
                font-size: 20px;
              }
              &>div {
                display: flex;
                align-items: center;
                i {
                  margin-right: 7px;
                }
              }
            }
          }
        }
        .view_div_bottom {
          margin: 20px 0 0 25px;
          width: 309px;
          background: #f2f2f2;
          padding: 12px 10px;
          font-size: 12px;
          box-sizing: border-box;
          &>div>div {
            display: flex;
            justify-content: space-between;
            &>div {
              display: flex;
              align-items: center;
            }
            img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              margin-right: 7px;
            }
          }
          &>div>p:nth-child(2) {
            margin: 8px 0;
            text-align: left;
            padding-left: 30px;
            line-height: 20px;
          }
          &>div>p:nth-child(3){
            text-align: right;
          }
          .moreP {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }
      }
    }
    .answer_bottom {
      position: fixed;
      height: 46px;
      width: 100vw;
      left: 0;
      bottom: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      &>div {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        border: 1px #bbb solid;
      }
      .answer_left {
        background: #ff9800;
        align-items: center;
      }
      .answer_right {
        background: #EA7473;
        flex-direction: column;
        padding-top: 12px;
        &>p:nth-child(1) {
          color: #fff;
        }
        &>p:nth-child(2){
          font-size: 10px;
        }
      }
    }
  }
</style>
