<template>
    <div>
        <header class="container">
            <figure>
                <img src="../assets/img/dark-logo.png" alt="Logo" class="img-fluid">
            </figure>
            <PageHeaderMenu :items="menuLinks" />
        </header>
    </div>
</template>
<script>
import PageHeaderMenu from './PageHeaderMenu.vue'
export default {
    components: { PageHeaderMenu },
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
        align-items: center;

        img {
            width: 200px;
        }
    }
}
</style>