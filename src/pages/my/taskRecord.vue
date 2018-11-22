<template>
    <div class="taskContent">
      <headers :title="title"></headers>
      <div class="contentUl">
        <div>
          <p>
            <span class="fontWeight">灵钻项目1</span>
            <span>18-10-22 21:00</span>
          </p>
          <span>灵钻+5</span>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'灵钻明细'
        }
      },
      components:{
        headers
      }
    }
</script>

<style scoped lang="less">
.taskContent {
  min-height: 100vh;
  background: #fff;
  width: 100vw;
  .contentUl {
    display: flex;
    flex-direction: column;
    &>div {
      height: 70px;
      border-bottom: 1px #f2f2f2 solid;
      padding: 17px 15px 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 12px;
      box-sizing: border-box;
      &>p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
