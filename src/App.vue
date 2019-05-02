<template>
  <div id="app">
    <AppNavbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view/>
        </div>
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavbar from '@/components/common/appNavbar'
import AppFooter from '@/components/common/appFooter'
export default {
  components:{
    AppNavbar,
    AppFooter
  }  
}
</script>


<style>

</style>
