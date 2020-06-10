<!--
 * @Author: your name
 * @Date: 2020-06-09 16:35:25
 * @LastEditTime: 2020-06-10 10:44:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\Home.vue
--> 
<template>
  <div class="home">
    <Rinput v-model="inputvalue" placeholder="用户名" size="30"></Rinput>
  </div>
</template>

<script>

export default {
  data(){
    return {
      inputvalue:null
    }
  }
}
</script>
