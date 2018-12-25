<template>
  <div>
    <h2>my_user_name:{{name}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'xiaoming' // 当没有参数传来,显示默认值
    }
  },
  methods: {

  }
}
</script>
