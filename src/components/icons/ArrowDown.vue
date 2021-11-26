<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow down">
<path id="arrow down_2" d="M12 15.41L6.29004 9.71L7.71004 8.29L12 12.59L16.29 8.29L17.71 9.71L12 15.41Z" fill="#1B1534"/>
<mask id="mask0_336:11514" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="8" width="12" height="8">
<path id="arrow down_3" d="M12 15.41L6.29004 9.71L7.71004 8.29L12 12.59L16.29 8.29L17.71 9.71L12 15.41Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11514)">
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