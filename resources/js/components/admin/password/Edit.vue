<template>
    <div>
        <div class="subheader w-100">
            <div class="row align-items-center">
                <div class="col-12 col-md-6">
                    <h1>Изменить пароль</h1>
                </div>
            </div>
        </div>

        <Loader v-if="views.loading" />

        <div v-if="!views.loading" class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <div class="w-100">
                <div class="box px-4 py-4 mb-4">
                    <div class="mb-4">
                        <label>Логин</label>
                        <input v-model="email" type="text" class="form-control" disabled>
                    </div>
                    <div class="mb-4">
                        <label>Новый пароль</label>
                        <input v-model="password" type="text" class="form-control">
                    </div>
                    <button @click="save()" :disabled="!views.saveButton" class="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../Loader'

export default {
    data() {
        return {
            email: '',
            password: '',

            views: {
                loading: true,
                saveButton: true,
            }
        }
    },
    created() {
        this.loadUser()
    },
    methods: {
        loadUser() {
            axios.get('/_admin/user/2')
            .then(response => {
                this.email = response.data.email

                this.views.loading = false
            })
        },
        save() {
            if(!this.password) {
                return this.$swal({
                    text: 'Укажите новый пароль',
                    icon: 'error',
                })
            }

            this.views.saveButton = false

            axios.put('/_admin/user/2/update', {
                password: this.password,
            })
            .then(response => {
                this.views.saveButton = true

                this.$router.push({ name: 'Numbers' })
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