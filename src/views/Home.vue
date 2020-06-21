<template>
  <div class="home ">
    <div class="container">
      <RouteList :list="list"/>
    </div>
  </div>
</template>

<script>
import RouteList from '@/components/route/RouteList.vue';

export default {
  name: 'Home',
  components: {
    RouteList,
  },
  data() {
    return {
      list: [
        {
          name: 'Московский',
        },
        {
          name: 'Победы',
        },
      ],
    };
  },
};
</script>
