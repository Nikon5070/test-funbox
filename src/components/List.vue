<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, key) in list"
      :key="key"
    >
      <slot v-bind="{ item, index: key }"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'List',
})
export default class List extends Vue {
  @Prop({ default: [] }) readonly list!: any[];
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 100%;
  }
}
</style>
