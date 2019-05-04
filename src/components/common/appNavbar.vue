<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="(item,i) in myData.navbarLinks" :key="i">
                    <router-link class="nav-link" :to="item.Link"><b class="h5-responsive" id="navbar">{{ item.LinkName }}</b></router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
import navData from '@/assets/data/navdata.json'
export default {
    data() {
        return {
            myData : navData
        }
    }
}
</script>

<style>
#navbar {
    color: white;
}
</style>

