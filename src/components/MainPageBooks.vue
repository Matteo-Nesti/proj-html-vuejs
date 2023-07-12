<template >
    <div class="container">
        <div class="row align-items-center">
            <div class="col-4 ">
                <h6 class="mb-5">BOOK STORY ONLINE</h6>
                <h2>Be Alpha With</h2>

                <h2 class="colored-subtitle">Wingman's Book</h2>
                <ul>
                    <li v-for="tip in tips">
                        <font-awesome-icon :icon="['fas', 'check']" class="checked" />
                        {{ tip }}
                    </li>
                </ul>

                <pageButton>
                    Get Free Ebook
                </pageButton>
            </div>

            <div class="col-8">
                <div class="row row-cols-2">

                    <div class="books-container" v-for="(book, i) in  books " @mouseover="showMenu(i)" @mouseout="hideMenu()">
                        <figure>
                            <img :src="book.cover" :alt="book.title" class="img-fluid">
                        </figure>
                        <div class="text-center">
                            <h4 class="books-title">{{ book.title }}</h4>
                            <h3 class="price">{{ book.price }}</h3>
                        </div>
                        <ul class="books-menu" v-show="isVisible && currentIndex === i">
                            <li>
                                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                            </li>
                            <li>
                                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                            </li>
                            <li>
                                <font-awesome-icon :icon="['fas', 'heart']" />
                            </li>
                            <li>
                                <font-awesome-icon :icon="['fas', 'signal']" />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import PageButton from './PageButton.vue'
export default {
    components: { PageButton },
    data() {
        return {
            tips: [
                'Help you understand yourself better',
                'Revealing mature tips',
                'Give the right advice',
                'Fascinating examples of alpha man'
            ],

            books: [
                {
                    cover: '../../src/assets/img/product-book-10-400x400.jpg',
                    title: 'Alpha Man by Maxcoach',
                    price: '29.90 $'
                },
                {
                    cover: '../../src/assets/img/product-book-11-400x400.jpg',
                    title: 'Real Man 4.0 by Maxcoach',
                    price: '39.00 $'
                }
            ],
            currentIndex: null,
            isVisible: false

        }
    },
    methods: {
        showMenu(i) {
            this.currentIndex = i
            this.isVisible = true
        },
        hideMenu() {
            this.currentIndex = null
            this.isVisible = false
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.colored-subtitle {
    color: $main-color;
}

ul {
    padding: 0;
    margin: 2rem 0;
    list-style: none;

    .checked {
        color: $main-color;
    }
}

.books-title {
    color: $second-color;
}

.price {
    color: $main-color;
}

.books-container {
    position: relative;

    .books-menu {
        position: absolute;
        right: 80px;
        top: 60px;

        li {
            background-color: $full-white;
            border-radius: 50%;

            line-height: 40px;
            width: 40px;
            height: 40px;
            text-align: center;
            margin: .7rem 0;
            box-shadow: 1px 1px 5px lightgrey;

            cursor: pointer;

            &:hover {
                scale: 1.1;
            }
        }
    }
}
</style>