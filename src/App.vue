<template>
  <div id="app">
    <div id="nav">
      <Layout v-if="!current_path.includes('page1') && !current_path.includes('page2') && !current_path.includes('page3')" />
      <div v-else>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Layout from './components/Layout.vue'
export default {
  data() {
    return {
      current_path: window.location.pathname
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
