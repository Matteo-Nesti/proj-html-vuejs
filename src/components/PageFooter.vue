<template>
    <footer>
        <div class="row">
            <div class="col">
                <PageFooterAddress />
            </div>

            <div class="col">
                <PageFooterMenuLinks :items="menuLinks" />
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
}
</style>