<template>
    <div class="h-full flex flex-col">
        <div class="absolute top-10 flex flex-row items-center" style="left:29.65284vw;top:4.9662487vw;">
            <router-link to="/page5/part1">
                <div class="flex flex-row items-center cursor-pointer">
                    <div class="" style="width:0.15625vw; height: 1.63934vw;background-color: #f7ce43"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(187, 124, 31)); font-size: 0.867888vw;">场站管理</div>
                </div>
            </router-link>
            <router-link to="/page5/part2">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">运维人员管理</div>
                </div>
            </router-link>
            
            <router-link to="/page5/part3">
                <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw; height: 1.63934vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                        style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">设备管理</div>
                </div>
            </router-link>
        </div>
        
        <div class="page5_part1 mx-auto" style="padding-top:32px;padding-left:43px;padding-right: 43px;font-size:0.7714561vw;">
            <div class="tb_option_list flex flex-row items-center">
                <BarBlueBtn text="增加" />
                <RecBlueBtn text="列表模式" ml_val="2.6041vw"/>
                <RecBlueBtn text="卡片形式" ml_val="2.6041vw"/>
                <RecBlueBtn text="地图模式" ml_val="2.6041vw"/>
                <div class="relative" style="margin-left:2.6041vw;height: 2vw;">
                     <ExpandSearchInput ml_val="2.6041vw" h_val="2vw" w_val="10.41666vw" place_holder="请输入您想搜索的内容"/>
                </div>
            </div>
            <div class="yard_tb">
                <table class="w-full">
                    <thead>
                        <tr>
                            <td class="text-white text-center" style="padding:0.83333vw;">序号</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">名称</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">负责人</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">电话</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">地区</td>
                            <td class="text-white text-center" style="padding:0.83333vw;">操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in tb_data" :key="index + 'id'" class="text-center" :class="{'hidden': index > num_per_page - 1}">
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{addZeroToInt(index + 1)}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.name}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.principal}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.phone}}</td>
                            <td class=" text-r205g234b255" style="padding:1.25vw;">{{item.region}}</td>
                            <td class="" style="padding:1.25vw;">
                                <div class="flex flex-row items-center cursor-pointer">
                                    <div class=" text-r77g163b207 underline" >控制台</div>
                                    <div class=" text-r0g230b151 mx-auto underline">编辑</div>
                                    <div class=" text-yellow-500 mx-auto underline">分区</div>
                                    <div class="text-red-500 mx-auto underline">设备</div>
                                    <div class=" text-r77g163b207 underline">运维人员</div>
                                </div>
                            </td>
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
import ExpandSearchInput from '../components/ExpandSearchInput.vue'
import BarBlueBtn from '../components/Btn/BarBlueBtn.vue'
import RecBlueBtn from '../components/Btn/RecBlueBtn.vue'
import BarGreenBtn from '../components/Btn/BarGreenBtn.vue'
export default {
    data() {
        return {
            tb_data: [],
            num_per_page: 7
        }
    },
    components: {
        ExpandSearchInput,
        BarBlueBtn,
        RecBlueBtn,
        BarGreenBtn
    },
    mounted: function() {
        this.$store.dispatch('ModuleApp/updateActiveNav', 1)
        for (let index = 0; index < 50; index++) {
            var obj_var = {}
            obj_var.name = "快充驿站新能源充电站 （民治站）"
            obj_var.principal = "李海生"
            obj_var.phone = "0755-27589968"
            obj_var.region = "深圳市龙华区平安路（1970科技小镇）"
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
.page5_part1 {
    width: 85.67708vw;
    height: 36.1979vw;
    background-image: url('../assets/img/page5_part1_bg.png');
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


</style>