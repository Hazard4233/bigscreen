<template>
    <div class="bar_blue_btn_div flex flex-row" :style="{'margin-left': ml_val}" style="font-size:0.833333vw;">
        <!-- <div class="flex flex-col">
            <div class="bar_item_1 mt-auto" style="width:0.052083vw;height:1.822916vw;background-color:#4da3cf"></div>
        </div> -->
        <button 
            class="bar_blue_btn text-r1g190b229 relative"
            style="margin-left:0.15625vw;margin-right:0.15625vw;">{{text}}</button>
        <!-- <div class="flex flex-col">
            <div class="bar_item_2" style="width:0.052083vw;height:1.822916vw;background-color:#4da3cf"></div>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'BarBlueBtn',
    props: ['text', 'ml_val'],
    data() {
        return {
            
        }
    },
    methods: {
    },
    mounted: function() {},
}
</script>
<style scoped>
.bar_blue_btn {
    width: 7.9166vw;
    height: 2.65625vw;
    background-image: url('../../assets/img/page5_part1_btn_bg_1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.bar_blue_btn_div:hover {
    font-size: 1.041666vw !important;
}
.bar_blue_btn::before {
    content: '';
    width:0.052083vw;
    height:1.822916vw;
    background-color:#4da3cf;
    position: absolute;
    left: -5px;
    bottom: 0px;
}
.bar_blue_btn::after {
    content: '';
    width:0.052083vw;
    height:1.822916vw;
    background-color:#4da3cf;
    position: absolute;
    right: -5px;
    top: 0px;

}
.bar_blue_btn:hover::before {
    animation: top_to_0 linear 1s infinite forwards;
}
.bar_blue_btn:hover::after {
    animation: bottom_to_0 linear 1s infinite;
}
@keyframes top_to_0 {
    0% {bottom: 0;}
    50% {bottom: calc(2.65625vw - 1.822916vw);}
    100% {bottom: 0;}
}
@keyframes bottom_to_0 {
    0% {top: 0;}
    50% {top: calc(2.65625vw - 1.822916vw);}
    100% {top: 0;}
}
/* .bar_item_1_ani:hover {
    animation-name: bar_animation;
    animation-duration: 1s;
    animation-timing-function: linear;
}
@keyframes bar_animation {
    from {}
    to {}
} */
</style>