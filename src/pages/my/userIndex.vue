<template>
    <div class="user_content">
      <headers :backUrl="backUrl" :title="title" :sixin="isSx"></headers>
      <div class="userTopDiv">
        <div class="userHead">
          <div>
            <img class="avatar" src="http://img5.imgtn.bdimg.com/it/u=2830805145,74531996&fm=26&gp=0.jpg" alt="">
            <div>
              <p>
                <span>漂流一生</span>
                <img class="sexImg" src="../../assets/nan.png" alt="">
              </p>
              <span>青铜LV1</span>
            </div>
          </div>
          <p v-if="!isSx">编辑</p>
          <p v-else>关注</p>
        </div>
        <p>个性签名：该同鞋比较洒脱，暂未留下签名</p>
        <p class="userSchool">
          <span>高三文科·新昌中学</span>
          <span>目标学校：南开大学</span>
        </p>
      </div>
      <div class="userMidDiv">
        <div>
          <p>54</p>
          <span>动态</span>
        </div>
        <div>
          <p>20</p>
          <span>关注</span>
        </div>
        <div>
          <p>16</p>
          <span>粉丝</span>
        </div>
      </div>
      <div class="userBottomDiv">
        <div class="user_lf">
          <div>
            <p>
              <span class="circleSpan bg1"></span>
              <span>已进行计划次数</span>
            </p>
            <span>7</span>
          </div>
          <div>
            <p>
              <span class="circleSpan bg2"></span>
              <span>失败的计划次数</span>
            </p>
            <span>2</span>
          </div>
          <div>
            <p>
              <span class="circleSpan bg3"></span>
              <span>组队的计划次数</span>
            </p>
            <span>2</span>
          </div>
          <div>
            <p>
              <span class="circleSpan bg4"></span>
              <span>PK的计划次数</span>
            </p>
            <span>5</span>
          </div>
        </div>
        <div class="user_rf">
          <div class="score_circle">78</div>
          <p class="user_rf_text">每满20分升段</p>
          <p class="fontSm">计划失败多倍扣取经验</p>
        </div>
      </div>
      <div class="user_down">
        <div class="user_down_tabbar">
          <router-link to="/userIndex/personDynamic">动态</router-link>
          <router-link to="/userIndex/personPlan">计划</router-link>
          <router-link to="/userIndex/book">书籍</router-link>
        </div>
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'个人主页',
          isSx:false,
          backUrl:'/my'
        }
      },
      components:{
        headers
      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
  .user_content {
    background: #fdfbfb;
    min-height: 100vh;
    width: 100vw;
    .userTopDiv {
      height: 151px;
      border-bottom: 12px #f4f1f1 solid;
      box-sizing: border-box;
      padding: 22px 15px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .userHead {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div {
          display: flex;
          .avatar {
            width: 52px;
            height: 52px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
          }
          &>div {
            margin-left: 13px;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 10px;
            &>p {
              display: flex;
              align-items: center;
              font-size: 16px;
              .sexImg {
                width: 18px;
                height: 18px;
              }
            }
            &>span {
              color: #ff9800;
              font-size: 12px;
            }
          }
        }
        &>p {
          width: 58px;
          height: 28px;
          border: 1px #ff9800 solid;
          border-radius: 32px;
          color: #ff9800;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
        }
      }
      .userSchool {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
    .userMidDiv {
      border-bottom: 12px #f4f1f1 solid;
      height: 50px;
      padding: 0 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>div {
        display: flex;
        align-items: flex-end;
        &>p {
          font-size: 20px;
          font-weight: bold;
          margin-right: 6px;
        }
      }
    }
    .userBottomDiv {
      padding: 21px 0 29px 21px;
      display: flex;
      justify-content: space-between;
      height: 123px;
      .user_lf {
        width: 176px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>p {
            display: flex;
            align-items: center;
            .circleSpan {
              width: 14px;
              display: inline-block;
              height: 14px;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
              margin-right: 10px;
            }
            .bg1 {
              background: #6880D5;
            }
            .bg2 {
              background: #D5787C;
            }
            .bg3 {
              background: #9878D5;
            }
            .bg4 {
              background: #D5BC78;
            }
          }
          &>span {
            font-weight: bold;
          }
        }
      }
      .user_rf{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 3px 0;
        .score_circle {
          width: 72px;
          height: 72px;
          background: #AF9AFF;
          color: #fff;
          font-size: 28px;
          border-radius: 50%;
          text-align: center;
          line-height: 72px;
        }
        .user_rf_text {
          color: #D5BC78;
          margin: 3px 0;
        }
      }
    }
    .user_down {
      .user_down_tabbar {
        padding: 0 37px;
        border-bottom: 1px #bbb solid;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        &>a {
          width: 41px;
          padding-bottom: 15px;
        }
        .router-link-active {
          border-bottom: 3px solid #ff9800;
        }

      }
    }
  }
</style>
