<template>
    <div class="h-full flex flex-col">
        <div class="absolute top-10 flex flex-row items-center" style="left:29.65284vw;top:4.9662487vw;">
            <router-link to="/page5/part1">
                <div class="flex flex-row items-center cursor-pointer">
                    <div class="bg-r205g234b255" style="width:0.15625vw; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">Yard Manage</div>
                </div>
            </router-link>
            <router-link to="/page5/part2">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">Member Manage</div>
                </div>
            </router-link>
            <router-link to="/page5/part3">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="" style="width:0.15625vw; height: 1.63934vw;background-color: #f7ce43"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(187, 124, 31)); font-size: 0.867888vw;">Equipment Manage</div>
                </div>
            </router-link>
        </div>
        
        <div class="page5_part3 mx-auto" style="padding-top:32px;padding-left:43px;padding-right: 43px;font-size:0.7714561vw;">
            <div class="tb_option_list w-full flex flex-row items-center">
                <BarBlueBtn text="Add" />
                <BarBlueBtn text="Import Template" ml_val="2.6041vw"/>
                <BarBlueBtn text="Import Video" ml_val="2.6041vw"/>
                <BarGreenBtn text="Exprt" ml_val="2.6041vw" w_val="7.9166vw" h_val="2.65625vw"/>
                <RecBlueBtn text="Print" ml_val="2.6041vw"/>
                <ExpandSearchInput ml_val="2.6041vw" h_val="2vw" w_val="10.41666vw" place_holder="Please enter here"/>
            </div>

            <div class="flex flex-row items-center" style="margin-top: 2.0833vw;">
                <div class=" text-r205g234b255">Region</div>
                <input type="text" class="bg-transparent border-r0g230b151 rounded text-r205g234b255 pl-2" 
                    style="border-width:1px;height:2.0833vw;width:7.8125vw;margin-left:0.46875vw;">
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">Equip Type</div>
                <SelectInput :option_list="['Please choose']" style="margin-left:0.46875vw;"/>
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">Contact</div>
                <input type="text" class="bg-transparent border-r0g230b151 rounded text-r205g234b255 pl-2" 
                    style="border-width:1px;height:2.0833vw;width:7.8125vw;margin-left:0.46875vw;">
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">Device ID</div>
                <input type="text" class="bg-transparent border-r0g230b151 rounded text-r205g234b255 pl-2" 
                    style="border-width:1px;height:2.0833vw;width:7.8125vw;margin-left:0.46875vw;">
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">Device Status</div>
                <SelectInput :option_list="['Please choose']" style="margin-left:0.46875vw;"/>
            </div>
            <div class="yard_tb">
                <table class="w-full">
                    <thead>
                        <tr>
                            <td class="text-white text-center" style="padding:0.83333vw;">No</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Region</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Type</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Communication Number</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Device ID</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Device Status</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Status</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Time</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in tb_data" :key="index + 'id'" class="text-center" :class="{'hidden': index > num_per_page - 1}">
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{addZeroToInt(index + 1)}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.region}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.type}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.communi_num}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.equip_num}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.equip_para}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.status}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.communi_time}}</td>
                            <td class="" style="padding:1.25vw;">
                                <div class="flex flex-row items-center cursor-pointer">
                                    <div class=" text-r0g230b151 mx-auto underline">Edit</div>
                                    <div class="text-red-500 mx-auto underline">Delete</div>
                                    <div class=" text-r77g163b207 underline mx-auto">Enable </div>
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
import ExpandSearchInput from '../components/ExpandSearchInput.vue'
import BarBlueBtn from '../components/Btn/BarBlueBtn.vue'
import BarGreenBtn from '../components/Btn/BarGreenBtn.vue'
import RecBlueBtn from '../components/Btn/RecBlueBtn.vue'
import SelectInput from '../components/SelectInput.vue'
export default {
    data() {
        return {
            tb_data: [],
            num_per_page: 5
        }
    },
    components: {
        ExpandSearchInput,
        BarBlueBtn,
        BarGreenBtn,
        RecBlueBtn,
        SelectInput
    },
    mounted: function() {
        this.$store.dispatch('ModuleApp/updateActiveNav', 1)
        for (let index = 0; index < 50; index++) {
            var obj_var = {}
            obj_var.region = `A-${index + 1}-Region`
            obj_var.type = "AI Box"
            obj_var.communi_num = "868956048965648"
            obj_var.equip_num = "A1001"
            obj_var.equip_para = "IP:72.229.28.185"
            obj_var.status = index % 2 === 0 ? 'Online' : 'Offline'
            obj_var.communi_time = "2021-05-11 12:11:11"
            this.tb_data.push(obj_var)
        }
    },
    methods: {
        addZeroToInt(num) {
            if (Number(num) < 10) {
                return `0${num}`
            }
        },
    }
}
</script>
<style scoped>
.page5_part3 {
    width: 85.677083vw;
    height: 33.22916vw;
    background-image: url('../assets/img/page5_part3_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.yard_tb {
    margin-top: 2.0833vw;
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
.search_input {
    transition: all 0.3s linear;
}
</style>