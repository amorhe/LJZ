<template>
    <div>
      <headers :tabIndex="2"></headers>
      <div class="invite_content" v-for="item in 3">
        <div>
          <div class="invite_content_mid">
            <img class="invite_logo" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1703319119,1187423733&fm=27&gp=0.jpg" alt="">
            <p>火花是好还是坏</p>
            <p class="grade">青铜LV1</p>
          </div>
          <div class="accept" @click="accept()">接受PK</div>
        </div>
        <div>
          <div class="invite_content_top">
            <h4 class="colorY">#</h4>
            <h4>每天背诵30个英语单词</h4>
            <span>20天</span>
            <h4 class="colorY">#</h4>
          </div>
          <p class="invite_content_right_p">23:59:34</p>
        </div>

        <div class="modal-mid_ul">
          <p>
            <span>最多请假</span>
            <span>1天</span>
          </p>
          <p>
            <span>诚意金额</span>
            <span>18元</span>
          </p>
        </div>
        <div>
          <p>计划宣言：这次要对自己狠一点！</p>
        </div>
      </div>

      <payBox :isShow="isShow" @closeAlert="accept"></payBox>
    </div>
</template>

<script>
  import headers from '../../components/public/top'
  import payBox from '../../components/public/payAlert'
    export default {
      data(){
        return{
          isShow:false
        }
      },
      components:{
          headers,payBox
      },
      methods:{
        //  接受pk
        accept(){
          this.isShow = !this.isShow
        }
      }
    }
</script>

<style scoped lang="less">
  .invite_content {
    width: 100%;
    padding: 14px 20px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #e9ecf2;
  }
  .invite_content>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .invite_content_top {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .invite_content_right_p {
    color: #E51C23;
  }
  .invite_logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 9px;
  }
  .invite_content_mid {
    display: flex;
    align-items: center;
  }
  .invite_content_mid p {
    margin-right: 10px;
  }
  .grade {
    font-size: 12px;
    color: #ff9800;
    text-align: left;
  }
  .accept {
    width: 58px;
    height: 28px;
    border-radius: 32px;
    border: 1px solid #ff9800;
    color: #ff9800;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
  }
  .modal-mid_ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 11px 0 14px;

  &>p{
     display: flex;
  span {
    display: inline-block;
    width: 55px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border: 1px #bbb solid;
    font-size: 12px;
  }
  }

  &>p:nth-child(1){
  span:nth-child(1) {
    background: #ff9800;
    margin-right: -1px;
  }
  }
  &>p:nth-child(2){
  span:nth-child(1) {
    background: #f99d9c;
    margin-right: -1px;
  }
  }
  }
</style>
