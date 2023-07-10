<template>
    <nav class="d-flex" v-for="(item, i) in items">

        <div>
            <a href="#" @click="showMenu(i)" class="link-title">
                {{ item.title }}
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </a>
        </div>

        <ul v-show="dropDrownIndex === i">
            <li v-for="voice in item.voices">
                <a href="#">{{ voice }}</a>
            </li>
        </ul>

    </nav>
</template>
<script>
export default {

    data() {
        return {
            showDropDown: false,
            dropDrownIndex: NaN,
        }
    },

    props: {
        items: Array,
    },

    methods: {
        showMenu(index) {
            if (this.dropDrownIndex === index) {
                this.dropDrownIndex = NaN
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

    .link-title {
        color: $second-color;
        text-decoration: none;
        margin: 0 10px;
        font-weight: 500;
    }

}

ul {
    padding: 1rem 3rem 1rem 1rem;
    margin: 0;
    list-style: none;
    position: absolute;
    left: -30px;
    top: 30px;
    background-color: $full-white;
    border-bottom: $main-color solid 2px;

    li {
        width: 100px;
    }

    a {
        color: $dark-gray;
        text-decoration: none;
    }
}
</style>