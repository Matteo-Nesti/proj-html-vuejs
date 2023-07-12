<template>
    <footer>

    </footer>
</template>

<script>
import PageFooterAddress from './PagefooterAddres.vue'
export default {

    data() {
        return {
            address:
                [
                    {
                        address: '382 NE 191st St # 87394 Miami, FL 33179-3899',
                        phone: '+1(305)547-9909',
                        timeTable: '(9am - 5pm EST. monday - friday)',
                        mail: 'Support@maccoach.com'
                    }
                ],

            leftMenuLinks:
                [
                    {
                        leftTitle: 'Explore',
                        leftLink: ['Start Here', 'Blog', 'About Us', 'Success Story', 'Courses', 'Contact us']
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

<style lang="scss" scoped></style>