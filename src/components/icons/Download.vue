<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="download">
<path id="Download" fill-rule="evenodd" clip-rule="evenodd" d="M17.36 9.23L18.64 10.77L12 16.3L5.36 10.77L6.64 9.23L11 12.87V3H13V12.87L17.36 9.23ZM20 21V19H4V21H20Z" fill="#1B1534"/>
<mask id="mask0_336:11693" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="18">
<path id="Download_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.36 9.23L18.64 10.77L12 16.3L5.36 10.77L6.64 9.23L11 12.87V3H13V12.87L17.36 9.23ZM20 21V19H4V21H20Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11693)">
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