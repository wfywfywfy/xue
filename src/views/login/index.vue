<template>
<div class="login">
  <h1>我是login</h1>
  <p><input> </p>
  <p><input> </p>
  <p><input type="button" value="登录" @click="loginIn"> </p>
 <daohang :list="ll" ref="daohang" @cc="hh('oo',$event)" :class="{'active1':isActive}"></daohang>
 <daohang :list="ll" v-if="isActive"></daohang>
 <div><button @click="tt">点击我</button></div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  <div>wo shi</div>
  
  </div>
</template>
<script>
import { getList } from '../../api/api'
import daohang from '@/components/daohang'
export default {
  name: '',
  props: {},
  data() {
    return {
      ll: [],
      isActive: false,
      scrollTop: '',
      offsetTop: 0
    }
  },
  components: {
    daohang
  },
  created() {
    this.ll = ['wu', 'fang', 'yan']
  },
  computed: {},
  mounted() {
    this.offsetTop = document.querySelector('.daohang').offsetTop
    window.addEventListener('scroll', this.handleScroll)
    // console.log(offsetTop, 777)
  },
  computed: {
    // scrollTop() {
    //   return this.handleScroll()
    // }
  },
  methods: {
    loginIn() {
      getList({ dictGroupCode: 'ENGINEER_CODE' }).then(res => {
        console.log(res, 111)
      })
    },
    hh(a, b) {
      console.log(a, b, 55)
    },
    tt() {
      this.isActive = !this.isActive
      console.log(this.isActive, 888)
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (this.scrollTop >= this.offsetTop) {
        this.isActive = true
        console.log(this.isActive, 666)
      } else {
        this.isActive = false
      }
    }
  }
}
</script>
<style scoped lang="less">
.login {
  h1 {
    margin: 0px;
  }

  background: #bfa;
  text-align: center;
  .active1 {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
  }
}
</style>
