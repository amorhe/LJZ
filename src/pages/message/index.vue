<template>
    <div>
      <!--<div class="head_discuss">-->
        <!--<i class="iconfont icon-fanhui" @click="back()"></i>-->
        <!--<p>消息通知</p>-->
        <!--<div class="empty"></div>-->
      <!--</div>-->
      <headers :title="title"></headers>
      <div class="message_list">
        <div @click="changePage()">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1390108980,2985885193&fm=27&gp=0.jpg" alt="">
            <div>
              <div class="message_list_text">
                <p>变动提醒</p>
                <p>18-10-22  21:00</p>
              </div>
              <p class="nowrap">灵钻+5，经验分+1</p>
            </div>
        </div>

        <div @click="goList()">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3962681492,1891851298&fm=27&gp=0.jpg" alt="">
          <div>
            <div class="message_list_text">
              <p>评论你</p>
              <p>18-10-22  21:00</p>
            </div>
            <p class="nowrap">整11天，蜗牛新上架资料抢先看的的顶顶顶顶顶层…</p>
          </div>
        </div>

        <div @click="goIncite()">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=612545450,2731747183&fm=27&gp=0.jpg" alt="">
          <div>
            <div class="message_list_text">
              <p>鼓励你</p>
              <p>18-10-22  21:00</p>
            </div>
            <p class="nowrap">整11天，蜗牛新上架资料抢先看的的顶顶顶顶顶层…</p>
          </div>
        </div>

        <div>
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=782046930,1105099424&fm=27&gp=0.jpg" alt="">
          <div>
            <div class="message_list_text">
              <p>灵均</p>
              <p>18-10-22  21:00</p>
            </div>
            <!--<p class="nowrap">嗯啊对对，还在吗</p>-->
            <p class="nowrap colorRed">【组队邀请】20天背诵单词</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
        data(){
          return{
            title:'消息通知'
          }
        },
        components:{
          headers
        },
        mounted(){

        },
        methods:{
        //  消息提醒
          changePage(){
            this.$router.push({path:'/messageChange'})
          },
          goList(){
            this.$router.push({path:'/messageDiscuss'})
          },
          goIncite(){
            this.$router.push({path:'/incite'})
          }
        }
    }
</script>

<style scoped lang="less">
  .message_list {
    &>div {
      height: 70px;
      border-bottom: 1px #f2f2f2 solid;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      display: flex;
      justify-content: space-between;
      &>img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 9px;
      }
      &>div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>p {
          font-size: 12px;
          text-align: left;
        }
        .message_list_text{
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>p:nth-child(1){
            font-weight: bold;
          }
          &>p:nth-child(2){
            font-size: 12px;
          }
        }
        .colorRed {
          color: #E51C23;
          font-weight: bold;
        }
      }
    }
  }
</style>
