<template>
  <div id="app">

    <Header/>
    <Main/>
    <Footer/>

  </div>
</template>

<style scoped>
#app{
  background:#F3F4F4;
}
</style>

<script>
import Main from './views/Main.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Main, Header, Footer
  },
  created () {
      document.title = "Подбор состава асфальтобетонной смеси";
  }
}
</script>
