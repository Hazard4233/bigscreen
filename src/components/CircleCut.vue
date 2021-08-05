<template>
    <div :style="'--from_angle:' + from_angle_state + ';' + '--to_angle:' + to_angle_state + ';' + '--ani_duration:' + ani_duration_state + ';'">
        <div class="rounded-full"
            :class="ani_name" 
            :style="{
                'width': width, 
                'height': width, 
                'border': border_width + ' solid rgba(0, 0, 0, 0)', 
                'border-top-color': border_top_color, 
                'border-bottom-color': border_bottom_color,
                'transform': 'rotate(' + rotate_angle + 'deg)'}"
        ></div>
    </div>
</template>
<script>
export default {
    name: 'CircleCut',
    props: [
        'width', 
        'border_width', 
        'border_top_color', 
        'border_bottom_color',
        'rotate_angle',

        'ani_duration',
        'ani_name',
        'from_angle',
        'to_angle'
    ],
    data() {
        return {
            from_angle_state                : this.from_angle,
            to_angle_state                  : this.to_angle,
            ani_duration_state              : this.ani_duration
        }
    }
}
</script>
<style scoped>
.rotate_clockwise {
    -webkit-animation-name: RotateClockWise;
    -webkit-animation-duration: calc(var(--ani_duration));
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: RotateClockWise;
    -moz-animation-duration: calc(var(--ani_duration));
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: RotateClockWise;
    -ms-animation-duration: calc(var(--ani_duration));
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
}
.rotate_anti_clockwise {
    -webkit-animation-name: RotateAntiClockWise;
    -webkit-animation-duration: calc(var(--ani_duration));
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: RotateAntiClockWise;
    -moz-animation-duration: calc(var(--ani_duration));
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: RotateAntiClockWise;
    -ms-animation-duration: calc(var(--ani_duration));
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
}

@-webkit-keyframes RotateClockWise {
  from {
    -webkit-transform: rotate(var(--from_angle));
  }
  to {
    -webkit-transform: rotate(var(--to_angle));
  }
}
@-moz-keyframes RotateClockWise {
  from {
    -webkit-transform: rotate(var(--from_angle));
  }
  to {
    -webkit-transform: rotate(var(--to_angle));
  }
}
@-ms-keyframes RotateClockWise {
  from {
    -webkit-transform: rotate(var(--from_angle));
  }
  to {
    -webkit-transform: rotate(var(--to_angle));
  }
}

@-webkit-keyframes RotateAntiClockWise {
  from {
    -webkit-transform: calc(rotate(var(--to_angle)));
  }
  to {
    -webkit-transform: calc(rotate(var(--from_angle)));
  }
}
@-moz-keyframes RotateAntiClockWise {
  from {
    -webkit-transform: calc(rotate(var(--to_angle)));
  }
  to {
    -webkit-transform: calc(rotate(var(--from_angle)));
  }
}
@-ms-keyframes RotateAntiClockWise {
  from {
    -webkit-transform: calc(rotate(var(--to_angle)));
  }
  to {
    -webkit-transform: calc(rotate(var(--from_angle)));
  }
}
</style>