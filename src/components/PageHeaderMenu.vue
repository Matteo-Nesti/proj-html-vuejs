<template>
    <nav class="d-flex">
        <div v-for="item in items">
            <a href="#">{{ item.title }}</a>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
    </nav>
</template>
<script>
export default {
    props: {
        items: Array
    }
}

</script>

<style lang="scss">
@use '../assets/style/vars.scss' as *;

a {
    color: $second-color;
    text-decoration: none;
    margin: 0 10px;

    font-weight: 500;
}
</style>