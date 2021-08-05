<template>
<div class="text-r205g234b255 relative" :style="{'width': String(w_val) + unit, 'height': String(h_val) + unit}">
    <div class="digit_item_up" :style="{'top': String((digit_val * (-1) * h_val)) + unit, 'width': String(w_val) + unit, 'height': String(h_val) + unit}">
        <div class=" w-full h-full flex items-center justify-center">0</div>
        <div class=" w-full h-full flex items-center justify-center">1</div>
        <div class=" w-full h-full flex items-center justify-center">2</div>
        <div class=" w-full h-full flex items-center justify-center">3</div>
        <div class=" w-full h-full flex items-center justify-center">4</div>
        <div class=" w-full h-full flex items-center justify-center">5</div>
        <div class=" w-full h-full flex items-center justify-center">6</div>
        <div class=" w-full h-full flex items-center justify-center">7</div>
        <div class=" w-full h-full flex items-center justify-center">8</div>
        <div class=" w-full h-full flex items-center justify-center">9</div>
        <div class=" w-full h-full flex items-center justify-center">0</div>
    </div>
</div>
</template>
<script>
export default {
    name: 'DigitItem',
    props: ['digit_val', 'w_val', 'h_val', 'unit'],
    data() {
        return {
            second_count_interval: null
        }
    },
    components: {},
    methods: {},
    mounted: function() {
        // var index = 0
        // this.second_count_interval = setInterval(() => {
        //     index = index + 1
        //     document.querySelector('.digit_item_up').style.marginTop = `-440px`
        // }, 10000);
    },
    beforeDestroy: function() {
        // if (this.second_count_interval !== null) {
        //     clearInterval(this.second_count_interval)
        //     this.second_count_interval = null
        // }
    }
}
</script>
<style scoped>
.digit_item_up {
    position: absolute;
    top: 0;
    transition: all 0.5s;
}
</style>