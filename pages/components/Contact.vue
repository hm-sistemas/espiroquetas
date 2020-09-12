<template>
  <section id="contact" class="section section-lg pt-0">
    <br />
    <br />
    <section class="section-shaped my-0">
      <div class="shape shape-style-2 shape-default shape-skew">
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
                  <p class="display-3 text-center">Contáctenos!!</p>
                  <p class="h5 text-justify">
                    La ubicación en Tijuana es estratégica ya que esta a solo
                    unos cuantos pasos de la frontera internacional, puede
                    estacionar su automovil de lado de Estados Unidos y cruzar
                    caminando a Tijuana, llegaría en solo unos minutos.
                  </p>
                  <h5 class="title text-success">LLAME AHORA</h5>
                  <ul class="list-unstyled mt-2">
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <a
                          class="nav-link nav-link-icon"
                          href="tel:16195814081"
                          target="_blank"
                          rel="noopener"
                          data-toggle="tooltip"
                          title="LLAMENOS"
                        >
                          <h6 class="">
                            A California desde fuera de USA 1(619) 581-4081
                          </h6>
                        </a>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <a
                          class="nav-link nav-link-icon"
                          href="tel:16195814081"
                          target="_blank"
                          rel="noopener"
                          data-toggle="tooltip"
                          title="Call Us"
                        >
                          <h6 class="mb-0">
                            A California en USA (619) 581-4081
                          </h6>
                        </a>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <a
                          class="nav-link nav-link-icon"
                          href="mail:info@hospitalmexico.org"
                          target="_blank"
                          rel="noopener"
                          data-toggle="tooltip"
                          title="Email Us"
                        >
                          <h6 class="mb-0">E-mail: info@hospitalmexico.org</h6>
                        </a>
                      </div>
                    </li>
                  </ul>
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
