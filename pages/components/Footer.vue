<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <!-- <h3 class="text-primary font-weight-light mb-2">
            Thank you for over 25 years of service.
          </h3> -->
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="#" target="_blank" rel="noopener">Dr. Manuel Lazo</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <!-- <li class="nav-item">
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
                <span class="nav-link-inner--text d-lg-none"
                  >1 800 315 87 14</span
                >
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
