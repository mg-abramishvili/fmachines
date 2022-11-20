import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/admin/Home.vue'

import Categories from './components/admin/categories/Index.vue'
import Category from './components/admin/categories/Category.vue'

import ProductMaster from './components/admin/products/ProductMaster.vue'

import Leads from './components/admin/leads/Index.vue'

import Settings from './components/admin/settings/Edit.vue'

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/admin/category/:id',
        name: 'Category',
        component: Category
    },
    {
        path: '/admin/product/:id?',
        name: 'ProductMaster',
        component: ProductMaster
    },
    {
        path: '/admin/settings',
        name: 'Settings',
        component: Settings
    },
    {
        path: '/admin/leads',
        name: 'Leads',
        component: Leads
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})