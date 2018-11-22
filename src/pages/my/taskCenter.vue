<template>
    <div class="task_content">
      <headers :title="title" :details="isTrue"></headers>
      <div class="task_up_div">
        <div class="task_leftO">安静学习40分钟</div>
        <div class="task_rightO">
          <div>
            <p>参与话题</p>
            <p>赢取300灵钻</p>
          </div>
          <div>邀请双重奖励</div>
        </div>
      </div>

      <div class="task_down_div">
        <p class="task_text">做任务&nbsp;&nbsp;领灵钻</p>
        <div class="task_tab">
          <p :class="tabIndex==0?'pActive':''" @click="tabClick(0)">今日任务</p>
          <p :class="tabIndex==1?'pActive':''" @click="tabClick(1)">高额任务</p>
        </div>

        <div class="task_list">
          <div>
            <p>
              <span>每日登录</span>
              <span class="taskAward">+5灵钻</span>
            </p>
            <p class="status1">领取</p>
          </div>
          <div>
            <p>
              <span>分享内容</span>
              <span class="taskAward">+5灵钻</span>
            </p>
            <p class="status2">去完成</p>
          </div>
          <div>
            <p>
              <span>动态打卡</span>
              <span class="taskAward">+5灵钻</span>
            </p>
            <p class="status3">已完成</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
       data(){
         return {
           title:'任务中心',
           isTrue:true,
           tabIndex:0
         }
       },
      components:{headers},
      methods:{
         tabClick(index){
           this.tabIndex = index
         }
      }
    }
</script>

<style scoped lang="less">
.task_content {
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  .task_up_div{
    height: 190px;
    background: #fff;
    padding: 12px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 10px #f4f1f1 solid;
    .task_leftO {
      width: 155px;
      height: 155px;
      border-radius: 12px;
      background: #d2771d;
      line-height: 155px;
    }
    .task_rightO {
      width: 155px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &>div:nth-child(2){
        height: 70px;
        border-radius: 12px;
        background: #d2771d;
        line-height: 70px;
      }
      &>div:nth-child(1){
        background: #00ccff;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 11px 11px 9px;
        box-sizing: border-box;
        border-radius: 12px;
        &>p:nth-child(1){
          font-size: 16px;
          color: #fff;
          text-align: left;
        }
        &>p:nth-child(2){
          text-align: right;
        }
      }
    }
  }
  .task_down_div {
    padding: 20px;
    .task_text {
      font-size: 16px;
      color: #ff9800;
    }
  }
  .task_tab {
    margin: 8px 30px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pActive {
      color: #4598ea;
    }
  }
  .task_list {
    &>div {
      height: 70px;
      margin-bottom: 13px;
      border: 1px #eae3e3 solid;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 13px 16px;
      box-sizing: border-box;
      &>p:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .taskAward {
          color: #ff9800;
          font-size: 12px;
        }
      }
      &>p:nth-child(2){
        width: 58px;
        height: 28px;
        text-align: center;
        border-radius: 32px;
        font-size: 12px;
        line-height: 28px;
      }
      .status1 {
        background: #ff9800;
        color: #fff;
      }
      .status2 {
        border: 1px #ff9800 solid;
      }
      .status3 {
        border: 1px #d0b0b0 solid;
        color: #d0b0b0;
        background: #eae3e3;
      }
    }
  }
}
</style>
