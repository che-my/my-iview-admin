<template>
  <div class="about">
    <h1>This is an about page  {{food}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>

