<template>
  <div class="top-headlines">
    <TopHeadlines></TopHeadlines>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeadlines from '@/components/top-headlines/TopHeadlines'

export default {
  name: 'top-headlines',
  components: {
    TopHeadlines
  }
}
</script>
