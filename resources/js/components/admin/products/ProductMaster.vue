<template>
    <div>
        <div class="subheader w-100 mb-3">
            <div class="row align-items-center">
                <div class="col-12">
                    <h1>
                        <template v-if="product.category">
                            <router-link :to="{name: 'Category', params: {id: product.category_id} }">Назад</router-link>
                            <span class="text-muted me-2">/</span>
                        </template>
                        
                        <div class="d-block">
                            <template v-if="$route.params.id">{{ product.name }}</template>
                            <template v-if="!$route.params.id">Новый товар</template>
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
                            <div class="col-12 col-lg-6">
                                <label class="form-label">Название (RUS)</label>
                                <input v-model="name" type="text" class="form-control">
                            </div>
                            <div class="col-12 col-lg-6">
                                <label class="form-label">Название (ENG)</label>
                                <input v-model="name_eng" type="text" class="form-control">
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="mb-3">
                    <div class="box mb-4 p-4">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <label class="form-label">Категория</label>
                                <select v-model="selected.category" class="form-select">
                                    <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                                </select>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="row">
                                    <div class="col-12 col-lg-4">
                                        <label class="form-label">Цена (RUB)</label>
                                        <input v-model="price_rub" type="number" min="0" class="form-control">
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <label class="form-label">Цена (USD)</label>
                                        <input v-model="price_usd" type="number" min="0" class="form-control">
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <label class="form-label">Сортировка</label>
                                        <input v-model="order" type="number" min="0" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <div class="box mb-4 p-4">
                        <div class="form-check">
                            <input type="radio" id="w1" v-model="watermark" value="w1" class="form-check-input">
                            <label for="w1" class="form-check-label">Водяной знак (наклонный текст)</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="w2" v-model="watermark" value="w2" class="form-check-input">
                            <label for="w2" class="form-check-label">Водяной знак (прямой текст)</label>
                        </div>
                        <p class="text-muted mb-4"><small>При изменении водяного знака, все фотки придется загружать заново!</small></p>

                        <label class="form-label">Фотки</label>
                        <file-pond
                            name="gallery[]"
                            ref="gallery"
                            label-idle="Выбрать картинки..."
                            v-bind:allow-multiple="true"
                            v-bind:allow-reorder="true"
                            accepted-file-types="image/jpeg, image/png"
                            :server="server"
                            v-bind:files="filepond_gallery_edit"
                        />
                    </div>
                </div>

                <div class="mb-3">
                    <div class="box mb-4 p-4">
                        <label class="form-label">Описание</label>
                        <ckeditor :editor="editor" v-model="description" :config="editorConfig"></ckeditor>
                    </div>
                </div>

                <div class="mb-3">
                    <div class="box mb-4 p-4">
                        <label class="form-label">Описание (ENG)</label>
                        <ckeditor :editor="editor" v-model="description_eng" :config="editorConfig"></ckeditor>
                    </div>
                </div>

                <button @click="save()" :disabled="!views.saveButton" class="btn btn-primary mb-4">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../Loader.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import vueFilePond from "vue-filepond"
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

export default {
    data() {
        return {
            product: {},

            name: '',
            name_eng: '',
            description: '',
            description_eng: '',
            price_rub: 0,
            price_usd: 0,
            order: 0,

            categories: [],

            selected: {
                category: '',
            },

            filepond_gallery: [],
            filepond_gallery_edit: [],

            watermark: 'w1',

            views: {
                loading: true,
                saveButton: true,
            },

            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                toolbar: [ 'heading', 'bold', '|', 'bulletedList', 'numberedList', '|', 'insertTable', '|', 'undo', 'redo' ],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Тег P' },
                    ]
                },
            },

            server: {
                remove(filename, load) {
                    load('1');
                },
                process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                    const formData = new FormData();
                    formData.append(fieldName, file, file.name);
                    formData.append('watermark', this.watermark);
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
        this.loadCategories()

        if(this.$route.params.id) {
            this.loadProduct()
        } else {
            this.views.loading = false
        }
    },
    methods: {
        loadCategories() {
            axios.get('/_admin/categories')
            .then(response => {
                this.categories = response.data
            })
        },
        loadProduct() {
            axios.get(`/_admin/product/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data

                this.selected.category = response.data.category_id

                this.name = response.data.name
                this.name_eng = response.data.name_eng
                this.description = response.data.description
                this.description_eng = response.data.description_eng
                this.price_rub = response.data.price_rub
                this.price_usd = response.data.price_usd
                this.order = response.data.order

                if(response.data.gallery) {
                    this.filepond_gallery_edit = response.data.gallery.map(function(element){
                        {
                            return {
                                source: element,
                                options: {
                                    type: 'local',
                                }
                            } 
                        }
                    })
                }

                this.views.loading = false
            })
        },
        save() {
            if(document.getElementsByName("gallery[]")) {
                this.gallery = []
                document.getElementsByName("gallery[]").forEach((i) => {
                    if(i.value) {
                        this.gallery.push(i.value)
                    }
                })
            }

            if(!this.selected.category) {
                return this.$swal({
                    text: 'Укажите категорию',
                    icon: 'error',
                })
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
            if(!this.description) {
                return this.$swal({
                    text: 'Укажите описание',
                    icon: 'error',
                })
            }
            if(!this.description_eng) {
                return this.$swal({
                    text: 'Укажите описание на английском',
                    icon: 'error',
                })
            }
            if(!this.price_rub) {
                return this.$swal({
                    text: 'Укажите цену',
                    icon: 'error',
                })
            }
            if(!this.price_usd) {
                return this.$swal({
                    text: 'Укажите цену',
                    icon: 'error',
                })
            }
            if(!this.order) {
                return this.$swal({
                    text: 'Укажите сортировку',
                    icon: 'error',
                })
            }
            if(!this.gallery) {
                return this.$swal({
                    text: 'Укажите фотки',
                    icon: 'error',
                })
            }

            this.views.saveButton = false

            if(this.$route.params.id) {
                axios.put(`/_admin/product/${this.$route.params.id}/update`, {
                    name: this.name,
                    name_eng: this.name_eng,
                    description: this.description,
                    description_eng: this.description_eng,
                    price_rub: this.price_rub,
                    price_usd: this.price_usd,
                    category_id: this.selected.category,
                    order: this.order,
                    gallery: this.gallery,
                })
                .then(response => {
                    this.views.saveButton = true

                    this.$router.push({ name: 'Category', params: {id: this.product.category_id} })
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
                axios.post('/_admin/products', {
                    name: this.name,
                    name_eng: this.name_eng,
                    description: this.description,
                    description_eng: this.description_eng,
                    price_rub: this.price_rub,
                    price_usd: this.price_usd,
                    category_id: this.selected.category,
                    order: this.order,
                    gallery: this.gallery,
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