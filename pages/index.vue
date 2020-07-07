<template>
  <div id="app">
    <MainSlider></MainSlider>
    <!-- <Description></Description>
    <Services></Services> -->
    <Contact></Contact>
  </div>
</template>

<script>
import MainSlider from './components/MainSlider'
/* import Description from './components/Description'
import Services from './components/Services' */
import Contact from './components/Contact'
export default {
  layout: 'App',
  name: 'Index',
  components: {
    MainSlider,
    /* Description,
    Services,
    Surgeries,
    Insurances, */
    Contact,
  },
  data() {
    return {
      title: 'Tratamiento para lupus, artritis, migraña, fibromialgia',
      description:
        'Tratamiento para artritis, migraña, parálisis facial, fibromialgia, síndrome del tunel de carpo.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'CreativeWork',
        name: 'Espiroquetas',
        image: 'https://hospitalmexico.org/img/brand/Hm-logo-02.png',
        email: 'info@hospitalmexico.org',
        url: 'http://http://espiroquetas.com/',
      },
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
      script: [{ type: 'application/ld+json', json: this.structuredData }],
    }
  },
}
</script>
