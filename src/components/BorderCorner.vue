<template>
<div class="special_border" :style="{padding: padding_y + 'px ' + padding_x + 'px'}">
  <div class="left_corner"></div>
  <div class="">{{title}}</div>
</div>
</template>

<script>
export default {
  name: 'BorderCorner',
  props: {
    title: String,
    padding_y: String,
    padding_x: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special_border {
  position: relative;
  display: flex; 
  justify-content: center; 
  align-items: center;

}
.special_border::after{
  display: block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid #2a6b87;
    border-right: 1px solid #2a6b87;
}
.special_border .left_corner::before {
  display: block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-top: 1px solid #2a6b87;
    border-left: 1px solid #2a6b87;
}
</style>
