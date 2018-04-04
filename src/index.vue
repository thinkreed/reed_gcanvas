<template>
  <div>
    <gcanvas v-if="isWeex" class="canvas" ref="canvas_holder" @touchstart="touchStart" @touchmove="touchMove" style="width:750;height:750"></gcanvas>
    <canvas v-if="!isWeex" ref="canvas_holder" style="width:750px;height:1000px;"></canvas>
  </div>
</template>
<style>
</style>
<script>
  const isWeex = weex.config.env.platform !== 'Web'
  const {
    enable,
    WeexBridge,
    Image: GImage
  } = require('../gf/index.js')
  const EnvImage = !isWeex ? Image : GImage
  const modal = weex.requireModule('modal')
  var lastX = 0
  var lastY = 0
  var dx = 0
  var dy = 0

  export default {
    data() {
      return {
        isWeex: isWeex ? 1 : 0
      }
    },
    methods: {
      touchMove: function (e) {
        dx = e.changedTouches[0].screenX - lastX + dx
        dy = e.changedTouches[0].screenY - lastY + dy
      }, 
      touchStart: function (e) {
        lastX = e.changedTouches[0].screenX
        lastY = e.changedTouches[0].screenY
      },
      touchEnd: function (e) {
        lastX = 0
        lastY = 0
      }
    },
    mounted: function () {
      // init
      let ref = this.$refs.canvas_holder
      if (isWeex) {
        ref = enable(ref, {
          bridge: WeexBridge
        })
      }
      var ctx = ref.getContext('2d')
      
      // Background image
      var bgReady = false;
      var bgImage = new EnvImage();
      bgImage.onload = function () {
        bgReady = true;
      };
      bgImage.src = "file:///sdcard/Documents/img/background.png";

      // Hero image
      var heroReady = false;
      var heroImage = new EnvImage();
      heroImage.onload = function () {
        heroReady = true;
      };
      heroImage.src = "file:///sdcard/Documents/img/hero.png";

      // Monster image
      var monsterReady = false;
      var monsterImage = new EnvImage();
      monsterImage.onload = function () {
        monsterReady = true;
      };
      monsterImage.src = "file:///sdcard/Documents/img/monster.png";

      // Game objects
      var hero = {
        speed: 20 // movement in pixels per second
      };
      var monster = {};
      var monstersCaught = 0;
  
      // Reset the game when the player catches a monster
      var reset = function () {
        lastX = 0
        lastY = 0
        dx = 0
        dy = 0
        hero.x = ref.width / 2;
        hero.y = ref.height / 2;

        // Throw the monster somewhere on the screen randomly
        monster.x = 32 + (Math.random() * (ref.width - 64));
        monster.y = 32 + (Math.random() * (ref.height - 64));
      };

      // Update game objects
      var update = function (modifier) {
        hero.x += dx / hero.speed * modifier
        hero.y += dy / hero.speed * modifier
        dx = 0
        dy = 0

        // Are they touching?
        if (
          hero.x <= (monster.x + 32) &&
          monster.x <= (hero.x + 32) &&
          hero.y <= (monster.y + 32) &&
          monster.y <= (hero.y + 32)
        ) {
          ++monstersCaught;
          reset();
        }
      };

      // Draw everything
      var render = function () {

        ctx.clearRect(0, 0, 750, 750)

        if (bgReady) {
          ctx.drawImage(bgImage, 0, 0, 750, 750)
        }

        if (heroReady) {
          ctx.drawImage(heroImage, hero.x, hero.y);
        }

        if (monsterReady) {
          ctx.drawImage(monsterImage, monster.x, monster.y);
        }

        // Score
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
      };

      // The main game loop
      var main = function () {
        var now = new Date().getTime()
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;
      };

      // Let's play this game!
      var then = new Date().getTime();
      reset();
      setInterval(main, 16)

    }
  }
</script>