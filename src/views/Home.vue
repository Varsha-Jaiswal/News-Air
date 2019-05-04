<template>
  <div class="home">
    <About></About>
    <HomeStartScreen></HomeStartScreen>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeStartScreen from '@/components/home/HomeStartScreen.vue'
import About from '@/components/home/about.vue'

export default {
  name: 'home',
  components: {
    HomeStartScreen,
    About
  }
}
</script>
