<template>
  <component :is="getLayout">
    <router-view/>
  </component>  
</template>

<style lang="scss">
@import 'assets/style/main.scss';
</style>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    getLayout() {
      return 'main-layout'
    }
  },
  created(){
        document.title = "CV Oleh Sova"
    },
  components: {
    MainLayout
  }
}

</script>
