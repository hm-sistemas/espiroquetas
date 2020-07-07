<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    :data-target="target"
    :aria-controls="target"
    :aria-expanded="toggled"
    aria-label="Toggle navigation"
  >
    <span class="" role="button"
      ><i class="fa fa-bars" aria-hidden="true" style="color: black;"></i
    ></span>
  </button>
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
      description: 'Button target element',
      default: '#',
    },
    toggled: {
      type: Boolean,
      default: false,
      description: 'Whether button is toggled',
    },
  },
}
</script>
<style></style>
