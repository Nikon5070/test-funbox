<template>
  <el-autocomplete
    class="route-input"
    v-model="selected"
    :fetch-suggestions="fetchSuggestions"
    :trigger-on-focus="false"
    :placeholder="placeholder"
    @select="handleSelect"
  ></el-autocomplete>
</template>

<script lang="ts">
import {
  Component, Prop, Model, Vue,
} from 'vue-property-decorator';

import { Route } from '@/types';

@Component({
  name: 'RouteInput',
})
export default class RouteInput extends Vue {
  @Prop({ default: '' }) readonly placeholder!: string;

  @Prop({ default: () => undefined }) readonly fetchSuggestions!: Function;

  @Model('change', { type: Object }) readonly selected!: Route | null | undefined

  handleSelect() {
    this.$emit('select');
  }
}
</script>

<style scoped lang="scss">

.route {
  display: flex;
  align-items: baseline;

  .name {
    font-size: 24px;
  }

  .actions {
    margin-left: 12px;
  }

  .el-button {
    padding: 6px;
  }
}

</style>
