<template>
    <div class="bgWhite punch_content">
      <headers :title="title" :publish="publish"></headers>

      <textarea name="" id="textarea" cols="30" rows="10" :placeholder="placeholder"></textarea>
      <p class="addImage">添加图片</p>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
        data(){
          return {
            title:'',
            publish:true,
            placeholder:''
          }
        },
        components:{
          headers
        },
        mounted(){
          this.title = this.$route.query.text;
          this.placeholder = this.$route.query.place
        }
    }
</script>

<style scoped lang="less">
  .punch_content {
    min-height: 100vh;
    #textarea {
      width: 330px;
      height: 200px;
      text-align: left;
      border: 1px #bbb solid;
      margin: 10px 0;
      box-sizing: border-box;
      outline: none;
      padding: 5px;
    }
    .addImage {
      width: 80px;
      height: 80px;
      margin-left: 15px;
      line-height: 80px;
      text-align: center;
      background: #e5e5e5;
    }
  }

</style>
