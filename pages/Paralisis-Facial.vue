<template>
  <div id="app">
    <MainSlider
      topic="A LA PARALISIS FACIAL"
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
import Description from './components/Paralisis/Description'
import Content from './components/Paralisis/Content'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
export default {
  layout: 'App',
  name: 'ParalisisFacial',
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
      title: 'Tratamiento para parálisis facial',
      description:
        'Tratamiento para parálisis facial en Tijuana. Con este nuevo tratamiento se cura el 90% de los pacientes con parálisis facial tratados.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'CreativeWork',
        name: 'Migraña',
        image: 'https://hospitalmexico.org/img/brand/Hm-logo-02.png',
        email: 'info@hospitalmexico.org',
        url: 'http://http://espiroquetas.com/artritis',
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
