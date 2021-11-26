<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow right">
<path id="arrow right_2" d="M10.21 17.21L8.79004 15.79L13.09 11.5L8.79004 7.21L10.21 5.79L15.91 11.5L10.21 17.21Z" fill="#1B1534"/>
<mask id="mask0_336:11531" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="5" width="8" height="13">
<path id="arrow right_3" d="M10.21 17.21L8.79004 15.79L13.09 11.5L8.79004 7.21L10.21 5.79L15.91 11.5L10.21 17.21Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11531)">
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