<template>
    <div v-if="!ok" class="age">
        <div class="age-inner">
            <div class="age-circle">
                18+
            </div>

            <div class="age-buttons">
                <button @click="proceed()">Мне 18 лет или больше</button>
                <a href="https://google.ru">Мне меньше 18 лет</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ok: false,
        }
    },
    created() {
        this.getAgeInfo()
    },
    methods: {
        getAgeInfo() {
            axios.get('/_age')
            .then(response => {
                if(response.data == '18') {
                    this.ok = true
                }
            })
        },
        proceed() {
            axios.post('/_age', {
                age: '18'
            })
            .then(response => {
                this.getAgeInfo()
            })
        },
    }
}
</script>