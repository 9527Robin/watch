<template>
  <div class="demo">
    <ul @click="changeFont">
      <li
        v-for="(item, index) in numbers"
        :data-index="index"
        :key="index"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: 25
    };
  },
  methods: {
    changeFont(e) {
      const data = _.get(e, ["target", "innerHTML"], "");
      console.log(e, data, "data");
      switch (data) {
        case "":
          e.target.innerHTML = "男";
          break;
        case "男":
          e.target.innerHTML = "女";
          break;
        case "女":
          e.target.innerHTML = "";
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.demo {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 16px;
      height: 50px;
      width: 20px;
      border: 1px solid #000;
      width: 20%;
      box-sizing: border-box;
      span {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
