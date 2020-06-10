/*
 * @Author: your name
 * @Date: 2020-06-09 17:28:18
 * @LastEditTime: 2020-06-09 17:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\index.js
 */ 
import Vue from "vue";
import Rinput from "./R-input.vue";

const Components = {
  Rinput
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;