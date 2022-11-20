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
                            {{ product.name }}
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

                this.views.loading = false
            })
        },
        save() {
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

            this.views.saveButton = false

            if(this.$route.params.id) {
                axios.put(`/_admin/product/${this.$route.params.id}/update`, {
                    name: this.name,
                    name_eng: this.name_eng,
                    name_eng: this.name_eng,
                    description: this.description,
                    description_eng: this.description_eng,
                    price_rub: this.price_rub,
                    price_usd: this.price_usd,
                    category_id: this.selected.category,
                    order: this.order,
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
                    name_eng: this.name_eng,
                    description: this.description,
                    description_eng: this.description_eng,
                    price_rub: this.price_rub,
                    price_usd: this.price_usd,
                    category_id: this.selected.category,
                    order: this.order,
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

            
        }
    },
    components: {
        Loader,
        FilePond,
    }
}
</script>