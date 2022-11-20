<template>
    <div>
        <div class="subheader w-100 mb-3">
            <div class="row align-items-center">
                <div class="col-12">
                    <h1>
                        <div class="d-block">
                            <template v-if="$route.params.id">{{ category.name }}</template>
                            <template v-if="!$route.params.id">Новая категория</template>
                        </div>
                    </h1>
                </div>
            </div>
        </div>

        <Loader v-if="views.loading" />

        <div v-if="!views.loading" class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <div class="w-100">
                <div class="mb-3">
                    <div class="box mb-4 p-4">
                        <div class="row">
                            <div class="col-12 col-lg-5">
                                <label class="form-label">Название (RUS)</label>
                                <input v-model="name" type="text" class="form-control">
                            </div>
                            <div class="col-12 col-lg-5">
                                <label class="form-label">Название (ENG)</label>
                                <input v-model="name_eng" type="text" class="form-control">
                            </div>
                            <div class="col-12 col-lg-2">
                                <label class="form-label">Сортировка</label>
                                <input v-model="order" type="number" min="0" class="form-control">
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="mb-3">
                    <div class="box mb-4 p-4">
                        <label class="form-label">Картинка</label>
                        <file-pond
                            name="image"
                            ref="image"
                            label-idle="Выбрать картинку..."
                            v-bind:allow-multiple="false"
                            v-bind:allow-reorder="false"
                            accepted-file-types="image/jpeg, image/png"
                            :server="server"
                            v-bind:files="filepond_image_edit"
                        />
                    </div>
                </div>

                <button @click="save()" :disabled="!views.saveButton" class="btn btn-primary mb-4">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../Loader.vue'

import vueFilePond from "vue-filepond"
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

export default {
    data() {
        return {
            category: {},

            name: '',
            name_eng: '',
            order: 0,
            image: '',

            filepond_image: [],
            filepond_image_edit: [],

            views: {
                loading: true,
                saveButton: true,
            },

            server: {
                remove(filename, load) {
                    load('1');
                },
                process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                    const formData = new FormData();
                    formData.append(fieldName, file, file.name);
                    const request = new XMLHttpRequest();
                    request.open('POST', '/_admin/file/upload');
                    request.upload.onprogress = (e) => {
                        progress(e.lengthComputable, e.loaded, e.total);
                    };
                    request.onload = function() {
                        if (request.status >= 200 && request.status < 300) {
                            load(request.responseText);
                        }
                        else {
                            error('oh no');
                        }
                    };
                    request.send(formData);
                    return {
                        abort: () => {
                            request.abort();
                            abort();
                        }
                    };
                },
                revert: (filename, load) => {
                    load(filename)
                },
                load: (source, load, error, progress, abort, headers) => {
                    var myRequest = new Request(source);
                    fetch(myRequest).then(function(response) {
                        response.blob().then(function(myBlob) {
                            load(myBlob)
                        });
                    });
                },
            },
        }
    },
    created() {
        if(this.$route.params.id) {
            this.loadCategory()
        } else {
            this.views.loading = false
        }
    },
    methods: {
        loadCategory() {
            axios.get(`/_admin/category/${this.$route.params.id}`)
            .then(response => {
                this.category = response.data

                this.name = response.data.name
                this.name_eng = response.data.name_eng

                if(response.data.image) {
                    this.filepond_image_edit = [
                        {
                            source: response.data.image,
                            options: {
                                type: 'local',
                            }
                        }
                    ]
                }

                this.views.loading = false
            })
        },
        save() {
            if(document.getElementsByName("image")[0]) {
                this.image = document.getElementsByName("image")[0].value
            }

            if(!this.name) {
                return this.$swal({
                    text: 'Укажите название',
                    icon: 'error',
                })
            }
            if(!this.name_eng) {
                return this.$swal({
                    text: 'Укажите название на английском',
                    icon: 'error',
                })
            }
            if(!this.image) {
                return this.$swal({
                    text: 'Укажите картинку',
                    icon: 'error',
                })
            }
            if(!this.order) {
                return this.$swal({
                    text: 'Укажите сортировку',
                    icon: 'error',
                })
            }

            this.views.saveButton = false

            if(this.$route.params.id) {
                axios.put(`/_admin/category/${this.$route.params.id}/update`, {
                    name: this.name,
                    name_eng: this.name_eng,
                    image: this.image,
                    order: this.order,
                })
                .then(response => {
                    this.views.saveButton = true

                    this.$router.push({ name: 'Category', params: {id: this.category.id} })
                })
                .catch(errors => {
                    this.views.saveButton = true
                    
                    return this.$swal({
                        text: 'Ошибка',
                        icon: 'error',
                    })
                })
            }

            if(!this.$route.params.id) {
                axios.post('/_admin/categories', {
                    name: this.name,
                    name_eng: this.name_eng,
                    image: this.image,
                    order: this.order,
                })
                .then(response => {
                    this.views.saveButton = true

                    this.$router.push({ name: 'Category', params: {id: this.selected.category} })
                })
                .catch(errors => {
                    this.views.saveButton = true
                    
                    return this.$swal({
                        text: 'Ошибка',
                        icon: 'error',
                    })
                })
            }

            
        }
    },
    components: {
        Loader,
        FilePond,
    }
}
</script>