<template>
   <footer class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>© <a href="http://rukamen.ru/">www.ruKamen.ru</a>, <a href="http://rukamen.ru/index.php/2010-03-29-06-29-01">Каменев В.В.</a> , <a href="https://github.com/Slava191">Чекменёв В.В.</a></small><br>
      <button class="btn btn-link" @click="setTestData()">Ввод данных для примера расчета</button>
    </div>
  </footer>
</template>

<style scoped>
a{
  color:white;
}

a:hover{
  color:white;
  text-decoration: underline;
}
</style>

<script>

import { bus } from '@/main.js'

export default {

  methods:{
    setTestData(){
      bus.$emit('setTestData');
    }
  }
  
}
</script>