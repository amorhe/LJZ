<template>
    <div class="makeBox">
      <div class="header bgGary">
        <p class="iconfont icon-fanhui plan_back" @click="back()"></p>
      </div>
      <div class="planF_box">
        <div>
          <div class="invite_content_top">
            <p class="line_view"></p>
            <h4>坚持锻炼25天</h4>
            <!--<p>物理必修</p>-->
          </div>
          <!--播放-->
          <p class="iconfont icon-bofang playBtn"></p>
          <!--暂停-->
          <!--<p class="iconfont icon-pause playBtn"></p>-->
        </div>
        <div class="planF_box_mid">
          <div>
            <p>诚意金</p>
            <p>5.0元</p>
          </div>
          <div>
            <p>坚持</p>
            <p>0/25</p>
          </div>
          <div>
            <p>参与</p>
            <p>456</p>
          </div>
          <div>
            <p>鼓励</p>
            <p>0</p>
          </div>
        </div>
        <button class="planF_box_btn">自律让学习更美好</button>
      </div>

      <div class="planF_down">
        <router-link to="/makePlan/planRule">规则详情</router-link>
        <router-link to="/makePlan/planDynamic">计划动态</router-link>
        <router-link to="/makePlan/youxuan">优选素材</router-link>
      </div>
      <div class="plan_content">
        <router-view></router-view>
      </div>

      <div class="emptys"></div>
      <!--底部按钮-->
      <!--<div class="planF_bottom">-->
        <!--<div @click="personClick">个人模式</div>-->
        <!--<div @click="groupClick">-->
          <!--<p>好友组队模式</p>-->
          <!--<p class="double">双倍灵钻奖励</p>-->
        <!--</div>-->
        <!--<div @click="toInvite">PK模式</div>-->
      <!--</div>-->

      <!--pk等待中-->
      <!--<div class="planF_bottom_box">-->
        <!--<div>取消匹配</div>-->
        <!--<div>-->
          <!--<p>PK匹配等待中</p>-->
          <!--<p>23:59:34</p>-->
        <!--</div>-->
      <!--</div>-->

      <!--组队等待中-->
      <!--<div class="group_bottom_box">-->
        <!--<div><p>取</p><p>消</p></div>-->
        <!--<div>继续邀请</div>-->
        <!--<div>-->
          <!--<p>组队等待接受中</p>-->
          <!--<p>23:59:34</p>-->
        <!--</div>-->
      <!--</div>-->

      <!--计划进行中-->
      <div class="planIng">
        <div class="planIng_left">
          <i class="iconfont icon-xiaoxi"></i>
          <p>私信</p>
        </div>
        <div v-if="!punched">
          <div @click="punch">发动态打卡</div>
          <div @click="punchOpen">闪电打卡</div>
        </div>
        <div class="punched" v-if="punched">今日已打卡</div>
      </div>

      <payBox :isShow="isShow" @closeAlert="personClick"></payBox>
      <!--组队模式-->
      <groupAlert :alertBool="alertBool" @closeBox="groupClick" :title="title1" :content="content1"></groupAlert>
      <!--pk须知-->
      <groupAlert :alertBool="pkBool" @closeBox="toInvite" :title="title2" :content="content2"></groupAlert>
      <!--打卡成功-->
      <punchAlert :isPunch="isPunch" @closePunch="punchClose"></punchAlert>
    </div>
</template>

<script>
  import payBox from '../../components/public/payAlert'
  import groupAlert from '../../components/public/groupAlert'
  import punchAlert from '../../components/public/punchAlert'
    export default {
        data(){
          return {
            isShow:false,
            alertBool:false,
            pkBool:false,
            isPk:true,
            isPunch:false,
            punched:false,
            title1:'组队须知',
            title2:'PK须知',
            content1:'1.组队模式流程：支付诚意金——邀请QQ、微信等好友——对方接受邀请。2.自发起组队24小时内，' +
              '若无好友接受邀请，系统将取消计划并退回诚意金。3.我已了解组队模式的连坐机制，且已认真阅读并同意其它规则说明。',
            content2:'1.PK模式流程：支付诚意金——等待系统匹配对手或某用户主动接受邀战。2.自发起PK24小时内，' +
              '若无用户接受PK，系统将取消计划并退回诚意金。3.应国家政策，PK模式只涉及灵钻盈亏，无论结果胜负诚意金都不互相转移。'
          }
        },
        components:{
          payBox,groupAlert,punchAlert
        },
        methods:{
          back(){
            this.$router.push('/plan')
          },
          //个人
          personClick(){
            this.isShow = ! this.isShow
          },
          //组队
          groupClick(){
            this.alertBool = !this.alertBool
          },
          //pk、邀请
          toInvite(){
            if(!this.isPk){
              this.$router.push('/inviteGroup')
            }else{
              this.pkBool = !this.pkBool
            }
          },
          //打卡
          punch(){
            this.$router.push({path:'/punch',query:{text:'动态打卡',place:'输入你的打卡心情或上传打卡凭证，还可获得5灵钻奖励额'}})
          },
          punchOpen(){
            this.isPunch = !this.isPunch
          },
          punchClose(punchs){
            this.punched = punchs;
            this.isPunch = !this.isPunch
          }
        }
    }
