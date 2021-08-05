<template>
    <div class="flex flex-row items-center overflow-hidden" :style="{'height': String(h_val) + unit}">
        <div v-for="(item, index) in digit_list" :key="index" class="h-full flex flex-row items-center">
            <DigitItem :digit_val="item" :w_val="w_val" :h_val="h_val" :unit="unit"></DigitItem>
            <div v-if="index === 3" class="text-r205g234b255 flex justify-center items-center" :style="{'width': String(w_val) + unit, 'height': String(h_val) + unit}" style="margin-left:3px;margin-right:3px;">年</div>
            <div v-if="index === 5" class="text-r205g234b255 flex justify-center items-center" :style="{'width': String(w_val) + unit, 'height': String(h_val) + unit}" style="margin-left:3px;margin-right:3px;">月</div>
            <div v-if="index === 7" class="text-r205g234b255 flex justify-center items-center" :style="{'width': String(w_val) + unit, 'height': String(h_val) + unit}" style="margin-left:3px;margin-right:8px;">日</div>
            <div v-if="index === 9" class="text-r205g234b255 flex justify-center items-center" :style="{'width': String(w_val) + unit, 'height': String(h_val) + unit}" style="margin-left:3px;margin-right:3px;">:</div>
            <div v-if="index === 11" class="text-r205g234b255 flex justify-center items-center" :style="{'width': String(w_val) + unit, 'height': String(h_val) + unit}" style="margin-left:3px;margin-right:3px;">:</div>
        </div>
    </div>
</template>
<script>
import DigitItem from './DigitItem.vue'
export default {
    name: 'TimerAni',
    props: ['w_val', 'h_val', 'unit'],
    data() {
        return {
            digit_list: [],
            current_time_interval: null,
        }
    },
    components: {
        DigitItem
    },
    mounted: function() {
        this.getCurrentTime()
        this.current_time_interval = setInterval(() => {
             this.getCurrentTime()
        }, 1000);
    },
    methods: {
        addZeroForTime(num_var) {
            if (num_var < 10) {
                return `0${num_var}`
            }else {
                return num_var
            }
        },
        getCurrentTime() {
            var current_time = new Date()
            this.digit_list = []
            current_time = `${current_time.getFullYear()}${this.addZeroForTime(current_time.getMonth() + 1)}${this.addZeroForTime(current_time.getDate())}${this.addZeroForTime(current_time.getHours())}${this.addZeroForTime(current_time.getMinutes())}${this.addZeroForTime(current_time.getSeconds())}`
            for (let index = 0; index < current_time.length; index++) {
                this.digit_list.push(Number(current_time[index]))
            }
        },
    },
    beforeDestroy: function() {
        if (this.current_time_interval !== null) {
            clearInterval(this.current_time_interval)
            this.current_time_interval = null
        }
    }
}
</script>
<style scoped>

</style>