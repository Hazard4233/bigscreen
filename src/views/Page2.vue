<template>
  <div class=" bg-r1g8b14 flex flex-col w-full" style="height:56.25vw;padding-top:0.521vw">
    <div class="page2_header w-full flex flex-col relative">
      <img class="w-full absolute top-0 left-0" src="../assets/img/page2_header_bg.png" alt="">
      <div class="absolute left-1/2 transform -translate-x-1/2 flex flex-row items-center" style="top:0.67708333vw;">
        <div class=" rounded-full bg-r93g192b191" style="width:10px;height:10px;"></div>
        <div class=" border-transparent relative" 
            style="width:20.833333vw;height:0.208333vw;background-color: #67d4d2">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2" 
                style="height:0.208333vw;box-shadow: rgba(0, 255, 191, 0.7) 0px 0px 6px 2px;"
                :style="{'width': line_width + 'px'}"></div>
        </div>
        <div class=" rounded-full bg-r93g192b191" style="width:10px;height:10px;"></div>
      </div>
      <div class="font-bold text-r93g192b191 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer" 
        style="font-size:1.84375vw;text-shadow:0px 0px 4px rgb(46 154 245)"
        @click="lineStreamAnimation()">VISUALIZATION</div>
      <div class="flex flex-row items-center absolute top-1/2 transform -translate-y-1/2" style="left:5.416666vw">
        <div v-for="(item, index) in circle_opacity_1" :key="index">
          <div class="rounded-full bg-r93g192b191" 
              style="width: 1.5625vw;height: 1.5625vw;margin-right:0.67708vw;"
              :class="item"></div>
        </div>
      </div>
      <div class="flex flex-row items-center absolute top-1/2 transform -translate-y-1/2" style="right:5.416666vw">
        <div v-for="(item, index) in circle_opacity_2" :key="index">
          <div class="rounded-full bg-r93g192b191"
              style="width: 1.5625vw;height: 1.5625vw;margin-left:0.67708vw;"
              :class="item"></div>
        </div>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2 bg-r62g235b233 rounded" 
          style="width:20.833333vw;height:0.10416666vw;top:5.6458333vw;">
        <div class="relative">
          <div class="absolute bg-r62g235b233 rounded" 
            style="width:4.833333vw;height:0.10416666vw;top:0;box-shadow: rgba(0, 255, 191, 0.7) 0px 0px 6px 3px;"
            :style="{'left': line2_stream_left + 'vw'}"></div>
        </div>
      </div>
      
    </div>
    <div class="w-full flex flex-row mt-auto" style="height: 48.125vw;padding-left:1.5vw;padding-right:1.5vw;padding-bottom:1.875vw;">
      <div class="h-full flex flex-col">
        <div class="page2_part1 relative">
          <div class="w-full h-full absolute">
            <img class="w-full" src="../assets/img/page2_part1_img.png" alt="">
          </div>
          <div class="w-full h-full absolute img2">
            <img class="w-full h-full absolute top-0 left-0" src="../assets/img/page2_part1_bg.png" alt="">
          </div>
        </div>
        <div class="flex flex-row items-center mt-auto">
          <div class="page2_part2 mr-auto flex flex-col">
            <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">Classification</div>
            <div id="classification_alarm_pie_chart"></div>
          </div>
          <div class="page2_part2 ml-auto flex flex-col relative">
            <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">Alarm Statistics</div>
            <div id="alarm_type_line_chart"></div>
            <div class="absolute" style="top:30%;right:8%;">
              <div class="relative inline-flex self-center">
                <select class="font-bold rounded border-transparent text-r114g149b164 pl-1" 
                    style="width:4.34166vw;height:1.3020833vw;background: #0c303c;font-size:0.833333vw;padding-left:0.208333vw"
                    v-model="selected_line_chart_option"
                    @change="changeLineChart()">
                    <option v-for="(item, index) in line_chart_options" :key="index" style="height:1.3020833vw;">{{item}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-auto h-full flex flex-col">
        <div class="page2_part4 ml-auto flex flex-col">
          <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">Type Statistics</div>
          <div id="equip_pie_chart"></div>
        </div>
        <div v-for="(item, index) in [7,8,9]" :key="index" class="w-full flex flex-col mt-auto">
          <div class="flex flex-row items-center">
            <div v-for="(item1, index1) in [0, 1,2]" :key="index1" class="page2_part_5_item relative ml-auto mt-auto">
              <img class="camera_img w-full h-full absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="../assets/img/page2_part5_item.png" alt="">
              <img class="w-full absolute" src="../assets/img/page2_part5_item_bg.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Page2',
  data() {
    return {
      circle_opacity_1                  : ['bg-opacity-10', 'bg-opacity-20', 'bg-opacity-30', 'bg-opacity-40', 'bg-opacity-50'],
      circle_opacity_2                  : ['bg-opacity-50', 'bg-opacity-40', 'bg-opacity-30', 'bg-opacity-20', 'bg-opacity-10'],
      circle_interval                   : null,
      line_stream_interval              : null,
      line2_stream_interval             : null,
      line2_stream_left                 : 0,
      line2_stream_direction_right      : true,
      line_width                        : 0,
      line_chart_options                : ['Day', 'Year', 'Month'],
      selected_line_chart_option        : 'Day',
      px_rate                           : window.innerWidth / 1920,
      equip_pie_chart_change_interval   : null,
      close_effect_interval              : null
    }
  },
  components: {},
  mounted: function() {
    this.circleAnimation()
    this.line2StreamAnimation()
    this.renderAlarmPieChart()
    this.renderLineChart()
    this.renderEquipmentPieChart()
    this.closeEffect()
  },
  beforeDestroy: function() {
    if (this.close_effect_interval !== null) {
      clearInterval(this.close_effect_interval)
      this.close_effect_interval = null
    }
    if (this.equip_pie_chart_change_interval !== null) {
      clearInterval(this.equip_pie_chart_change_interval)
      this.equip_pie_chart_change_interval = null
    }
    if (this.line_stream_interval !== null) {
      clearInterval(this.line_stream_interval)
      this.line_stream_interval = null
    }
    if (this.line2_stream_interval !== null) {
      clearInterval(this.line2_stream_interval)
      this.line2_stream_interval = null
    }
    if (this.circle_interval !== null) {
      clearInterval(this.circle_interval)
      this.circle_interval = null
    }
  },
  methods: {
    circleAnimation() {
      this.circle_interval = setInterval(() => {
        for (let index = 0; index < this.circle_opacity_1.length; index++) {
          this.$set(this.circle_opacity_2, index, `bg-opacity-${String((Number(String(this.circle_opacity_2[index]).replace('bg-opacity-', ''))-10) < 10 ? 50 : Number(String(this.circle_opacity_2[index]).replace('bg-opacity-', ''))-10)}`)
        }
        this.circle_opacity_1 = [...this.circle_opacity_2].reverse()
      }, 150);
    },
    lineStreamAnimation() {
      if (this.line_stream_interval !== null) {
        clearInterval(this.line_stream_interval)
        this.line_stream_interval = null
      }else {
        this.line_stream_interval = setInterval(() => {
          this.line_width = this.line_width + 3
          if (this.line_width > 400) {
            this.line_width = 0
            clearInterval(this.line_stream_interval)
            this.line_stream_interval = null
          }
        }, 15);
      }
      
    },
    line2StreamAnimation() {
      this.line2_stream_interval = setInterval(() => {
        if (this.line2_stream_left > 15.625) {
          this.line2_stream_direction_right = false
        }
        if (this.line2_stream_left < 0.260416) {
          this.line2_stream_direction_right = true
        }
        if (this.line2_stream_direction_right) {
          this.line2_stream_left = this.line2_stream_left + 0.05208
        }
        if (!this.line2_stream_direction_right) {
          this.line2_stream_left = this.line2_stream_left - 0.05208
        }
      }, 10);
    },
    renderAlarmPieChart() {
      var pie_chart = window.echarts.init(document.getElementById('classification_alarm_pie_chart'))
      var option = {
            color: ['#ffcc66', '#00ffbf', '#2e9af5'],
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
                data: ['First', 'Second', 'Third'],
                orient: 'vertical',
                right: '5%',
                bottom: '5%',
                textStyle: {
                  color: '#7295a4',
                  fontSize: 14 * this.px_rate
                }
            },
            series: [
              {
                type: 'pie',
                clockwise: true,
                startAngle: 90,
                radius: '80%',
                center: ['40%', '50%'],
                hoverAnimation: true,
                roseType: 'radius', //area
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                  {
                      value: 335,
                      name: 'First',
                      itemStyle: {
                        // color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        //     offset: 0,
                        //     color: 'rgba(255,204,102,1)'
                        // }, {
                        //     offset: 1,
                        //     color: 'rgba(255,204,102,0.1)'
                        // }]),
                      }

                  },
                  {
                      value: 435,
                      name: 'Second',
                      // itemStyle: {
                      //   color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      //       offset: 0,
                      //       color: 'rgba(0,255,191,1)'
                      //   }, {
                      //       offset: 1,
                      //       color: 'rgba(0,255,191,0.1)'
                      //   }]),
                      // }
                  },
                  {
                      value: 280,
                      name: 'Third',
                      // itemStyle: {
                      //   color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      //       offset: 0,
                      //       color: 'rgba(46,154,245,1)'
                      //   }, {
                      //       offset: 1,
                      //       color: 'rgba(46,154,245,0.1)'
                      //   }]),
                      // }
                  },
                ],
                itemStyle: {
                    borderColor: '#081c25',
                    borderWidth: 4 * this.px_rate,
                },
                label: {
                    show: false,
                    position: 'outside',
                    formatter: '{b}',
                    color: '#7295a4'
                },
                labelLine: {
                    show: true,
                    smooth: true,
                    length: 20 * this.px_rate,
                    length2: 20 * this.px_rate,
                    lineStyle: {
                        width: 1 * this.px_rate,
                        color: '#fff'
                    }
                },
            }],
      }
      pie_chart.setOption(option)
      pie_chart.on('click', function() {
        pie_chart.clear()
        pie_chart.setOption(option)
      })
    },
    renderLineChart() {
      var line_chart = window.echarts.init(document.getElementById('alarm_type_line_chart'))
      var XName= ["Day-1","Day-2","Day-3","Day-4"]
      var data1 = [
        [123,154, 234, 32], [163, 321,278, 430], [53, 221,118, 360],
      ]
      var Line = ["First","Second","Third"];
      var color =['#00ffbf','#ffcc66','#2e9af5'];
      var datas = [];
      Line.map((item,index)=>{
        datas.push(
          {
            name: item,
            type: "line",
            yAxisIndex: 1,
            data: data1[index] ,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: color[index],
                }
            }
          }
        )
      })
      var option = {
        grid: {
          left: '10%',
          top: '5%',
          bottom: '20%',
          right: '25%',
        },
        legend: {
          type: "scroll",
          orient: 'vertical',
          data: Line,
          itemWidth: 18 * this.px_rate,
          itemHeight: 12 * this.px_rate,
          textStyle: {
            color: "#638f9e",
            fontSize: 11 * this.px_rate
          },
          bottom: '5%',
          right: '5%'
        },
        yAxis: [
          {
            type: 'value',
            position: 'left',
            splitLine: {
                show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                  color: '#6A989E',
              }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                color: '#fff',
                fontSize: 10 * this.px_rate
            }
          },
          {
            type: 'value',
            position: 'left',
            nameTextStyle: {
                color: '#00FFFF'
            },
            splitLine: {
              show: false,
              lineStyle: {
                  type: 'dashed',
                  color: 'rgba(135,140,147,0.8)'
              }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: 10 * this.px_rate
            }
          },
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                  color: '#6A989E',
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#638f9e',
                fontSize: 12 * this.px_rate,
              }

            },
            data: XName,
          },
        ],
        series: datas,
      };
      line_chart.setOption(option)
    },
    changeLineChart() {
      var line_chart = window.echarts.init(document.getElementById('alarm_type_line_chart'))
      var options = line_chart.getOption()

      var x_data = []
      var Line = ["First","Second","Third"];
      var color =['#00ffbf','#ffcc66','#2e9af5'];
      var datas = [];
      var data1 = [
        [Math.round(Math.random() * 130), Math.round(Math.random() * 300), Math.round(Math.random() * 230), Math.round(Math.random() * 90)], 
        [Math.round(Math.random() * 50), Math.round(Math.random() * 230), Math.round(Math.random() * 130), Math.round(Math.random() * 220)], 
        [Math.round(Math.random() * 300), Math.round(Math.random() * 90), Math.round(Math.random() * 80), Math.round(Math.random() * 140)],
      ]
      Line.map((item,index)=>{
        datas.push(
            {
                name: item,
                type: "line",
                yAxisIndex: 1,
                data: data1[index],
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: color[index],
                    }
                }
            }
        )
      })
      if (this.selected_line_chart_option === 'Day') {
        for (let index = 0; index < 4; index++) {
          x_data.push(`Day-${index + 1}`)
        }
      }
      if (this.selected_line_chart_option === 'Year') {
        for (let index = 0; index < 4; index++) {
          x_data.push(`Year-${index + 1}`)
        }
      }
      if (this.selected_line_chart_option === 'Month') {
        for (let index = 0; index < 4; index++) {
          x_data.push(`Month-${index + 1}`)
        }
      }
      options.xAxis[0].data = x_data
      options.series = datas
      line_chart.setOption(options, true)
    },
    renderEquipmentPieChart() {
      var equip_pie_chart = window.echarts.init(document.getElementById('equip_pie_chart'))
      var option = {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 20,
        },
        title: [
          {
            text: "AI Box",
            left: '9%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "Video",
            left: '34%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "Equipments",
            left: '57%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "DTU",
            left: '84%',
            top: '85%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          }
        ],
        series: [
          {
            type: 'pie',
            clockwise: true,
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['13%', '50%'],
            data: [
              {
                name: '47',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '总报警次数',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '总报警次数',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '总报警次数',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['38%', '50%'],
            data: [
              {
                name: '78',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['63%', '50%'],
            data: [
              {
                name: '104',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['87%', '50%'],
            data: [
              {
                name: '64',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
        ]
      }
      equip_pie_chart.setOption(option)
      equip_pie_chart.on('click', function() {
        equip_pie_chart.clear()
        equip_pie_chart.setOption(option)
      })
      this.equip_pie_chart_change_interval = setInterval(() => {
        for (let index = 0; index < option.series.length; index++) {
          option.series[index].data[0].name = Math.round(Math.random() * 100);
        }
        equip_pie_chart.setOption(option)
      }, 3000);
    },
    closeEffect() {
      var camera_img = document.querySelectorAll('.camera_img')
      for (let index = 0; index < camera_img.length; index++) {
        var img_width = 100
        var img_height = 100
        setInterval(() => {
          img_width = img_width - 1
          img_height = img_height - 1
          camera_img[index].style.width = `${img_width}%`
          camera_img[index].style.height = `${img_height}%`
          if (img_width < 0 ) {
            img_height = 100
            img_width = 100
          }
        }, 150);
      }
    }
  }
}
</script>
<style scoped>
.page2_header {
  height: 7.0833vw;
}
.page2_part1 {
  width:59.479vw;
  height:30.1041vw;
}
.page2_part4 {
  width:35.416vw;
  height: 15vw;
  background-image: url('../assets/img/page2_part4_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page2_part2 {
  width:29.2708vw; 
  height:14.7916vw;
  background-image: url('../assets/img/page2_part2_3_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page2_part_5_item {
  width: 11.5625vw;
  height: 9.1666vw;
}
#classification_alarm_pie_chart {
  height: 10.9375vw;
}
#alarm_type_line_chart {
  height: 10.9375vw;
}
#equip_pie_chart {
  height: 10.9375vw;
}


</style>