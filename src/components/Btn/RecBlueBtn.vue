<template>
    <div>
        <button 
            class="rec_blue_btn text-r205g234b255"
            style="font-size:0.833333vw;"
            :style="{'margin-left': ml_val}">{{text}}</button>
    </div>
</template>
<script>
export default {
    name: 'RecBlueBtn',
    props: ['text', 'ml_val'],
    data() {
        return {
            
        }
    },
    methods: {},
    mounted: function() {},
}
</script>
<style scoped>
.rec_blue_btn {
    width: 7.5vw;
    height: 2.0833vw;
    background-image: url('../../assets/img/page5_part1_btn_bg_2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.rec_blue_btn:hover {
    font-size: 1.041666vw !important;
}
.rec_blue_btn::before {
    content: '';
    width: 0.208333vw;
    height: 0.8333333vw;
    background-color: #4da3cf;
    position: absolute;
    top: 50%;
    left: -0.1041667vw;
    transform: translateY(-50%);
}
.rec_blue_btn::after {
    content: '';
    width: 0.208333vw;
    height: 0.8333333vw;
    background-color: #4da3cf;
    position: absolute;
    top: 50%;
    right: -0.1041667vw;
    transform: translateY(-50%);
}
.rec_blue_btn:hover::after {
    animation: opacity_0_1 linear 1s infinite;
}
.rec_blue_btn:hover::before {
    animation: opacity_0_1 linear 1s infinite;
}
@keyframes opacity_0_1 {
    0% {opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
}
</style>