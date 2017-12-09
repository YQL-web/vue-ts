<template>
  <div>
    <p>{{msg}}</p>
    <h1>{{data.first}}&nbsp{{data.last}}</h1>
    <button @click="test"></button>
  </div>
</template>
<script lang="ts" type="text/ecmascript-6">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  interface Data {
    first:string;
    last:string;
  }

  @Component
  export default class Login extends Vue{
    msg:string = "用ts创建的首页";
    data:Data= {first:"hello",last:"world"};
    test():void{
      alert(this.msg)
    }
  }
</script>
<style scoped lang="less">
  @import '../../assets/style/base.less';
  div {
    p{
      font-size: 20px;
      .base;
    }
    button{width:100px;height: 40px;}
  }
</style>
