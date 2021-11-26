<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="menu">
<path id="menue" fill-rule="evenodd" clip-rule="evenodd" d="M2 5H22V7H2V5ZM2 11H15V13H2V11ZM22 17H2V19H22V17Z" fill="#1B1534"/>
<mask id="mask0_336:11995" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="5" width="20" height="14">
<path id="menue_2" fill-rule="evenodd" clip-rule="evenodd" d="M2 5H22V7H2V5ZM2 11H15V13H2V11ZM22 17H2V19H22V17Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11995)">
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