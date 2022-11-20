<template>
    <div>
        <div class="subheader w-100">
            <div class="row align-items-center">
                <div class="col-12 col-md-6">
                    <h1>Настройки</h1>
                </div>
            </div>
        </div>

        <Loader v-if="views.loading" />

        <div v-if="!views.loading" class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <div class="w-100">
                <div class="box px-4 py-4 mb-4">

                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="mb-4">
                                <label class="form-label">WhatsApp</label>
                                <input v-model="whatsapp" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="mb-4">
                                <label class="form-label">Telegram</label>
                                <input v-model="telegram" type="text" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label">Текст сайта (RUS)</label>
                        <ckeditor :editor="editor" v-model="about_text" :config="editorConfig"></ckeditor>
                    </div>

                    <div class="mb-4">
                        <label class="form-label">Текст сайта (ENG)</label>
                        <ckeditor :editor="editor" v-model="about_text_eng" :config="editorConfig"></ckeditor>
                    </div>
                    
                    <button @click="save()" :disabled="!views.saveButton" class="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../Loader.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
    data() {
        return {
            about_text: '',
            about_text_eng: '',
            telegram: '',
            whatsapp: '',

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
        this.loadSettings()
    },
    methods: {
        loadSettings() {
            axios.get('/_admin/settings')
            .then(response => {
                this.about_text = response.data.about_text
                this.about_text_eng = response.data.about_text_eng
                this.telegram = response.data.telegram
                this.whatsapp = response.data.whatsapp

                this.views.loading = false
            })
        },
        save() {
            if(!this.about_text) {
                return this.$swal({
                    text: 'Укажите текст',
                    icon: 'error',
                })
            }
            if(!this.about_text_eng) {
                return this.$swal({
                    text: 'Укажите текст ENG',
                    icon: 'error',
                })
            }
            if(!this.telegram) {
                return this.$swal({
                    text: 'Укажите Telegram',
                    icon: 'error',
                })
            }
            if(!this.whatsapp) {
                return this.$swal({
                    text: 'Укажите WhatsApp',
                    icon: 'error',
                })
            }

            this.views.saveButton = false

            axios.post('/_admin/settings', {
                about_text: this.about_text,
                about_text_eng: this.about_text_eng,
                telegram: this.telegram,
                whatsapp: this.whatsapp,
            })
            .then(response => {
                this.views.saveButton = true

                this.$router.push({ name: 'Leads' })
            })
            .catch(errors => {
                this.views.saveButton = true
                
                return this.$swal({
                    text: 'Ошибка',
                    icon: 'error',
                })
            })
        },
    },
    components: {
        Loader
    }
}
</script>