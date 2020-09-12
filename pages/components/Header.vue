<template>
  <div>
    <base-nav type="" effect="light" expand>
      <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/logo.png" style="height: 100%" fluid alt="logo" />
      </nuxt-link>

      <div slot="content-header" slot-scope="{ closeMenu }" class="row">
        <div class="col-6 collapse-brand">
          <a href="#">
            <img src="img/brand/logo.png" alt="logo" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            title="Tratamientos"
            href="#treatments"
          >
            Tratamientos
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            title="Cuestionario"
            target="_blank"
            href="https://drive.google.com/file/d/1g4wJs9zZ1HXrb2IC2FLsEEyI_hqwF0wx/view?usp=sharing"
          >
            Cuestionario
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            title="Testimoniales"
            target="_blank"
            href="https://www.youtube.com/user/hospitalmexico/videos"
          >
            Testimoniales
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" title="about" href="#about">
            Quiénes somos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#contact" title="Contact">
            Contacto
          </a>
        </li>
      </ul>
    </base-nav>
  </div>
</template>
<script>
import BaseNav from '~/components/BaseNav'
import CloseButton from '~/components/CloseButton'

export default {
  name: 'Header',
  components: {
    BaseNav,
    CloseButton,
  },
}
</script>
<style></style>
