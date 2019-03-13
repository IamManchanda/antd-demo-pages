<template>
  <div>
    <h1>Button</h1>
    <a-row type="flex">
      <a-col :span="24">
        <div class="button-demos-container button-demos-gutters">
          <a-button>Default Button</a-button>
          <a-button type="primary">Primary Button</a-button>
          <a-button type="dashed">Dashed Button</a-button>
          <a-button type="ghost">Ghost Button</a-button>
          <a-button type="danger">Danger Button</a-button>
        </div>
        <div class="button-demos-container">
          <a-button-group>
            <a-button>Cancel</a-button>
            <a-button type="primary">OK</a-button>
          </a-button-group>
        </div>
        <div class="button-demos-container">
          <a-button-group>
            <a-button disabled>L</a-button>
            <a-button disabled>M</a-button>
            <a-button disabled>R</a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary">L</a-button>
            <a-button>M</a-button>
            <a-button type="dashed">R</a-button>
          </a-button-group>
        </div>
        <div class="button-demos-container">
          <a-button-group>
            <a-button type="primary">
              <a-icon type="left" />Go back
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary">
              Go forward<a-icon type="right" />
            </a-button>
          </a-button-group>
        </div>
        <div class="button-demos-container">
          <a-button-group>
            <a-button type="primary" icon="cloud" />
            <a-button type="primary" icon="cloud-download" />
          </a-button-group>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary">Primary</a-button>
          <a-button type="primary" disabled>Primary(disabled)</a-button>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button>Default</a-button>
          <a-button disabled>Default(disabled)</a-button>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="dashed">Dashed</a-button>
          <a-button type="dashed" disabled>Dashed(disabled)</a-button>
        </div>
        <div class="button-demos-container button-demos-gutters button-background">
          <a-button type="primary" ghost>Primary</a-button>
          <a-button ghost>Default</a-button>
          <a-button type="dashed" ghost>Dashed</a-button>
          <a-button type="danger" ghost>danger</a-button>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary" shape="circle" icon="search"></a-button>
          <a-button type="primary" icon="search">Search</a-button>
          <a-button shape="circle" icon="search" />
          <a-button icon="search">Search</a-button>
          <a-button type="dashed" shape="circle" icon="search" />
          <a-button type="dashed" icon="search">Search</a-button>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary" loading>
            Loading
          </a-button>
          <a-button type="primary" size="small" loading>
            Loading
          </a-button>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
            mouseenter me!
          </a-button>
          <a-button shape="circle" loading />
          <a-button type="primary" shape="circle" loading />
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary">Primary</a-button>
          <a-button>secondary</a-button>
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuActionsClick">
              <a-menu-item key="1">1st item</a-menu-item>
              <a-menu-item key="2">2nd item</a-menu-item>
              <a-menu-item key="3">3rd item</a-menu-item>
            </a-menu>
            <a-button>
              Actions <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
        <div class="button-demos-container">
          <a-radio-group :value="size" @change="handleSizeChange">
            <a-radio-button value="large">Large</a-radio-button>
            <a-radio-button value="default">Default</a-radio-button>
            <a-radio-button value="small">Small</a-radio-button>
          </a-radio-group>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary" :size="size">Primary</a-button>
          <a-button :size="size">Normal</a-button>
          <a-button type="dashed" :size="size">Dashed</a-button>
          <a-button type="danger" :size="size">Danger</a-button>
        </div>
        <div class="button-demos-container button-demos-gutters">
          <a-button type="primary" shape="circle" icon="download" :size="size" />
          <a-button type="primary" icon="download" :size="size">Download</a-button>
        </div>
        <div class="button-demos-container">
          <a-button-group :size="size">
            <a-button type="primary">
              <a-icon type="left" />Backward
            </a-button>
            <a-button type="primary">
              Forward<a-icon type="right" />
            </a-button>
          </a-button-group>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      loading: false,
      iconLoading: false,
      size: 'large',
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = {
        delay: 1000,
      };
    },
    handleMenuActionsClick(event) {
      console.log({ event });
    },
    handleSizeChange(event) {
      this.size = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .button-demos-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px dashed #0a0a0a;

    &:first-of-type {
      padding-top: 0;
    }

    .ant-btn-group {
      margin: 0 1rem;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }

    &.button-demos-gutters {
      .ant-btn {
        margin: 0 1rem;
        &:first-of-type {
          margin-left: 0;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    &.button-background {
      margin: 0;
      padding-left: 1rem;
      background-color: rgb(190, 200, 200);
      border-left: 1px dashed #0a0a0a;
      border-right: 1px dashed #0a0a0a;
    }
  }
</style>
