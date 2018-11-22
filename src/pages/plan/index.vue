<template>
    <div>
      <headers :tabIndex="0"></headers>
      <!--内容-->
      <div class="content">
        <div>
          <div class="content_plan">
            <div class="plan_box"  v-for="item in 4" :style="{left:36*(item-1) + '%'}">
              <p class="line_align"></p>
              <!--无计划-->
              <div class="plan_box_div">
                <p>该清单暂无计划</p>
                <a>去添加</a>
              </div>
              <!--有计划-->
              <!--<div class="plan_box_div">-->
                <!--<div>-->
                  <!--<span>组队模式</span>-->
                  <!--<div>每天背诵30个单词单位</div>-->
                  <!--<div>-->
                    <!--<span>5/30</span>-->
                    <!--<a>去打卡</a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            </div>
          </div>
          <!--内容-->
          <div class="view_div">
            <div class="view_div_top">
              <ul>
                <li :class="tabbarNum==0?'activeColor':''" @click="tabbarClick(0)">综合</li>
                <li :class="tabbarNum==1?'activeColor':''" @click="tabbarClick(1)">学习</li>
                <li :class="tabbarNum==2?'activeColor':''" @click="tabbarClick(2)">健康</li>
                <li :class="tabbarNum==3?'activeColor':''" @click="tabbarClick(3)">戒除</li>
                <li :class="tabbarNum==4?'activeColor':''" @click="tabbarClick(4)">阅读</li>
              </ul>
              <p @click="goCustom">
                <span class="iconfont icon-add"></span>
                <span>自定义</span>
              </p>
            </div>

            <div class="view_list" v-for="item in 3">
              <div>
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2198746125,2255961738&fm=27&gp=0.jpg" alt="">
                <div class="view_list_mid">
                  <h3>每日随记</h3>
                  <p class="nowrap">走出沉迷点滴做起好好学</p>
                  <button @click="addPlan()">立即加入</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="backdrop" v-if="accept!=0">
        <div>
          <i class="iconfont icon-cuowu"></i>
          <div class="modal_mid">
            <div>
              <span class="colorY">#</span>
              <h4>每天坚持背单词30个</h4>
              <span class="fontSm">20天</span>
              <span class="colorY">#</span>
            </div>
            <div class="modal-mid_ul">
              <p>
                <span>最多请假</span>
                <span>1天</span>
              </p>
              <p>
                <span>诚意金额</span>
                <span>18元</span>
              </p>
            </div>
            <div class="modal_mid_text">亲，邀请你与我一起组队，互相监督互相激励,成就更好的自己。完成计划诚意金会退的哦。</div>
            <div class="modal_mid_bottom">
              <img src="http://t2.hddhhn.com/uploads/tu/201701/91/st3.png" alt="">
              <span>微微一笑很倾城</span>
              <span class="colorY">青铜LV5</span>
            </div>

          </div>
          <button class="accept_btn">接受组队</button>
          <p>PS:组队模式下一方失败另一方连坐惩罚</p>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/top'
    export default {
      data(){
        return {
          num:0,
          tabbarNum:0,
          accept:0
        }
      },
      components:{
          headers
      },
      mounted(){
        this.$store.state.pageIndex = 2
      },
      methods:{
        tabbarClick(tabbarNum){
          this.tabbarNum = tabbarNum;
        },
        //自定义计划
        goCustom(){
          this.$router.push('/custom')
        },
      //  官方计划详情
        addPlan(){
          this.$router.push('/makePlan/planRule')
        }
      }
    }
</script>

<style scoped lang="less">
  .content {
    margin: 20px 0;
    .content_plan {
      display: flex;
      justify-content: flex-start;
      position: relative;
      height: 130px;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .content_plan::-webkit-scrollbar {display:none}
    .plan_box {
      width: 36%;
      position: absolute;
      border-top: 1px #bbb solid;
      .line_align {
        width: 1px;
        height: 30px;
        background: #bbb;
        position: absolute;
        left: 64px;
        top: 0;
      }

      .plan_box_div {
        width: 100px;
        height: 100px;
        border-radius: 6px;
        background: #ff9800;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 12px;
        position: absolute;
        top: 30px;
        left: 15px;
        padding: 5px 8px 10px;
        box-sizing: border-box;
         &>p {
           width: 100%;
           margin-top: 19px;
         }
        a {
          width: 48px;
          height: 22px;
          border-radius: 32px;
          text-align: center;
          line-height: 22px;
          background: #fff;
          border: 1px solid rgb(255,152,0);
          color: rgb(255,152,0);
        }


        &>div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &>span {
            color: #4598EA;
            font-size: 10px;
          }
         div {
           width: 100%;
           display: flex;
           justify-content: space-around;
           align-items: center;
           text-align: left;
         }
        }
      }

    }

    .view_div {
      margin-top: 30px;
      padding: 0 15px;

      .view_div_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
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
      .view_list {
        margin-bottom: 22px;
        &>div {
          display: flex;
          align-items: center;
          &>img {
            width: 140px;
            height: 110px;
            border-radius: 8px;
            margin-right: 24px;
          }
          .view_list_mid {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            height: 110px;
            button {
              width: 81px;
              height: 32px;
              border-radius: 30px;
              background: #ff9800;
              outline: none;
              border: none;
            }
          }
        }
      }
    }
  }

  .backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(242,242,242,.8);
    z-index: 500;
    &>div {
      width: 283px;
      border-radius: 12px;
      border: 1px solid #bbb;
      background: #fff;
      margin: 197px auto;
      i {
        font-size: 24px;
        float: right;
        margin: 3px 12px 6px;
      }
      .modal_mid {
        margin-top: 33px;
        padding: 15px;
        border: 1px #eae3e3 solid;
        &>div:nth-child(1) {
          width: 190px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          .colorY {
            color: #ff9800;
            font-weight: bolder;
          }
        }
        .modal-mid_ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 14px 0 18px;

          &>p{
            display: flex;
            span {
              display: inline-block;
              width: 55px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              border: 1px #bbb solid;
              font-size: 12px;
            }
          }

          &>p:nth-child(1){
             span:nth-child(1) {
               background: #ff9800;
               margin-right: -1px;
             }
           }
          &>p:nth-child(2){
            span:nth-child(1) {
              background: #f99d9c;
              margin-right: -1px;
            }
          }
        }
        .modal_mid_text {
          font-size: 12px;
          text-align: left;
        }
        .modal_mid_bottom {
          margin: 12px 0 0;
          display: flex;
          img {
            width: 18px;
            height: 18px;
            border-radius: 50%;
          }
          &>span{
            margin: 0 9px 0 5px;
          }
          .colorY {
            color: #ff9800;
          }
        }
      }
      .accept_btn {
        width: 169px;
        height: 44px;
        background: #ff9800;
        font-weight: bolder;
        outline: none;
        border: none;
        margin: 12px 0 5px;
      }
      &>p {
        font-size: 10px;
        margin-bottom: 13px;
      }
    }
  }
</style>
