<template>
<div class="yy">
  <h1 v-if="$route.name === 'ww'">我是ww</h1>
   <h1 v-else="$route.name === 'ff'">我是ff</h1>
<div class="head"><router-view></router-view></div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      animations: 'string'
    }
  },
  components: {},
  created() {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.head {
  height: 900px;
  width: 500px;
  background: url('../../assets/logo.png') no-repeat;
  border: solid 1px red;
  background-size: 100%;
}
</style>