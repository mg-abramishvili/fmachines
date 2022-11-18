<template>
    <div>
        <div class="subheader w-100 mb-3">
            <div class="row align-items-center">
                <div class="col-12 col-md-7">
                    <h1>
                        <router-link :to="{name: 'Categories'}">Каталог</router-link>
                        <span class="text-muted me-2">/</span> 
                        {{ category.name }}
                    </h1>
                </div>
                <div class="col-12 col-lg-5">
                    
                </div>
            </div>
        </div>

        <Loader v-if="views.loading" />

        <div v-if="!views.loading" class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <div class="w-100">
                <div class="box mb-4">
                    <table class="table">
                        <tbody>
                            <tr v-for="(product, index) in category.products">
                                <td class="text-center text-muted">{{ index + 1 }}</td>
                                <td>
                                    <router-link :to="{name: 'Product', params: {id: product.id} }" class="text-decoration-none">
                                        {{ product.name }}
                                        <br><small class="text-muted">{{ product.name_eng }}</small>
                                    </router-link>
                                </td>
                                <td class="fw-bold">{{ product.price_rub }}₽ &nbsp;&nbsp;<span class="text-muted">${{ product.price_usd }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../Loader.vue'

export default {
    data() {
        return {
            category: {},

            views: {
                loading: true,
            }
        }
    },
    created() {
        this.loadCategory()
    },
    methods: {
        loadCategory() {
            axios.get(`/_admin/category/${this.$route.params.id}`)
            .then(response => {
                this.category = response.data

                this.views.loading = false
            })
        },
    },
    components: {
        Loader
    }
}
</script>