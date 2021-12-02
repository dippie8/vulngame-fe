<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <Ranking />
    </q-page-container>
  </q-layout>
</template>

<script>
import Ranking from './components/Ranking.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Ranking
  },

  setup () {
    return {}
  }
}
</script>

<style>
@font-face {
  font-family: "Matrix";
  src: local("Matrix"),
   url(./assets/ScreenMatrix.ttf) format("truetype");
}
</style>