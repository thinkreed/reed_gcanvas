<template>
    <div>
    <gcanvas v-if="isWeex" ref="canvas_holder" 
        @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" 
        style="width:750;height:750;"></gcanvas>
    <canvas v-if="!isWeex" ref="canvas_holder"
        @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
        style="width:750px;height:750px;"></canvas>
    </div>
</template>


<script>
const isWeex = weex.config.env.platform !== 'Web'
const {
    enable,
    WeexBridge,
    Image: GImage
  } = require('../../gf/index.js')

import G3D from "g3d";
G3D.Env.Image = isWeex ? GImage : Image;
G3D.Env.manuallyFlipY = isWeex;
G3D.Env.framebufferNotReady = isWeex;

import {
  touchStart,
  touchMove,
  touchEnd,
  controlArcRotateCamera
} from "./lib/attach-control";

import main from "../pages/raw-material-main.js";

function start(ref, size) {
  if (isWeex) {
    ref.width = size.width;
    ref.height = size.height;
  }

  main(G3D, {
    canvas: ref,
    requestAnimationFrame: setTimeout,
    controlArcRotateCamera
  });
}

export default {
  data() {
    return {
      isWeex: isWeex,
      touchStart,
      touchMove,
      touchEnd
    };
  },

  mounted: function() {
    var ref = this.$refs.canvas_holder;

    var size = isWeex
      ? {
          width: 750,
          height: 750
        }
      : {
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height)
        };
    if (!isWeex) {
      ref.width = size.width;
      ref.height = size.height;
    }

    if (isWeex) {
      ref = enable(ref, { debug: true, bridge: WeexBridge });
    }

    start(ref, size);
  }
};
</script>