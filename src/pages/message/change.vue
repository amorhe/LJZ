<template>
    <div>
      <headertop :title="title"></headertop>

      <div class="message_list">
        <div>
          <div>
            <div class="message_list_text">
              <p>打卡成功奖励</p>
              <p>18-10-22  21:00</p>
            </div>
            <p class="nowrap">灵钻+5，经验分+1</p>
          </div>
        </div>

        <div>
          <div>
            <div class="message_list_text">
              <p>计划失败扣除</p>
              <p>18-10-22  21:00</p>
            </div>
            <p class="nowrap">灵钻+5，经验分+1</p>
          </div>
        </div>

        <div>
          <div>
            <div class="message_list_text">
              <p>管理员操作</p>
              <p>18-10-22  21:00</p>
            </div>
            <p class="nowrap">灵钻+5，经验分+1</p>
          </div>
        </div>

        <div>
          <div>
            <div class="message_list_text">
              <p>灵钻任务—邀请好友注册</p>
              <p>18-10-22  21:00</p>
            </div>
            <p class="nowrap">灵钻+200</p>
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
            title:'变动提醒'
          }
        },
      components:{
        headertop
      },
      methods:{
        back(){
          this.$router.go(-1)
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
