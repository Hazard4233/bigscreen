<template>
    <div class="select">
        <select name="slct" id="slct">
            <option v-for="(item, index) in option_list" :key="index" :value="item">{{item}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'SelectInput',
    props: ['option_list'],
    data() {
        return {
        }
    },
    components: {},
    methods: {},
    mounted: function() {

    },
    beforeDestroy: function() {}
    
}
</script>
<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: transparent;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 7.8125vw;
  height: 2.0833vw;
  line-height: 3;
  background: transparent;
  overflow: hidden;
  border-radius: .25em;
  border-color: rgb(0, 230, 151);
  border-width: 1px;
}
select {
  flex: 1;
  padding: 0 .5em;
  color: rgba(205, 234, 255);
  cursor: pointer;
  font-size: 0.677083vw;
}
/* Arrow */
.select::after {
  content: '\FE3E';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding-right: 7px;
  background: transparent;
  color: rgb(0, 230, 151);
  cursor: pointer;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  animation: top_bottom_ani 0.7s linear infinite;
}

@keyframes top_bottom_ani {
    0% {top: 0;}
    50% {top: 0.260416vw;}
    100% {top: 0;}
}
</style>