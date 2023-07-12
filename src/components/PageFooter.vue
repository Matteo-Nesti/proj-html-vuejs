<template>
    <footer>
        <div class="row justify-content-center">
            <div class="col-6">
                <PageFooterAddress />
            </div>

            <div class="col-6">
                <PageFooterMenuLinks :items="menuLinks" />
            </div>

            <div class="col-auto mt-5">
                <div class="copyright">
                    <font-awesome-icon :icon="['fas', 'copyright']" />
                    2020 maxcoach. All Rights Reserved
                </div>
            </div>

            <div class="circle-button">
                <font-awesome-icon :icon="['fas', 'angle-up']" />
            </div>
        </div>
    </footer>
</template>

<script>
import PageFooterAddress from './PagefooterAddress.vue'
import PageFooterMenuLinks from './PageFooterMenuLinks.vue'
export default {
    components: { PageFooterAddress, PageFooterMenuLinks },
    data() {
        return {
            menuLinks:
                [
                    {
                        leftTitle: 'Explore',
                        leftLink: ['Start Here', 'Blog', 'About Us'],
                    },

                    {
                        centralLink: ['Success Story', 'Courses', 'Contact us'],
                    },

                    {
                        rightTitle: 'Information',
                        rightLink: ['Membership', 'Purchase Guide', 'Privacy policy', 'Terms of Service']
                    }
                ],

        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

footer {
    padding: 5rem;
    background-color: #171621;

    .copyright {
        color: rgb(141, 141, 141);

    }
}

.circle-button {
    background-color: $main-color;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;

    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;

    &:hover {
        scale: 1.1;
    }
}
</style>