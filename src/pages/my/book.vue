<template>
    <div class="bookList">
      <div class="book_box" v-for="item in 9">千年</div>
    </div>
</template>

<script>
    export default {
        name: "book"
    }
</script>

<style scoped lang="less">
.bookList {
  padding: 22px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &>div:nth-child(3n){
    margin-right: 0;
  }
  .book_box {
    width: 86px;
    height: 100px;
    border: 1px #bbb solid;
    border-radius: 5px;
    background: #ff9800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 28px;
    margin-bottom: 22px;
    box-sizing: border-box;
  }
}
</style>
