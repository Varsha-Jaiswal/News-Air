<template>
  <div class="articles">
    <Articles></Articles>
  </div>
</template>

<script>
// @ is an alias to /src
import Articles from '@/components/articles/Articles.vue'

export default {
  name: 'articles',
  components: {
    Articles
  }
}
</script>
