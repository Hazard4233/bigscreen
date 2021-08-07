<template>
  <div class="bg-r4g17b23 min-h-screen">
    <div class="w-full h-5 bg-r8g28b37"></div>
    <div class="flex flex-col pb-4 w-full h-full">
      <div class="mx-auto mt-2">
        <div class="flex flex-row relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 text-r114g149b164 font-bold" style="font-size:1.77083333vw;top:0.2083333vw">SMART CARE PLATFORM</div>
          <div class="flex flex-row" style="margin-right:10.8333vw">
            <div 
              v-for="(item, index) in parallelogram_opacity_1" 
              :key="index" 
              class="parallelogram parallelogram--2 bg-r42g107b135"
              :class="item"></div>
          </div>
          <div class="flex flex-row relative">
            <div class="absolute" style="top: -0.2083333333vw;left: -7.1875vw;">
              <HexGrid width='16.1458333vw' height='16.1458333vw' viewBox="-10 -20 100 100">
                <Layout :size="{ x: 10, y: 10 }" :flat='true' :spacing="1" :origin="{ x: 0, y: 0 }">
                  <Hexagon v-for="(item, index) in hex_agon_style_1" :key="index" :q="index" :r="index > 0 ? -1 : 0" :s="0" :cellStyle="{'fill': item.fill_val, 'stroke': item.stroke_val, 'stroke-width': item.stroke_width}"/>
                  <!-- <Hexagon :q="1" :r="-1" :s="0" cellStyle="fill: rgba(42,107,135,0.5);stroke:#255f78;stroke-width:0.5" />
                  <Hexagon :q="2" :r="-1" :s="0" cellStyle="fill: rgba(42,107,135,0.2);stroke:#255f78;stroke-width:0.5" /> -->
                </Layout>
              </HexGrid>
            </div>
            <img class="mx-auto" src="../assets/img/page1-title.png" alt="" style="width:23.4375vw;">
            <div class="absolute" style="top: -0.2083333333vw;right: -15.26041666666667vw;">
              <HexGrid width='16.1458333vw' height='16.1458333vw' viewBox="-10 -20 100 100">
                <Layout :size="{ x: 10, y: 10 }" :flat='true' :spacing="1" :origin="{ x: 0, y: 0 }">
                  <Hexagon v-for="(item, index) in hex_agon_style_2" :key="index" :q="index" :r="index > 0 ? -1 : 0" :s="0" :cellStyle="{'fill': item.fill_val, 'stroke': item.stroke_val, 'stroke-width': item.stroke_width}"/>
                  <!-- <Hexagon :q="1" :r="-1" :s="0" cellStyle="fill: transparent;stroke:#255f78;stroke-width:0.5" />
                  <Hexagon :q="2" :r="-1" :s="0" cellStyle="fill: transparent;stroke:#255f78;stroke-width:0.5" /> -->
                </Layout>
              </HexGrid>
            </div>
          </div>
          <div class="flex flex-row" style="margin-left:10.8333vw">
            <div 
              v-for="(item, index1) in parallelogram_opacity_2" 
              :key="index1 + item" 
              class="parallelogram parallelogram--4 bg-r42g107b135"
              :class="item"></div>
          </div>
        </div>
        
      </div>
      <div class="flex flex-wrap w-full" style="margin-top: 1.4vw;height:53.541vw;">
        <div class="w-full md:w-6/12 lg:w-4/12 flex flex-col" style="padding-left:1.041vw;padding-right:0.52vw">
          <div class="">
            <div class="sub_panel" style="height:15.625vw;padding: 1.5625vw 1.25vw">
              <div class="grid grid-cols-3 grid-rows-1 gap-x-6 h-full" style="grid-column-gap: 1.92vw">
                <div class="flex flex-col w-full bg-r4g17b23 p-4" style="padding-top: 1.041vw">
                  <div class="border_rotate_ani" style="width: 4.6875vw;height: 4.6875vw;">
                    <div class="border_rotate_ani_div"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="relative">
                        <img class="shake_img" src="../assets/img/page1_user_group.png"/>
                      </div>
                    </div>
                  </div>
                  <p class="mt-auto text-center text-r114g149b164" style="font-size: 1.041vw">Members</p>
                  <p class="my-auto text-center text-r114g149b164" style="font-size: 1.041vw">95</p>
                </div>
                <div class="flex flex-col w-full bg-r4g17b23 p-4">
                  <div class="border_rotate_ani" 
                    style="width: 4.6875vw;height: 4.6875vw;">
                    <div class="border_rotate_ani_div"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="relative">
                        <img class="shake_img" src="../assets/img/page1_user_run.png"/>
                      </div>
                    </div>
                  </div>
                  <p class="mt-auto text-center text-r114g149b164" style="font-size: 1.041vw">Workers</p>
                  <p class="my-auto text-center text-r114g149b164" style="font-size: 1.041vw">44</p>
                </div>
                <div class="flex flex-col w-full bg-r4g17b23 p-4">
                  <div class="border_rotate_ani" style="width: 4.6875vw;height: 4.6875vw;">
                    <div class="border_rotate_ani_div"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="relative">
                        <img class="shake_img" src="../assets/img/page1_pie_chart.png"/>
                      </div>
                    </div>
                  </div>
                  <p class="mt-auto text-center text-r114g149b164" style="font-size: 1.041vw">Online Rate</p>
                  <p class="my-auto text-center text-r114g149b164" style="font-size: 1.041vw">10.53%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel relative" style="height:17.8125vw;">
              <div class="flex flex-col" style="padding: 1.25vw;">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-auto">
                    <BorderCorner 
                    title="Alarm Statistics"
                    padding_x="15"
                    padding_y="2" 
                    class="text-r114g149b164 mx-4" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="line_chart"></div>
                <div class="absolute" style="top:18%;right:4%;">
                  <div class="relative inline-flex self-center">
                    <select class="line_chart_select font-bold rounded border-transparent text-r114g149b164 pl-1" 
                        style="width:3.604166vw;height:1.3020833vw;background: #0c303c;font-size:0.833333vw;padding-left:0.208333vw"
                        v-model="line_chart_data_type"
                        @change="resetLineChart()">
                        <option v-for="(item, index) in line_chart_options" :key="index" style="height:1.3020833vw;">{{item}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height: 17.03vw">
              <div class="flex flex-col px-5" style="padding-top: 1.25vw">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-auto">
                    <BorderCorner 
                    title="Members Data" 
                    class="text-r114g149b164 mx-8" style="font-size: 1.041vw"
                    padding_x="15"
                    padding_y="1" 
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div class="client_tb my-4 overflow-hidden" style="height: 12.02vw;">
                  <table class="w-full">
                    <thead class="sticky top-0 left-0 bg-r8g28b37">
                      <tr style="height: 2.083333vw">
                        <td class="text-center text-r114g149b164 text-sm">Avatar</td>
                        <td class="text-center text-r114g149b164 text-sm">Name</td>
                        <td class="text-center text-r114g149b164 text-sm">Age</td>
                        <td class="text-center text-r114g149b164 text-sm">Reason</td>
                        <td class="text-center text-r114g149b164 text-sm">Alarms</td>
                        <td class="text-center text-r114g149b164 text-sm">Region</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in table_data" :key="index" class="mt-1">
                        <td class="text-center text-r114g149b164 text-xs p-1 flex justify-center">
                          <img class="w-10 h-10" src="https://i.pinimg.com/564x/5b/40/87/5b4087d0fc8d9d372c00a32bc08f818c.jpg" alt="" >
                        </td>
                        <td class="text-center text-r114g149b164 text-xs">{{item.name}}</td>
                        <td class="text-center text-r0g230b151 text-xs">{{item.age}}</td>
                        <td class="text-center text-r1g190b229 text-xs">{{item.origin}}</td>
                        <td class="text-center text-r0g230b151 text-xs">{{item.num_alarm}}</td>
                        <td class="text-center text-r0g230b151 text-xs">{{item.pos}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-5/12 flex flex-col" style="padding-left: 0.52vw;padding-right:0.52vw;">
          <div class="">
            <div class="sub_panel" style="height: 33.4375vw;">
              <div class="px-5 py-6 h-full relative">
                <div id="map_chart"></div>
                  <transition name="fade">
                    <div v-if="enable_map_dlg"
                        class="map_dlg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-r8g28b37 p-5"
                        style="box-shadow: rgba(14, 40, 51, 1) 0px 2px 4px 0px, rgba(14, 40, 51, 1) 0px 2px 16px 0px;height:26.6vw;">
                      <!-- <div class=" text-white text-xl">Alert</div> -->
                      <div class="relative">
                        <!-- <button class=" absolute top-1 right-0 flex flex-col text-white cursor-pointer" @click="closeMapDlg()">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button> -->
                        <img src="../assets/img/warning.png" width="200" height="200" alt="">
                      </div>
                    </div>
                  </transition>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height:18.6458vw;">
              <div class="flex flex-col" style="padding: 1.25vw;">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-8">
                    <BorderCorner 
                    title="Alarm Statistics"
                    padding_x="15"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="alarm_pie_chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/12 flex flex-col" style="padding-right:1.041vw;padding-left:0.52vw">
          <div class="">
            <div class="sub_panel" style="height:20.416vw;">
              <div class="flex flex-col" style="padding:1.25vw">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-4">
                    <BorderCorner 
                    title="Age Statistics"
                    padding_x="15"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="age_bar_chart"></div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height:14.27vw;">
              <div class="flex flex-col" style="padding:1.25vw">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-4">
                    <BorderCorner 
                    title="Alarm Info"
                    padding_x="20"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div class="alert_tb w-full mt-2 overflow-hidden" style="height:10vw">
                  <table class="w-full">
                    <thead class="sticky top-0 left-0 bg-r8g28b37">
                      <tr class=" bg-r114g149b164 bg-opacity-20 h-7">
                        <td class="text-center text-r114g149b164 text-sm">Name</td>
                        <td class="text-center text-r114g149b164 text-sm">Age</td>
                        <td class="text-center text-r114g149b164 text-sm">Time</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                      v-for="(item, index) in table_data" 
                      :key="index" style="height: 1.4583333vw">
                        <td class="text-center text-r114g149b164 text-xs">{{item.name}}</td>
                        <td class="text-center text-r114g149b164 text-xs">{{item.age}}</td>
                        <td class="text-center text-r114g149b164 text-xs">{{item.created_at}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height:15.885vw">
              <div class="flex flex-col" style="padding-top:1.25vw;">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-4">
                    <BorderCorner 
                    title="Statistics of this month"
                    padding_x="20"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="statisticMonthPieChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import BorderCorner from '../components/BorderCorner.vue'
import geoJson from '../assets/json/geoJson.json'
import { HexGrid, Layout, Hexagon} from 'vue-hexgrid'
export default {
  name: 'Page1',
  data() {
    return {
      table_data: [],
      china_geo_json: geoJson,
      parallelogram_opacity_1: ['bg-opacity-10', 'bg-opacity-20', 'bg-opacity-30', 'bg-opacity-40', 'bg-opacity-50'],
      parallelogram_opacity_2: ['bg-opacity-50', 'bg-opacity-40', 'bg-opacity-30', 'bg-opacity-20', 'bg-opacity-10'],
      parallelogram_interval: null,
      client_tb_scroll_interval: null,
      alert_tb_scroll_interval: null,
      hex_agon_style_1: [
        { fill_val: 'rgba(42,107,135,0.5)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.3)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.1)', stroke_val: '#255f78', stroke_width: '0.5'},
      ],
      hex_agon_style_2: [
        { fill_val: 'rgba(42,107,135,0.1)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.3)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.5)', stroke_val: '#255f78', stroke_width: '0.5'},
      ],
      hex_agon_interval: null,
      px_rate: window.innerWidth / 1920,

      line_chart_options: ['Time', 'Area'],
      line_chart_data_type: 'Time',
      
      enable_map_dlg: false,
    }
  },
  components: {
    BorderCorner,
    HexGrid, Layout, Hexagon
  },
  mounted: function() {
    this.parellelogramAnimation()
    this.hexagonAnimation()
    this.rotateVibrationAni()
    this.alertTbAutoScrolling()
    this.clientTbAutoScrolling()
    this.initTableData()
    this.renderLineChart()
    this.renderMapChart()
    // setTimeout(() => {
    //   this.showMapDlg()
    // }, 3000);
    // setTimeout(() => {
    //   this.closeMapDlg()
    // }, 5000);
    this.renderAlarmPieChart()
    this.renderAgeBarChart()
    this.renderStatisticMonthPieChart()
  },
  beforeDestroy: function(){
    if (this.hex_agon_interval !== null) {
      clearInterval(this.hex_agon_interval)
      this.hex_agon_interval = null
    }
    if (this.parallelogram_interval !== null) {
      clearInterval(this.parallelogram_interval)
      this.parallelogram_interval = null
    }
    if (this.alert_tb_scroll_interval !== null) {
      clearInterval(this.alert_tb_scroll_interval)
      this.alert_tb_scroll_interval = null
    }
    if (this.client_tb_scroll_interval !== null) {
      clearInterval(this.client_tb_scroll_interval)
      this.client_tb_scroll_interval = null
    }
  },
  methods: {
    parellelogramAnimation() {
      this.parallelogram_interval = setInterval(() => {
        for (let index = 0; index < this.parallelogram_opacity_1.length; index++) {
          this.$set(this.parallelogram_opacity_2, index, `bg-opacity-${String((Number(String(this.parallelogram_opacity_2[index]).replace('bg-opacity-', ''))-10) < 10 ? 50 : Number(String(this.parallelogram_opacity_2[index]).replace('bg-opacity-', ''))-10)}`)
        }
        this.parallelogram_opacity_1 = [...this.parallelogram_opacity_2].reverse()
      }, 150);
    },
    hexagonAnimation() {
      this.hex_agon_interval = setInterval(() => {
        for (let index = 0; index < this.hex_agon_style_1.length; index++) {
          this.hex_agon_style_2[index].fill_val = `rgba(42,107,135,${this.getOpacityVal(this.hex_agon_style_2[index].fill_val) - 0.2 < 0 ? 0.5 : this.getOpacityVal(this.hex_agon_style_2[index].fill_val) - 0.2})`
        }
        this.hex_agon_style_1 = [...this.hex_agon_style_2].reverse()
      }, 200)
    },
    rotateVibrationAni() {
      var border_rotate_ani = document.querySelectorAll('.border_rotate_ani')
      var shake_img_list = document.querySelectorAll('.shake_img')
      var border_rotate_ani_div = document.querySelectorAll('.border_rotate_ani_div')
      for (let index = 0; index < border_rotate_ani.length; index++) {
        border_rotate_ani[index].onmouseover = function() {
          shake_img_list[index].classList.add('shake_img_hover')
          border_rotate_ani_div[index].classList.add('border_rotate_ani_div_hover')
        }
        border_rotate_ani[index].onmouseleave = function() {
          shake_img_list[index].classList.remove('shake_img_hover')
          border_rotate_ani_div[index].classList.remove('border_rotate_ani_div_hover')
        }
      }
    },
    alertTbAutoScrolling() {
      var table = document.querySelector('.alert_tb')
      this.alert_tb_scroll_interval = setInterval(() => {
        table.scrollTop = table.scrollTop + 1
        if (table.scrollTop == (table.scrollHeight - document.querySelector('.alert_tb').offsetHeight)) {
          table.scrollTop = 0
        }
      }, 50);
      table.addEventListener('mouseleave', () => {
        if (this.alert_tb_scroll_interval === null) {
          this.alert_tb_scroll_interval = setInterval(() => {
            table.scrollTop = table.scrollTop + 1
            if (table.scrollTop == (table.scrollHeight - document.querySelector('.alert_tb').offsetHeight)) {
              table.scrollTop = 0
            }
          }, 50);
        }
      })
      table.addEventListener('mouseenter', () => {
        clearInterval(this.alert_tb_scroll_interval)
        this.alert_tb_scroll_interval = null
      })
    },
    clientTbAutoScrolling() {
      var table = document.querySelector('.client_tb')
      this.client_tb_scroll_interval = setInterval(() => {
        table.scrollTop = table.scrollTop + 1
        if (table.scrollTop == (table.scrollHeight - document.querySelector('.client_tb').offsetHeight)) {
          table.scrollTop = 0
        }
      }, 50);
      table.addEventListener('mouseenter', () => {
        clearInterval(this.client_tb_scroll_interval)
        this.client_tb_scroll_interval = null
      })
      table.addEventListener('mouseleave', () => {
        if (this.client_tb_scroll_interval === null) {
          this.client_tb_scroll_interval = setInterval(() => {
            table.scrollTop = table.scrollTop + 1
            if (table.scrollTop == (table.scrollHeight - document.querySelector('.client_tb').offsetHeight)) {
              table.scrollTop = 0
            }
          }, 50);
        }
      })
    },
    initTableData() {
      for (let index = 0; index < 30; index++) {
        var obj_var = {
          'avatar': "",
          'name': 'Jack Elliot',
          'age': Math.round(Math.random() * 50),
          'origin': 'Respiration rate is too low',
          'num_alarm': Math.round(Math.random() * 10),
          'pos': 'CA',
          'created_at': '2021-04-13 03:53:53'
        }
        this.table_data.push(obj_var)
      }      
    },
    renderLineChart() {
      var line_chart = window.echarts.init(document.getElementById('line_chart'))
      var data = []
      var y_data = []
      for (let index = 0; index < 24; index++) {
        var obj_var = {}
        obj_var.fontSize = 12 * this.px_rate
        obj_var.value = `${index}`
        data.push(obj_var)
      }
      for (let index = 0; index < 24; index++) {
        y_data.push(Math.round(Math.random() * 4))
      }
      var option = {
        grid: {
            bottom: '7%',
            top: '20%',
            left: '5%',
            right: '10%',
        },
        xAxis: {
          type: 'category',
          name: 'Time',
          nameTextStyle: {
            color: '#7295a4',
            fontSize: 12 * this.px_rate
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#7295a4'
            }
          },
          boundaryGap: false,
          data: data
        },
        yAxis: {
          type: 'value',
          name: 'Alarms',
          nameTextStyle: {
            color: '#7295a4',
            fontSize: 12 * this.px_rate
          },
          show: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#7295a4'
            }
          }
        },
        series: [{
          data: y_data,
          type: 'line',
          areaStyle: {
            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(5,76,136,0.9)'
                },
                {
                    offset: 1,
                    color: 'rgba(5,76,136,0)'
                }
            ], false),
          },
          itemStyle: {
            color: '#054c88'
          }
        }]
      }
      line_chart.setOption(option)
    },
    resetLineChart() {
      var line_chart = window.echarts.init(document.getElementById('line_chart'))
      var options = line_chart.getOption()
      var x_data = []
      var y_data = []
      var obj_var = {}
      for (let index = 0; index < 24; index++) {
        y_data.push(Math.round(Math.random() * 4))
      }
      if (this.line_chart_data_type === 'Time') {
        x_data = []
        for (let index = 0; index < 24; index++) {
          obj_var = {}
          obj_var.fontSize = 12 * this.px_rate
          obj_var.value = `${index}`
          x_data.push(obj_var)
        }
      }
      if (this.line_chart_data_type === 'Area') {
        x_data = []
        for (let index = 0; index < 24; index++) {
          obj_var = {}
          obj_var.fontSize = 12 * this.px_rate
          obj_var.value = `Area-${index}`
          x_data.push(obj_var)
        }
      }
      if (this.line_chart_data_type === '近半年') {
        x_data = []
        for (let index = 0; index < 24; index++) {
          obj_var = {}
          obj_var.fontSize = 12 * this.px_rate
          obj_var.value = `${index}时3`
          x_data.push(obj_var)
        }
      }
      options.xAxis[0].data = x_data
      options.series[0].data = y_data
      line_chart.setOption(options, true)
    },
    renderMapChart() {
      window.echarts.registerMap('china', {geoJson: this.china_geo_json})
      var map_chart = window.echarts.init(document.getElementById('map_chart'))
      var geoCoordMap = {
        'Area-1': [121.5135,25.0308],
        'Area-2': [127.9688, 45.368],
        'Area-3': [110.3467, 41.4899],
        "Area-4": [125.8154, 44.2584],
        'Area-5': [116.4551, 40.2539],
        "Area-6": [123.1238, 42.1216],
        "Area-7": [114.4995, 38.1006],
        "Area-8": [117.4219, 39.4189],
        "Area-9": [112.3352, 37.9413],
        "Area-10": [109.1162, 34.2004],
        "Area-11": [103.5901, 36.3043],
        "Area-12": [106.3586, 38.1775],
        "Area-13": [101.4038, 36.8207],
        "Area-14": [87.9236, 43.5883],
        "Area-15": [91.11, 29.97],
        "Area-16": [103.9526, 30.7617],
        "Area-17": [108.384366, 30.439702],
        "Area-18": [117.1582, 36.8701],
        "Area-19": [113.4668, 34.6234],
        "Area-20": [118.8062, 31.9208],
        "Area-21": [117.29, 32.0581],
        "Area-22": [114.3896, 30.6628],
        "Area-23": [119.5313, 29.8773],
        "Area-24": [119.4543, 25.9222],
        "Area-25": [116.0046, 28.6633],
        "Area-26": [113.0823, 28.2568],
        "Area-27": [106.6992, 26.7682],
        "Area-28": [102.9199, 25.4663],
        "Area-29": [113.12244, 23.009505],
        "Area-30": [108.479, 23.1152],
        "Area-31": [110.3893, 19.8516],
        'Area-32': [121.4648, 31.2891],
      };
      var data = [];
      for (let index = 0; index < 32; index++) {
         let obj_var = {
           name: `Area-${index + 1}`,
           value: Math.round(Math.random() * 200)
         }
        data.push(obj_var)
      }
      // var max = 480, min = 9; // todo 
      // var maxSize4Pin = 100, minSize4Pin = 20;

      var option = {
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgba(4, 17, 23, 1)',
          borderColor: '#90ca74',
          borderWidth: 1,
          extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          aspectScale: 0.75,
          zoom: 1.2,
          // layoutCenter
          show: true,
          roam: true,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          itemStyle: {
            areaColor: '#081c25',
            borderColor: '#01bee5',//线
            // shadowColor: '#092f8f',//外发光
            // shadowBlur: 20
            emphasis: {
              areaColor: '#2AB8FF',//悬浮区背景
            }
          }
        },
        series : [
          {
            symbolSize: 10,
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.convertData(data, geoCoordMap),
          },
          
          {
            name: 'Top 5',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAYAAADkDTpVAAADg0lEQVRIiZWXvYucVRTGf+/uZMfdTTQiQUJIwM4iiWDAgJWIlgHzUVnYpDCNKBoMEiwUa5sIIhYhoIgpLEyTPyBY2hghKhgkJhBFQZz9eGf3nZFrnjt55tw7cTxwmHdn7vs85/vcbbjzMQ+QRkp4TjI2zX8X0iu+mQZbkC7acyOwDhjZ56hGVCNw4B3SJZ1d1O8ZeAhsSbdrJJGgMYsT6EPAsrQvskbgCXQD2NRnq+86J+kF8EbgfYHuMl0RKbI0Aa8BfwunMeBMUniwKCuT5Q8Dj0qfAY4BT+q328A14Arwu97L4CMniR5k61eBR4DHgNPAqWDIE9LngPeBn5SDLQvTv0QLIfa9QPBSBdxlP/CuDNmlsC5ZtbFgh51gRaF5uYAs5QDwvIzqW7URCRrLQTp4SFbNI0f1zpIlvPDA6z8d2jcneJK91oxTHb8QDnrbtwXMbGnD2JiIE+QSy9VwYyZcKT9aV3dOVCPIXfoL8H0BVUp67yqwXiPxMo0kSS+oWx8kl4EfdG5DBKNIgCU4Szp0B3gb+LlCkEbFp8DnwEAetGHoTWW9CaM5yy3gfAF/z/IrAovAk0rq2RcZPH23J4yRojqCp4QynxjtOfADx4GPgKcLuFJ6arB+ZW9MrByHBF9Ssl4HfgW+LGCnZVk52VQlbUsnHoytPIeqiK+AV4HrwGsF5H1Z1cz6xDyYGnZu/ZYStmHb6gvgbAELjwNngIvAs8DXtXx5iDrr4lbaKZ5dAQ8vAN9oXH8H/CHvO2u0cW3pjymvIieLU/c8u6zngTVaawuHuHB8XOd4PgWcKODvl+e69vLAOnnbPfBlv6SK2ClNW+1NvXxXgMsa5XnarknXlbNtHxU5RHFd5vX3BrAbeA/4VmcPAx+ow4dWDLmbp6apd7J7kCx8ETiics3gyIBsuV+6OrfcCWrXxHOyNN0WPguxdwK/Ns5cOONKJ38I/KYujiW6MxDES3BBQOjkFM+bwDvAQTWT36rdg3EIS0GSCfKqbPXiX1oibynJ/UDQVuJegOcc5B8zwcCW/prKNF+CeyJY+6/kOoGHaGgetVZVKwJblQ7C5JyLACPJnzuCpZ28+VNebNZuEjWCSDKy4deZJrBXdHZoN4m5CLB8+H8xo/AfTX4nT91hpZRnEkRvPGx5X+SLbfZwrhzMklzn+TmBxjuUd/L/JohA3nDuaf3WAfwDNMhfphkdhqsAAAAASUVORK5CYII=',
            symbolSize: [20 * this.px_rate,35 * this.px_rate],
            // label: {
            //   normal: {
            //     show: true,
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 9,
            //     },
            //     formatter (value){
            //         return value.data.value[2]
            //     }
            //   }
            // },
            // itemStyle: {
            //   normal: {
            //     color: '#D8BC37', //标志颜色
            //   }
            // },
            data: this.convertData(data, geoCoordMap),
            // showEffectOn: 'render',
            // rippleEffect: {
            //   brushType: 'stroke'
            // },
            hoverAnimation: true,
            zlevel: 1
          },
         
        ]
      };
      map_chart.setOption(option)
    },
    showMapDlg() {
      this.enable_map_dlg = true
    },
    closeMapDlg() {
      this.enable_map_dlg = false
    },
    renderAlarmPieChart() {
      var alarm_pie_chart = window.echarts.init(document.getElementById('alarm_pie_chart'))
      var option = {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 20,
        },
        title: [
          {
            text: "48",
            left: '13%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: '20',
              color: '#01bee5',
            }
          },
          {
            text: "48",
            left: '48%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: '20',
              color: '#01bee5',
            }
          },
          {
            text: "48%",
            left: '82%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: '20',
              color: '#01bee5',
            }
          }
        ],
        series: [
          {
            type: 'pie',
            clockwise: true,
            radius: [50, 65],
            hoverAnimation: true,
            center: ['15%', '50%'],
            data: [
              {
                name: 'Total',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: '15',
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#01bee5',
                      shadowColor: '#2a6b87',
                      shadowBlur: 0,
                      borderRadius: 10
                }
              }, 
              {
                name: 'Total',
                value: 100,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: '15',
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#1c3f4e',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          },
          {
            name: "This Month",
            type: 'pie',
            clockwise: true,
            radius: [50, 65],
            hoverAnimation: true,
            center: ['50%', '50%'],
            data: [
              {
                name: 'This Month',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: '15',
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#01bee5',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                  borderRadius: 10
                }
              }, 
              {
                name: 'This Month',
                value: 100,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: '15',
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#1c3f4e',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          },
          {
            name: "Alarm Rate",
            type: 'pie',
            clockwise: true,
            radius: [50, 65],
            hoverAnimation: true,
            center: ['85%', '50%'],
            data: [
              {
                name: 'Alarm Rate',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: '15',
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#01bee5',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                  borderRadius: 10
                }
              }, 
              {
                name: 'Alarm Rate',
                value: 100,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: '15',
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#1c3f4e',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          },
        ]
      }
      alarm_pie_chart.setOption(option)
      alarm_pie_chart.on('click', function() {
        alarm_pie_chart.clear()
        alarm_pie_chart.setOption(option)
      })
    },
    renderAgeBarChart() {
      var age_bar_chart = window.echarts.init(document.getElementById('age_bar_chart'))
      var data = [
        {
          name: 'Below 50',
          value: 12
        },
        {
            name: '50-60',
            value: 23
        },
        {
            name:'60-70',
            value:56
        },
        {
            name:'70-80',
            value:17
        },
        {
            name:'80-90',
            value:'65'
        },
        {
            name:'Over 90',
            value:12
        }
      ];
      var dataSource = data;
      var dataName = [];
      var dataValue = [];
      var dataNum = [];
      for (var key in dataSource) {
          dataName.push(dataSource[key]["name"]);
          var obj_var = {}
          obj_var.value = dataSource[key]['value']
          obj_var.label = {fontSize: 12 * this.px_rate}
          dataValue.push(obj_var);
          dataNum.push(100);
      }
      var options = {
        grid: {
            top: "5%",
            left: "15%",
            bottom: "0%"
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            show: true,
            data: dataName,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#7295a4',
                fontSize: 12 * this.px_rate
            }
          },
          {
              type: 'category',
              show: true,
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              data: dataValue,
              axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#00e697"
                },
              },
          }
        ],
        series: [
          {
            type: "bar",
            yAxisIndex: 0,
            data: dataValue,
            zlevel: 0,
            barWidth: 12,
            itemStyle: {
              barBorderRadius: 30,
              color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: 'rgba(0,230,151,0.5)'
              }, {
                  offset: 1,
                  color: 'rgba(0,230,151,1)'
              }]),
            },
          },
        ]
      };
      age_bar_chart.setOption(options)
      age_bar_chart.on('click', function() {
        age_bar_chart.clear()
        age_bar_chart.setOption(options)
      })
    },
    renderStatisticMonthPieChart() {
      var statisticMonthPieChart = window.echarts.init(document.getElementById('statisticMonthPieChart'))
      var option = {
        grid: {
          top: 10,
          left: 20,
          right: 40,
          bottom: 10,
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {
                name: 'Heart Rate',
                value: 60,
                label: {
                  position: 'outside',
                  show: true,
                  fontSize: '12',
                  fontWeight: 'normal',
                  color: '#01bee5',
                  formatter: '{b} {c}%'
                },
                itemStyle: {
                  color: '#01bee5',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }, 
              {
                name: 'Respiration rate',
                value: 40,
                label: {
                  formatter: '{b} {c}%',
                  position: 'outside',
                  show: true,
                  fontSize: '12',
                  fontWeight: 'normal',
                  color: '#00e697'
                },
                itemStyle: {
                  color: '#00e697',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          }
        ],
        legend: {
            type: 'plain',
            orient: 'vertical',
            right: 0,
            bottom: 0,
            data: ['Heart Rate', 'Respiration rate'],
            textStyle: {
              color: '#7295a4'
            }
        },
      }
      statisticMonthPieChart.setOption(option)
      statisticMonthPieChart.on('click', function() {
        statisticMonthPieChart.clear()
        statisticMonthPieChart.setOption(option)
      })
    },

    convertData(data, geoCoordMap) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: `Area-${i + 1}`,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    },
    
    getOpacityVal(rgb_val) {
      var opacity_val = rgb_val.replace('rgba(42,107,135,', '')
      opacity_val = opacity_val.replace(')', '')
      return Number(opacity_val) 
    }
  }
}
</script>
<style scoped>
.parallelogram {
  width: 30px;
  height: 50px;
  transform: skew(25deg);
  margin-left: 7px;
  margin-right: 7px;
}
.parallelogram--2 {
  transform: skew(-25deg);
}
.parallelogram--4 {
  transform: skew(25deg);
}

.shake_img_hover {
  animation: shake 0.5s;
  animation-iteration-count: 1;
}
.border_rotate_ani {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.border_rotate_ani_div {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-color: rgb(0, 230, 151);
  border-style: solid;
  border-width: 2px;
  background: transparent;
}
.border_rotate_ani_div_hover {
  border-style: dashed;
  -webkit-animation-name: Rotate;
  -webkit-animation-duration: 4s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: Rotate;
  -moz-animation-duration: 4s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: Rotate;
  -ms-animation-duration: 4s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
}
.sub_panel {
  background-image: url('../assets/img/page1-module-bg.png');
  background-size: cover;
  background-repeat: round;
}
#line_chart {
  margin-top: auto;
  height: 13.02vw;
}
#map_chart {
  margin-top: auto;
  height: 31vw;
}
#alarm_pie_chart {
  margin-top: auto;
  height: 14.02vw;
}
#age_bar_chart{
  margin-top: auto;
  height: 15.625vw;
}
#statisticMonthPieChart {
  margin-top: auto;
  height: 11.458vw;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@-webkit-keyframes Rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes Rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-ms-keyframes Rotate {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}


</style>