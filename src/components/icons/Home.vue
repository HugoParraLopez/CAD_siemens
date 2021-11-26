<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="home">
<path id="Home" fill-rule="evenodd" clip-rule="evenodd" d="M2 10L12 2L22 10V22H14V16H10V22H2V10ZM16 20H20V11L12 4.6L4 11V20H8V14H16V20Z" fill="#1B1534"/>
<mask id="mask0_336:11845" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
<path id="Home_2" fill-rule="evenodd" clip-rule="evenodd" d="M2 10L12 2L22 10V22H14V16H10V22H2V10ZM16 20H20V11L12 4.6L4 11V20H8V14H16V20Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11845)">
<rect id="Color" width="24" height="24" :fill="iconColor"/>
</g>
</g>
</svg>
</template>
<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: '#FFFFFF'
    }
  }
}
</script>