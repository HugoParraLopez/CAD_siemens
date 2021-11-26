<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="plus">
<path id="uncollapse" fill-rule="evenodd" clip-rule="evenodd" d="M13 11V3H11V11H3V13H11V21H13V13H21V11H13Z" fill="#1B1534"/>
<mask id="mask0_336:12097" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
<path id="uncollapse_2" fill-rule="evenodd" clip-rule="evenodd" d="M13 11V3H11V11H3V13H11V21H13V13H21V11H13Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:12097)">
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