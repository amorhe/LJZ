<template>
   <div>
     <div class="empty"></div>
     <ul class="foot">
       <router-link :to="{path:'/study'}" tag="li" exact>
         <div>
           <i class="iconfont icon-xuexi" :class="$store.state.pageIndex == 0?'index_active':''"></i>
           <span>学习</span>
         </div>
       </router-link>
       <router-link :to="{path: '/zixun'}" tag="li">
         <div>
           <i class="iconfont icon-shequ" :class="$store.state.pageIndex == 1?'index_active':''"></i>
           <span>资讯</span>
         </div>
       </router-link>
       <router-link :to="{path:'/plan'}" v-if="$store.state.pageIndex==2">
         <div>
           <i class="iconfont icon-jiahao add"></i>
         </div>
       </router-link>
       <router-link :to="{path:'/plan'}" v-else>
         <div>
           <i class="iconfont icon-baxin"></i>
           <span>自律</span>
         </div>
       </router-link>
       <router-link :to="{path:'/find'}" tag="li">
         <div>
           <i class="iconfont icon-find" :class="$store.state.pageIndex == 3?'index_active':''"></i>
           <span>发现</span>
         </div>
       </router-link>
       <router-link :to="{path:'/my'}" tag="li">
         <div>
           <i class="iconfont icon-wode" :class="$store.state.pageIndex == 4?'index_active':''"></i>
           <span>我的</span>
         </div>
       </router-link>
     </ul>
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

<style lang="less">
  .empty {
    height: 50px;
  }
  .foot {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    font-size: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 1000;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 44px;
      i {
        font-size: 26px;
      }
      .add {
        font-size: 42px!important;
        color: rgb(239,179,54);
      }
      .index_active {
        color: rgb(242,195,92);
      }
    }
  }
</style>
