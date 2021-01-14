<template>
  <div>
    <h1>学生模块</h1>
    <!--            用户信息展示-->
    <table border="1">
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>班级</th>
        <th>电话</th>
        <th>密码</th>
        <th>操作</th>
      </tr>
      <tbody>
        <tr v-for="stu in students" :key="stu.id">
          <td>{{ stu.id}}</td>
          <td>{{ stu.name}}</td>
          <td>{{ stu.age}}</td>
          <td>{{ stu.clazz}}</td>
          <td>{{ stu.tel}}</td>
          <td>{{ stu.password}}</td>
          <td>
            <button>删除</button>&nbsp;&nbsp;
            <button>修改</button>&nbsp;&nbsp;
            <button>添加</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './Footer'
export default {
  name: 'Student',
  components: {
    Footer,
  },
  directives: {},
  data () {
    return {
      students: [
        { id: 1, name: '张三', age: 23, clazz: '软工1702', tel: '13456789012', password: 123456 },
        { id: 2, name: '李四', age: 23, clazz: '软工1702', tel: '13456789012', password: 123456 }
      ]
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