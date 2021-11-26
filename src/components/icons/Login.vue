<template>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="login">
<path id="login_2" fill-rule="evenodd" clip-rule="evenodd" d="M7.00049 4.00018V2.00018H21.9995V22.0002H20.0005H7.00049V20.0002V18.0002H9.00049V20.0002H20.0005L20.0001 3.99998L9.00049 4.00018V6.00018H7.00049V4.00018ZM13.5855 11L11.2935 8.70698L12.7075 7.29298L17.4145 12L12.7075 16.707L11.2935 15.293L13.5855 13H2.00049V11H13.5855Z" fill="#1B1534"/>
<mask id="mask0_336:11979" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="21">
<path id="login_3" fill-rule="evenodd" clip-rule="evenodd" d="M7.00049 4.00018V2.00018H21.9995V22.0002H20.0005H7.00049V20.0002V18.0002H9.00049V20.0002H20.0005L20.0001 3.99998L9.00049 4.00018V6.00018H7.00049V4.00018ZM13.5855 11L11.2935 8.70698L12.7075 7.29298L17.4145 12L12.7075 16.707L11.2935 15.293L13.5855 13H2.00049V11H13.5855Z" fill="white"/>
</mask>
<g mask="url(#mask0_336:11979)">
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