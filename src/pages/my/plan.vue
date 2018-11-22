<template>
    <div class="planList">
      <div class="plan_box" v-for="item in 8">
        <p class="plan_class">组队模式</p>
        <p class="plan_content">每天背诵30个单单词</p>
        <div>
          <span>5/30</span>
          <p class="ing">进行中</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      }
    }
</script>

<style scoped lang="less">
.planList {
  padding: 22px 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &>div:nth-child(3n){
    margin-right: 0;
  }
  .plan_box {
    width: 100px;
    height: 100px;
    border-radius: 6px;
    border: 1px #bbb solid;
    background: #ff9800;
    box-sizing: border-box;
    padding: 5px 5px 10px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-right: 15px;
    .plan_class {
      color: #4598EA;
    }
    .plan_content {
      text-align: left;
    }
    &>div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>p {
        width: 48px;
        height: 22px;
        border-radius: 32px;
        text-align: center;
        line-height: 22px;
      }
      .ing {
        color: #ff9800;
        border: 1px #ff9800 solid;
        background: #fff;
      }
      .finish {
        color: #d0b0b0;
        border: 1px #eae3e3 solid;
        background: #eae3e3;
      }
    }
  }
}
</style>
