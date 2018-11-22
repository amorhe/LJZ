<template>
    <div class="info_box">
      <headers :title="title"></headers>
      <div class="info_top">
        <span class="fontWeight">头像设置</span>
        <div>
          <img class="avatar" src="http://img5.imgtn.bdimg.com/it/u=2830805145,74531996&fm=26&gp=0.jpg" alt="">
          <i class="iconfont icon-next fontWeight"></i>
        </div>
      </div>
      <p class="userNature">
        <span>个性签名</span>
        <i class="iconfont icon-xiepinglun pinlun"></i>
      </p>
      <ul class="info_ul">
        <li>
          <span class="fontWeight">昵称</span>
          <p>
            <span>漂流一生</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">性别</span>
          <p>
            <span>男</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">地区</span>
          <p>
            <span>四川</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
      </ul>

      <ul class="info_ul">
        <li>
          <span class="fontWeight">文理</span>
          <p>
            <span>文科</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">年级</span>
          <p>
            <span>高二</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">学校</span>
          <p>
            <span>南开中学</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">成绩自评</span>
          <p>
            <span>优等</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">目标学校</span>
          <p>
            <span>浙江大学</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'我的信息'
        }
      },
      components:{
        headers
      }
    }
</script>

<style scoped lang="less">
  .info_box {
    width: 100vw;
  }
  .info_top {
    height: 92px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 24px;
    &>div {
      display: flex;
      align-items: center;
    }
    .avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .userNature {
    height: 40px;
    position: relative;
    line-height: 40px;
    .pinlun {
      position: absolute;
      right: 15px;
    }
  }
  .info_ul {
    margin-bottom: 12px;
    background: #fff;
    &>li {
      display: flex;
      padding: 0 15px 0 24px;
      justify-content: space-between;
      height: 50px;
      border-bottom: 1px #bbb solid;
      align-items: center;
      &>p {
        display: flex;
        align-items: center;
        &>span {
          margin-right: 10px;
        }
      }
    }
  }
</style>
