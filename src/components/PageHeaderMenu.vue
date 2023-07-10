<template>
    <div class="d-flex">
        <nav v-for="(item, i) in items">
            <div>
                <a href="#" @click="showMenu(i)" class="link-title" :class="{ 'active': currentIndex === i }">
                    {{ item.title }}
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </a>
            </div>

            <ul v-show="currentIndex === i">
                <li v-for="voice in item.voices">
                    <a href="#">{{ voice }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

    data() {
        return {
            currentIndex: NaN,
        }
    },

    props: {
        items: Array,
    },

    methods: {
        showMenu(index) {
            if (this.currentIndex === index) {
                this.currentIndex = NaN
            }
            else {
                this.currentIndex = index
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
        margin: 0 15px;
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
    z-index: 1;

    li {
        width: 100px;
    }

    a {
        color: $dark-gray;
        text-decoration: none;
    }
}

.link-title.active {
    color: $main-color;
    border-bottom: $main-color solid 1px;
}
</style>