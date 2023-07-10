<template>
    <nav class="d-flex" v-for="(item, i) in items">
        <a href="#" @click="showMenu(i)">
            {{ item.title }}
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </a>
        <ul v-show="dropDrownIndex === i">
            <li>
                <a href="#">ciao</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {

    data() {
        return {
            showDropDown: false,
            dropDrownIndex: -1,
        }
    },

    props: {
        items: Array
    },

    methods: {
        showMenu(index) {
            if (this.dropDrownIndex === index) {
                this.dropDrownIndex = -1
            }
            else {
                this.dropDrownIndex = index
            }
        }
    },
}



</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

nav {
    position: relative;

    a {
        color: $second-color;
        text-decoration: none;
        margin: 0 10px;
        font-weight: 500;
    }

}

ul {
    list-style: none;
    position: absolute;
    left: -15px;
    top: 30px;

}
</style>