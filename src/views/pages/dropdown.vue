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

    .breadcrumb-red-separator {
      color: #ff0000;
    }
  }
</style>
