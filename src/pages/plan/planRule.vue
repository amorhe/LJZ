<template>
    <div>
      <div class="rule_top">
        <div>
          <img src="../../assets/purse.png" alt="">
          <h4>时间周期</h4>
        </div>
        <p>连续坚持20天，最多可用请假条请假2天</p>
      </div>
      <div class="rule_top">
        <div>
          <img src="../../assets/purse.png" alt="">
          <h4>模式说明</h4>
        </div>
        <p>每日签到打卡，中断任何一天则判定整个团队失败，率先放弃者失去所有的保证金，</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "planRule"
    }
</script>

<style scoped lang="less">
  .rule_top {
    margin: 0 16px 15px;
    line-height: 24px;
    &>div {
      display: flex;
      font-size: 16px;
      &>img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    &>p {
      text-align: left;
      text-indent: 32px;
    }
  }
</style>
