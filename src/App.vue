<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<script>
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'
import { store } from './components/data/store.js'
export default {
  components: { PageHeader, PageMain, PageFooter },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss">
@use './assets/style/vars.scss' as *;

.btn {
  background-color: $main-color;
  color: $full-white;
  font-weight: 500;
  padding: .7rem 2rem;

  &:hover {
    background-color: $second-color;
    color: $full-white;
  }
}
</style>