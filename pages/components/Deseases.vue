<template>
  <section id="deseases" class="section section-lg pt-lg-0">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-12">
          <h2 class="display-3">
            Conozca mas sobre las enfermedades que pueden causar sus síntomas
          </h2>
          <p class="lead text-muted text-justify">
            De clic en los siguientes enlaces para conocer las causas de sus
            síntomas:
          </p>
        </div>
      </div>
      <div class="row justify-content-center mt--100">
        <div class="col-md-4 col-lg-4">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/landing">
              <p class="h4 text-info">Borreliosis o Enfermedad de Lyme.</p>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/landing">
              <p class="h4 text-info">Treponema Padillum (Sífilis)</p>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="px-6">
            <nuxt-link class="mr-lg-5" to="/landing">
              <p class="h4 text-info">
                Leptospirosis
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Deseases',
}
</script>
