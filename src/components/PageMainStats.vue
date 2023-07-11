<template >
    <div class="container my-5">
        <div class="row row-cols-4">
            <div v-for="item in items" class="date-card">
                <h2>{{ item.date }}</h2>
                <h4>{{ item.title }}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: Array
    }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.date-card {

    text-align: center;
    background-image: url('../assets/img/background-pattern-grid-line-06.png');
    background-repeat: no-repeat;

    h2 {
        font-size: 2.5rem;
        color: $main-color;
    }
}
</style>