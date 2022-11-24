<template>
    <div class="row">
        <div class="col-12 col-lg-8">
            <div v-for="cartItem in cart" :key="'cartItem_' + cartItem.sku" class="cart-item">
                <div class="row align-items-center">
                    <div class="col cart-item-col-name">
                        <a :href="'/product/' + cartItem.id">
                            {{ cartItem.name }}
                        </a>
                    </div>
                    <div class="col cart-item-col-quantity">
                        <button @click="updateQuantityMinus(cartItem)" class="btn btn-sm">-</button>
                        <input @change="updateQuantity(cartItem)" type="number" :id="'quantity_' + cartItem.sku" :value="cartItem.quantity" min="1" class="form-control w-25 d-inline-flex cart-item-amount">
                        <button @click="updateQuantityPlus(cartItem)" class="btn btn-sm">+</button>
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
        <div class="col-12 col-lg-4">
            <div class="cart-panel">
                <h5>В корзине</h5>
                <!-- <p>{{ cart_products_total_quantity }} {{ cart_products_total_quantity | dgt_products }}<template v-if="cart_addons_total_quantity && cart_addons_total_quantity > 0">, {{ cart_addons_total_quantity }} {{ cart_addons_total_quantity | dgt_addons }}</template></p>
                <h4>{{ cart_total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽</h4> -->

                <button class="btn btn-standard">Перейти к оформлению</button>
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
                
                views: {
                    loading: true,
                },
            };
        },
        mounted() {
            this.getCartInfo()
        },
        methods: {
            getCartInfo() {
                axios.get('/_cart_data')
                .then(response => {
                    this.cart = response.data

                    this.views.loading = false
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