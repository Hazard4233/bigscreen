<template>
    <div class="page4 relative flex flex-col" :style="'--spin_color:' + spin_color + ';' + '--spin_rate:' + spin_rate + ';'">
        <div class=" absolute text-white font-semibold" 
            style="font-size:1.35004vw;left:10.559305vw;top:2.20009vw;">Automatic Station Platform</div>
        <div class=" absolute text-r205g234b255"
            style="font-size:0.72324vw;top:5.9305689vw;left:10.8343298vw;">
            <TimerAni :w_val="0.46875" :h_val="1.041666" unit="vw" style="font-size:0.733333vw;"></TimerAni>
        </div>
        <div class=" absolute"
            style="left:10.6vw;top:7.1841851vw;">
            <div class="flex flex-row">
                <div class="bg-r77g163b207"
                    style="height:1px;width:10.8486vw;"></div>
                <div style="margin-top:-0.578592vw;">
                    <svg height="12" width="12">
                        <line x1="0" y1="12" x2="12" y2="0" style="stroke:rgb(77,163,207);stroke-width:1" />
                    </svg>
                </div>
                <div class="bg-r77g163b207"
                    style="height:1px;width:4.8216vw;margin-top:-0.578592vw;"></div>
            </div>
        </div>

        <div class="absolute" style="left:4.010416vw;top:1.875vw;width:5.166666vw;height:5.166666vw;">
            <div class="relative w-full h-full flex">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div v-if="spin_color === '#00e697'" class="bg-r0g230b151 bg-opacity-60 rounded-full border-2 border-r0g230b151" 
                        style="width:1.1458333vw;height:1.1458333vw;"></div>
                    <div v-else class=" text-red-600 font-extrabold" :style="{'font-size':1.5625 * spin_rate + 'vw'}">!</div>
                </div>
                <div class="lds-spinner mx-auto my-auto">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>

        <div class="absolute flex flex-row items-center" style="left:2.604166vw;top:7.8125vw;">
            <SunSVG class="" style="width:1.041666vw;height:1.041666vw;"></SunSVG>
            <div class=" text-r205g234b255" style="font-size:0.6770833vw;margin-left:0.46875vw;">28&#176;</div>
        </div>

        <!-- profile part -->
        <div class="absolute" style="top:2.34375vw;right:6.9vw;">
            <div class="flex flex-row items-center">
                <div class="cursor-pointer" style="width:1.145833vw;height:1.041666vw;">
                    <img src="../assets/img/header_screen_icon.png" alt="" class="h-full w-full">
                </div>
                <div class="cursor-pointer" style="margin-left:0.96432vw;width:1.145833vw;height:1.041666vw;">
                    <img src="../assets/img/header_sound_icon.png" alt="" class="w-full h-full">
                </div>
                <div class="cursor-pointer" style="margin-left:0.96432vw;width:1.145833vw;height:1.145833vw;">
                    <img class="rounded-full w-full h-full" src="https://images-eu.ssl-images-amazon.com/images/I/811bIz9%2BRvL.png"
                     alt="">
                </div>
                <div class=" text-r205g234b255 cursor-pointer" style="margin-left: 0.96432vw;font-size:0.771456vw;">Admin</div>
            </div>
        </div>
        
        <!-- navigation bar -->
        <div class=" absolute cursor-pointer" style="top:12vw;left:1.44648vw;">
            <div class="flex flex-col" style="width:2.94117vw;">
                <div class="relative ml-auto">
                    <router-link to="/page4">
                        <div class="" style="width:2.65625vw;">
                            <svg v-if="active_nav !== 0" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                class="w-full h-full"
                                width="51.000000pt" height="93.000000pt" viewBox="0 0 51.000000 93.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,93.000000) scale(0.100000,-0.100000)"
                                fill="rgba(77, 163, 207, 0.2)" stroke="rgba(77, 163, 207, 1)" stroke-width="10">
                                <path d="M10 642 l0 -278 178 -177 178 -177 67 0 67 0 0 363 0 362 -93 93 -92
                                92 -153 0 -152 0 0 -278z"/>
                                </g>
                            </svg>
                            <svg v-else version="1.0" xmlns="http://www.w3.org/2000/svg"
                                class="w-full h-full"
                                width="61.000000pt" height="142.000000pt" viewBox="0 0 61.000000 142.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,142.000000) scale(0.100000,-0.100000)"
                                fill="rgba(247, 206, 67, 0.2)" stroke="#f7ce43" stroke-width="10">
                                <path d="M10 936 l0 -473 234 -227 234 -226 61 0 61 0 0 608 0 607 -93 93 -92 92 -203 0 -202 0 0 -474z"/>
                                </g>
                            </svg>
                        </div>

                        <div class="absolute top-0 left-0 flex flex-col text-center w-full h-full">
                            <div class="my-auto">
                                <img :width="15 * px_rate" class="mx-auto" src="../assets/img/page4_nav_icon_1.png" alt="">
                                <div v-if="active_nav === 0" style="margin-top:0.3125vw;">
                                    <div class="text-white text-center font-bold mx-auto whitespace-pre-wrap" style="font-size:0.6375vw;">Home</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="relative ml-auto" style="margin-top:-1.302083vw;">
                    <router-link to="/page5/part1">
                        <div class="" style="width:2.65625vw;">
                            <svg v-if="active_nav !== 1" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                class="w-full h-full"
                                width="51.000000pt" height="111.000000pt" viewBox="0 0 51.000000 111.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                fill="rgba(77, 163, 207, 0.2)" stroke="rgba(77, 163, 207, 1)" stroke-width="5">
                                <path d="M10 729 l0 -363 177 -178 177 -178 68 0 68 0 0 375 0 375 -71 0 -71
                                0 -174 166 -174 166 0 -363z"/>
                                </g>
                            </svg>
    
                            <svg v-else version="1.0" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"
                                viewBox="0 0 61.000000 215.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,215.000000) scale(0.100000,-0.100000)"
                                    fill="rgba(247, 206, 67, 0.2)" stroke-width="10" stroke="#f7ce43">
                                    <path d="M10 1301 l0 -823 226 -234 227 -234 68 0 69 0 0 835 0 835 -72 0 -73 0 -222 222 -223 223 0 -824z"/>
                                </g>
                            </svg>
                        </div>

                        <div class="absolute top-0 left-0 flex flex-col text-center w-full h-full">
                            <div class="my-auto">
                                <img :width="15 * px_rate" class="mx-auto" src="../assets/img/page4_nav_icon_2.png" alt="">
                                <div v-if="active_nav === 1" style="margin-top:0.3125vw;">
                                    <div class="text-white text-center font-bold mx-auto" style="font-size:0.6375vw;">Yard Manage</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="relative ml-auto" style="margin-top:-1.302083vw;">
                    <router-link to="/page6/part1">
                        <div class="" style="width:2.65625vw;">
                            <svg v-if="active_nav !== 2" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                class="w-full h-full"
                                width="51.000000pt" height="111.000000pt" viewBox="0 0 51.000000 111.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                fill="rgba(77, 163, 207, 0.2)" stroke="rgba(77, 163, 207, 1)" stroke-width="5">
                                <path d="M10 729 l0 -363 177 -178 177 -178 68 0 68 0 0 375 0 375 -71 0 -71
                                0 -174 166 -174 166 0 -363z"/>
                                </g>
                            </svg>

                            <svg v-else version="1.0" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"
                                viewBox="0 0 61.000000 215.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,215.000000) scale(0.100000,-0.100000)"
                                    fill="rgba(247, 206, 67, 0.2)" stroke-width="10" stroke="#f7ce43">
                                    <path d="M10 1301 l0 -823 226 -234 227 -234 68 0 69 0 0 835 0 835 -72 0 -73 0 -222 222 -223 223 0 -824z"/>
                                </g>
                            </svg>
                        </div>
                        
                        <div class="absolute top-0 left-0 flex flex-col text-center w-full h-full">
                            <div class="my-auto">
                                <img :width="15 * px_rate" class="mx-auto" src="../assets/img/page4_nav_icon_3.png" alt="">
                                <div v-if="active_nav === 2" style="margin-top:0.3125vw;">
                                    <div class="text-white text-sm text-center font-bold mx-auto" style="font-size:0.6375vw;">Alarm Manage</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                
                <div class="relative ml-auto" style="margin-top:-1.302083vw;">
                    <router-link to="/page7/part1">
                        <div class="" style="width:2.65625vw;">
                            <svg v-if="active_nav !== 3" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                class="w-full h-full"
                                width="51.000000pt" height="111.000000pt" viewBox="0 0 51.000000 111.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                fill="rgba(77, 163, 207, 0.2)" stroke="rgba(77, 163, 207, 1)" stroke-width="5">
                                <path d="M10 729 l0 -363 177 -178 177 -178 68 0 68 0 0 375 0 375 -71 0 -71
                                0 -174 166 -174 166 0 -363z"/>
                                </g>
                            </svg>

                            <svg v-else version="1.0" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"
                                viewBox="0 0 61.000000 215.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,215.000000) scale(0.100000,-0.100000)"
                                    fill="rgba(247, 206, 67, 0.2)" stroke-width="10" stroke="#f7ce43">
                                    <path d="M10 1301 l0 -823 226 -234 227 -234 68 0 69 0 0 835 0 835 -72 0 -73 0 -222 222 -223 223 0 -824z"/>
                                </g>
                            </svg>
                        </div>
                        
                        <div class="absolute top-0 left-0 flex flex-col text-center w-full h-full">
                            <div class="my-auto">
                                <img :width="15 * px_rate" class="mx-auto" src="../assets/img/page4_nav_icon_4.png" alt="">
                                <div v-if="active_nav === 3" style="margin-top:0.3125vw;">
                                    <div class="text-white text-sm text-center font-bold mx-auto" style="font-size:0.6375vw;">System Setting</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            
        </div>

        <router-view></router-view>
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import SunSVG from './SunSVG.vue'
import TimerAni from './TimerAni.vue'
export default {
    data() {
        return {
            px_rate: window.innerWidth / 1920,
            spin_color: '#00e697',
            spin_rate: 1,
            spin_interval: null,
        }
    },
    components: {
        SunSVG,
        TimerAni
    },
    computed: {
        ...mapGetters({
            active_nav: 'ModuleApp/GetActiveNav'
        })
    },
    methods: {
        detectCurrentPath(str) {
            return window.location.pathname.includes(str)
        },

        spinAnimation() {
            setTimeout(() => {
                this.spin_color = 'red'
                var spin_rate_direction = true
                this.spin_interval = setInterval(() => {
                    if (this.spin_rate >= 1.2) {
                        spin_rate_direction = false
                    }
                    if (this.spin_rate < 0.7) {
                        spin_rate_direction = true
                    }
                    if (spin_rate_direction) {
                        this.spin_rate = this.spin_rate + 0.1
                    }else {
                        this.spin_rate = this.spin_rate - 0.1
                    }
                }, 100);
            }, 5000);
            setTimeout(() => {
                this.spin_color = '#00e697'
                this.spin_rate = 1
                clearInterval(this.spin_interval)
            }, 20000);
            
        }
    },
    mounted: function() {
        this.spinAnimation()
    },
    beforeDestroy: function() {
        if (this.spin_interval !== null) {
            clearInterval(this.spin_interval)
            this.spin_interval = null
        }
    }
}
</script>
<style scoped>
.page4 {
    background-image: url('../assets/img/page4_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 60.07714vw;
    padding-top: 9.25747vw;
    padding-bottom: 6.364513vw;
    padding-left: 7.087753vw;
    padding-right: 6.1716489vw;    
}

/* spinner */
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: calc(4.1666666vw * var(--spin_rate));
  height: calc(4.1666666vw * var(--spin_rate));
}
.lds-spinner div {
  transform-origin: calc(2.0833333vw * var(--spin_rate)) calc(2.0833333vw * var(--spin_rate));
  animation: lds-spinner 2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: calc(0.15625vw * var(--spin_rate));
  left: calc(1.9270833vw * var(--spin_rate));
  width: calc(0.3125vw * var(--spin_rate));
  height: calc(0.9375vw * var(--spin_rate));
  border-radius: 20%;
  background: var(--spin_color);
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -2s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(18deg);
  animation-delay: -1.9s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(36deg);
  animation-delay: -1.8s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(54deg);
  animation-delay: -1.7s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(72deg);
  animation-delay: -1.6s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(90deg);
  animation-delay: -1.5s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(108deg);
  animation-delay: -1.4s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(126deg);
  animation-delay: -1.3s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(144deg);
  animation-delay: -1.2s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(162deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(180deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(198deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(13) {
  transform: rotate(216deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(14) {
  transform: rotate(234deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(15) {
  transform: rotate(252deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(16) {
  transform: rotate(270deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(17) {
  transform: rotate(288deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(18) {
  transform: rotate(306deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(19) {
  transform: rotate(324deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(20) {
  transform: rotate(342deg);
  animation-delay: -0.1s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>