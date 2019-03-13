<template>
  <div>
    <h1>Icon</h1>
    <a-row type="flex">
      <a-col :span="24">
        <div class="icon-demos-container">
          <a-icon type="home" />
          <a-icon type="setting" theme="filled" />
          <a-icon type="smile" theme="outlined" />
          <a-icon type="sync" spin />
          <a-icon type="loading" />
        </div>
        <div class="icon-demos-container">
          <a-icon type="smile" theme="twoTone" />
          <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
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
  .icon-demos-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px dashed #0a0a0a;

    &:first-of-type {
      padding-top: 0;
    }

    .anticon {
      margin-right: 1rem;
      font-size: 1.5rem;
    }
  }
</style>