</script>

<style scoped>
  .makeBox {
    position: relative;
    left: 0;
    top: 0;
    min-height: 100vh;
  }
  .plan_content {
    background: #fff;
  }
  .plan_back {
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    left: 7px;
    top: 10px;
    z-index: 100;
  }
  .bgGary {
    background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4217351297,2234745726&fm=26&gp=0.jpg") 0 0 / 100% 100% no-repeat;
    height: 200px;
  }
  .planF_box {
    position: absolute;
    left: 15px;
    top: 170px;
    width: 330px;
    height: 163px;
    border: 1px solid rgb(187,187,187);
    border-radius: 12px;
    background: #fff;
    padding: 10px 16px 13px;
    box-sizing: border-box;
  }
  .planF_box>div {
    display: flex;
    justify-content: space-between;
  }
  .line_view {
    width: 4px;
    height: 18px;
    background: rgb(121,121,121);
    margin-right: 7px;
  }
  .invite_content_top {
    display: flex;
    align-items: center;
  }
  .playBtn {
    font-size: 32px;
    color: rgb(239,179,54);
  }
  .planF_box_mid {
    padding: 10px;
    line-height: 25px;
  }
  .planF_box_mid>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .planF_box_btn {
    width: 329px;
    height: 40px;
    margin-left: -16px;
    background-color: #9aa2cc;
  }
  .planF_box_btn:active {
    color: rgb(16,16,16);
    background-color: #9aa2cc;
  }
  .planF_down {
    margin-top: 130px;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    background: #fff;
  }
  .planF_down>a {
    height: 40px;
  }
  .router-link-active {
    color: #ff9800;
    border-bottom: 3px solid #ff9800;
    background: #fff;
  }
  .planF_bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
  }
  .planF_bottom>div {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    border: 1px solid #bbb;
  }
  .planF_bottom>div:nth-child(1){
    width: 100px;
    background: #ff9800;
  }
  .planF_bottom>div:nth-child(2) {
    width: 160px;
    background: #fdcb04;
  }
  .planF_bottom>div:nth-child(3) {
    width: 100px;
    background:  #e691ae;
  }
  .double {
    font-size: 11px;
    color: #2851f2;
    width: 100%;
    text-align: center;
  }
</style>
<style lang="less" scoped>
  .planF_bottom_box {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    &>div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;
      &>p {
        width: 100%;
      }
      &>p:nth-child(2){
        color: #e51c23;
      }
    }
    &>div:nth-child(1){
      background: #d0b0b0;
    }
    &>div:nth-child(2){
      background: #f2f2f2;
    }
  }
  .group_bottom_box {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    &>div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;
      cursor: pointer;
    }
    &>div:nth-child(1){
      width: 40px;
      background: #d0b0b0;
      font-size: 12px;
      &>p {
        width: 100%;
      }
    }
    &>div:nth-child(2){
      width: 140px;
      background: #ff9800;
    }
    &>div:nth-child(3){
      width: 180px;
      background: #f2f2f2;
      &>p {
        width: 100%;
      }
      &>p:nth-child(2){
        color: #e51c23;
      }
    }
  }
  .planIng {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    &>div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;
      cursor: pointer;
      height: 100%;
      &>div:nth-child(1){
        width: 140px;
        height: 100%;
        background: #fdcb04;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &>div:nth-child(2){
        width: 140px;
        height: 100%;
        background: #FF9B6A;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .punched {
      width: 280px;
      background: #eae3e3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .planIng_left {
      width: 80px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f8f8f8;
      font-size: 12px;
    }

  }
</style>
