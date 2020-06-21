<template>
  <div class="home ">
    <div class="container">
      <RouteBlock />
      <Map />
    </div>
  </div>
</template>

<script>

import RouteBlock from '@/components/route/RouteBlock.vue';
import Map from '@/components/Map.vue';

export default {
  name: 'Home',
  components: {
    Map,
    RouteBlock,
  },
};
</script>
