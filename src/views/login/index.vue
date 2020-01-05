<template>
<div class="login">
  <h1>我是login</h1>

  <p><input> </p>
  <p><input> </p>
  <p><input type="button" value="登录" @click="loginIn"> </p>
 
  </div>
</template>
<script>
import { getList } from '../../api/api'
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  components: {},
  created() {
  },
  computed: {},
  mounted() {},
  methods: {
    loginIn() {
      getList({ dictGroupCode: 'ENGINEER_CODE' }).then(res => {
        console.log(res, 111)
      })
    }
  }
}
</script>
<style scoped lang="less">
.login {
  text-align: center;
}
</style>
