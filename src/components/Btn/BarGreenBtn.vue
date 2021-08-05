<template>
    <div class="flex flex-row" :style="{'margin-left': ml_val}">
        <button 
            class="bar_green_btn text-r0g230b151"
            style="font-size:0.833333vw;margin-left:0.15625vw;margin-right:0.15625vw;"
            :style="{'width': w_val, 'height': h_val}">{{text}}</button>
        
    </div>
</template>
<script>
export default {
    name: 'BarGreenBtn',
    props: ['text', 'ml_val', 'w_val', 'h_val'],
    data() {
        return {
            
        }
    },
    methods: {},
    mounted: function() {},
}
</script>
<style scoped>
.bar_green_btn {
    background-image: url('../../assets/img/page5_part2_btn_bg_2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.bar_green_btn::before {
    content: '';
    width:0.052083vw;
    height: 60%;
    background-color: rgb(0, 230, 151);
    position: absolute;
    left: -5px;
    bottom: 0px;
}
.bar_green_btn::after {
    content: '';
    width:0.052083vw;
    height: 60%;
    background-color:rgb(0, 230, 151);
    position: absolute;
    right: -5px;
    top: 0px;

}
.bar_green_btn:hover {
    font-size: 1.041666vw !important;
}
.bar_green_btn:hover::before {
    animation: top_to_0 linear 1s infinite forwards;
}
.bar_green_btn:hover::after {
    animation: bottom_to_0 linear 1s infinite;
}
@keyframes top_to_0 {
    0% {bottom: 0;}
    50% {bottom: 40%;}
    100% {bottom: 0;}
}
@keyframes bottom_to_0 {
    0% {top: 0;}
    50% {top: calc(2.65625vw - 1.822916vw);}
    100% {top: 0;}
}
</style>