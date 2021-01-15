<template>
  <div>
    <h1>图标</h1>
    <UseIcon></UseIcon>
    <router-view />
  </div>
</template>
<script>
import UseIcon from '../base/icon/UseIcon'
export default {
  name: 'Icon',
  components: {
    UseIcon,
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