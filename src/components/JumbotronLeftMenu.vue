<template>
    <div class="lateral-menu">
        <ul>
            <a href="#">
                <li><font-awesome-icon :icon="['fas', 'book']" /></li>
            </a>
            <a href="#">
                <li><font-awesome-icon :icon="['fas', 'cart-shopping']" /></li>
            </a>
            <a href="#">
                <li><font-awesome-icon :icon="['fas', 'crosshairs']" /></li>
            </a>
            <a href="#">
                <li><font-awesome-icon :icon="['fas', 'ruler-combined']" /></li>
            </a>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@use '../assets/style/vars.scss' as *;

.lateral-menu {
    position: absolute;
    right: 0px;
    top: 80px;

    background-color: $full-white;
    border-radius: 10px 0 0 10px;
    box-shadow: 1px 4px 15px $dark-gray;
    text-align: center;

    ul {
        list-style: none;
        margin: 0;
        padding: 1rem;

        a {
            color: #000;

            li {
                margin: .5rem 0;

            }
        }
    }
}
</style>