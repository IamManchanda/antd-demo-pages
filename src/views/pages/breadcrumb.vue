<template>
  <div>
    <h1>Breadcrumbs</h1>
    <a-row type="flex">
      <a-col :span="24">
        <div class="breadcrumb-demos-container">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="breadcrumb-demos-container">
          <a-breadcrumb separator=">">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
            <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="breadcrumb-demos-container">
          <a-breadcrumb>
            <span slot="separator" class="breadcrumb-red-separator">></span>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
            <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb-demos-container {
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
