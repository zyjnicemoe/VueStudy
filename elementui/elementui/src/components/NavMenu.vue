<template>
  <div>
    <h5>ElementUI</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <template slot="title">base</template>
          <router-link to="/home/base/layout">
            <el-menu-item index="1-1">Layout布局</el-menu-item>
          </router-link>
          <router-link to="/home/base/container">
            <el-menu-item index="1-2">Container布局容器</el-menu-item>
          </router-link>
          <router-link to="/home/base/icon">
            <el-menu-item index="/home/base/icon">Icon图标</el-menu-item>
          </router-link>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavMenu',
  components: {},
  directives: {},
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
};
</script>
<style lang="" scoped>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>