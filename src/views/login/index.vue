<template>
<div class="login">
  <h1>我是login</h1>
  <div v-if="list.length>0"> 
 <table border="1" style="width:300px;height:150px;" class="mtable">
   <thead>
   <tr>
     <th>书籍</th>
     <th>价格</th>
     <th>数量</th>
     <th>操作</th>
   </tr>
   </thead>
   <tbody>
     <tr v-for="(item,index) in list">
       <td>{{item.book}}</td>
        <td>{{item.price | toprice}}</td>
         <td>
           <button @click="decrease(index)" :disabled="item.num<2">-</button>
           {{item.num}}
            <button @click="increase(index)">+</button>
           </td>
          <td><button @click="del(index)">删除</button></td>
     </tr>
     </tbody>
    
   </table>
    <h1>总价格:{{total | toprice}}</h1>
    </div>
    <h1 v-else>购物车清空了</h1>
  </div>
</template>
<script>
export default {
  filters: {
    toprice(cc) {
      return '￥' + cc.toFixed(2)
    }
  },
  name: '',
  props: {},
  data() {
    return {
      list: [
        {
          book: 'wu',
          price: 10,
          num: 1
        },
        {
          book: 'fang',
          price: 20,
          num: 1
        },
        {
          book: 'yan',
          price: 30,
          num: 1
        }
      ]
    }
  },
  components: {},
  created() {},
  computed: {
    total() {
      let regult = 0
      this.list.forEach(ele => {
        regult += ele.price * ele.num
      })
      return regult
    }
  },
  mounted() {},

  beforeDestroy() {},
  methods: {
    del(index) {
      this.list.splice(index, 1)
    },
    increase(index) {
      this.list[index].num += 1
    },
    decrease(index) {
      this.list[index].num -= 1
    }
  }
}
</script>
<style scoped lang="less">
.login {
  .mtable {
    text-align: center;
  }
}
</style>
