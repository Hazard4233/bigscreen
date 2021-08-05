<template>
<div>
    <div class="absolute top-10 flex flex-row items-center" style="left:29.65284vw;top:4.9662487vw;">
        <router-link to="/page6/part1">
            <div class="flex flex-row items-center cursor-pointer">
                <div class="bg-r205g234b255" style="width:0.15625vw; height: 1.63934vw;"></div>
                <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                    style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 71, 107)); font-size: 0.867888vw;">实时报警</div>
            </div>
        </router-link>
        <router-link to="/page6/part2">
            <div class="flex flex-row items-center cursor-pointer" style="margin-left:2.89296vw;">
                <div class="" style="width:0.15625vw; height: 1.63934vw;background-color: #f7ce43"></div>
                <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center" 
                    style="height: 1.63934vw; background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(187, 124, 31)); font-size: 0.867888vw;">历史报警</div>
            </div>
        </router-link>
    </div>


    <div class="flex flex-row h-full">
        <div class="flex flex-col">
            <div class="page6_part2_part1">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">报警统计</div>
                </div>
                <div id="pie_chart"></div>
            </div>
            <div class="page6_part2_part2 mt-auto">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">报警趋势</div>
                </div>
                <div id="bar_chart"></div>
            </div>
        </div>
        <div class="flex flex-col ml-auto">
            <div class="page6_part2_part_3">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">历史报警列表</div>
                </div>
                <div class="flex flex-row items-center" style="margin-top: 2.0833vw;">
                    <div class=" text-white" style="margin-left: 2.0833vw;">分区</div>
                    <SelectInput :option_list="['请选择']" style="margin-left:0.46875vw;"/>
                    <div class=" text-white" style="margin-left: 2.0833vw;">报警时间段</div>
                    <PickerInput style="margin-left:0.46875vw;"/>
                    <BarGreenBtn text="导出" ml_val="2.6041vw" w_val="7.9166vw" h_val="2.65625vw"/>
                    <ExpandSearchInput ml_val="0.6041vw" h_val="2vw" w_val="8.41666vw" place_holder="请输入您想搜索的内容"/>
                </div>
                <div v-if="tb_data.length !== 0" class="history_tb" style="margin-top: 2.0833vw;">
                    <table class="w-full">
                        <tr v-for="(item, index) in Object.keys(tb_data[0])" :key="index">
                            <th class="text-white p-4 text-center" style="font-size:0.77145vw;">{{item}}</th>
                            <td v-for="(item1, index1) in tb_data" :key="index1 + 'value'" 
                                class="text-r205g234b255 p-4 text-center" 
                                :class="{'hidden': index1 > 3}"
                                style="font-size: 0.77145vw;">{{item1[item]}}</td>
                        </tr>
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
                        <input type="text" class="w-full bg-transparent border-transparent text-r205g234b255">
                    </div>
                    <div class=" text-r205g234b255" style="margin-left:0.44541vw;">页</div>
                    <BarGreenBtn text="跳转" ml_val="1.6854vw" w_val="5.41666vw" h_val="1.9791vw" />
                </div>
            </div>
        </div>
    </div>     
</div>
       
