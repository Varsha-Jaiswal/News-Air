<template>
    <div class="containers mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="h3-responsive text-muted">
                        <i class="fa fa-podcast"></i>&nbsp;
                        <b>
                            Top {{ categoryName }} Headlines From {{ countryName }}
                        </b>
                    </h3>
                    <br>
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
                    <button class="btn btn-info" v-on:click="loadArticles">Load News</button><hr>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" v-if="showLoader" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> 
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-12 text-center" v-if="showNotFound == true">
                        <p class="text-muted">Data Not Found</p>
                    </div>
                    <div class="col-md-4 col-sm-6 p-0" v-else v-for="(article, i) in articles" :key="i" style="border-radius:8px"  >
                        <div class="m-2 p-0" style="border: 1px solid rgb(224, 224, 224);border-radius:8px;"> 
                            <img v-if="article.urlToImage" :src="article.urlToImage" width="100%" height="200vh" alt="" srcset="">
                            <img v-else :src="require('@/assets/img/imgNotFound.jpg')" width="100%" height="200vh" alt="" srcset="">
                            <div class="p-3">
                                <span style="font-size:80%;background-color:#e0e0e0;border:1px solid #e0e0e0;border-radius:7px" class="text-muted mt-1 mb-0 p-1">{{ article.source.name }}</span>
                                <p class="mb-0 mt-1"><b>{{ article.title | summery(50) }}</b></p> 
                                <p style="font-size:80%" class="text-muted mt-1 mb-1">{{article.publishedAt | dateFilter}}</p>
                                <p style="font-size:80%">{{article.description | summery(100)}}</p>
                                <button class="btn btn-sm z-depth-0 btn-light m-0" data-toggle="modal" :data-target="'#myModal'+i">Read More >></button>  
                            </div>       
                            <div class="modal fade" :id="'myModal'+i" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-notify modal-md" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <img v-if="article.urlToImage" :src="article.urlToImage" class="mb-3" width="100%" style="float:right"/>
                                                        <span style="font-size:80%;background-color:#e0e0e0;border:1px solid #e0e0e0;border-radius:7px" class="text-muted mt-1 mb-0 p-1">{{ article.source.name }}</span>
                                                        <p style="font-size:95%" class="text-muted mt-1 mb-1">{{article.publishedAt | dateFilter}}</p>
                                                        <h5 class="mb-0 mt-1 h5-responsive"><b>{{ article.title  }}</b></h5> 
                                                        <p class="mb-2 mt-2" style="font-size:100%">{{article.description }}</p>
                                                        <a v-bind:href="article.url" target="_blank" class="btn btn-sm btn-outline-mdb-color m-0 mt-2 z-depth-0">Read Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer justify-content-right">
                                            <a  class="btn btn-outline-info btn-sm z-depth-0 waves-effect" data-dismiss="modal">Close</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import countryData from '@/assets/data/country.json'
import categoryData from '@/assets/data/category.json'
export default{
    data() {
        return {
            articles: [],
            showLoader:false,
            showNotFound:false,
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
            this.showNotFound = false;
            this.showLoader = true;
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=${this.categoryCode}&apiKey=a7ead77a9d4d4005b87949ef73a8cb15`)
            .then(data => data.json())
            .then(data => {
                if(data.articles.length>0){
                    this.articles = data.articles;
                    this.showLoader = false;
                }
                else{
                    this.showLoader = false;
                    this.showNotFound = true;
                }
            })
        }
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+"..."
        },
        dateFilter: (value)=>{
            const date = new Date(value)
            return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
        }
    }
}
</script>