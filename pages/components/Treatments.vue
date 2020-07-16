<template>
  <section id="treatments" class="section">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-12">
          <h2 class="display-3">Tratamientos</h2>
          <p class="lead text-muted text-justify">
            Las espiroquetas y su relación con lupus, artritis, migraña,
            fibromialgia,síndrome de tunel de carpo y otros síntomas. De clic en
            los siguientes enlaces para ver las causas, tratamiento y curación
            de sus síntomas:
          </p>
        </div>
      </div>
      <div class="row justify-content-center mt--100">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/artritis">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_Arthritis-min.png'"
                  alt="Artritis"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Artritis.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/migraña">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_Migraine-min.png'"
                  alt="Migraña"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Migraña.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/paralisis-facial">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_paralysis-min.png'"
                  alt="Parálisis Facial"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Parálisis Facial.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/sindrome-tunel-carpo">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_carpal-min.png'"
                  alt="Sindrome del tunel del carpo"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Síndrome del Túnel del Carpo.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/lumbago">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_backpain-min.png'"
                  alt="Lumbago o dolor de espalda"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Lumbago o dolor de espalda.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/landing">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_Fibromyalgia-min.png'"
                  alt="Fibromialgia"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Fibromialgia.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/landing">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_Fatigue-min.png'"
                  alt="Síndrome de fatiga crónica"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Síndrome de fatiga crónica.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/landing">
              <div class="clearfix">
                <img
                  v-lazy="'img/treatments/HMT_icon_Lupus-min.png'"
                  alt="Lupus"
                  class="pull-left mr-2"
                />
                <p class="text-muted">Lupus.</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Treatments',
}
</script>
