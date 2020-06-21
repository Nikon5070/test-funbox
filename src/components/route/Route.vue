<template>
  <div class="route">
    <div class="name">
      {{ name }}
    </div>
    <div class="actions">
      <el-button
        type="danger"
        plain
        circle
        icon="el-icon-delete"
        @click="remove"
      ></el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component({
  name: 'Route',
})
export default class Route extends Vue {
  @Prop({ default: '' }) readonly name!: string;

  remove() {
    this.$emit('remove');
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
