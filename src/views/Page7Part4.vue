<template>
    <div class="h-full flex flex-col">
        <div class="absolute top-10 flex flex-row items-center" style="left:29.65284vw;top:4.9662487vw;">
            <router-link to="/page7/part1">
                <div class="flex flex-row items-center cursor-pointer">
                    <div class="bg-r205g234b255" style="width: 3px; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">角色管理</div>
                </div>
            </router-link>
            <router-link to="/page7/part2">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="bg-r205g234b255" style="width: 3px; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">用户管理</div>
                </div>
            </router-link>
            <router-link to="/page7/part3">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="bg-r205g234b255" style="width: 3px; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">数据字典</div>
                </div>
            </router-link>
            <router-link to="/page7/part4">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="" style="width: 3px; height: 1.63934vw;background-color: #f7ce43"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(187, 124, 31)); font-size: 0.867888vw;">操作日志</div>
                </div>
            </router-link>
        </div>
        
        <div class="page7_part2 mx-auto" style="padding-top:32px;padding-left:43px;padding-right: 43px;font-size:0.7714561vw;">
            <div class="tb_option_list flex flex-row items-center">
                <div class=" text-r205g234b255">操作人</div>
                <input type="text" class="bg-transparent border-r0g230b151 rounded text-r205g234b255 pl-2" 
                    style="border-width:1px;height:2.0833vw;width:7.8125vw;margin-left:0.46875vw;">
                
                <div class=" text-r205g234b255" style="margin-left: 2.0833vw;">操作时间</div>
                <PickerInput style="margin-left:0.46875vw;"/>
                <BarGreenBtn text="导出" ml_val="2.6041vw" w_val="7.9166vw" h_val="2.65625vw"/>
            </div>
            <div class="yard_tb">
                <table class="w-full">
                    <thead>
                        <tr>
                            <td class="text-white text-center" style="padding:0.43333vw;">序号</td>
                            <td class="text-white text-center" style="padding:0.43333vw;">操作人</td>
                            <td class="text-white text-center" style="padding:0.43333vw;">操作</td>
                            <td class="text-white text-center" style="padding:0.43333vw;">IP</td>
                            <td class="text-white text-center" style="padding:0.43333vw;">时间</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in tb_data" :key="index + 'id'" class="text-center" :class="{'hidden': index > num_per_page - 1}">
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{addZeroToInt(index + 1)}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.name}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.operate}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.ip}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.edit_time}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="w-full my-auto">
            <div class="pagination flex flex-row items-center justify-center" style="font-size:0.83333vw;">
                <div class=" text-r205g234b255">共{{tb_data.length}}条</div>
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
                <div class=" text-r205g234b255" style="margin-left:0.88541vw;">跳转到</div>
                <div class="pagination_item px-1" style="margin-left:0.88541vw;">
                    <input type="text" class="w-full bg-transparent border-transparent text-r205g234b255 pl-2">
                </div>
                <div class=" text-r205g234b255" style="margin-left:0.44541vw;">页</div>
                <BarGreenBtn text="跳转" ml_val="1.6854vw" w_val="5.41666vw" h_val="1.9791vw" />
            </div>
        </div>
    </div>
</template>
<script>
import BarGreenBtn from '../components/Btn/BarGreenBtn.vue'
import PickerInput from '../components/PickerInput.vue'
export default {
    data() {
        return {
            tb_data: [],
            num_per_page: 5
        }
    },
    components: {
        BarGreenBtn,
        PickerInput
    },
    mounted: function() {
        this.$store.dispatch('ModuleApp/updateActiveNav', 3)
        for (let index = 0; index < 50; index++) {
            var obj_var = {}
            obj_var.account = Math.round(Math.random() * 100000)
            obj_var.name = "超级管理员"
            obj_var.edit_time = "2019-05-05 06:15:52"
            obj_var.ip = "133.33.33.33"
            obj_var.operate = "设置场站信息"
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
.page7_part2 {
    width: 85.364583vw;
    height: 25.989583vw;
    background-image: url('../assets/img/page5_part2_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.tb_option_list .btn_type_1 {
    width: 7.9166vw;
    height: 2.65625vw;
    background-image: url('../assets/img/page5_part1_btn_bg_1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
.tb_option_list .btn_type_3 {
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
    margin-top: 1.0833vw;
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