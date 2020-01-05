<template>
<div class="home">
  <h1>我是home</h1>
  <router-link :to='{name:"about",params:{title:"about"}}'>about</router-link> |||
  <router-link :to='{path:"/cc",query:{title:"CC"}}'>CC</router-link>
  <router-view> </router-view>
  <!-- <p><input> </p> -->
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
</style>
