<template >
    <div class="container">
        <div class="row row-cols-6">
            <figure v-for="sponsor in sponsors" class="mt-5">
                <img :src="sponsor" alt="sponsor" class="sponsor">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sponsors:
                [
                    '../../src/assets/img/client-logo-07-primary.png',
                    '../../src/assets/img/client-logo-06-primary.png',
                    '../../src/assets/img/client-logo-05-primary.png',
                    '../../src/assets/img/client-logo-04-primary.png',
                    '../../src/assets/img/client-logo-03-primary.png',
                    '../../src/assets/img/client-logo-02-primary.png',
                ]
        }
    },
}
</script>

<style lang="scss" scoped>
figure {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor {
    opacity: .3;
}
</style>