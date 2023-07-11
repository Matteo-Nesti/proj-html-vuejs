<template>
    <section id="dates">
        <PageMainStats :items="dates" />
    </section>

    <section id="about-me">
        <PageMainAboutMe />
    </section>
</template>
<script>
import PageMainStats from './PageMainStats.vue'
import PageMainAboutMe from './PageMainAboutMe.vue'
export default {
    components: { PageMainStats, PageMainAboutMe },
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