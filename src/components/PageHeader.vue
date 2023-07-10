<template>
    <div>
        <header class="container">
            <HeaderLogo />
            <PageHeaderMenu :items="menuLinks" />
            <SocialLink />
        </header>
    </div>
</template>
<script>
import PageHeaderMenu from './PageHeaderMenu.vue'
import SocialLink from './SocialLink.vue'
import HeaderLogo from './HeaderLogo.vue'
export default {
    components: { PageHeaderMenu, SocialLink, HeaderLogo },
    data() {
        return {
            menuLinks: [

                {
                    title: 'Home',
                    voices: [
                        'Start Here',
                        'Success Story',
                        'About Me',
                        'About Us 01',
                        'About Us 02',
                        'About Us 03',
                        'Contact Me',
                        'Contact Us',
                        'Purchase Guide',
                        'Privacy Policy',
                        'Terms of Service'
                    ]
                },
                {
                    title: 'Pages',
                    voices: [
                        'Start Here',
                        'Success Story',
                        'About Me',
                        'About Us 01',
                        'About Us 02',
                        'About Us 03',
                        'Contact Me',
                        'Contact Us',
                        'Purchase Guide',
                        'Privacy Policy',
                        'Terms of Service'
                    ]
                },
                {
                    title: 'Courses',
                    voices: [
                        'Start Here',
                        'Success Story',
                        'About Me',
                        'About Us 01',
                        'About Us 02',
                        'About Us 03',
                        'Contact Me',
                        'Contact Us',
                        'Purchase Guide',
                        'Privacy Policy',
                        'Terms of Service'
                    ]
                },
                {
                    title: 'Features',
                    voices: [
                        'Start Here',
                        'Success Story',
                        'About Me',
                        'About Us 01',
                        'About Us 02',
                        'About Us 03',
                        'Contact Me',
                        'Contact Us',
                        'Purchase Guide',
                        'Privacy Policy',
                        'Terms of Service'
                    ]
                },
                {
                    title: 'Blog',
                    voices: [
                        'Start Here',
                        'Success Story',
                        'About Me',
                        'About Us 01',
                        'About Us 02',
                        'About Us 03',
                        'Contact Me',
                        'Contact Us',
                        'Purchase Guide',
                        'Privacy Policy',
                        'Terms of Service'
                    ]
                },
                {
                    title: 'Shop',
                    voices: [
                        'Start Here',
                        'Success Story',
                        'About Me',
                        'About Us 01',
                        'About Us 02',
                        'About Us 03',
                        'Contact Me',
                        'Contact Us',
                        'Purchase Guide',
                        'Privacy Policy',
                        'Terms of Service'
                    ]
                },

            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

div {
    background-image: url('../assets/img/background-pattern-wavify.png');
    background-color: $light-blue;

    header {
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>