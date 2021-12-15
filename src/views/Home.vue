<template>
  <section class="v-app-root">
    <HeaderMenu></HeaderMenu>
    <section class="v-app-content">
      <section class="v-app-left">
        左侧
      </section>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </router-view>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMenu from '@/components/HeaderMenu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HeaderMenu,
  },
});
</script>
<style lang="less" scoped>
.v-app-root{
  height: 100%;
  display: flex;
  flex-direction: column;
  .v-app-content{
    display:flex;
    height:100%;
    .v-app-left{
      width:100px;
      height:100%
    }
  }
}
</style>
