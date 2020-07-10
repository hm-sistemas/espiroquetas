<template>
  <section id="about" class="section section-lg pt-0">
    <section class="section-shaped my-0">
      <div class="container">
        <div class="p-5">
          <h2 class="display-3">
            ¿Quiénes somos?
          </h2>
          <p class="display-4">
            Mas de 20 años de experiencia curando Artritis
          </p>
          <div class="row">
            <div class="col-lg-7">
              <div class="pr-md-5">
                <p class="display-4">
                  ¿Cómo llegar al Hospital México?
                </p>
              </div>
              <client-only>
                <youtube
                  :video-id="videoId"
                  player-width="500"
                  @ready="ready"
                ></youtube>
              </client-only>
            </div>
            <div class="col-lg-5">
              <p class="display-4">
                Dr. Manuel R. Lazo
              </p>
              <p class="h4">Director Medico</p>
              <p class="lead text-muted text-justify">
                Hola, Soy el Dr. Manuel Lazo, Director Medico del Hospital
                México. Hemos estado tratando pacientes por mas de 20 años, y
                hemos visto que los tratamientos tradicionales no curan, solo
                calman los sintomas por un tiempo, pero la enfermedad mantiene
                su progreso y los medicamentos aparte de caros pueden tener
                graves efectos secundarios.
              </p>
              <p class="lead text-muted text-justify">
                Nuestro hopsital es uno de los pocos lugares en el mundo donde
                los pacientes que sufren de migraña, artritis, lumbago,
                parálisis facial, síndrome del túnel de carpo, lupus y
                fibromialgia pueden ser curados.
              </p>
              <p class="h4">Acerca de nuestro tratamiento</p>
              <p class="lead text-muted text-justify">
                Cuando venga a consulta le haremos el estudio del campos oscuro
                utilizando un microscopio con el que podemos ver la bacteria
                Espiroqueta en la sangre.
              </p>
              <p class="lead text-muted text-justify">
                Se eliminan los sintomas y se cura su enfermedad con
                antibioticos dependiendo de cada paciente y la magnitud de la
                enfermedad. No utilizamos medicina naturista o "alternativa",
                solo le suministamos antibioticos los cuales pueden ser
                comprados en cualquier farmacia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      videoId: 'rUZd4YgJ9nI',
    }
  },
  methods: {
    ready(event) {
      this.player = event.target
    },
  },
}
</script>
