<template>
  <div class="home ">
    <div class="container">
      <RouteBlock />
    </div>
  </div>
</template>

<script>

import RouteBlock from '@/components/route/RouteBlock.vue';

export default {
  name: 'Home',
  components: {
    RouteBlock,
  },
};
</script>
