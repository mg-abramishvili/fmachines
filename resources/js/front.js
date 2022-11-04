import './bootstrap'

import { createApp } from 'vue'

import Lead from './components/front/Lead.vue'

const app = createApp({})

app.component('create-lead', Lead)

app.mount('#front')