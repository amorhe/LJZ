<template>
    <div>
      <div class="header">
        <i class="iconfont icon-fanhui customBack" @click="back()"></i>
        <p class="custom_title">自定义计划</p>
      </div>
      <div class="custom_content">
        <input class="custom_input" type="text" placeholder="写下你的计划名称">
        <input class="custom_input" type="text" placeholder="选填计划宣言">

        <!--完成计划天数-->
        <div class="custom_body">
          <div>
            <div class="custom_body_top">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=967395617,3601302195&fm=27&gp=0.jpg" alt="">
              <p>完成计划周期</p>
            </div>
            <div class="custom_body_middle">
              <p class="custom_body_middle_active">7天</p>
              <p>15天</p>
              <p>20天</p>
              <p>30天</p>
            </div>
            <div class="custom_body_bottom">
              <div class="chooseInput">
                <div class="circle_div"></div>
                <label>自定义天数</label>
              </div>
              <div class="custom_body_bottom_right">
                <input class="customWrite" type="text" placeholder="1-999">
                <span>天</span>
              </div>
            </div>
          </div>
        </div>

        <!--诚意金-->
        <div class="custom_body">
          <div>
            <div class="custom_body_top">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2200166214,500725521&fm=27&gp=0.jpg" alt="">
              <p>诚意金</p>
              <p class="lineBlue">完成计划必全额返还</p>
            </div>
            <div class="custom_body_middle">
              <p>5元</p>
              <p>10元</p>
              <p class="custom_body_middle_active">20元</p>
              <p>30元</p>
            </div>
            <div class="custom_body_bottom">
              <div class="chooseInput">
                <div class="circle_div"></div>
                <label>自定义金额</label>
              </div>
              <div class="custom_body_bottom_right">
                <input class="customWrite" type="text" placeholder="1-999">
                <span>元</span>
              </div>
            </div>
          </div>
        </div>
        <!--替身符-->
        <div class="custom_body">
          <div>
            <div class="custom_body_top">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2200166214,500725521&fm=27&gp=0.jpg" alt="">
              <p>诚意金</p>
              <p class="lineBlue">最多可使用替身符</p>
            </div>
            <div class="custom_body_middle">
              <p>不使用</p>
              <p>1张</p>
              <p class="custom_body_middle_active">2张</p>
              <p>3张</p>
            </div>
            <div class="custom_body_bottom">
              <div class="chooseInput">
                <div class="circle_div"></div>
                <label>自定义张数</label>
              </div>
              <div class="custom_body_bottom_right">
                <input class="customWrite" type="text" placeholder="不超过总计划天数">
                <span>张</span>
              </div>
            </div>
          </div>
        </div>
        <!--首次打卡时间-->
        <div class="custom_body">
          <div>
            <div class="custom_body_top">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3873040750,1105020127&fm=27&gp=0.jpg" alt="">
              <p>首次打卡时间</p>
            </div>
            <div class="custom_body_middle">
              <p class="custom_body_middle_active">当日</p>
              <p>次日</p>
              <p>本周六</p>
              <p>本周日</p>
            </div>
          </div>
        </div>
      </div>

      <div class="empty"></div>
      <button class="bottom_button">选择计划模式</button>
    </div>
</template>

<script>
    export default {
        data(){
          return {

          }
        },
        methods:{
          back(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 68px;
    padding: 20px 15px 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
  }
  .customBack {
    font-size: 18px;
    color: #AA7575;
  }
  .custom_title {
    margin-right: 35%;
    font-size: 18px;
    font-weight: bold;
  }
  .custom_content {
    margin: 12px 10px;
    width: 94.4%;
    border: 1px solid rgb(187,187,187);
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  .custom_input {
    width: 300px;
    height: 40px;
    border: 1px solid rgb(187,187,187);
    border-radius: 8px;
    background: rgb(248,250,251);
    color: rgb(16,16,16);
    text-align: center;
    outline: none;
    margin-bottom: 20px;
  }
  .custom_input:nth-child(1){
    margin-top: 20px;
  }
  .custom_input::-webkit-input-placeholder {
    color: rgb(16,16,16);
  }
  .custom_body {
    padding: 13px 20px 22px;
    border-top: 1px #bbb solid;
  }
  .custom_body img {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
  .custom_body_top {
    display: flex;
    align-items: center;
  }
  .empty {
    height: 50px;
  }
  .bottom_button {
    width: 100%;
    height: 48px;
    background-color: rgb(255,152,0);
    color: rgb(16,16,16);
    border: 1px solid rgb(187,187,187);
    margin-top: 4px;
    font-size: 16px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
  .custom_body_middle {
    display: flex;
    justify-content: space-between;
  }
  .custom_body_middle>p {
    width: 58px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border: 1px solid rgb(255,152,0);
    border-radius: 30px;
    margin: 16px 0 17px;
    color: rgb(255,152,0);
  }
  .custom_body_middle_active {
    color: #fff!important;
    background: rgb(255,152,0);
  }
  .custom_body_bottom {
    display: flex;
    justify-content: space-between;
  }
  .customWrite {
    width: 120px;
    border: none;
    outline: none;
    text-align: right;
    background: rgb(250,250,250);
  }
  .customWrite::-webkit-input-placeholder {
    color: rgb(191,159,159);
  }
  .custom_body_bottom_right {
    align-items: center;
  }
  .custom_body_bottom_right>span {
    font-size: 18px;
  }
  .chooseInput {
    display: flex;
    align-items: center;
  }
  .chooseInput>label {
    margin-left: 5px;
  }
  .lineBlue {
    border-left: 3px #2851f2 solid;
    padding: 0 9px;
    margin-left: 9px;
  }
  .circle_div {
    width: 20px;
    height: 20px;
    border: 1px rgb(204,204,204) solid;
    border-radius: 50%;
  }
  /*.invite_content {*/
    /*width: 100%;*/
    /*padding: 16px 20px 8px;*/
    /*box-sizing: border-box;*/
    /*border-bottom: 1px solid #e9ecf2;*/
  /*}*/
  /*.invite_content>div {*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*margin-top: 8px;*/
  /*}*/
  /*.invite_content_top {*/
    /*display: flex;*/
    /*align-items: center;*/
  /*}*/
  /*.line_pre {*/
    /*width: 4px;*/
    /*height: 16px;*/
    /*background: rgb(204,153,0);*/
    /*margin-right: 8px;*/
  /*}*/
  /*.invite_content_right_p {*/
    /*color: rgb(191,159,159);*/
  /*}*/
  /*.invite_logo {*/
    /*width: 45px;*/
    /*height: 45px;*/
    /*border-radius: 50%;*/
    /*margin-right: 9px;*/
  /*}*/
  /*.invite_content_mid {*/
    /*display: flex;*/
    /*align-items: center;*/
  /*}*/
  /*.grade {*/
    /*font-size: 12px;*/
    /*color: #ff9800;*/
  /*}*/
  /*.accept {*/
    /*width: 58px;*/
    /*height: 28px;*/
    /*border-radius: 32px;*/
    /*border: 1px solid #ff9800;*/
    /*color: #ff9800;*/
    /*text-align: center;*/
    /*line-height: 28px;*/
  /*}*/
</style>
