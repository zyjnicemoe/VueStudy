<template>
  <div>
    <h1>Container 布局容器</h1>
    <!-- 常见布局 -->
    <CommonContainer></CommonContainer>
    <!-- 实例 -->
    <ContainerDemo></ContainerDemo>

    <router-view />
  </div>
</template>
<script>
import CommonContainer from '@/components/element/base/container/CommonContainer'
import ContainerDemo from '@/components/element/base/container/ContainerDemo'
export default {
  name: 'Container',
  components: {
    CommonContainer,
    ContainerDemo
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