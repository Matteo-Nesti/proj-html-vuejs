<template>
    <div class="container">

        <h6>BEGIN YOUR JOURNEY AT MAXCOACH</h6>
        <h2>Latest <span> Online Courses</span></h2>

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

        <PageButton>
            View all Courses ->
        </PageButton>
    </div>
</template>

<script>
import PageButton from './PageButton.vue'
export default {
    components: { PageButton },
    props: {
        items: Array,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.container {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h6 {
    color: $dark-gray;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 5rem;

    span {
        color: $main-color;
    }
}

.custom-card {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 5rem;

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