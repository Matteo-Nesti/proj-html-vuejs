<template >
    <div class="container my-5">

        <div class="row presentation">
            <div class="col-4">
                <h5>ABOUT ME</h5>
                <p class="p-title">How to Be an Alpha Male: The 15 Habits of True Alphas</p>
            </div>
            <div class="col-6">
                <p class="fw-bold p-description">
                    Want to learn how to be <span>an alpha male?</span> How to be more masculine?
                    How to be the man you've always wanted to be?
                </p>
                <p class="p-description">
                    your goal is to show the consistency of buisness, core values, and customer care. Punctuality responsability, individuality, accuracy, enthusiasm - you have to cleary explain how these qualities are applicable to your work. And the important thing is you do love what you do.
                </p>
            </div>
        </div>

        <div class="row my-5 youtube-section">
            <div class="col-6">
                <figure class="thumb">
                    <img src="../assets/img/icon-youtube-play.png" alt="youtube-icon" class="icon">
                    <img src="../assets/img/home-movation-video-poster-670x450.jpg" alt="video-youtube" class="img-fluid">
                </figure>
            </div>
            <div class="col-5 align-self-center">
                <p class="p-youtube">
                    "Every Morning you have two choices: continue to sleep with your dreams, or wake up and chase them."
                </p>
                <figure>
                    <img src="../assets/img/home-movation-shape-01.png" alt="wave-icon">
                </figure>
                <h5>Kaixa Stark</h5>
                <h6>WINGMAN</h6>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.presentation {
    justify-content: space-between;
    align-items: center;
    text-align: start;

    h5 {
        color: $main-color
    }

    span {
        color: $main-color;
    }

    .p-title {
        font-size: 2.5rem;
    }

    .p-description {
        font-size: 1.2rem;
    }
}

.youtube-section {
    justify-content: space-between;

    .thumb {
        margin: 0;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 20px 22px $dark-gray;

        .icon {
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;
            cursor: pointer;

        }
    }


    .p-youtube {
        font-size: 1.5rem;
        padding-right: 8rem;
        margin-bottom: 5rem;
    }

    h6 {
        color: $dark-gray;
    }

}

.icon:hover {
    scale: 1.1;
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
}
</style>