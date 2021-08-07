<template>
    <div class="picker-input relative">
        <input type="text" class="bg-transparent border-r0g230b151 rounded text-r205g234b255 pl-2 placeholder-r0g230b151 placeholder-opacity-70" :placeholder="ph_value" 
            style="border-width:1px;height:2.0833vw;width:9.375vw;">
        <div class="absolute top-1/2 transform -translate-y-1/2" style="right:0.55625vw;">
            <img class="cursor-pointer" src="../assets/img/picker_icon.png" alt="" style="width:1.197916vw;height:1.197916vw;">
        </div>
    </div>
</template>
<script>
export default {
    name: 'PickerInput',
    props: ['ph_value'],
    data() {
        return {

        }
    },
    components: {},
    methods: {},
    mounted: function() {

    },
}
</script>
<style scoped>
.picker-input img:hover {
    animation: shake 0.5s linear;
    animation-iteration-count: 3;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>