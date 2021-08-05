<template>
    <div class="flex flex-row items-center" :style="{'margin-left':ml_val, 'height': h_val}">
        <input type="text" :placeholder="place_holder" 
            class="search_input w-0 h-full border border-r77g163b207 rounded bg-transparent pl-2 text-r205g234b255 placeholder-r205g234b255 placeholder-opacity-90" style="visibility:hidden">
        <div class="cursor-pointer" style="margin-left:0.6041vw;" @click="clickSearchIcon()">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="height:1.25vw;width:1.25vw;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ExpandSearchInput',
    props: ['ml_val', 'place_holder', 'h_val', 'w_val'],
    data() {
        return {
            
        }
    },
    methods: {
        clickSearchIcon() {
            var search_input = document.querySelector('.search_input')
            console.log(search_input.offsetWidth)
            if (search_input.offsetWidth < 100) {
                search_input.style.width = this.w_val
                search_input.style.visibility = 'visible'
            }else {
                search_input.style.width = '0px'
                search_input.style.visibility = 'hidden'
            }
        }
    },
    mounted: function() {

    }
}
</script>
<style scoped>
.search_input {
    transition: all 0.3s linear;
}
</style>