<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow up">
<path id="arrow up_2" d="M16.29 14.71L12 10.41L7.71004 14.71L6.29004 13.29L12 7.59L17.71 13.29L16.29 14.71Z" fill="#1B1534"/>
<mask id="mask0_336:11535" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="7" width="12" height="8">
<path id="arrow up_3" d="M16.29 14.71L12 10.41L7.71004 14.71L6.29004 13.29L12 7.59L17.71 13.29L16.29 14.71Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11535)">
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