<template>
    <div class="exchange_box">
      <headers :title="title"></headers>
      <div class="exchange_ul">
        <div v-for="item in exchangeList">
          <div class="exchange_left">
            <h4>{{item.name}}</h4>
            <p>灵钻-{{item.price}}</p>
          </div>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
       data(){
         return {
            title:'兑换记录',
            exchangeList:[
              {name:'商品项目1',time:'18-10-22 21:00',price:'5'},
              {name:'五花肉',time:'18-10-22 21:10',price:'150'},
              {name:'红烧带鱼',time:'18-10-22 22:10',price:'500'}
            ]
         }
       },
      components:{
        headers
      }
    }
</script>

<style scoped lang="less">
  .exchange_box {
    background: #fff;
    min-height: 100vh;
    .exchange_ul {
      &>div {
        height: 70px;
        border-bottom: 1px #eae3e3 solid;
        box-sizing: border-box;
        padding: 17px 15px 13px;
        display: flex;
        justify-content: space-between;
        .exchange_left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          &>p {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
