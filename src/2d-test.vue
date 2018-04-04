<template>
    <div>
        <gcanvas v-if="isWeex" ref="canvas_holder" style="top: 0; width:750;height:1000;position:absolute;"></gcanvas>
        <canvas v-if="!isWeex" ref="canvas_holder" style="width:750px;height:1000px;"></canvas>
    </div>
</template>
<script>

    const isWeex = weex.config.env.platform !== 'Web'
    const { enable, WeexBridge, Image: GImage } = require('../gf/index.js');
    const EnvImage = !isWeex ? Image : GImage;

    export default {
        data() {
            return {
                isWeex: isWeex ? 1 : 0
            }
        },
        mounted: function () {
            let ref = this.$refs.canvas_holder;
            if (isWeex) {
                ref = enable(ref, { bridge: WeexBridge });
            }
            var ctx = ref.getContext('2d');
            var size = {
                width: 750,
                height: 750
            };
            var imageLoaded = false;
            var pattern = null;

            var image = new EnvImage();
            image.src = "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=4c77b70c2c2dd42a5f0900ab333a5b2f/a2cc7cd98d1001e9a25cf66ab10e7bec54e79777.jpg";
            image.onload = function () {
                imageLoaded = true;
                pattern = ctx.createPattern(image, "repeat");
            };
            function draw() {
                const offsetX = ((Date.now() / 3000) % 1) * size.width * 0.8;

                ctx.save();

                ctx.translate(10, 50);

                ctx.clearRect(0, 0, size.width, size.height);
                ctx.fillStyle = "blue";
                ctx.fillRect(offsetX, 0, size.width * 0.2, size.height * 0.2);

                ctx.fillStyle = "red";

                ctx.beginPath();
                ctx.arc(
                    size.width * 0.1 + offsetX,
                    size.height * 0.5,
                    size.height * 0.1,
                    0,
                    Math.PI * 2,
                    true
                );
                ctx.closePath();
                ctx.fill();


                //image
                if (imageLoaded) {
                    ctx.drawImage(
                        image,
                        offsetX,
                        size.height * 0.8,
                        size.height * 0.2,
                        size.height * 0.2
                    );
                }

                ctx.restore();
            }
            setInterval(draw, 16);
        }
    };
</script>