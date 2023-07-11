<template>
    <section id="dates">
        <PageMainStats :items="dates" />
    </section>

    <section id="about-me">
        <div class="container my-5">
            <div class="row justify-content-center align-items-center text-center">
                <div class="col-5">dad</div>
                <div class="col-7">dad</div>
            </div>
        </div>
    </section>
</template>
<script>
import PageMainStats from './PageMainStats.vue'
export default {
    components: { PageMainStats },
    data() {
        return {
            dates: [
                {
                    date: '1926',
                    title: 'FINISHED SESSION'
                },
                {
                    date: '100%',
                    title: 'SATISFACTION RATE'
                },
                {
                    date: '3092+',
                    title: 'ENROLLED LEARNERS'
                },
                {
                    date: '200',
                    title: 'ONLINE ISTRUCTORS'
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped></style>