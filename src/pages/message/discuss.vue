<template>
  <div>
    <headertop :title="title"></headertop>

    <div class="message_list">
      <div>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1390108980,2985885193&fm=27&gp=0.jpg" alt="">
        <div>
          <div class="message_list_text">
            <div>
              <p>打卡成功奖励</p>
              <p>评论了你</p>
            </div>
            <p>18-10-22  22:00</p>
          </div>
          <p class="nowrap">嗯啊对对，还在吗（他的内容：展示一行）</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import headertop from '../../components/public/headers'
  export default {
    data(){
      return{
        title:'评论你'
      }
    },
    components:{
      headertop
    },
    mounted(){

    },
    methods:{

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
          &>div {
            display: flex;
            justify-content: space-between;
            &>p:nth-child(1){
              font-weight: bold;
              margin-right: 10px;
            }
            &>p:nth-child(2){
              font-weight: bold;
              color: #C892A4;
            }
          }

          &>p{
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
