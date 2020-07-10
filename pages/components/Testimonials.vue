<template>
  <section class="section">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-lg-12">
          <card shadow class="shadow-lg--hover">
            <div class="d-flex px-3">
              <div class="pl-4">
                <h5 class="display-3 text-center">Testimoniales</h5>
                <a
                  class="h3 text-justify"
                  title="Testimoniales"
                  target="_blank"
                  :href="url"
                >
                  <img
                    v-lazy="'img/brand/youtube_social_circle_white-min.png'"
                    alt="Youtube"
                    class="pull-left mr-2"
                  />
                  <br />
                  Dar clic aquí para ver todos los testimoniales en YouTube.
                </a>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Testimonials',
  props: {
    url: {
      type: String,
      default: 'https://www.youtube.com/user/hospitalmexico/videos',
      description: 'URL to Youtube video or playlist.',
    },
  },
}
</script>
