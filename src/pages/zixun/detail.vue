<template>
    <div class="zixunContent">
      <headers :title="title"></headers>
      <div class="zixunTop">
        <h3>{{dataObj.title}}</h3>
        <div class="zixunUser">
          <div>
            <img :src="dataObj.authorHeadIcon" alt="图片">
            <span>{{dataObj.authorNickname}}</span>
          </div>
          <p>关注</p>
        </div>
      </div>
      <div v-html="dataObj.content"></div>
      <ul class="view_div_list" v-if="dynamicArr.length>0">
        <li v-for="(item,i) in dynamicArr.slice(0,2)" :key="i">
          <div>
            <div class="view_div_user">
              <img :src="item.headIcon" alt="图片">
              <div>
                <p>{{item.nickname}}</p>
                <p class="colorY fontSm">{{item.exValue}}</p>
              </div>
            </div>
            <p class="sixin">
              <i class="iconfont icon-icon-p_xinfeng"></i>
              <span>私信</span>
            </p>
          </div>
          <div class="view_div_content">
            <div class="view_div_text">{{item.content}}</div>
            <div class="view_div_content_wrap">
              <span>{{item.createTime}}</span>
              <div>
                <span>回复</span>
                <div>
                  <i v-if="item.IFLike==0" class="iconfont icon-xin" @click="newsCommontLikeDefalut(item.userId)"></i>
                  <i v-if="item.IFLike==1" class="iconfont icon-xin1 colorLike" @click="newsCommontLikeDefalut(item.userId)"></i>
                  <span>{{item.supportNum}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="view_div_bottom">
            <div v-for="(v,index) in item.replyList" :key="index">
              <div>
                <div>
                  <img :src="v.headIcon" alt="图片">
                  <p>{{v.otherNickname}}</p>
                </div>
                <p class="colorY">{{v.exValue}}</p>
              </div>
              <p>{{v.content}}</p>
            </div>
            <p class="moreP">
              <span>更多{{item.replyList.length}}条回复</span>
              <i class="iconfont icon-next"></i>
            </p>
          </div>
        </li>
      </ul>
      <ul class="view_kong" v-else>暂无评论...</ul>

      <div class="discuss_foot">
        <input type="text" placeholder="写点什么吧">
        <div>
          <p>
            <i class="iconfont icon-weibiaoti-"></i>
            <span>{{dataObj.commentCount}}</span>
          </p>
          <p>
            <i class="iconfont icon-xin" v-if="dataObj.IFLike==0" @click="newsLikeDefalut($route.query.id)"></i>
            <i class="iconfont icon-xin1 colorLike" v-if="dataObj.IFLike==1" @click="cancelnewsLike($route.query.id)"></i>
            <span>{{dataObj.likeCount}}</span>
          </p>
          <i class="iconfont icon-iconfontfenxiang"></i>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
  import {detail,dynamicList,newsLike,newsCommentLike} from "../../http/zixun"

  export default {
      data(){
        return {
          title:'学习策略',
          dataObj:{},
          dynamicArr:[]
        }
      },
      components:{
        headers
      },
      methods:{
        //资讯详情
        async getDetail(id){
          let result = await detail(id);
          this.dataObj = result.data;
        },
        //资讯评论列表
        async getDynamicList(aId){
          let result = await dynamicList(aId);
          this.dynamicArr = result.data.list;
        },
        //资讯点赞
        async newsLikeDefalut(aId){
          let data = await newsLike(aId);
          this.dataObj.IFLike = 1;
          this.dataObj.likeCount ++;
        },
        //取消点赞
        async cancelnewsLike(aId){
          let data = await newsLike(aId);
          this.dataObj.IFLike = 0;
          this.dataObj.likeCount --;
        },
        async newsCommontLikeDefalut(acId){
          let data = await newsCommentLike(acId);
        }
      },
      created(){
        this.getDetail(this.$route.query.id);
        this.getDynamicList(this.$route.query.id)
      }
    }
</script>

<style scoped lang="less">
  .view_kong {
    width: 100vw;
    margin-top: 10px;
  }
  .colorLike {
    color: #ff9800;
  }
  .zixunContent {
    min-height: 100vh;
    background: #fff;
    .zixunTop {
      padding: 18px 15px;
      &>h3 {
        font-size: 18px;
        text-align: left;
      }
      .zixunUser {
        padding: 11px 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div {
          display: flex;
          align-items: center;
          &>img {
            width: 24px;
            height: 24px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
        &>p {
          width: 48px;
          height: 22px;
          line-height: 22px;
          -webkit-border-radius: 32px;
          -moz-border-radius: 32px;
          border-radius: 32px;
          color: #ff9800;
          border: 1px #ff9800 solid;
          font-size: 12px;
        }
      }
    }

    .view_div_list {
      li {
        width: 100%;
        padding: 16px 10px 24px 15px;
        box-sizing: border-box;
        /*border-bottom: 1px #eae3e3 solid;*/

        &>div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          .view_div_user {
            display: flex;
            div {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: flex-start;
            }
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 7px;
            }
          }
          .view_div_card {
            width: 40px;
            height: 40px;
            border: 1px #bbb solid;
            border-radius: 6px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            &>p:nth-child(1){
              border-bottom: 1px #bbb solid;
            }
          }
          .sixin {
            align-self: center;
            margin-right: 10px;
          }
        }
        .view_div_content {
          margin-left: 36px;
          &>div:first-child {
            display: flex;
            align-items: flex-end;
            margin: 10px 0 6px;
            background: #f4f1f1;
            line-height: 20px;
            &>h4 {
              margin: 0 4px;
            }
            .colorY {
              font-weight: bolder;
              margin-left: 6px;
            }
          }
          .view_div_text {
            text-align: left;
          }
          &>p {
            float: right;
          }
          .view_div_content_wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &>div {
              width: 100px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              i {
                font-size: 20px;
              }
              &>div {
                display: flex;
                align-items: center;
                i {
                  margin-right: 7px;
                }
              }
            }
          }
        }
        .view_div_bottom {
          margin: 20px 0 0 25px;
          width: 309px;
          background: #f2f2f2;
          padding: 12px 10px;
          font-size: 12px;
          box-sizing: border-box;
          &>div>div {
            display: flex;
            justify-content: space-between;
            &>div {
              display: flex;
              align-items: center;
            }
            img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              margin-right: 7px;
            }
          }
          &>div>p:nth-child(2) {
            margin: 8px 0;
            text-align: left;
            padding-left: 30px;
            line-height: 20px;
          }
          &>div>p:nth-child(3){
            text-align: right;
          }
          .moreP {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }
      }
    }

    .discuss_foot {
      width: 100%;
      height: 50px;
      background: rgb(248,248,248);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 18px;
      box-sizing: border-box;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      &>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>p {
          display: flex;
          align-items: center;
          margin-right: 12px;
          i {
            font-size: 20px;
            margin-right: 4px;
          }
        }
      }
      input {
        width: 168px;
        height: 32px;
        border-radius: 4px;
        border: 1px #bbb solid;
        outline: none;
        padding: 0 10px;
        box-sizing: border-box;
      }
      i {
        font-size: 20px;
      }
    }
  }
</style>
