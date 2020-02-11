<template>
  <div class="daohang">
    <div class="list">
<div v-for="(item,index) in list" :key='index' class="item"
:class="{active:opan === index? 'isactive':''}"
@click="showColor(index)"
><span>{{item}}</span></div>
    </div>
 <div>
 <!-- <div><button @click="tt">点击我</button></div> -->
    <!-- <button @click="cc">按钮</button> -->
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  created() {},
  data() {
    return {
      // list: ['wu', 'fang', 'yan'],
      isactive: false,
      opan: 0,
      isActive: false
    }
  },
  methods: {
    showColor(aa) {
      // console.log(aa, 111)
      this.opan = aa
    },
    cc() {
      this.isactive = !this.isactive
      // console.log(this.isactive, 222)
      this.$emit('cc', this.isactive)
    }
    // tt() {
    //   this.isActive = !this.isActive
    //   console.log(this.isActive, 888)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.daohang {
  margin-bottom: 30px;
  .active1 {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
  }
  .list {
    display: flex;
    background: #fff;
    padding: 10px 5px;

    .item {
      flex: 1;
      text-align: center;
    }

    .active {
      color: red;
      span {
        border-bottom: solid red 2px;
        padding: 10px 5px;
      }
    }
  }
}
</style>