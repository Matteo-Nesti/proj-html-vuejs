<template>
    <div class="row align-items-end">

        <div class="col-4">
            <ul v-for="item in items">
                <li>
                    <h3>{{ item.leftTitle }}</h3>
                </li>
                <li>
                    <div class="list" v-for="link in item.leftLink">
                        {{ link }}
                    </div>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <ul v-for="item in items">
                <li>
                    <div class="list" v-for="link in item.centralLink">
                        {{ link }}
                    </div>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <ul v-for="item in items">
                <li>
                    <h3>{{ item.leftTitle }}</h3>
                </li>
                <li>
                    <div class="list" v-for="link in item.rightLink">
                        {{ link }}
                    </div>
                </li>
            </ul>
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

ul {
    list-style: none;
}

h3 {
    color: $full-white;
}

.list {
    color: rgb(141, 141, 141);

}
</style>