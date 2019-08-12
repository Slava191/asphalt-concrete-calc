<template>
  <div id="app" style="padding-bottom:30px;background:#F3F4F4;">

    <Header/>

    <div class="container" style="box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);padding:30px;border-radius:3px;background:white;">
      <Main/>
    </div>
  </div>
</template>

<script>
import Main from './views/Main.vue'
import Header from './components/Header.vue'

export default {
  components:{
    Main, Header
  }
}
</script>
