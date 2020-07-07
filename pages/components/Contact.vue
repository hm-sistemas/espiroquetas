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
              <div class="col-lg-4">
                <div class="pr-md-5">
                  <icon
                    name="fa fa-question-circle"
                    class="mb-5"
                    size="lg"
                    type="info"
                    shadow
                    rounded
                  ></icon>
                  <h2 class="">
                    Contáctenos!!
                  </h2>
                  <h4>
                    La ubicación en Tijuana es estratégica ya que esta a solo
                    unos cuantos pasos de la frontera internacional, puede
                    estacionar su automovil de lado de Estados Unidos y cruzar
                    caminando a Tijuana, llegaría en solo unos minutos.
                  </h4>
                  <h3>LLAME AHORA</h3>
                  <ul class="list-unstyled mt-5">
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
                          <badge
                            type="info"
                            circle
                            class="mr-3"
                            icon="fa fa-phone"
                          ></badge>
                          <h6 class="mb-0">
                            A California desde fuera de USA 1(619) 581-4081
                          </h6>
                        </a>
                      </div>
                    </li>
                    <li class="py-2">
                      <a
                        class="nav-link nav-link-icon"
                        href="tel:16195814081"
                        target="_blank"
                        rel="noopener"
                        data-toggle="tooltip"
                        title="Call Us"
                      >
                        <badge
                          type="info"
                          circle
                          class="mr-3"
                          icon="fa fa-phone"
                        ></badge>
                        <h6 class="mb-0">A California en USA (619) 581-4081</h6>
                      </a>
                    </li>
                    <li class="py-2">
                      <a
                        class="nav-link nav-link-icon"
                        target="_blank"
                        rel="noopener"
                        data-toggle="tooltip"
                        title="Address"
                      >
                        <badge
                          type="info"
                          circle
                          class="mr-3"
                          icon="fa fa-map-marker"
                        ></badge>
                        <h6 class="mb-0">
                          Hospital México 9077 De la Amistad Av., Colonia
                          Federal, 22010 Tijuana, B.C.
                        </h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-8">
                <a
                  href="https://www.google.com/maps/place/Hospital+M%C3%A9xico/@32.538482,-117.028058,15z/data=!4m5!3m4!1s0x0:0x6bd2e723d983788e!8m2!3d32.538482!4d-117.028058?hl=en-US"
                >
                  <img
                    v-lazy="'img/tourism/hm-map-min.png'"
                    class="img-fluid floating"
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
