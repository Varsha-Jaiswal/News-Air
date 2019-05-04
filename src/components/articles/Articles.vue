<template>
    <div class="containers mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="h3-responsive text-muted">
                        <i class="fab fa-firstdraft"></i>&nbsp;
                        <b>
                            Recent {{ searchQuery }} Articles
                        </b>
                    </h3>
                    <br><br>
                    <form>
                        <div class="form-group">
                            <label for="searchQuery"><b>Article Title</b></label>
                            <input type="text" class="form-control" id="searchQuery" placeholder="Type to search!!">
                        </div>
                    </form>
                    <button class="btn btn-info " v-on:click="loadArticles">Load Articles</button>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" v-if="showLoader" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> 
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-12 mb-2" v-for="(article, i) in articles" :key="i" >
                        <div class="card" style="min-height:220px; max-height:220px;" >
                            <div class="card-body">
                                <p class="card-body text-muted"><b> {{ article.source.name }}</b><br>
                                    {{ article.title }}
                                </p>
                                <ModalData :data="{modalData:article}" />
                            </div>
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
            articles: [],
            showLoader:false,
            searchQuery: ''
        }
    },
    methods: {
        loadArticles() {
            this.searchQuery = document.getElementById('searchQuery').value;
            this.searchQuery =  this.searchQuery.charAt(0).toUpperCase() + this.searchQuery.slice(1);
            this.showLoader = true;
            fetch(`https://newsapi.org/v2/everything?q=${this.searchQuery}&apiKey=a7ead77a9d4d4005b87949ef73a8cb15`)
            .then(data => data.json())
            .then(data => {
                this.articles = data.articles;
                this.showLoader = false;
            })
        }
    }
}
</script>