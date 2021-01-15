<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <el-row class="tac">
          <!-- 左边 -->
          <el-col :span="4">
            <NavMenu></NavMenu>
          </el-col>
          <!-- 右边 -->
          <el-col :span="18">
            <router-view />
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import NavMenu from './NavMenu'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Home',
  components: {
    NavMenu,
    Header,
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

<style  scoped>
</style>