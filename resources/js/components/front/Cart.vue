<template>
    <div v-if="cart && lang" class="cart-wrapper">
        <div v-if="views.loading" class="card-loader">
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-12">
                <div v-for="cartItem in cart" :key="'cartItem_' + cartItem.sku" class="cart-item">
                    <div class="row align-items-center">
                        <div class="col cart-item-col-name">
                            <a :href="'/product/' + cartItem.id">
                                <template v-if="lang == 'en'">{{ cartItem.name_eng }}</template>
                                <template v-else>{{ cartItem.name }}</template>
                            </a>
                        </div>
                        <div class="col cart-item-col-quantity">
                            <button @click="updateQuantityMinus(cartItem)" class="btn btn-sm btn-outline-standard">-</button>
                            <input @change="updateQuantity(cartItem)" type="number" :id="'quantity_' + cartItem.sku" :value="cartItem.quantity" min="1" class="form-control w-25 d-inline-flex cart-item-amount">
                            <button @click="updateQuantityPlus(cartItem)" class="btn btn-sm btn-outline-standard">+</button>
                        </div>
                        <div class="col cart-item-col-price">
                            <strong v-if="lang == 'en'">
                                ${{ cartItem.price_usd * cartItem.quantity }}
                            </strong>
                            
                            <strong v-else>
                                {{ cartItem.price_rub * cartItem.quantity }} ₽
                            </strong>
                        </div>
                        <div class="col cart-item-col-del">
                            <button @click="remove(cartItem.sku)" class="btn btn-sm btn-outline-danger">&times;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 cart-total">
                <p v-if="lang == 'en'">Total products: <strong>{{ totalQuantity }}</strong> and total price is <strong>${{ totalPrice }}</strong></p>
                <p v-else>Всего товаров: <strong>{{ totalQuantity }}</strong> на сумму <strong>{{ totalPrice }} руб.</strong></p>
            </div>
            <div class="col-12 col-lg-12">
                <div class="cart-panel">
                    <div class="row align-items-end">
                        <div class="col-12 col-lg-9">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <label class="form-label">Имя</label>
                                    <input v-model="name" type="text" class="form-control">
                                </div>
                                <div class="col-12 col-lg-6">
                                    <label class="form-label">Телефон</label>
                                    <input v-model="tel" type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3">
                            <button class="btn btn-standard w-100">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        props: ['lang'],
        data() {
            return {
                cart: '',

                name: '',
                tel: '',
                
                views: {
                    loading: true,
                },
            };
        },
        mounted() {
            this.getCartInfo()

            this.views.loading = false
        },
        computed: {
            totalQuantity() {
                if(this.cart) {
                    return this.cart.map(c => c.quantity).reduce((acc, curr) => { return acc + curr }, 0)
                }
            },
            totalPrice() {
                if(this.cart) {
                    let price = []

                    if(this.lang == 'en') {
                        this.cart.forEach(cartItem => {
                            price.push(cartItem.quantity * cartItem.price_usd)
                        })
                    } else {
                        this.cart.forEach(cartItem => {
                            price.push(cartItem.quantity * cartItem.price_rub)
                        })
                    }

                    return price.reduce((acc, curr) => { return acc + curr }, 0)
                }
            },
        },
        methods: {
            getCartInfo() {
                axios.get('/_cart_data')
                .then(response => {
                    this.cart = response.data
                })
            },
            updateCart() {
                this.views.loading = true

                this.emitter.emit('cart', this.cart)

                axios.post(`/update-cart`, {cart: this.cart})
                .then(response => {
                    this.getCartInfo()

                    setTimeout(() => this.views.loading = false, 1000)
                })
            },
            updateQuantity(cartItem) {
                var quantity = parseInt(document.getElementById('quantity_' + cartItem.sku).value)
                if(quantity !== 0) {
                    document.getElementById('quantity_' + cartItem.sku).value = quantity
                    cartItem.quantity = quantity
                }

                this.updateCart()
            },
            updateQuantityMinus(cartItem) {
                var quantity = parseInt(document.getElementById('quantity_' + cartItem.sku).value)
                if(quantity !== 0 && quantity !== 1) {
                    document.getElementById('quantity_' + cartItem.sku).value = quantity - 1
                    cartItem.quantity = quantity - 1
                }

                this.updateCart()
            },
            updateQuantityPlus(cartItem) {
                var quantity = parseInt(document.getElementById('quantity_' + cartItem.sku).value)
                document.getElementById('quantity_' + cartItem.sku).value = quantity + 1
                cartItem.quantity = quantity + 1

                this.updateCart()
            },
            remove(sku) {
                axios
                .get(`/delete-from-cart/${sku}`)
                .then(response => {
                    this.getCartInfo()
                })
            },
        },
    }
</script>