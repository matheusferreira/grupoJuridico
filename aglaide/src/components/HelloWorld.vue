<template>
  <section id="slider" class="slider-element min-vh-100 dark include-header">
    <div class="slider-inner">
      <div class="container">
        <div class="slider-caption slider-caption-center">
          <div>
            <img :src="require('@/assets/images/logotipo.svg')" style="max-width: 40%" data-animate="rotateIn"/>
            <img :src="require('@/assets/images/grupo_bar_white.svg')" data-animate="bounceInRight" data-delay="800" style="max-width: 60%"/>
            <!--<h2 data-animate="bounceInRight" data-delay="100">{{msg}}</h2>-->
          </div>
        </div>
      </div>
      <canvasVideo img="poster.png" videoMP4="studing.mp4"></canvasVideo>
    </div>
    <socialIcons />
  </section>
</template>

<script>
import canvasVideo from './CanvasVideo.vue'
import socialIcons from './SocialIcons.vue'
export default {
  components: {
    canvasVideo,
    socialIcons
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
