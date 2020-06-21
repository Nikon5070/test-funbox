<template>
  <div class="home ">
    <div class="container">
      <RouteList
        :list="list"
        @remove-item="handleRemove"
      />
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';
import RouteList from '@/components/route/RouteList.vue';

export default {
  name: 'Home',
  components: {
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
};
</script>
