<template>
  <div id="app">
    <div id="nav">
      <Layout />
    </div>
  </div>
</template>
<script>
import Layout from './components/Layout.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    Layout
  }
}
</script>
<style>
button:focus {
  outline: none;
}
input:focus {
  outline: none;
}
a:focus {
  outline: none;
}
select:focus {
  outline: none;
}
</style>
