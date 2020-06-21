<template>
  <div class="route-block">
    <RouteInput />
    <RouteList
      :list="list"
      @remove-item="handleRemove"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { mapMutations, mapState } from 'vuex';
import RouteList from '@/components/route/RouteList.vue';
import RouteInput from '@/components/route/RouteInput.vue';

@Component({
  name: 'RouteBlock',
  components: {
    RouteInput,
    RouteList,
  },
  computed: {
    ...mapState({
      list: (state) => state.list,
    }),
  },

  methods: {
    ...mapMutations({
      handleRemove: 'REMOVE_ITEM',
    }),
  },
})
export default class RouteBlock extends Vue {}
</script>

<style scoped lang="scss">
.route-block {

  .route-list {
    margin-top: 20px;
  }
}
</style>
