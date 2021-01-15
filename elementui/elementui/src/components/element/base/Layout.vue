<template>
  <div>
    <h1>Layout布局</h1>
    <!-- 基础布局 -->
    <BaseLayout></BaseLayout>
    <!-- 分隔布局 -->
    <SubfieldLayout></SubfieldLayout>
    <!-- 混合布局 -->
    <MixedLayout></MixedLayout>
    <!-- 分栏布局 -->
    <ColumnOffsetLayout></ColumnOffsetLayout>
    <!-- 对齐方式 -->
    <AlignLayout></AlignLayout>
    <!-- 响应式布局 -->
    <ResponsiveLayout></ResponsiveLayout>
    <!-- 组件展示 -->
    <router-view />
  </div>
</template>
<script>
import BaseLayout from '@/components/element/base/layout/BaseLayout'
import SubfieldLayout from '@/components/element/base/layout/SubfieldLayout'
import MixedLayout from '@/components/element/base/layout/MixedLayout'
import ColumnOffsetLayout from '@/components/element/base/layout/ColumnOffsetLayout'
import AlignLayout from '@/components/element/base/layout/AlignLayout'
import ResponsiveLayout from '@/components/element/base/layout/ResponsiveLayout'
export default {
  name: 'Layout',
  components: {
    BaseLayout,
    SubfieldLayout,
    MixedLayout,
    ColumnOffsetLayout,
    AlignLayout,
    ResponsiveLayout,
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