<template>
    <div>
        <div class="subheader w-100">
            <div class="row align-items-center">
                <div class="col-12 col-md-7">
                    <h1>Заявки</h1>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="d-flex">
                        <select v-model="selected.status" class="form-select">
                            <option value="all">Все статусы</option>
                            <option value="created">Принята в работу</option>
                            <option value="completed">Заявка обработана</option>
                        </select>
                        <button @click="filter()" class="btn btn-primary ms-1">Показать</button>
                    </div>
                </div>
            </div>
        </div>

        <Loader v-if="views.loading" />

        <div v-if="!views.loading" class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <div class="w-100">
                <div v-if="leadsFiltered.length" class="box mb-4">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Тема</th>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lead in leadsFiltered" :key="lead.id">
                                <td class="w-25">{{ $filters.datetime(lead.created_at) }}</td>
                                <td>
                                    <template v-if="lead.subject == 'bank_card'">Банковская карта</template>
                                    <template v-if="lead.subject == 'loan'">Денежный займ</template>
                                </td>
                                <td>{{ lead.name }}</td>
                                <td>{{ lead.phone }}</td>
                                <td>
                                    <span @click="changeStatus(lead.id, 'created')" v-if="lead.status == 'created'" class="badge bg-warning" style="cursor:pointer">Принята в работу</span>
                                    <span @click="changeStatus(lead.id, 'completed')" v-if="lead.status == 'completed'" class="badge bg-success" style="cursor:pointer">Заявка обработана</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p v-else>Заявок нет.</p>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../Loader'

export default {
    data() {
        return {
            leads: [],
            leadsFiltered: [],

            selected: {
                status: 'all',
            },

            views: {
                loading: true,
            }
        }
    },
    created() {
        this.loadLeads()
    },
    methods: {
        loadLeads() {
            axios.get('/_admin/leads')
            .then(response => {
                this.leads = response.data
                this.leadsFiltered = response.data

                this.views.loading = false
            })
        },
        filter() {
            if(this.selected.status == 'all') {
                return this.leadsFiltered = this.leads
            }
            if(this.selected.status == 'created') {
                return this.leadsFiltered = this.leads.filter(lead => lead.status == 'created')
            }
            if(this.selected.status == 'completed') {
                return this.leadsFiltered = this.leads.filter(lead => lead.status == 'completed')
            }
        },
        changeStatus(id, status) {
            if(status == 'created') {
                if(confirm("Изменить статус на Заявка обработана?")) {
                    axios.put(`/_admin/lead/${id}/update`, {
                        status: 'completed',
                    })
                    .then(response => {
                        this.loadLeads()
                    })
                }
                return
            }

            if(status == 'completed') {
                if(confirm("Изменить статус на Принята в работу?")) {
                    axios.put(`/_admin/lead/${id}/update`, {
                        status: 'created',
                    })
                    .then(response => {
                        this.loadLeads()
                    })
                }
                return
            }
        }
    },
    components: {
        Loader
    }
}
</script>