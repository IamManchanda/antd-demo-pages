<template>
  <div>
    <h1>Menu</h1>
    <a-row type="flex">
      <a-col :span="24">
        <div class="menu-demos-container">
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="mail">
              <a-icon type="mail" />Navigation One
            </a-menu-item>
            <a-menu-item key="app" disabled>
              <a-icon type="appstore" />Navigation Two
            </a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper"><a-icon type="setting" />Navigation Three - Submenu</span>
              <a-menu-item-group title="Item 1">
                <a-menu-item key="setting:1">Option 1</a-menu-item>
                <a-menu-item key="setting:2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:3">Option 3</a-menu-item>
                <a-menu-item key="setting:4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="menu-demos-container">
          <div class="menu-stacked">
            <a-menu
              @click="handleClick"
              :defaultSelectedKeys="['1']"
              :openKeys.sync="openKeys"
              mode="inline"
            >
              <a-sub-menu key="sub1" @titleClick="titleClick">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item-group key="g1">
                  <template slot="title"><a-icon type="qq" /><span>Item 1</span></template>
                  <a-menu-item key="1">Option 1</a-menu-item>
                  <a-menu-item key="2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2" title="Item 2">
                  <a-menu-item key="3">Option 3</a-menu-item>
                  <a-menu-item key="4">Option 4</a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu key="sub2" @titleClick="titleClick">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                  <a-menu-item key="7">Option 7</a-menu-item>
                  <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </div>
        <div class="menu-demos-container">
          <div class="menu-stacked">
            <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <a-menu
              :defaultSelectedKeys="['1']"
              :defaultOpenKeys="['sub1']"
              mode="inline"
              theme="dark"
              :inlineCollapsed="collapsed"
            >
              <a-menu-item key="1">
                <a-icon type="pie-chart" />
                <span>Option 1</span>
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="desktop" />
                <span>Option 2</span>
              </a-menu-item>
              <a-menu-item key="3">
                <a-icon type="inbox" />
                <span>Option 3</span>
              </a-menu-item>
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                  <a-menu-item key="11">Option 11</a-menu-item>
                  <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
            </a-menu>
          </div>
        </div>
        <div class="menu-demos-container">
          <div class="menu-stacked">
            <a-menu mode="vertical" @click="handleClick">
              <a-menu-item key="1">
                <a-icon type="mail" />
                Navigation One
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="calendar" />
                Navigation Two
              </a-menu-item>
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
                <a-menu-item key="3">Option 3</a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
                <a-sub-menu key="sub1-2" title="Submenu">
                  <a-menu-item key="5">Option 5</a-menu-item>
                  <a-menu-item key="6">Option 6</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </div>
        <div class="menu-demos-container">
          <div class="menu-demos-switch-cell">
            <a-switch
              :defaultChecked="false"
              @change="changeMode"
            /> Change Mode
            <a-switch
              :defaultChecked="false"
              @change="changeTheme"
            /> Change Theme
          </div>
          <div class="menu-stacked">
            <a-menu
              :defaultSelectedKeys="['1']"
              :defaultOpenKeys="['sub1']"
              :mode="mode"
              :theme="theme"
            >
              <a-menu-item key="1">
                <a-icon type="mail" />
                Navigation One
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="calendar" />
                Navigation Two
              </a-menu-item>
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
                <a-menu-item key="3">Option 3</a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
                <a-sub-menu key="sub1-2" title="Submenu">
                  <a-menu-item key="5">Option 5</a-menu-item>
                  <a-menu-item key="6">Option 6</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      collapsed: false,
      currentKey: '1',
      theme: 'light',
      mode: 'inline',
    };
  },
  methods: {
    handleClick(event) {
      console.log({ event });
    },
    titleClick(event) {
      console.log({ event });
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    handleMenuClick(event) {
      console.log({ event });
      this.current = event.key;
    },
    changeMode(checked) {
      this.mode = checked ? 'vertical' : 'inline';
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
  watch: {
    openKeys(value) {
      console.log({ value });
    },
  },
};
</script>

<style lang="scss" scoped>
  .menu-demos-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px dashed #0a0a0a;

    &:first-of-type {
      padding-top: 0.5rem;
    }

    .menu-stacked {
      width: 256px;
    }

    .menu-demos-switch-cell {
      margin-bottom: 2rem;
    }
  }
</style>
