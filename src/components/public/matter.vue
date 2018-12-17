<template>
    <div>
      <div class="matter_box" v-for="(item,index) in list" @click="goDetail(item.id)" :key="index">
        <img class="matter_box_img" :src="item.cover" alt="图片">
        <div class="matter_div">
          <div class="line-yellow"></div>
          <h4>{{item.title}}</h4>
        </div>

        <div class="matter_box_down">
          <p>{{item.author}}</p>
          <div class="matter_count">
            <div>
              <i class="iconfont icon-yanjing"></i>
              <span>{{item.lookCount}}</span>
            </div>
            <div>
              <i v-if="item.IFLike==0" class="iconfont icon-xin"></i>
              <i v-else class="iconfont icon-xin1 colorLike"></i>
              <span>{{item.likeCount}}</span>
            </div>
            <i class="iconfont icon-iconfontfenxiang"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {choiceList,list} from "../../http/zixun";

  export default {
      data(){
        return {
          list:[],
        }
      },
      props:{
        url:String
      },
      methods:{
        goDetail(id){
          this.$router.push({path:this.url,query:{id:id}})
        },
        async getList(pageNum,pageSize){
          let result = await list(pageNum,pageSize);
          console.log(result)
          this.list = result.data.list;
          for (let i=0;i < result.data.list.length;i++){
            let a = result.data.list[i].author;
            switch (a) {
              case '0':
                this.list[i].author = '自律之路';
                break;
              case '1':
                this.list[i].author = '学习策略';
                break;
              case '2':
                this.list[i].author = '政策资讯';
                break;
              case '3':
                this.list[i].author = '情感生活';
                break;
              case 4:
                this.list[i].author = '学生天地';
                break;
              case 5:
                this.list[i].author = '文化艺术';
                break;
              default:
                this.list[i].author = '内部使用'
            }
          }

        }
      },
      created(){
        this.getList(1,100)
      }
    }
</script>

<style scoped lang="less">
  .colorLike {
    color: #ff9800;
  }
  .matter_box {
    width: 330px;
    height: 215px;
    border: 1px #bbb solid;
    border-radius: 4px;
    background:  rgb(253,251,251);
    margin: 0 auto 12px;
    .matter_box_img {
      width: 100%;
      height: 142px;
    }
    .matter_div {
      display: flex;
      padding: 12px 11px;
      align-items: center;
      .line-yellow {
        width: 4px;
        height: 16px;
        background: #ffcc00;
        margin-right: 7px;
      }
    }
    .matter_box_down {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .matter_count {
        display: flex;
        align-items: center;
        &>div {
          display: flex;
          margin-right: 25px;
          i {
            margin-right: 3px;
          }
        }
      }
    }
  }
</style>
