<template >
    <div class="testimonial-row ">

        <div class="row container-fluid mx-auto" v-for="(testimonial, i) in testimonials" v-show="i + 1 === currentIndex">

            <div class="testimonial-container col-6">
                <h6 class="testimonial-title">{{ testimonial.title }}</h6>
                <p class="testimonial-description">
                    {{ testimonial.description }}
                </p>
                <figure>
                    <img :src="testimonial.profilePic" :alt="testimonial.name" class="img-fluid testimonial-pic">
                </figure>
                <h5 class="testimonial-name">{{ testimonial.name }}</h5>
                <h6 class="testimonial-profession">{{ testimonial.profession }}</h6>
            </div>

            <div class="col-6">
                <img src="../assets/img/home-movation-testimonial-image.jpg" alt="motivation-pic" class="img-fluid">
            </div>

        </div>
        <div class="slider-button">

            <font-awesome-icon :icon="['fas', 'angle-up']" @click="nextIndex()" class="pointer" />
            <div>{{ currentIndex }}/{{ testimonials.length }}</div>
            <font-awesome-icon :icon="['fas', 'angle-down']" @click="prevIndex()" class="pointer" />

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 1,
            testimonials:
                [
                    {
                        title: 'REAL STORY',
                        description: 'I am free to learb at my ouw pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.',
                        profilePic: '../../src/assets/img/testimonial-avata-02.jpg',
                        name: 'Mina Hollance',
                        profession: '/ freelancer',
                    },
                    {
                        title: '1 STORY',
                        description: '/ placeholder description 1',
                        profilePic: '../../src/assets/img/testimonial-avata-03.jpg',
                        name: 'placeholder name 1',
                        profession: '/ placeholder profession 1',
                    },
                    {
                        title: '2 STORY',
                        description: '/ placeholder description 2',
                        profilePic: '../../src/assets/img/testimonial-avata-04.jpg',
                        name: 'placeholder name 2',
                        profession: '/ placeholder profession 2',
                    },
                    {
                        title: '3 STORY',
                        description: '/ placeholder description 3',
                        profilePic: '../../src/assets/img/testimonial-avata-01.jpg',
                        name: 'placeholder name 3',
                        profession: '/ placeholder profession 3',
                    },
                ]
        }
    },

    computed: {

    },

    methods: {
        nextIndex() {
            if (this.currentIndex === this.testimonials.length) {
                this.currentIndex = 1
            }
            else {
                this.currentIndex++
            }
        },

        prevIndex() {
            if (this.currentIndex === 1) {
                this.currentIndex = this.testimonials.length
            }
            else {
                this.currentIndex--
            }
        }
    },


}
</script>
<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;


.testimonial-row {
    background-color: #f3f3fa;
    background-image: url('../assets/img/background-pattern-wavify.png');

    position: relative;

}

.slider-button {
    width: 80px;
    height: 80px;
    background-color: $full-white;
    border-radius: 50%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;


    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.testimonial-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.testimonial-title {
    color: $main-color;
}

.testimonial-description {
    padding: 0 5rem;
    font-size: 1.7rem;
}

.testimonial-pic {
    width: 100px;
    border-radius: 50%;
}

.col-6 {
    padding: 0;

    img {
        width: 100%;
    }
}

.pointer:hover {
    cursor: pointer;
    scale: 1.1;
}
</style>