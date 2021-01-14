<template>
  <div>
    <h1>Home模块</h1>
    <div style="width: 100%;height: 300px;background-color:pink;"></div>
    <!-- 使用组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Home',
  components: {
    //注册组件
    Footer
  },
  directives: {},
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
};
</script>

<style lang="" scoped>
</style>