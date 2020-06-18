<template>
  <div class="video-wrap" style="z-index: -10;">
    <video :poster="require('@/assets/video/' + img + '')" preload="auto" loop autoplay muted>
      <source v-if="videoMP4" :src="require('@/assets/video/' + videoMP4 + '')" type='video/mp4' />
      <source v-if="videoWEBM" :src="require('@/assets/video/' + videoWEBM + '')" type='video/webm' />
    </video>
  <div class="video-overlay" style="background-color: rgba(0,0,0,0.45);"></div>
  </div>
</template>

<script>
export default {
  props: ['img', 'videoMP4', 'videoWEBM']
}
</script>

<style>

</style>
