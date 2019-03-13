<template>
  <div>
    <h1>Dropdown</h1>
    <a-row type="flex">
      <a-col :span="24">
        <div class="dropdown-demos-container">
          <a-dropdown>
            <a class="ant-dropdown-link">
              Hover me <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <div class="dropdown-demos-container">
          <a-dropdown-button @click="handleMenuClick">
            Dropdown
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
              <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
              <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
            </a-menu>
          </a-dropdown-button>
        </div>
        <div class="dropdown-demos-container">
          <a-dropdown-button @click="handleButtonClick">
            Dropdown
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
              <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
              <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
            </a-menu>
          </a-dropdown-button>
        </div>
        <div class="dropdown-demos-container">
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
              <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
              <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
            </a-menu>
            <a-button>
              Button <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
    };
  },
  methods: {
    handleMenuClick(event) {
      console.log({ event });
    },
    handleButtonClick(event) {
      console.log({ event });
    },
  },
};
</script>

<style lang="scss" scoped>
  .dropdown-demos-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px dashed #0a0a0a;

    &:first-of-type {
      padding-top: 0.5rem;
    }
  }
</style>
