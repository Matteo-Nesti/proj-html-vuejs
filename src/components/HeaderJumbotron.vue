<template >
    <div id="jumbo" class="container">
        <div class="col-4">
            <h5>I'M WINGMAN</h5>
            <p class="fs-1">Peace On Earth A Wonderful Wish But No Way</p>
            <p>Success isn't overnight. It's when everyday get a little better than day before. It all adds up.</p>
            <button class="btn">Get started for free -></button>
        </div>
        <figure class="col-4">
            <img src="../assets/img/home-movation-hero-image.png" alt="figure">
        </figure>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

#jumbo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 2rem;

    figure {
        background-image: url(../assets/img/home-movation-shape-face.png);
        margin: 0;

        img {
            display: block;
        }
    }

    .btn {
        background-color: $main-color;
        color: $full-white;
        font-weight: 500;
        padding: .7rem 2rem;
    }
}
</style>