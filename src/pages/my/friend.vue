<template>
    <div class="friend_content">
      <headers :title="title" :hasSearch="isHas"></headers>
      <div class="friend_tab">
        <p :class="tabIndex==0?'pActive':''" @click="tabClick(0)">关注</p>
        <p :class="tabIndex==1?'pActive':''" @click="tabClick(1)">粉丝</p>
      </div>
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
  import headers from '../../components/public/headers'
    export default {
      data(){
        return{
          title:'好友列表',
          isHas:true,
          tabIndex:0
        }
      },
      components:{
        headers
      },
      methods:{
        tabClick(a){
          this.tabIndex = a;
        }
      }
    }
</script>

<style scoped lang="less">
  .friend_content {
    min-height: 100vh;
    width: 100vw;
    background: #fff;
    .friend_tab {
      height: 48px;
      border-bottom: 1px #eae3e3 solid;
      padding: 0 77px;
      display: flex;
      justify-content: space-between;
      &>p {
        width: 48px;
        height: 100%;
        line-height: 48px;
        font-size: 16px;
        box-sizing: border-box;
      }
      .pActive {
        border-bottom: 3px #ff9800 solid;
        color: #ff9800;
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
