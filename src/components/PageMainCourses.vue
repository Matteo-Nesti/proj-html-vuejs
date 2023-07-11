<template>
    <div class="container">

        <h5>BEGIN YOUR JOURNEY AT MAXCOACH</h5>
        <h2>Latest Online Courses</h2>

        <div class="row row-cols-3">
            <div class="custom-card" v-for="item in items">
                <img :src="item.thumb" alt="courses" class="img-fluid">
                <div class="card-description">
                    <h4 class="price">{{ item.price }}</h4>
                    <h4 class="title">{{ item.title }}</h4>
                    <span class="info">
                        <font-awesome-icon :icon="['fas', 'newspaper']" />
                        {{ item.lesson }}
                    </span>
                    <span class="info">
                        <font-awesome-icon :icon="['fas', 'user']" />
                        {{ item.students }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.container {
    margin-top: 100px;
}

.custom-card {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 2rem;

    .card-description {
        padding: 1rem 3rem;
    }

    .price {
        color: $main-color;
    }

    .title {
        color: $second-color;
    }

    .info {
        color: $dark-gray;
        font-size: 1.1rem;
        margin-right: .8rem;
    }

}
</style>