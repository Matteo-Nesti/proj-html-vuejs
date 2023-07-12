<template>
    <div v-for="item in items">
        <h3>{{ item.leftTitle }}</h3>
        <div v-for="link in item.leftLink" class="list">
            {{ link }}
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

ul {
    list-style: none;
}

h3 {
    color: $full-white;
}

.list {
    color: white;
}
</style>