</template>
<script>
import ExpandSearchInput from '../components/ExpandSearchInput.vue'
import BarGreenBtn from '../components/Btn/BarGreenBtn.vue'
import SelectInput from '../components/SelectInput.vue'
import PickerInput from '../components/PickerInput.vue'
export default {
    data() {
        return {
            tb_data: [],
            num_per_page: 4,
            px_rate: window.innerWidth / 1920
        }
    },
    components: {
        ExpandSearchInput,
        BarGreenBtn,
        SelectInput,
        PickerInput
    },
    mounted: function() {
        this.$store.dispatch('ModuleApp/updateActiveNav', 2)
        this.formatTbData()
        this.renderPieChart()
        this.renderBarChart()
    },
    methods: {
        addZeroToInt(num) {
            if (Number(num) < 10) {
                return `0${num}`
            }
        },
        formatTbData() {
            for (let index = 0; index < 50; index++) {
                var obj_var = {}
                obj_var['序号'] = this.addZeroToInt(index + 1)
                obj_var['设备编号'] = "AI盒子"
                obj_var['设备名称'] = 'AI001'
                obj_var['分区'] = "A区"
                obj_var['类型'] = "占位"
                obj_var['报警时间'] = "2021-05-11 12:11:11"
                obj_var['状态'] = "已处理"
                obj_var['处理时长（秒)'] = "455"
                this.tb_data.push(obj_var)
            }
        },
        renderPieChart() {
            var pie_chart = window.echarts.init(document.getElementById('pie_chart'))
            var legend = [
                '占位',
                '攀爬',
                '打架',
            ];

            var seriesData = [
                { "name": "占位", "value": 30, itemStyle: {color: '#ffcc66'} },
                { "name": "攀爬", "value": 10, itemStyle: {color: '#64c4f7'} },
                { "name": "打架", "value": 15, itemStyle: {color: '#f67467'} },
            ]

            var option = {
                legend: {
                    orient: 'vertical',
                    top: '25%',
                    right: '5%',
                    textStyle: {
                        verticalAlign: 'middle',
                        color: '#cdeaff',
                        fontSize: 16 * this.px_rate,
                    },
                    itemGap: 50,
                    data: legend,
                    formatter: (name) => {
                        if (seriesData.length) {
                            return `${name}`;
                        }
                    },
                },
                series: [{
                    name: '需求类型占比',
                    type: 'pie',
                    center: ['35%', '50%'],
                    radius: ['60%', '80%'],
                    label: {
                        show: true,
                        formatter: '{c}%',
                        textStyle: {
                            fontSize: 16 * this.px_rate,
                            color: '#cdeaff'
                        },
                    },
                    data: seriesData,
                }],
            };
            pie_chart.setOption(option)
        },
        renderBarChart() {
            var bar_chart = window.echarts.init(document.getElementById('bar_chart'))
            var x_label = []
            var y_data_1 = []
            var y_data_2 = []
            var y_data_3 = []
            for (let index = 0; index < 12; index++) {
                x_label.push(`${index + 1}月`)
                y_data_1.push(Math.round(Math.random() * 1000) / 10)
                y_data_2.push(Math.round(Math.random() * 1000) / 10)
                y_data_3.push(Math.round(Math.random() * 1000) / 10)
            }
            var option = {
                grid: {
                    top: "15%",
                    bottom: "10%",
                    right: "15%"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true
                        }
                    }
                },
                legend: {
                    orient: 'vertical',
                    data: ["打架", "占位", "攀爬"],
                    top: "15%",
                    right: '3%',
                    textStyle: {
                        color: "#cdeaff",
                        fontSize: 13 * this.px_rate
                    }
                },
                xAxis: {
                    data: x_label,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#063d42'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#cdeaff",
                            fontSize: 16 * this.px_rate
                        }
                    },
                    
                },
                yAxis: [
                    {
                        type: "value",
                        // name: "亿元",
                        // nameTextStyle: {
                        //     color: "#ebf8ac"
                        // },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#063d42'
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#cdeaff",
                                fontSize: 16 * this.px_rate
                            }
                        },
                        
                    },
                    {
                        type: "value",
                        name: "",
                        nameTextStyle: {
                            color: "#ebf8ac"
                        },
                        position: "right",
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            formatter: "{value} %", //右侧Y轴文字显示
                            textStyle: {
                                color: "#ebf8ac"
                            }
                        }
                    },
                    {
                        type: "value",
                        gridIndex: 0,
                        min: 50,
                        max: 100,
                        splitNumber: 8,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitArea: {
                            show: false,
                            areaStyle: {
                                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                            }
                        }
                    }
                ],
                series: [{
                        name: "打架",
                        type: "line",
                        yAxisIndex: 1,
                        smooth: true,
                        showAllSymbol: true,
                        symbol: "circle",
                        symbolSize: 7 * this.px_rate,
                        itemStyle: {
                            color: "#ffcc66"
                        },
                        lineStyle: {
                            color: "#ffcc66"
                        },
                        // areaStyle:{
                        //     color: "rgba(5,140,255, 0.2)"
                        // },
                        data: y_data_1
                    },
                    {
                        name: "占位",
                        type: "bar",
                        barWidth: 15 * this.px_rate,
                        itemStyle: {
                            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1,
                                    color: "#000"
                                },
                                {
                                    offset: 0,
                                    color: "#f67467"
                                }
                            ])
                        },
                        data: y_data_2
                    },
                    
                    {
                        name: "攀爬",
                        type: "bar",
                        barWidth: 15 * this.px_rate,
                        itemStyle: {
                            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1,
                                    color: "#000"
                                },
                                {
                                    offset: 0,
                                    color: "#64c4f7"
                                }
                            ])
                        },
                        data: y_data_3
                    }
                ]
            };
            bar_chart.setOption(option)
        }
    },    
}
</script>
<style scoped>
.page6_part2_part1 {
    width: 34.01041vw;
    /* height: 17.76041vw; */
    height: 19.76041vw;
    background-image: url('../assets/img/page6_part2_part1_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.page6_part2_part2 {
    width: 34.01041vw;
    /* height: 21.875vw; */
    height: 22.875vw;
    background-image: url('../assets/img/page6_part2_part2_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.page6_part2_part_3 {
    width: 49.322916vw;
    height: 36.5625vw;
    background-image: url('../assets/img/page6_part2_part3_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
#pie_chart {
    height: 15.625vw;
}
#bar_chart {
    height: 18.22916vw;
}
</style>