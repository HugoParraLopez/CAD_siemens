<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="close big">
<path id="close big_2" fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 10.5857L4.70718 3.29285L3.29297 4.70706L10.5859 12L3.29297 19.2928L4.70718 20.7071L12.0001 13.4142L19.293 20.7071L20.7072 19.2928L13.4143 12L20.7072 4.70706L19.293 3.29285L12.0001 10.5857Z" fill="#1B1534"/>
<mask id="mask0_336:12424" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
<path id="close big_3" fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 10.5857L4.70718 3.29285L3.29297 4.70706L10.5859 12L3.29297 19.2928L4.70718 20.7071L12.0001 13.4142L19.293 20.7071L20.7072 19.2928L13.4143 12L20.7072 4.70706L19.293 3.29285L12.0001 10.5857Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:12424)">
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