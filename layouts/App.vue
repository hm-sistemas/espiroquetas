<template>
  <div id="app">
    <Header />
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <nuxt />
      </fade-transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
import Header from '~/pages/components/Header'
import Footer from '~/pages/components/Footer'

export default {
  name: 'App',
  components: {
    FadeTransition,
    Header,
    Footer,
  },
}
</script>
