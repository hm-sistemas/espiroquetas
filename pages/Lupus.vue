<template>
  <div id="app">
    <MainSlider
      topic="AL LUPUS"
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
import Description from './components/Lupus/Description'
import Content from './components/Lupus/Content'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
export default {
  layout: 'App',
  name: 'Lupus',
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
      title: 'Tratamiento para lupus',
      description:
        'Tratamiento para lupus en Tijuana. 90% de casos de éxito con nuestro plan de tratamiento de 4 a 6 meses.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'CreativeWork',
        name: 'lupus',
        image: 'https://hospitalmexico.org/img/brand/Hm-logo-02.png',
        email: 'info@hospitalmexico.org',
        url: 'http://espiroquetas.com/lupus',
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
