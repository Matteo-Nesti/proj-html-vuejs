<template>
    <div class="row align-items-start">


        <div class="col-4" v-for="item in items">
            <ul>
                <li v-if="item.rightTitle">

                    <h3>{{ item.rightTitle }}</h3>

                <li v-for="link in item.rightLink">
                    <a href="#" class="list">
                        {{ link }}
                    </a>
                </li>

                </li>

                <li v-else-if="item.leftTitle">
                    <h3>{{ item.leftTitle }}</h3>
                <li v-for="link in item.leftLink">
                    <a href="#" class="list">
                        {{ link }}
                    </a>
                </li>
                </li>

                <li v-else>
                    <h3></h3>
                <li v-for="link in item.centralLink" class="center-list">
                    <a href="#" class="list">
                        {{ link }}
                    </a>
                </li>
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

a {
    text-decoration: none;

    &:hover {
        color: $full-white;
    }
}

.list {
    color: rgb(141, 141, 141);

}

.center-list {
    margin-top: 40px;
}
</style>