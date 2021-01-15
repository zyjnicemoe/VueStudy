<template>
  <div class="footer">
    <p id="footerinfo">Copyright © 2019-2020 逝水无痕の博客. All Rights Reserved.</p>
    <div>
      <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener">
        <img
          class="icp-icon entered loading"
          src="http://img.zyjblogs.cn/icp.png"
          data-ll-status="loading"
        />
        <span>鄂ICP备19023232号</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  components: {},
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
<style>
* {
  margin: 0;
  padding: 0;
}
#footerinfo {
  color: #666666;
}
.footer {
  text-align: center;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>