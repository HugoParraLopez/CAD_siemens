<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="trash ">
<path id="trash" fill-rule="evenodd" clip-rule="evenodd" d="M15 2V4H9V2H15ZM5 6H3V8H5V22H19V8H21V6H19H5ZM17 8H7V20H17V8ZM11 18V10H9V18H11ZM15 10V18H13V10H15Z" fill="#1B1534"/>
<mask id="mask0_336:12307" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
<path id="trash_2" fill-rule="evenodd" clip-rule="evenodd" d="M15 2V4H9V2H15ZM5 6H3V8H5V22H19V8H21V6H19H5ZM17 8H7V20H17V8ZM11 18V10H9V18H11ZM15 10V18H13V10H15Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:12307)">
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