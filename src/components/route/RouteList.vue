<template>
  <List class="route-list" :list="list">
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

  // eslint-disable-next-line class-methods-use-this
  handleRemove(index: number) {
    console.log(index);
  }
}
</script>

<style scoped lang="scss">
</style>
