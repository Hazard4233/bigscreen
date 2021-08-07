<template>
    <div class="h-full flex flex-col">
        <div class="absolute top-10 flex flex-row items-center" style="left:29.65284vw;top:4.9662487vw;">
            <router-link to="/page6/part1">
                <div class="flex flex-row items-center cursor-pointer">
                    <div class="" style="width:0.15625vw; height: 1.63934vw;background-color: #f7ce43"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(187, 124, 31)); font-size: 0.867888vw;">Real-Time Alarm</div>
                </div>
            </router-link>
            <router-link to="/page6/part2">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">Historical Alarm</div>
                </div>
            </router-link>
        </div>
        
        <div class="page6_part1 mx-auto" style="padding-top:32px;padding-left:43px;padding-right: 43px;font-size:0.7714561vw;">

            <div class="flex flex-row items-center">
                <div class=" text-r205g234b255">Device ID</div>
                <input type="text" class="bg-transparent border-r0g230b151 rounded text-r205g234b255 pl-2" 
                    style="border-width:1px;height:2.0833vw;width:7.8125vw;margin-left:0.46875vw;">
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">Alarm Type</div>
                <SelectInput :option_list="['Please choose']" style="margin-left:0.46875vw;"/>
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">Period</div>
                <PickerInput ph_value="Please select" style="margin-left:0.46875vw;"/>
                <BarGreenBtn text="Print" ml_val="2.6041vw" w_val="7.9166vw" h_val="2.65625vw"/>
            </div>
            <div class="yard_tb">
                <table class="w-full">
                    <thead>
                        <tr>
                            <td class="text-white text-center" style="padding:0.83333vw;">No</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Region</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Type</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Device ID</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Alarm Reason</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Time</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in tb_data" :key="index + 'id'" class="text-center" :class="{'hidden': index > num_per_page - 1}">
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{addZeroToInt(index + 1)}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.region}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.type}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.equip_num}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.alaram_cause}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.alaram_time}}</td>
                            <td class="" style="padding:1.25vw;">
                                <div class="flex flex-row items-center cursor-pointer">
                                    <div class="text-red-500 mx-auto underline">Confirm</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="w-full my-auto">
            <div class="pagination flex flex-row items-center justify-center" style="font-size:0.83333vw;">
                <div class=" text-r205g234b255">Total {{tb_data.length}}</div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-r205g234b255" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <div class="text-r205g234b255">1</div>
                </div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <div class="text-r205g234b255">2</div>
                </div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <div class="text-r205g234b255">3</div>
                </div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-r205g234b255" style="width:1.25vw;height:1.25vw;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <div class="text-r205g234b255">20</div>
                </div>
                <div class="pagination_item" style="margin-left:0.88541vw;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-r205g234b255" style="width:1.25vw;height:1.25vw;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <div class=" text-r205g234b255" style="margin-left:0.88541vw;">To</div>
                <div class="pagination_item px-1" style="margin-left:0.88541vw;">
                    <input type="text" class="w-full bg-transparent border-transparent text-r205g234b255">
                </div>
                <div class=" text-r205g234b255" style="margin-left:0.44541vw;">Page</div>
                <BarGreenBtn text="OK" ml_val="1.6854vw" w_val="5.41666vw" h_val="1.9791vw" />
            </div>
        </div>
    </div>
</template>
<script>
import BarGreenBtn from '../components/Btn/BarGreenBtn.vue'
import SelectInput from '../components/SelectInput.vue'
import PickerInput from '../components/PickerInput.vue'
export default {
    data() {
        return {
            tb_data: [],
            num_per_page: 7
        }
    },
    components: {
        BarGreenBtn,
        SelectInput,
        PickerInput
    },
    mounted: function() {
        this.$store.dispatch('ModuleApp/updateActiveNav', 2)
        for (let index = 0; index < 50; index++) {
            var obj_var = {}
            obj_var.region = `A-${index + 1} Region`
            obj_var.type = "AI Box"
            obj_var.equip_num = "A1001"
            obj_var.alaram_cause = "Car Arrived"
            obj_var.alaram_time = "2021-05-11 12:11:11"
            this.tb_data.push(obj_var)
        }
    },
    methods: {
        addZeroToInt(num) {
            if (Number(num) < 10) {
                return `0${num}`
            }
        }
    }
}
</script>
<style scoped>
.page6_part1 {
    width: 79.02603vw;
    height: 33.31726vw;
    background-image: url('../assets/img/page6_part1_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.tb_option_list .btn_type_2 {
    width: 7.5vw;
    height: 2.0833vw;
    background-image: url('../assets/img/page5_part1_btn_bg_2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.btn_type_3 {
    width: 7.9166vw;
    height: 2.65625vw;
    background-image: url('../assets/img/page5_part2_btn_bg_2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.yard_tb {
    /* margin-top: 2.0833vw; */
}
.pagination .pagination_item {
    width: 1.5625vw;
    height: 1.5625vw;
    background-image: url('../assets/img/page5_pagination_item_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.pagination .pagination_btn {
    width: 5.41666vw;
    height: 1.9791vw;
    background-image: url('../assets/img/page5_pagination_btn_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
}

</style>