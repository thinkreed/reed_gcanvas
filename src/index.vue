<template>
  <div>
    <gcanvas v-if="isWeex" ref="canvas_holder" style="top: 0;position:absolute;flex:1"></gcanvas>
    <canvas v-if="!isWeex" ref="canvas_holder" style="width:750px;height:1000px;"></canvas>
  </div>
</template>
<script>
const isWeex = weex.config.env.platform !== 'Web'
const {
  enable,
  WeexBridge,
  Image: GImage
} = require('../gf/index.js')
const EnvImage = !isWeex ? Image : GImage

export default {
  data() {
    return {
      isWeex: isWeex ? 1 : 0
    }
  },
  mounted: function () {
    let ref = this.$refs.canvas_holder
    if (isWeex) {
      ref = enable(ref, {
        bridge: WeexBridge
      })
    }
    var ctx = ref.getContext('2d')
    var bg = new EnvImage()
    bg.resize = 'stretch'
    bg.onload = function () {
      ctx.drawImage(bg, 0, 0)
    }
    bg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xy4M1xzlY4abBHhX6uOAEntcJmsmhRD30CbBqY2Cqtt_g6M9oQ'

  }
}
</script>
