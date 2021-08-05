<template>
    <div class="flex flex-row ">
        <div class="flex flex-col mr-auto">

            <div class="page4_part1 mb-auto flex flex-col">
                <div class="grid grid-cols-4 my-auto">
                    <div class="flex flex-col">
                        <div class="relative cursor-pointer" style="height:3.85728vw;"
                            @mouseenter="event => activeRotate(event)"
                            @mouseleave="event => nonActiveRotate(event)">
                            <div v-for="(item, index) in circlecut_list" :key="index + 'circlecut'" 
                                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                >
                                <CircleCut
                                    :width="item.width" 
                                    :border_width="item.border_width" 
                                    :border_top_color="item.border_top_color" 
                                    :border_bottom_color="item.border_bottom_color"
                                    :rotate_angle="item.rotate_angle"
                                    :ani_duration="item.ani_duration"
                                    :from_angle="item.from_angle"
                                    :to_angle="item.to_angle"
                                ></CircleCut>
                            </div>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r0g230b151 rounded-full" 
                                style="width:2.073288vw;height:2.073288vw;padding:0.48216vw;border-width:1px;box-shadow: inset rgb(0 230 151) 0px 0px 7px 4px">
                                <img class="w-full h-full" src="../assets/img/page4_disk_icon.png" alt="">
                            </div>
                        </div>
                        <div class="text-r205g234b255 mt-4 text-center" style="font-size:0.675024vw">设备总数/台</div>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative cursor-pointer" style="height:3.85728vw;"
                            @mouseenter="event => activeRotate(event)"
                            @mouseleave="event => nonActiveRotate(event)">>
                            <div v-for="(item, index) in circlecut_list" :key="index + 'circlecut'" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <CircleCut 
                                    :width="item.width" 
                                    :border_width="item.border_width" 
                                    :border_top_color="item.border_top_color" 
                                    :border_bottom_color="item.border_bottom_color"
                                    :rotate_angle="item.rotate_angle"
                                    :ani_duration="item.ani_duration"
                                    :from_angle="item.from_angle"
                                    :to_angle="item.to_angle"
                                ></CircleCut>
                            </div>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r0g230b151 rounded-full" 
                                style="width:2.0732883vw;height:2.0732883vw;padding:0.48216vw;border-width:1px;box-shadow: inset rgb(0 230 151) 0px 0px 7px 4px">
                                <img class="w-full h-full" src="../assets/img/page4_user_yellow_icon.png" alt="">
                            </div>
                        </div>
                        <div class="text-r205g234b255 mt-4 text-center" style="font-size:0.675024vw">运维人员/个</div>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative cursor-pointer" style="height:3.85728vw;"
                            @mouseenter="event => activeRotate(event)"
                            @mouseleave="event => nonActiveRotate(event)">>
                            <div v-for="(item, index) in circlecut_list" :key="index + 'circlecut'" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <CircleCut 
                                    :width="item.width" 
                                    :border_width="item.border_width" 
                                    :border_top_color="item.border_top_color" 
                                    :border_bottom_color="item.border_bottom_color"
                                    :rotate_angle="item.rotate_angle"
                                    :ani_duration="item.ani_duration"
                                    :from_angle="item.from_angle"
                                    :to_angle="item.to_angle"
                                ></CircleCut>
                            </div>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r0g230b151 rounded-full" 
                                style="width:2.0732883vw;height:2.0732883vw;padding:0.48216vw;border-width:1px;box-shadow: inset rgb(0 230 151) 0px 0px 7px 4px">
                                <img class="w-full h-full" src="../assets/img/page4_alert_red_icon.png" alt="">
                            </div>
                        </div>
                        <div class="text-r205g234b255 mt-4 text-center" style="font-size:0.675024vw">今日报警/条</div>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative cursor-pointer" style="height:3.85728vw;"
                            @mouseenter="event => activeRotate(event)"
                            @mouseleave="event => nonActiveRotate(event)">>
                            <div v-for="(item, index) in circlecut_list" :key="index + 'circlecut'" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <CircleCut 
                                    :width="item.width" 
                                    :border_width="item.border_width" 
                                    :border_top_color="item.border_top_color" 
                                    :border_bottom_color="item.border_bottom_color"
                                    :rotate_angle="item.rotate_angle"
                                    :ani_duration="item.ani_duration"
                                    :from_angle="item.from_angle"
                                    :to_angle="item.to_angle"
                                ></CircleCut>
                            </div>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r0g230b151 rounded-full" 
                                style="width:2.0732883vw;height:2.0732883vw;padding:0.48216vw;border-width:1px;box-shadow: inset rgb(0 230 151) 0px 0px 7px 4px">
                                <img class="w-full h-full" src="../assets/img/page4_note_icon.png" alt="">
                            </div>
                        </div>
                        <div class="text-r205g234b255 mt-4 text-center" style="font-size:0.675024vw">工单/条</div>
                    </div>
                </div>
            </div>
            
            <div class="page4_part2 my-auto">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">今日报警占比</div>
                </div>
                <div id="pie_chart"></div>
            </div>

            <div class="page4_part3 flex flex-col mt-auto">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">设备数量</div>
                </div>
                <div class="flex flex-col w-11/12 h-full py-7 mx-auto">
                    <div v-for="(item, index) in equip_tb" class="mt-auto mb-auto" :key="index">
                        <div class="flex flex-row">
                            <div class="mx-auto text-white" style="font-size:0.771456vw">{{item.title}}</div>
                            <div class="mx-auto" style="color: #f67467;font-size:0.771456vw">{{item.value}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col mx-auto">
            <div class="page4_part4 relative">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">近期报警统计</div>
                </div>
                <div id="bar_chart"></div>
                <div class="absolute flex flex-row items-center cursor-pointer" style="top:10%;right:7%">
                    <div class=" text-r77g163b207 underline" style="font-size:0.771456vw" @click="event => clickYMD(event)">年</div>
                    <div class="text-r77g163b207 underline mx-10" style="font-size:0.771456vw" @click="event => clickYMD(event)">月</div>
                    <div class=" text-r77g163b207 underline " style="font-size:0.771456vw" @click="event => clickYMD(event)">日</div>
                </div>
            </div>

            <div class="page4_part5 mt-auto flex flex-col">
                <div class="flex flex-row items-center" style="margin-top:1.54291vw;margin-left:1.54291vw;">
                    <div class="bg-r205g234b255" style="width:0.15625vw;height: 1.6393442vw;"></div>
                    <div class="text-r205g234b255 px-2 ml-1 flex flex-row items-center justify-center"
                        style="height:1.6393442vw; background-image: linear-gradient(to top right, #19476b, #030a19);font-size:0.8678881vw;">实时报警/事件列表</div>
                </div>
                <div class="alarm_tb w-10/12 mx-auto mb-10 mt-auto">
                    <table class="w-full h-full">
                        <thead>
                            <tr>
                                <td class="text-white text-center" style="font-size: 0.819672vw;">类型</td>
                                <td class="text-white text-center" style="font-size: 0.819672vw;">事件</td>
                                <td class="text-white text-center" style="font-size: 0.819672vw;">时间</td>
                                <td class="text-white text-center" style="font-size: 0.819672vw;">处理</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in alarm_tb" :key="index">
                                <td class="text-r205g234b255 text-center" style="font-size: 0.819672vw;">{{item.type}}</td>
                                <td class="text-r205g234b255 text-center" style="font-size: 0.819672vw;">{{item.event}}</td>
                                <td class="text-r205g234b255 text-center" style="font-size: 0.819672vw;">{{item.time}}</td>
                                <td class="text-r0g230b151 text-center" style="font-size: 0.819672vw;">{{item.action}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="flex flex-col ml-auto">
            <div class="page4_part6"></div>
            <div class="page4_part7 mt-auto grid grid-cols-2" style="row-gap:20px;column-gap:auto">
                <div v-for="(item, index) in [0,1,2,3]" :key="'index' + index" class="page4_part7_item"></div>
            </div>
        </div>
    </div>
</template>
<script>
// import Layout from '../components/Layout.vue'
import CircleCut from '../components/CircleCut.vue'
export default {
    data() {
        return {
            px_rate: window.innerWidth / 1920,
            equip_tb: [
                {
                    title: 'AI BOX',
                    value: '23 / 25'
                },
                {
                    title: '视频源',
                    value: '44 / 44'
                },
                {
                    title: '呼叫终端',
                    value: '120 / 125'
                },
                {
                    title: '声光终端',
                    value: '100 / 123'
                }
            ],
            alarm_tb: [
                {
                    type: '汽油车占位',
                    event: '粤BY7886',
                    time: '2021.05.07 12:15:21',
                    action: '查看'
                },
                {
                    type: '汽油车占位',
                    event: '粤BY7886',
                    time: '2021.05.07 12:15:21',
                    action: '查看'
                },
                {
                    type: '汽油车占位',
                    event: '粤BY7886',
                    time: '2021.05.07 12:15:21',
                    action: '查看'
                },
                {
                    type: '汽油车占位',
                    event: '粤BY7886',
                    time: '2021.05.07 12:15:21',
                    action: '查看'
                },
                {
                    type: '汽油车占位',
                    event: '粤BY7886',
                    time: '2021.05.07 12:15:21',
                    action: '查看'
                },
            ],
            circlecut_list: [
                {
                    width: "3.37512vw", 
                    border_width: "1px",
                    border_top_color: "#0ff3b9", 
                    border_bottom_color: "#0ff3b9",
                    rotate_angle: Math.round(Math.random() * 360),
                    ani_duration: "10s",
                    ani_name: "rotate_clockwise",
                    from_angle: "0deg",
                    to_angle: "360deg",
                },
                {
                    width: "3.13404vw",
                    border_width: "1px", 
                    border_top_color: "#0ff3b9",
                    border_bottom_color: "#0ff3b9",
                    rotate_angle: Math.round(Math.random() * 360) * (-1),
                    ani_duration: "8s",
                    ani_name: "rotate_clockwise",
                    from_angle: "360deg",
                    to_angle: "0deg",
                },
                {
                    width: "2.89296vw", 
                    border_width: "1px",
                    border_top_color: "#0ff3b9", 
                    border_bottom_color: "#0ff3b9",
                    rotate_angle: Math.round(Math.random() * 360),
                    ani_duration: "6s",
                    ani_name: "rotate_clockwise",
                    from_angle: "0deg",
                    to_angle: "360deg",
                },
                {
                    width: "2.65188vw",
                    border_width: "1px", 
                    border_top_color: "#0ff3b9", 
                    border_bottom_color: "#0ff3b9",
                    rotate_angle: Math.round(Math.random() * 360) * (-1),
                    ani_duration: "4s",
                    ani_name: "rotate_clockwise",
                    from_angle: "360deg",
                    to_angle: "0deg",
                },
                {
                    width: "2.4108vw",
                    border_width: "1px",
                    border_top_color: "#0ff3b9", 
                    border_bottom_color: "#0ff3b9",
                    rotate_angle: Math.round(Math.random() * 360),
                    ani_duration: "2s",
                    ani_name: "rotate_clockwise",
                    from_angle: "0deg",
                    to_angle: "360deg",
                }
            ]
        }
    },
    components: {
        // Layout,
        CircleCut
    },
    mounted: function() {
        this.$store.dispatch('ModuleApp/updateActiveNav', 0)
        this.renderPieChart()
        this.renderBarChart()
    },
    methods: {
        activeRotate(event) {
            var circle_cut_ele = event.target.children
            for (let index = 0; index < circle_cut_ele.length; index++) {
                if (index === circle_cut_ele.length - 1) continue
                circle_cut_ele[index].children[0].classList.add('rotate_clockwise')
            }
        },
        nonActiveRotate(event) {
            var circle_cut_ele = event.target.children
            for (let index = 0; index < circle_cut_ele.length; index++) {
                if (index === circle_cut_ele.length - 1) continue
                circle_cut_ele[index].children[0].classList.remove('rotate_clockwise')
            }
        },
        renderPieChart() {
            var pie_chart = window.echarts.init(document.getElementById('pie_chart'))
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    right: '5%',
                    bottom: '10%',
                    textStyle: {
                        color: '#cdeaff',
                        fontSize: 16 * this.px_rate
                    },
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '70%',
                        center: ['35%', '50%'],
                        label: {
                            show: true,
                            formatter: `{c}%`,
                        },
                        data: [
                            {
                                value: 35,
                                name: '车辆占位',
                                itemStyle: {
                                    color: '#64c4f7'
                                },
                                label: {
                                    color: '#cdeaff',
                                    fontSize: 16 * this.px_rate
                                }
                            },
                            {
                                value: 65,
                                name: '聚集',
                                itemStyle: {
                                    color: '#f67467'
                                },
                                label: {
                                    color: '#cdeaff',
                                    fontSize: 16 * this.px_rate
                                }
                            }
                        ],
                    }
                ]
            };
            pie_chart.setOption(option)
        },
        renderBarChart() {
            var bar_chart = window.echarts.init(document.getElementById('bar_chart'))
            let categoryData = [];
            let chartdata = []
            for (let index = 0; index < 12; index++) {
                categoryData.push(`${index + 1}月`)
                chartdata.push(Math.round(Math.random() * 420))
            }
            // let itemcolor = {
            //     type: 'linear',
            //     colorStops: [
            //         {
            //             offset: 0,
            //             color: 'rgba(6, 120, 157,1)',
            //         },
            //         {
            //             offset: 0.5,
            //             color: 'rgba(6, 120, 157,0.2)',
            //         },
            //         {
            //             offset: 1,
            //             color: 'rgba(6, 120, 157,1)',
            //         },
            //     ],
            // };

            var option = {
                textStyle: {
                    color: '#c0c3cd',
                    fontSize: 14 * this.px_rate,
                },
                toolbox: {
                    show: false,
                    feature: {
                        saveAsImage: {
                            backgroundColor: '#031245',
                        },
                        restore: {},
                    },
                    iconStyle: {
                        borderColor: '#c0c3cd',
                    },
                },
                color: ['#00D7E9', 'rgba(0, 215, 233, 0.9)'],
                grid: {
                    left: '10%',
                    right: '5%',
                    bottom: '10%',
                    top: '10%',
                },
                xAxis: {
                    nameTextStyle: {
                        color: '#c0c3cd',
                        padding: [0, 0, -10  * this.px_rate, 0],
                        fontSize: 14  * this.px_rate,
                    },
                    axisLabel: {
                        color: '#cdeaff',
                        fontSize: 13 * this.px_rate,
                        interval: 0,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#335971',
                        },
                        show: true,
                    },
                    axisTick: {
                        show: false
                    },
                    data: categoryData,
                    type: 'category',
                },
                yAxis: {
                    axisLabel: {
                        color: '#cdeaff',
                        fontSize: 13 * this.px_rate,
                    },
                    // axisTick: {
                    //     lineStyle: {
                    //         color: '#668092',
                    //         width: 1,
                    //     },
                    //     show: true,
                    // },
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#668092',
                            width: 1,
                        },
                        show: true,
                    },
                    name: '',
                },
                series: [
                    {
                        data: chartdata,
                        type: 'bar',
                        barMaxWidth: 'auto',
                        barWidth: 10 * this.px_rate,
                        itemStyle: {
                            color: {
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                type: 'linear',
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgba(107, 196, 240, 1)',
                                    },
                                    {
                                        offset: 0,
                                        color: 'rgba(107, 196, 240,0)',
                                    },
                                ],
                            },
                            // barBorderRadius: [4, 24, 0, 0]
                            barBorderRadius: [0, 30 * this.px_rate, 0, 0],
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            // shadowBlur: 5
                        },
                        label: {
                            show: false,
                            position: 'top',
                            distance: 10 * this.px_rate,
                            color: '#fff',
                        },
                    },
                    // {
                    //     data: [1, 1, 1, 1, 1, 1],
                    //     type: 'pictorialBar',
                    //     barMaxWidth: '20',
                    //     symbol: 'diamond',
                    //     symbolOffset: [0, '50%'],
                    //     symbolSize: [20, 10],
                    // },
                    {
                        data: chartdata,
                        type: 'pictorialBar',
                        symbolPosition: 'end',
                        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAC7UlEQVRYha1YMYsVQQxOMivCFRb3KwR7LawFS0trbazExkKwOLCwEcTOyvraqyysbAStbfwTJ4gIwk4i+9x99+23md3n4UDYeTuZ5Jsvmcns04cffx6JiIqIjc8CTyNBvUGyFqM4PFHq+L6iXpeAMAKB71BXCNAEQAhIlQsAk34d9epoz7sGCO4zO0qCQIKYMABREyZ3YLoGCJRuhRU2ymGpAIbZmIFhRjIA3SgcMm2EhtlwCiW3mBjJcqIjYWYOBTKsvk90UX+wuV+pJaEZxq4AIHzPSYvGp7D0YLdvAN5Ll4BgNjIwpbFKzA0jRrKdNQOiDTBlBYxtMFIaIDwJ32z7cp5YAqajxOWdww44H3yc6+TTcfsqMNPawhkQS1Y8CTYHpyU54NQoNPybk7TTUh6LyLUkZwqFL0vyzIchEGYFJ3DIbmspL0X1RgKkdRKXhu0FI1w7EBQbGNqxmj1Vs/sicrXhPGM5Kw0zIBkIBvO3H/FWRH7tfqve0VJeqNndZKWtfgrGIKEWKCnhdu/C/XO4n4jIt4kdUb2npTxYWfWmD5PLtIjzqPW1iHwZd8tg8KaW8kRUjy9jEoFkp54k4/vzImp9JxFnIvJ91LmuZidqdmvDxsKHJQMLhyt9D/f3Uetzifgwvj8S1Ucr81h2vq2Bcuu6h9V1kN/hfhrur0TkfLSFei0we5+WDLKB2nC+lIivUeszEfmUzMlsz4pepjD1p1LOV7xYOeJ/RK1vxrk9gO0bPhyBIBtYwrGUc5JvFb0+AYPizIgTAGajP4ANHOPbGYLpk5D5dA3gybjS7D5RqHZgw7yqK2Aq5d6eEaWyLAntDlW032AkkvxgqcyIg9OaHM98qWHWsrsoh6c28sUZiBAYPgmRkayMZ7qYA1loZjocGm546OA3yr9+YHFuoAQmawsEGrZGWDJG+JzgcHA/OnKyBuR/fIRzyBaMMJjpC2wyfkhYWuE5+G8J/EZF+tlo65bVYnEL0MWYiP8BMTkYhhlvTAYAAAAASUVORK5CYII=',
                        symbolOffset: [0, '-60%'],
                        symbolSize: [33 * this.px_rate, 33 * this.px_rate],
                        zlevel: 2,
                    },
                ],
                tooltip: {
                    show: true,
                    formatter: '{b}:{c0}',
                },
            };
            bar_chart.setOption(option)
        },
        clickYMD(event) {
            if (event.target.classList.contains('underline')) {
                event.target.classList.remove('text-r77g163b207', 'underline')
                event.target.classList.add('text-red-600', 'line-through')
            }else {
                event.target.classList.add('text-r77g163b207', 'underline')
                event.target.classList.remove('text-red-600', 'line-through')
            }
        }
    },
    
}
</script>
<style scoped>
.page4_part1 {
    background-image: url('../assets/img/page4_part1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 23.67406vw;
    height: 9.691417vw;
}
.page4_part2 {
    background-image: url('../assets/img/page4_part2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 23.67406vw;
    height: 15.33269vw; 
}
.page4_part3 {
    background-image: url('../assets/img/page4_part3.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;    
    width: 23.67406vw;
    height: 17.164899vw;
}
.page4_part4 {
    background-image: url('../assets/img/page4_part4.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;    
    width: 27.7242vw;
    height: 20.25072vw;
}
.page4_part5 {
    background-image: url('../assets/img/page4_part5.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;    
    width: 27.7242vw;
    height: 23.5294vw;
}
.page4_part6 {
    background-image: url('../assets/img/page4_part6.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;    
    width: 32.69045vw;
    height: 21.60077vw;
}

.page4_part7_item {
    background-image: url('../assets/img/page4_part7_item_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;    
    width: 15.57377vw;
    height: 10.27vw;
}

#pie_chart {
    height: 10.8486vw;
}
#bar_chart {
    height: 15.4648vw;
}
.alarm_tb {
    height: 15.911282vw;
}


</style>