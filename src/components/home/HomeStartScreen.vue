<template>
    <div class="containers mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <hr>
                    <br>
                    <h3 class="h3-responsive text-muted">
                        <i class="fa fa-podcast"></i>&nbsp;
                        <b>Top Headlines of India</b>
                    </h3>
                    <br>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" v-if="showLoader" role="status">
                    <span class="sr-only">Loading...</span>
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
            <br>
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
            showLoader: true,
            headlines: fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a7ead77a9d4d4005b87949ef73a8cb15')
            .then(data => data.json())
            .then(data => {
                this.headlines = data.articles;
                this.showLoader = false;
            })
        }
    }
}
</script>