<template>
    <div class="searchBox">
      <div class="head_discuss">
        <i class="iconfont icon-fanhui" @click="back()"></i>
        <form>
          <label for="write">
            <i class="iconfont icon-sousuo searchIcon"></i>
          </label>
          <input id="write" class="searchInput" type="text">
        </form>
        <a class="record">搜索</a>
      </div>
      <div class="emptys"></div>
      <ul class="friend_list">
        <li>
          <div>
            <img src="http://img1.imgtn.bdimg.com/it/u=1223211050,1629218735&fm=26&gp=0.jpg" alt="">
            <div>
              <p>火花是好还</p>
              <p>青铜LV1</p>
            </div>
          </div>
          <p>已关注</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
        back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped lang="less">
.searchBox {
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  .head_discuss {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    background: rgb(248, 248, 248);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    line-height: 48px;
    z-index: 1000;
    &>i:nth-child(1) {
      font-size: 20px;
      color: #AA7575;
      position: absolute;
      top: 0;
      left: 14px;
    }
    form {
      position: relative;
    }
    .searchInput {
      width: 260px;
      height: 30px;
      border-radius: 32px;
      outline: none;
      border: 1px #bbb solid;
      font-size: 16px;
      text-indent: 30px;
    }
    .searchIcon {
      position: absolute;
      left: 10px;
      font-size: 18px;
    }
    .record {
      position: absolute;
      top: 0;
      right: 14px;
    }
  }
  .friend_list {
    li {
      height: 59px;
      border-bottom: 1px #eae3e3 solid;
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 8px;
      }
      &>div {
        display: flex;
        &>div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          &>p:nth-child(2){
            font-size: 12px;
            color: #ff9800;
          }
        }
      }
      &>p {
        width: 58px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border: 1px #d0b0b0 solid;
        border-radius: 32px;
        color: #d0b0b0;
        font-size: 12px;
      }
    }
  }
}
</style>
