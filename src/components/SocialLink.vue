<template >
    <div class="social-menu">
        <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" class="icon-link" />
        </a>
        <a href="#">
            <font-awesome-icon :icon="['fab', 'twitter']" class="icon-link" />
        </a>
        <a href="#">
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon-link" />
        </a>
        <a href="#">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="icon-link" />
        </a>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.icon-link {
    color: black;
    margin: 0 10px;
    font-size: 1.2rem;
}
</style>