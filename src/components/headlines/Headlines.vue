<template>
    <div class="containers mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2>Top {{ categoryName }} Headlines from {{ countryName }}</h2><br>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="country-value">Country</label>
                                    </div>
                                    <select class="custom-select" id="country-value" >
                                        <option v-for="(country, code) in countries" :key="code" v-bind:value="code">
                                            {{country}}
                                        </option>
                                    </select>
                                </div>      
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="category-value">Category</label>
                                    </div>
                                    <select class="custom-select" id="category-value" >
                                        <option v-for="(category, code) in categories" :key="code" v-bind:value="code">
                                            {{category}}
                                        </option>
                                    </select>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-secondary " v-on:click="loadArticles">Load News</button><hr>
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
import countryData from '@/assets/data/country.json'
import categoryData from '@/assets/data/category.json'

export default{
    components: {
        ModalData
    },
    data() {
        return {
            articles: [],
            showLoader:false,
            countryCode: '',
            countryName: '',
            categoryCode: '',
            categoryName: '',
            countries: countryData.countries,
            categories: categoryData.categories
        }
    },
    methods: {
        loadArticles() {
            this.countryCode = document.getElementById('country-value').value;
            this.countryName = this.countries[this.countryCode];
            this.categoryCode = document.getElementById('category-value').value;
            this.categoryName = this.categories[this.categoryCode];
            this.showLoader = true;
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=${this.categoryCode}&apiKey=a7ead77a9d4d4005b87949ef73a8cb15`)
            .then(data => data.json())
            .then(data => {
                this.articles = data.articles;
                this.showLoader = false;
            })
        }
    }
}
</script>