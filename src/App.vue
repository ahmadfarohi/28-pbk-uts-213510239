<template>
  <center>
    <div class="links">
      <RouterLink to="/" active-class="active" class="tombol">TodoList</RouterLink>
      <RouterLink to="/about" active-class="active" class="tombol">About</RouterLink>
      <RouterLink to="/store" active-class="active" class="tombol">Store</RouterLink>
    </div>
    <RouterView />
  </center>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
.active {
  color: green;
}

.tombol {
  margin-top: 100px;
  margin-right: 60px;
}
</style>
