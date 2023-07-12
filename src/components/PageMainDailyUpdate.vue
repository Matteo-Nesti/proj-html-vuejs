<template>
    <div class="container">

        <h6>BLOG UPDATE</h6>
        <h2>Interesting <span>articles updates</span> daily</h2>

        <div class="row">

            <div class="articles-cards col-3" v-for="articlescard in articlesCards">
                <figure>
                    <img :src="articlescard.picture" :alt="articlescard.title" class="img-fluid">
                </figure>
                <div class="date">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    {{ articlescard.date }}
                </div>
                <h4 class="title"> {{ articlescard.title }}</h4>
                <div class="description">{{ articlescard.description }}</div>
            </div>

        </div>
        <div class="more-posts">
            <span>
                VIEW ALL POSTS
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articlesCards:
                [
                    {
                        picture: '../../src/assets/img/motivation-blog-01-480x325.jpg',
                        date: 'May 13, 2020',
                        title: 'How to Stay True to Your Personal Brand',
                        description: 'when it comes to your buisness or career, you want...',
                    },
                    {
                        picture: '../../src/assets/img/motivation-blog-02-480x325.jpg',
                        date: 'May 13, 2020',
                        title: '5 Vital Lessons in 5 years of Freelancing',
                        description: 'being self-employed and workking from home, it\'s easy to get..',
                    },
                    {
                        picture: '../../src/assets/img/motivation-blog-03-480x325.jpg',
                        date: 'May 13, 2020',
                        title: '11 Super Useful Tips for Small-Buisness Owners',
                        description: 'Being a small-buisness owneer poses a ton of challenges. We...',
                    },
                    {
                        picture: '../../src/assets/img/motivation-blog-04-480x325.jpg',
                        date: 'May 13, 2020',
                        title: 'How to Give Yourself Grace to Start Again',
                        description: 'Forgive yourself for bad habits you may have started or ...',
                    }
                ]
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.articles-cards {
    margin-bottom: 5rem;
    padding-top: .7rem;
    padding-bottom: .7rem;
}

.articles-cards:hover {
    box-shadow: 1px 1px 10px rgb(207, 207, 207);
    cursor: pointer;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 5rem;

    span {
        color: $main-color;
    }
}

figure {
    border-radius: 10px;
    overflow: hidden;
}

.date,
.description {
    color: $dark-gray;
}

.more-posts {

    font-weight: 500;
    color: $main-color;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        border-bottom: 1px solid $main-color;
    }

}

span:hover {
    cursor: pointer;
    scale: 1.1;
}
</style>