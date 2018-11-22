<template>
    <div>
      <headers :tabIndex="1"></headers>
      <div class="swipe_div">
        <mt-swipe :auto="3000">
          <mt-swipe-item v-for="(item,index) in imgArr" :key="index">
            <img :src="item.src" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="view_div">
        <div class="view_div_top">
          <ul>
            <li :class="tabbarIndex==0?'activeColor':''" @click="tabbarClick(0)">最新</li>
            <li :class="tabbarIndex==1?'activeColor':''" @click="tabbarClick(1)">推荐</li>
            <li :class="tabbarIndex==2?'activeColor':''" @click="tabbarClick(2)">热门</li>
          </ul>
        </div>
      </div>
      <dynamicPublic></dynamicPublic>
    </div>
</template>

<script>
  import headers from '../../components/public/top'
  import dynamicPublic from '../../components/public/dynamicPublic'
    export default {
      data(){
          return{
            imgArr:[{'src':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3534289497,3677101726&fm=27&gp=0.jpg'},
              {'src':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49764040,3750999451&fm=27&gp=0.jpg'},
              {'src':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1293919120,3114443152&fm=27&gp=0.jpg'}],
            tabbarIndex:0,

          }
      },
      components:{
        headers,dynamicPublic
      },
      methods:{
        tabbarClick(index){
          this.tabbarIndex = index;
        },
      }
    }
</script>
<style>
  .mint-swipe-indicators {
    left: auto;
    right: 0;
  }
  .mint-swipe-indicator {
    opacity: 1;
    background: rgba(191,193,190,1);
  }
</style>
<style scoped lang="less">
  .swipe_div{
    height: 116px;
    img {
      width: 100%;
    }
  }
  .view_div {
    padding: 15px 15px 8px;
    border-bottom: 1px #eae3e3 solid;
    .view_div_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>ul {
        display: flex;
        li {
          margin-right: 15px;
        }
        .activeColor {
          color: #ff9800;
        }
      }
    }
  }
</style>
