<template >
    <div id="jumbo">
        <div class="container custom-row">
            <div class="col-6 p-5">
                <h5>I'M WINGMAN</h5>
                <p class="fs-1">Peace On Earth A Wonderful Wish But No Way</p>
                <p>Success isn't overnight. It's when everyday get a little better than day before. It all adds up.

                </p>
                <PageButton>
                    Get Started For Free
                </PageButton>
            </div>
            <figure class="col-6">
                <img src="../assets/img/home-movation-hero-image.png" alt="figure">
            </figure>
        </div>
        <JumbotronLeftMenu />
    </div>
</template>
<script>
import JumbotronLeftMenu from './JumbotronLeftMenu.vue';
import PageButton from './PageButton.vue';
export default {
    components: { JumbotronLeftMenu, PageButton }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

#jumbo {
    padding-top: 2rem;
    position: relative;

    .custom-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    figure {
        background-image: url('../assets/img/home-movation-shape-face.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 0px 100px;
        margin: 0;

        img {
            display: block;
        }
    }

}
</style>