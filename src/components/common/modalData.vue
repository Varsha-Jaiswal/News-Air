<template>
<div>
    <button class="btn btn-outline-info ml-3" data-toggle="modal" data-target="#news-description">Read More >></button>
    <div class="modal fade" id="news-description" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-info" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="heading lead">{{ data.modalData.source.name }}</p>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <img :src="data.modalData.urlToImage" class="mb-3" width="50%" height="80%"/>
                        <p>{{ data.modalData.description }}</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <a v-bind:href="data.modalData.url" target="_blank" class="btn btn-primary">Read Details</a>
                    <a  class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        data: {
            modalData: {}
        }
    }
}
</script>
