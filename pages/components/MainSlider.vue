<template>
  <div>
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="/img/slider/HM_slide5-min.jpg"
        img-fluid
        style="max-height: 250px"
        img-alt="Lupus"
      >
        <h3 style="color: white">DILE ADIOS {{ topic }}</h3>
      </b-carousel-slide>
      <!-- <b-carousel-slide
        text="Surgeries and Hospitalization."
        img-src="img/slider/main/HM-main-fachada.jpg"
        style="height:450px;"
      >
        <h1 style="color: white;">Open 24 hours, Monday through Sunday.</h1>
      </b-carousel-slide> -->

      <b-carousel-slide
        caption=""
        img-src="/img/slider/HM_slide4-min.jpg"
        img-fluid
        style="max-height: 250px"
        img-alt="Videos Testimoniales"
      >
        <h3 style="color: white">VER VIDEOS TESTIMONIALES</h3>
        <a type="button" class="btn btn-primary" target="_blank" :href="url">
          Ver videos aquí
        </a>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: 'MainSlider',
  props: {
    url: {
      type: String,
      default: 'https://www.youtube.com/user/hospitalmexico/videos',
      description: 'URL to Youtube video or playlist.',
    },
    topic: {
      type: String,
      default: 'AL LUPUS',
      description: 'Name of main topic.',
    },
  },
}
</script>
