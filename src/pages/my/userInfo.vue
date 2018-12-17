<template>
    <div class="info_box">
      <headers :title="title"></headers>
      <div class="info_top">
        <span class="fontWeight">头像设置</span>
        <div>
          <img class="avatar" :src="info.headIcon">
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
            <span>{{info.nickname}}</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">性别</span>
          <p>
            <span>{{info.sex==''?'请选择':info.sex}}</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">地区</span>
          <p>
            <span>{{info.area==''?'请选择':info.area}}</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
      </ul>

      <ul class="info_ul">
        <li>
          <span class="fontWeight">文理</span>
          <p>
            <span>{{info.subject==''?'请选择':info.subject}}</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">年级</span>
          <p>
            <span>{{grade}}</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">学校</span>
          <p>
            <input type="text" v-model="info.school==''?'':info.school" placeholder="请填写">
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">成绩自评</span>
          <p>
            <span>{{rating}}</span>
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
        <li>
          <span class="fontWeight">目标学校</span>
          <p>
            <input type="text" v-model="info.target==''?'':info.target" placeholder="请填写">
            <i class="iconfont icon-next fontWeight"></i>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
  import {useInfo} from "../../http/user";

  export default {
      data(){
        return {
          title:'我的信息',
          info:{},
          grade:'',
          rating:""
        }
      },
      components:{
        headers
      },
      methods: {
        async getInfo(){
          let result = await useInfo();
          console.log(result)
          this.info = result.data;
          switch (result.data.grade) {
            case 7:
              this.grade = '初一';
                  break;
            case 8:
              this.grade = '初二';
              break;
            case 9:
              this.grade = '初三';
              break;
            case 10:
              this.grade = '高一';
              break;
            case 11:
              this.grade = '高二';
              break;
            default:
              this.grade = '高三';
          };
          switch (result.data.rating) {
            case 0:
              this.rating = '优等';
              break;
            case 1:
              this.rating = '中上';
              break;
            case 2:
              this.rating = '中等';
              break;
            case 3:
              this.rating = '中下';
              break;
            default:
              this.rating = '保密';
          }
        }
      },
      created(){
        this.getInfo();
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
      input {
        border: none;
        text-align: right;
      }
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
