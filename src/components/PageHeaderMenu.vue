<template>
    <nav class="d-flex ">
        <div v-for="(item, i) in items" class="header-menu" @mouseover="showMenu(i)" @mouseout="hideMenu">
            <div>
                <a href="#" class="link-title px-3" :class="{ 'active': currentIndex === i }">
                    {{ item.title }}
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </a>
            </div>

            <ul v-show="isMenuVisible(i)">
                <li v-for="voice in item.voices">
                    <a href="#" class="voice-menu">{{ voice }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {

    data() {
        return {
            currentIndex: null,
            dropDownHover: false,
        }
    },

    props: {
        items: Array,
    },

    methods: {
        showMenu(index) {
            this.currentIndex = index
            this.dropDownHover = true

        },

        hideMenu() {
            this.dropDownHover = false
            this.currentIndex = null
        },

        isMenuVisible(index) {
            return this.currentIndex === index && (this.currentIndex !== null || this.dropDownHover);
        }
    },
}



</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.header-menu {
    position: relative;

    .link-title {
        color: $second-color;
        text-decoration: none;
        font-weight: 500;
    }

}

ul {
    padding: 1rem 3rem 1rem 1rem;
    margin: 0;
    list-style: none;
    position: absolute;
    left: -30px;
    top: 25px;
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

.voice-menu:hover {
    color: $main-color;
}
</style>