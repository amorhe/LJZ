<template>
    <div class="dy_top">
      <dynamic></dynamic>
    </div>
</template>

<script>
  import dynamic from '../../components/public/dynamicPublic'
    export default {
      name: "planDynamic",
      data(){
        return{

        }
      },
      components:{
        dynamic
      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
  .dy_top {
   margin-top: -15px;
  }
</style>
