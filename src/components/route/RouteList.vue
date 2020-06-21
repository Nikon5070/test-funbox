<template>
  <List class="route-list" :list="localList">
    <template #default="{ item, index }">
      <RouteComponent
        v-bind="item"
        @remove="handleRemove(index)"
      />
    </template>
  </List>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';
import RouteComponent from '@/components/route/Route.vue';

import { Route } from '@/types';

@Component({
  name: 'RouteList',
  components: {
    RouteComponent,
    List,
  },
})
export default class RouteList extends Vue {
  @Prop({ default: () => [] }) readonly list!: Route[];

  localList: Route[] = [...this.list]

  handleRemove(index: number) {
    this.localList = this.localList.filter((item, i) => i !== index);
    this.$emit('remove-item', index);
  }
}
</script>

<style scoped lang="scss">
</style>
