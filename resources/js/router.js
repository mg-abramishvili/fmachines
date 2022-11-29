import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/admin/Home.vue'

import Categories from './components/admin/categories/Index.vue'
import Category from './components/admin/categories/Category.vue'
import CategoryMaster from './components/admin/categories/CategoryMaster.vue'

import ProductMaster from './components/admin/products/ProductMaster.vue'

import Leads from './components/admin/leads/Index.vue'

import Settings from './components/admin/settings/Edit.vue'

import Videos from './components/admin/Videos/Index.vue'
import VideoMaster from './components/admin/Videos/VideoMaster.vue'

import MainBanners from './components/admin/mainbanners/Index.vue'
import MainBannerMaster from './components/admin/mainbanners/MainBannerMaster.vue'

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
        path: '/admin/category-master/:id?',
        name: 'CategoryMaster',
        component: CategoryMaster
    },
    {
        path: '/admin/product-master/:id?',
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
    {
        path: '/admin/videos',
        name: 'Videos',
        component: Videos
    },
    {
        path: '/admin/video-master/:id?',
        name: 'VideoMaster',
        component: VideoMaster
    },
    {
        path: '/admin/mainbanners',
        name: 'MainBanners',
        component: MainBanners
    },
    {
        path: '/admin/mainbanner-master/:id?',
        name: 'MainBannerMaster',
        component: MainBannerMaster
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})