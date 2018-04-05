<template>
  <div @touchstart="touchStart" @touchmove="touchMove">
    <gcanvas v-if="isWeex" class="canvas" ref="canvas_holder" style="width:750;height:750"></gcanvas>
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
  import Nat from 'natjs'
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

      var soundLock = false

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

      var margin = 64
      var cylinderRadius = 32
      var leftBound = margin
      var rightBound = ref.width - margin
      var topBound = margin
      var bottomBound = ref.width - margin

      // Game objects
      var hero = {
        speed: 10 // movement in pixels per second
      };
      var monster = {
        speed: 200
      };
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
        monster.x = cylinderRadius + (Math.random() * (ref.width - margin * 2));
        monster.y = cylinderRadius + (Math.random() * (ref.height - margin * 2));
        monster.dx = getRandom(-1, 1) * monster.speed / 60
        monster.dy = getRandom(-1, 1) * monster.speed / 60
      };

      var getRandom = function (minimum, maximum) {
        var num
        var maxEx = maximum + 2
        do {
          num = Math.random() * (maxEx - minimum) + minimum
          num -= 1
        } while (num < minimum || num > maximum)

        return num
      }

      var renderHero = function (modifier) {
        if ((leftBound < monster.x + monster.dx) && (rightBound > monster.x + monster.dx)) {
          monster.x += monster.dx
        } else {
          monster.dx = getRandom(-1, 1) * monster.speed / 60
        }
        if ((topBound < monster.y + monster.dy) && (bottomBound > monster.y + monster.dy)) {
          monster.y += monster.dy
        } else {
          monster.dy = getRandom(-1, 1) * monster.speed / 60
        }
      }

      var renderMonster = function (modifier) {
        var deltaX = dx / hero.speed * modifier
        if ((leftBound < hero.x + deltaX) && (rightBound > hero.x + deltaX)) {
          hero.x += deltaX
        }
        var deltaY = dy / hero.speed * modifier
        if ((topBound < hero.y + deltaY) && (bottomBound > hero.y + deltaY)) {
          hero.y += deltaY
        }
      }

      // Update game objects
      var update = function (modifier) {

        renderMonster(modifier)
        renderHero(modifier)

        dx = 0
        dy = 0

        // Are they touching?
        if (
          hero.x <= (monster.x + cylinderRadius) &&
          monster.x <= (hero.x + cylinderRadius) &&
          hero.y <= (monster.y + cylinderRadius) &&
          monster.y <= (hero.y + cylinderRadius)
        ) {
          ++monstersCaught;
          reset();
        }
      };

      var music = function (url, isRepeat) {
        if (soundLock) return;
        Nat && Nat.audio.stop();
        Nat && Nat.audio.play(url);
        if (isRepeat) {
          soundLock = true;
          setTimeout(() => {
            soundLock = false
            music(url, isRepeat)
          }, 29000);
        }
      }

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
      reset()
      music('http://cdn.instapp.io/nat/samples/audio.mp3', true)
      setInterval(main, 16)

    }
  }
</script>