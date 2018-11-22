<template>
    <div>
      <matter :url="toUrl"></matter>
    </div>
</template>

<script>
  import matter from '../../components/public/matter'
    export default {
        data(){
          return {
            toUrl:'/zixunDetail'
          }
        },
        components:{
          matter
        }
    }
</script>

<style scoped>

</style>
