<template>
  <div id="app">
    <MainSlider
      topic="A LA FATIGA CRÓNICA"
      url="https://www.youtube.com/watch?v=WfTpm4CWDL0&list=PLKNTNQ10nSNEdKmwUehzxBsmxvEEmozQo"
    ></MainSlider>
    <Description></Description>
    <Content></Content>
    <Testimonials
      url="https://www.youtube.com/watch?v=WfTpm4CWDL0&list=PLKNTNQ10nSNEdKmwUehzxBsmxvEEmozQo"
    ></Testimonials>
    <About></About>
    <Contact></Contact>
  </div>
</template>

<script>
import MainSlider from './components/MainSlider'
import Description from './components/FatigaCronica/Description'
import Content from './components/FatigaCronica/Content'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
export default {
  layout: 'App',
  name: 'FatigaCronica',
  components: {
    MainSlider,
    Description,
    Content,
    Testimonials,
    About,
    /* Surgeries,
    Insurances, */
    Contact,
  },
  data() {
    return {
      title: 'Tratamiento para Síndrome de fatiga crónica',
      description:
        'Tratamiento para Síndrome de fatiga crónica en Tijuana. 90% de casos de éxito con nuestro plan de tratamiento de 4 a 6 meses.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'CreativeWork',
        name: 'Síndrome de fatiga crónica',
        image: 'https://hospitalmexico.org/img/brand/Hm-logo-02.png',
        email: 'info@hospitalmexico.org',
        url: 'http://espiroquetas.com/sindrome-fatiga-cronica',
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
