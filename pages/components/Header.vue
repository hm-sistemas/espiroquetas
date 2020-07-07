<template>
  <div>
    <base-nav type="" effect="light" expand>
      <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <b-img
          src="img/brand/logo.png"
          style="height: 100%;"
          fluid
          alt="logo"
        ></b-img>
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
        <!-- <base-dropdown class="nav-item">
          <a
            slot="title"
            href="#services"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="fa fa-hospital-o d-lg-none"></i>
            <span class="nav-link-inner--text">Tratamientos</span>
          </a>
          <a class="dropdown-item" title="Dental" href="#services">Dental</a>
          <a class="dropdown-item" title="Surgeries" href="#services"
            >Surgeries</a
          >
          <a class="dropdown-item" title="Medical specialists" href="#services"
            >Medical Specialists</a
          >
          <a class="dropdown-item" title="Hospitalization" href="#services"
            >Hospitalization</a
          >
          <a class="dropdown-item" title="Laboratory" href="#services"
            >Laboratory</a
          >
          <a class="dropdown-item" title="Treatments" href="#services"
            >Treatments</a
          >
        </base-dropdown> -->
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            title="Tratamientos"
            href="#services"
          >
            Tratamientos
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
            Quienes somos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#contact" title="Contact">
            Contacto
          </a>
        </li>
        <!-- <li class="nav-item">
          <nuxt-link
            class="nav-link nav-link-icon"
            to="registro"
            title="Register"
            >REGISTER</nuxt-link
          >
        </li> -->
      </ul>
      <!-- <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="mailto:info@hospitalmexico.org"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Email Us"
          >
            <i class="fa fa-envelope"></i>
            <span class="nav-link-inner--text d-lg-none"
              >info@hospitalmexico.org</span
            >
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="tel:18003158714"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Call Us"
          >
            <i class="fa fa-phone"></i>
            <span class="nav-link-inner--text d-lg-none">1 800 315 87 14</span>
          </a>
        </li>
      </ul> -->
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
