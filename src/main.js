// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  data: {
    title: "hello vuejs",
    subTitle: "Vue React Angular is good",
    showSub: true,
    mytodo:"",
    todos: [
      "吃饭",
      "睡觉",
      "写代码"
    ]
  },
  methods: {
    handleClick(){
      this.todos.push(this.mytodo);
      // console.log(this.mytodo);
      this.mytodo = ""
    }
  }
})
