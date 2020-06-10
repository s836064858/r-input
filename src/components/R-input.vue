<!--
 * @Author: your name
 * @Date: 2020-06-09 16:38:41
 * @LastEditTime: 2020-06-10 10:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\R-input.vue
--> 
<template>
  <div :class="{'r-input-item':true,'r-blur':!isFocus&&value==null,'r-focus':isFocus}" :style="{'--color': color,'--fontSize':fontSize}">
    <label class="text" @click="clickLabel()">{{placeholder}}</label>
    <input :type="type" ref="r-input" class="input" :value="value" @change="onchange" @focus="isFocus = true" @blur="isFocus = false">
  </div>
</template>
<script>
export default {
  props:{
    value: {
      required: true
    },
    placeholder:{
      type: String,
      required: true
    },
    type:{
      type: String,
      required: false,
      default:'text'
    },
    color:{
      type: String,
      required: false,
      default:'blue'
    },
    size:{
      type:String,
      required:false,
      default:'large'
    }
  },
  computed:{
    fontSize(){
      if(this.size==='small')return 14 + 'px'
      else if(this.size==='large')return 20+ 'px'
      else if(parseInt(this.size))return parseInt(this.size)+ 'px'
      else return 14+ 'px'
    }
  },
  data(){
    return {
      isFocus:false
    }
  },
  methods:{
    onchange(e){
      this.$emit('input', e.target.value===''?null:e.target.value)
    },
    clickLabel(){
      !this.isFocus&&this.$refs['r-input'].focus()
    }
  }
}
</script>
<style lang="scss">
  .r-input-item {
    width: 200px;
    height: calc(var(--fontSize) + 20px);
    margin: 30px 10px 0 10px;
    position: relative;
    .input {
      width: 100%;
      height: calc(var(--fontSize) + 20px);
      line-height: calc(var(--fontSize) + 10px);
      font-size: var(--fontSize);
      padding-left: calc((var(--fontSize) + 20px) / 2);
      border: 1px solid gray;
      border-radius: calc((var(--fontSize) + 20px) / 2);
      outline: none;
    }
    .text {
      position: absolute;
      height: 20px;
      line-height: 20px;
      font-size: var(--fontSize - 4px);
      left: 0;
      top: -27px;
    }
  }
  .r-focus{
    .text {
      height: 20px;
      line-height: 20px;
      font-size: var(--fontSize - 4px);
      left: 0;
      top: -27px;
      color: var(--color);
      transition: all .5s;
    }
    .input {
      border-radius: 0;
      border: 1px solid var(--color);
      transition: all .5s;
    }
  }
  .r-blur{
    .text {
      height: calc(var(--fontSize) + 10px);
      line-height: calc(var(--fontSize) + 10px);
      font-size: var(--fontSize);
      left: calc((var(--fontSize) + 20px) / 2);
      top: 7px;
      color: gray;
      transition: all .5s;
      cursor: text;
    }
    .input {
      border-radius: calc((var(--fontSize) + 20px) / 2);
      border: 1px solid gray;
      transition: all .5s;
    }
  }
</style>