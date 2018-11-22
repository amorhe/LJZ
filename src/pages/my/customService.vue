<template>
    <div class="custom_box">
      <headers :title="title"></headers>
    </div>
</template>

<script>
  import headers from '../../components/public/headers'
    export default {
      data(){
        return {
          title:'问题汇总'
        }
      },
      components:{
        headers
      }
    }
</script>

<style scoped lang="less">
.custom_box {
  min-height: 100vh;
  width: 100vw;
  background: #fff;
}
</style>
