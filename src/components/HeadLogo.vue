<template>
  <div class="head-logo">
    <img class="logo" @click="goHome()" src="../assets/logo.jpg" alt="" />
    <span class="title">小溪流科技常用网址导航</span>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.head-logo {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #333;
  .logo {
    height: 0.5rem;
    width: 0.5rem;
    cursor: pointer;
  }
  .title {
    font-size: 0.3rem;
    text-align: center;
    width: 100%;
  }
}
</style>
