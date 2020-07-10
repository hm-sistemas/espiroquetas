<template>
  <section id="contact" class="section section-lg pt-0">
    <section class="section-shaped my-0">
      <div class="shape shape-style-1 shape-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container">
        <card gradient="secondary" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row">
              <div class="col-lg-5">
                <div class="pr-md-5">
                  <p class="display-3 text-center">
                    Contáctenos!!
                  </p>
                  <p class="h5 text-justify">
                    La ubicación en Tijuana es estratégica ya que esta a solo
                    unos cuantos pasos de la frontera internacional, puede
                    estacionar su automovil de lado de Estados Unidos y cruzar
                    caminando a Tijuana, llegaría en solo unos minutos.
                  </p>
                </div>
              </div>
              <div class="col-lg-7 mt-5">
                <a
                  href="https://www.google.com/maps/place/Hospital+M%C3%A9xico/@32.538482,-117.028058,15z/data=!4m5!3m4!1s0x0:0x6bd2e723d983788e!8m2!3d32.538482!4d-117.028058?hl=en-US"
                >
                  <img
                    v-lazy="'img/tourism/hm-map-min.png'"
                    class="img-fluid"
                    alt="Hospital Mexico location"
                  />
                </a>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'Contact',
}
</script>
