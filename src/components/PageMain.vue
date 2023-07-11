<template>
    <section id="dates">
        <PageMainStats :items="dates" />
    </section>

    <section id="about-me">
        <PageMainAboutMe />
    </section>

    <section>
        <PageMainCourses :items="cardsInfo" />
    </section>
</template>
<script>
import PageMainStats from './PageMainStats.vue'
import PageMainAboutMe from './PageMainAboutMe.vue'
import PageMainCourses from './PageMainCourses.vue'

export default {
    components: { PageMainStats, PageMainAboutMe, PageMainCourses, },
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
            ],

            cardsInfo: [
                {
                    thumb: '../../src/assets/img/motivation-course-06-480x298.jpg',
                    price: '30.00 $',
                    title: 'How to be Succesful: create a Growth Mindset for Success',
                    lesson: '3 lessons',
                    students: '50 students'
                },
                {
                    thumb: '../../src/assets/img/motivation-course-05-480x298.jpg',
                    price: '30.00 $',
                    title: 'How to build Confidence in your Abilities',
                    lesson: '1 lessons',
                    students: '50 students'
                },
                {
                    thumb: '../../src/assets/img/motivation-course-04-480x298.jpg',
                    price: '20.00 $',
                    title: 'Productivity Machine - Focus in a Distance World',
                    lesson: '5 lessons',
                    students: '50 students'
                },
                {
                    thumb: '../../src/assets/img/motivation-course-03-480x298.jpg',
                    price: '20.00 $',
                    title: 'Effective Time Management Mastery - Complete Guide',
                    lesson: '18 lessons',
                    students: '50 students'
                },
                {
                    thumb: '../../src/assets/img/motivation-course-02-480x298.jpg',
                    price: '25.99 $',
                    title: 'Body Language Secrets for Entrepreneurs',
                    lesson: '19 lessons',
                    students: '50 students'
                },
                {
                    thumb: '../../src/assets/img/motivation-course-01-480x298.jpg',
                    price: '19.99 $',
                    title: 'Management Skills: The Science of LeaderShip',
                    lesson: '17 lessons',
                    students: '50 students'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>