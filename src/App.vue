<template>
  <div id="app" style="background:#F3F4F4;">

    <Header/>

    <div class="container" style="margin-bottom:30px;box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);padding:30px;border-radius:3px;background:white;">
      <Main/>
    </div>

    <Footer/>
  </div>
</template>

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
