/**
 * Created by root on 2017/10/11.
 * vue双向数据绑定，响应原理(数据劫持结合发布者-订阅者模式)
 */

/**
 * 定义数据监听器，监听数据变化
 */
function observe(data){
  if(data && typeof data=='object' && !Array.isArray(data)){
    Object.keys(data).forEach(function(key){
      defineReactive(data,key,data[key]);
    })
  }
}

/**
 * 递归遍历原始数据，为每项定义get,set方法
 * @param data
 * @param key
 * @param val
 */
function defineReactive(data,key,val){
  observe(val);
  Object.defineProperty(data,key,{
    enumerable:true,
    configurable:false,
    get: function(){
      return val;
    },
    set: function(newVal){
      console.log(`监听到了值变化:`,val,`==>`,newVal);
      val = newVal;
    }
  });
}
var test = {first:"tb"};
observe(test);
test.first = "nn";

