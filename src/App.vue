<template>
  <div id="app" class="app">
    <a-row type="flex">
      <a-col :span="4">
        <a-affix :offsetTop="this.top">
          <div class="demo-menu-stacked">
            <a-menu
              mode="inline"
              :openKeys="openKeys"
              @openChange="onOpenChange"
            >
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>Components</span></span>
                <a-menu-item v-for="currentItem in menuComponents" :key="currentItem.id">
                  <router-link :to="currentItem.path">{{ currentItem.name }}</router-link>
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </a-affix>
      </a-col>
      <a-col :span="20">
        <router-view/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import componentRoutes from '@/data/componentRoutes';

export default {
  name: 'App',
  data() {
    return {
      top: 10,
      rootSubmenuKeys: ['sub1'],
      openKeys: ['sub1'],
      menuComponents: [],
    };
  },
  methods: {
    handleAffixTop() {
      this.top += 10;
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  mounted() {
    this.menuComponents = componentRoutes;
  },
};
</script>

<style lang="scss">
  .app {
    padding: 1rem 1rem 15rem;
  }

  .demo-menu-stacked {
    width: 256px;
  }
</style>
