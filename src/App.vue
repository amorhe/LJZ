<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <foot v-show="$route.meta.navShow"></foot>
  </div>
</template>

<script>
import '../static/iconfont/iconfont.css'
import foot from './components/public/foot'
export default {
  data(){
    return {
      transitionName: ''
    }
  },
  components:{
    foot
  },
  watch:{
    $route(to,from){
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else if(to.meta.index < from.meta.index){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName= 'slide-mid'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #101010;
  font-size: 14px;
  background: rgb(250,250,250);
  height: 100vh;
  width: 100vw;
}
  * {
    margin: 0;
    padding: 0;
  }
  ul,li{list-style-type: none}
  a {
    text-decoration: none;
    color: #101010;
  }
  .fontSm {
    font-size: 12px;
  }
  .nowrap {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .colorY {
    color: #ff9800;
  }
  button {
    outline: none;
    border: none;
  }
  .emptys {
    height: 48px;
  }
  .bgWhite {
    background: #fff;
  }
  .fontWeight {
    font-weight: bold;
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 200ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-mid-enter {
    opacity: 0;
  }
  .slide-mid-active {
    transition: opacity .3s;
  }


</style>

