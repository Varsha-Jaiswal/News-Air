<template>
    <div class="containers mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2>Top Headlines of India</h2><br>
                    <button class="btn btn-secondary " v-on:click="loadHeadlines">Load Headlines</button><hr>
                </div>
            </div>
        </div>
        <div class="container mt-3">
            <div class="row"> 
                <div class="col-md-12 mb-2" v-for="(headline, i) in headlines" :key="i" >
                    <div class="card" style="min-height:220px; max-height:220px;" >
                        <div class="card-body">
                            <p class="card-body text-muted"><b> {{ headline.source.name }}</b><br>
                                {{ headline.title }}
                            </p>
                            <ModalData :data="{modalData:headline}" />
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    </div>
</template>

<script>
import ModalData from '@/components/common/modalData.vue'

export default{
    components: {
        ModalData
    },
    data() {
        return {
            headlines: []
        }
    },
    methods: {
        loadHeadlines() {
            fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a7ead77a9d4d4005b87949ef73a8cb15')
            .then(data => data.json())
            .then(data => {
                this.headlines = data.articles;
            })
        }
    }
}
</script>