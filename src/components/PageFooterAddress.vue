<template>
    <div class="container">
        <div>
            <h4>Address</h4>
            <p>
                382 NE 191st St # 87394 Miami, FL 33179-3899
            </p>
            <p>+1(305)547-9909 (9am - 5pm EST. monday - friday)</p>
            <p>Support@maccoach.com</p>
            <div class="social-icon">
                <font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
                <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
                <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
                <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

h4 {
    color: $full-white;
}

p {
    margin: 0;
    color: rgb(141, 141, 141);
    font-weight: 500;
    margin-bottom: 1rem;

    &:hover {
        color: $full-white;
        cursor: pointer;
    }
}

.social-icon {
    color: rgb(141, 141, 141);
    font-size: 1.5rem;

    .icon {
        margin-right: .6rem;
    }

}

.icon:hover {
    color: $full-white;
    cursor: pointer;
}
</style>