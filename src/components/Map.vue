<template>
  <div class="map">
    <yandex-map
      :coords="coords"
      :zoom="10"
      @click="onClick"
    >
      <ymap-marker
        :coords="coords"
        marker-id="123"
        hint-content="some hint"
      />
    </yandex-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Map',
})
export default class Map extends Vue {
  coords = [
    54.82896654088406,
    39.831893822753904,
  ];

  onClick(e: any) {
    this.coords = e.get('coords');
  }
}
</script>

<style scoped lang="scss">
.ymap-container {
  height: 440px;
}
</style>
