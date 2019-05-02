<template>
  <div class="home">
    <HomeStartScreen></HomeStartScreen>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeStartScreen from '@/components/home/HomeStartScreen.vue'

export default {
  name: 'home',
  components: {
    HomeStartScreen
  }
}
</script>
